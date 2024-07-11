/* eslint-disable no-await-in-loop */
// To execute multiple pages parallely with applying filters
import { Cluster } from 'puppeteer-cluster';
import { PendingXHR } from 'pending-xhr-puppeteer';
import * as puppeteer from 'puppeteer';
import {
  IReportDetails,
  PUPPETEER_DEFAULT_ARGS,
  detail1, detail2, detail3
} from './constants';

import * as Path from 'path';
import * as ejs from 'ejs';
import * as fs from 'fs-extra';

declare const generatePDFScheduler: any;
declare const setReportFilter: any;
declare const visualState: any;
declare const moveToFirstPage: any;
declare const nextPage: any;

/**
 * Sleep function to pause execution for a given number of milliseconds.
 * @param ms - The number of milliseconds to sleep.
 */
const sleep = (ms: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms));

/**
 * Main function to launch and manage the Puppeteer cluster.
 */
const testCluster = async () => {
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    maxConcurrency: 5,
    timeout: 6000000,
    puppeteerOptions: {
      headless: true, // Set to false to see the browser in action
      args: PUPPETEER_DEFAULT_ARGS,
      executablePath: puppeteer.executablePath(),
      defaultViewport: null,
      protocolTimeout: 700000,
    },
  });

  cluster.task(async ({ page, data }) => {
    const { report, pageNo, filters } = data;

    try {
      const loadedPage = await loadPage(page, report);
      console.log('Page loaded:', loadedPage);

      // Navigate to the appropriate page based on pageNo
      await navigateToPage(page, pageNo);

      // Apply filters and generate PDF
      await applyFiltersAndGeneratePDF(page, loadedPage, filters);
    } catch (error) {
      console.error(`Failed to load task: ${error.message}`);
    }
  });

  /**
   * Load the page with the given report.
   * @param page - The Puppeteer page instance.
   * @param report - The report details.
   */
  const loadPage = async (page, report: IReportDetails) => {
    try {
      if (!page) {
        throw new Error('Browser session is invalid. Failed to initialize Puppeteer');
      }

      const pageContent = await renderReport(report);
      console.log('Render report completed.');
      
      const pendingXHR = new PendingXHR(page);
      await page.setContent(pageContent);
      await page.setDefaultNavigationTimeout(0);
      await page.waitForSelector('iframe');
      await pendingXHR.waitForAllXhrFinished();

      await sleep(40000); // Wait for all AJAX requests to finish
      return page;
    } catch (error) {
      console.error(`Failed to load page: ${error.message}`);
    }
  };

  /**
   * Render the report using EJS template.
   * @param report - The report details.
   */
  const renderReport = async (report: IReportDetails) => {
    try {
      const template = Path.resolve(__dirname, './pbi-embed.ejs');
      return await ejs.renderFile(template, report);
    } catch (error) {
      console.error(`Render Report failed: ${JSON.stringify(error)}`);
    }
  };

  /**
   * Navigate to the specified page number.
   * @param page - The Puppeteer page instance.
   * @param pageNo - The page number to navigate to.
   */
  const navigateToPage = async (page, pageNo: number) => {
    const moveToPage = async (page) => {
      const result = await page.evaluate(() => moveToFirstPage());
      await sleep(5000);
      console.log('Moved to first page:', result);
    };

    if (pageNo >= 1) await moveToPage(page);
    if (pageNo >= 2) {
      const result = await page.evaluate(() => nextPage());
      await sleep(5000);
      console.log('Moved to second page:', result);
    }
    if (pageNo >= 3) {
      const result = await page.evaluate(() => nextPage());
      await sleep(5000);
      console.log('Moved to third page:', result);
    }
  };

  /**
   * Apply filters and generate PDF for the loaded page.
   * @param loadedPage - The loaded Puppeteer page instance.
   * @param filters - The filters to apply.
   */
  const applyFiltersAndGeneratePDF = async (page, loadedPage, filters: any[]) => {
    for (const filter of filters) {
      console.log('Applying filter:', filter);
      const result = await page.evaluate(f => setReportFilter(f), [filter]);
      await sleep(10000); // Wait for the filter to be applied
      console.log('Filter applied result:', result);

      const frames = loadedPage.frames();

      for (const frame of frames) {
        const frameUrl = await frame.url();
        console.log(`Frame URL: ${frameUrl}`);

        const childFrame = frame.childFrames().find(f => f.name() === 'visual-sandbox');
        if (childFrame) {
          try {
            const pdfObject = await childFrame.evaluate(() => generatePDFScheduler());
            const now = Math.ceil(new Date().getTime() / 1000);
            fs.writeFileSync(`scheduler_${now}.json`, JSON.stringify(pdfObject));
          } catch (error) {
            console.error('Error generating PDF:', error.message);
          }
          const visualStateObject = await childFrame.evaluate(() => visualState());
          console.log('Visual State Object:', visualStateObject);
        }
      }
    }
  };

  const tasks = [detail1, detail2, detail3];
  await Promise.all(tasks.map(task => cluster.execute(task)));

  await cluster.idle();
  await cluster.close();
};

testCluster();
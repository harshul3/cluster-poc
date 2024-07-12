/* eslint-disable no-await-in-loop */
// combination of 2 & 3 poc
import { PendingXHR } from "pending-xhr-puppeteer";
import * as puppeteer from "puppeteer";
import {
  allFilters,
  IReportDetails,
  PUPPETEER_DEFAULT_ARGS,
  report2Details,
} from "./constants";

import * as Path from "path";
import * as ejs from "ejs";
import * as fs from "fs-extra";

declare const generatePDFScheduler: any;
declare const setReportFilter: any;
declare const visualState: any;

/**
 * Sleep function to pause execution for a given number of milliseconds.
 * @param ms - The number of milliseconds to sleep.
 */
const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const initPuppeteer = async () => {
  const browserInstance = await puppeteer.launch({
    headless: true,
    args: PUPPETEER_DEFAULT_ARGS,
  });
  return browserInstance;
};

/**
 * Main function to launch and manage the Puppeteer cluster.
 */

// const testCluster = async () => {
const pupet = async (report, filters) => {
  const browser = await initPuppeteer();
  try {
    const loadedPage = await loadPage(browser, report);
    console.log("Page loaded:", loadedPage);

    // Apply filters and generate PDF
    await applyFiltersAndGeneratePDF(loadedPage, filters);

    if (browser) {
      await loadedPage.close();
      await browser.close();
    }
  } catch (error) {
    console.error(`Failed to load task: ${error.message}`);
  }
};

/**
 * loads the static embed report HTML content
 * @param browser
 * @param reportDetails
 */
const loadPage = async (browser: any, reportDetails: IReportDetails) => {
  if (!browser) {
    throw new Error(
      "Browser session is invalid. Failed to initialize Puppeteer"
    );
  }
  const pageContent = await renderReport(reportDetails);
  const page = await browser.newPage();
  const pendingXHR = new PendingXHR(page);
  await pendingXHR.waitForAllXhrFinished();
  await page.setContent(pageContent);
  await sleep(30000);
  return page;
};

/**
 *
 * @param reportDetails
 * @returns
 */
const renderReport = async (reportDetails: IReportDetails) => {
  try {
    console.log("Rendering report using details", reportDetails);
    // render the ejs template.
    const template = Path.resolve(__dirname, "./pbi-embed.ejs");
    return await ejs.renderFile(template, reportDetails);
  } catch (error) {
    console.log(`Render Report failed: ${JSON.stringify(error)}`);
    return error;
  }
};

/**
 * Apply filters and generate PDF for the loaded page.
 * @param loadedPage - The loaded Puppeteer page instance.
 * @param filters - The filters to apply.
 */
const applyFiltersAndGeneratePDF = async (loadedPage, filters: any[]) => {
  for (const filter of filters) {
    console.log("Applying filter:", filter);
    const result = await loadedPage.evaluate(
      (f) => setReportFilter(f),
      [filter]
    );
    await sleep(10000); // Wait for the filter to be applied
    console.log("Filter applied result:", result);

    const mainFrame = await loadedPage.mainFrame();
    const childFrames = mainFrame.childFrames();
    const powerBiFrame = childFrames[0];
    const powerBiFrameChildren = await powerBiFrame.childFrames();
    const numberOfFrames = powerBiFrameChildren.length;
    console.log(`No of iframe inside Report ${numberOfFrames}`);

    for (let index = 0; index < numberOfFrames; index += 1) {
      const frame = powerBiFrameChildren[index];
      const frameName = await frame.name();
      console.log(`Found Frame Name: ${frameName}`);
      const frameUrl = frame.url();
      console.log(`processPageForVisualPreview: Found Frame URL ${frameUrl}`);
      const visualStateObject = await frame.evaluate(() => visualState());
      console.log(
        `processPageForVisualPreview: Found Frame visualState ${visualStateObject}`
      );

      try {
        const pdfObject = await frame.evaluate(() => generatePDFScheduler());
        const now = Math.ceil(new Date().getTime() / 1000);
        fs.writeFileSync(`scheduler_${now}.json`, JSON.stringify(pdfObject));
      } catch (error) {
        console.error("Error generating PDF:", error.message);
      }
    }
  }
};

pupet(report2Details, allFilters);

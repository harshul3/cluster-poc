Puppeteer-Cluster POC

--> Update the "accessToken" into constants/reportDetails

Overview

Provides instructions for setting up and running the Puppeteer Cluster script within a Docker container.

POC1- Script utilizes Puppeteer cluster to load the powerbi report and apply filters to all pages parallelly.

POC2 - To execute single page report but multiple filters combination where browser loaded only once.

POC3 - To execute single page report but multiple filters combination where browser loaded for every filter.

POC6 - Load powerbi report and apply filters parallely in new tabs instead of new window or new browser

POC7 - Load single page report , apply mutiple filters in new tabs chunk wise instead of new window or new browser

#1 - To run the POC in indivisual docker container :-

    docker-compose up poc1.ts
    docker-compose up poc2.ts
    docker-compose up poc3.ts

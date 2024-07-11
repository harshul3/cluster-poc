Puppeteer-Cluster POC

Overview

Provides instructions for setting up and running the Puppeteer Cluster script (poc1.ts) within a Docker container. Script utilizes Puppeteer cluster to load the powerbi report and apply filters to all pages parallelly.

--> Update the "accessToken" from local into constants/reportDetails

#1 - Build the Docker image using the provided Dockerfile.

    docker build -t cluster-poc .

#2 - Run the Docker container with the built image.

    docker run -it --rm cluster-poc


FROM turing.azurecr.io/turing-base-18:latest


WORKDIR /usr/src/app

ENV NODE_OPTIONS=--max-old-space-size=8192
 
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

COPY package.json ./
COPY tsconfig.json ./

RUN npm install
RUN npx puppeteer browsers install chrome
RUN npm install -g typescript ts-node
RUN npm i -S powerbi-client

COPY constants.ts .
COPY poc1.ts .
COPY poc2.ts .
COPY poc3.ts .
COPY pbi-embed.ejs .

CMD ["ts-node", "poc1.ts"]

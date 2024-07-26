FROM turing.azurecr.io/turing-base-18:latest


WORKDIR /usr/src/app

ENV NODE_OPTIONS=--max-old-space-size=8192
 

COPY package.json ./
COPY tsconfig.json ./

RUN npm install
RUN npx puppeteer browsers install chrome
RUN npm install -g typescript ts-node
RUN npm i -S powerbi-client
RUN npm i dotenv

COPY constants.ts .
COPY poc1.ts .
COPY poc2.ts .
COPY poc3.ts .
COPY poc4.ts .
COPY poc5.ts .
COPY poc6.ts .
COPY poc7.ts .
COPY pbi-embed.ejs .

CMD ["ts-node", "poc1.ts"]

FROM node:7

ENV NODE_ENV production
ENV PORT 8080

# npm install
ADD package.json /tmp/package.json
RUN cd /tmp && npm install --silent
RUN mkdir -p /opt/app-root && cp -a /tmp/node_modules /opt/app-root/

WORKDIR /opt/app-root/
COPY . .

RUN npm run build

CMD ["npm", "run", "start"]

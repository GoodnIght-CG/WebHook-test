FROM node:13.8.0

ADD . /app/

WORKDIR /app

#RUN npm install -g cnpm --registry=http://r.cnpmjs.org
#RUN npm install nrm -g\
#    && ln -s /usr/local/src/nodejs/bin/nrm /usr/local/bin\
#    && nrm use taobao

RUN npm install

CMD ["node", "service.js"]

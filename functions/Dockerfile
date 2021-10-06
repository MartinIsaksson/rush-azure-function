# FROM mcr.microsoft.com/azure-functions/node:3.0-node14-appservice
##FROM mcr.microsoft.com/azure-functions/node:3.0-node14-core-tools as base 
# THIS CAN BE USED IF WE NEED TO CALL e.g. "FUNC HOST START" or Npm start
FROM node:lts

ENV AzureWebJobsScriptRoot=/home/site/wwwroot/functions \
    AzureFunctionsJobHost__Logging__Console__IsEnabled=true
ARG path=/home/site/wwwroot
ARG rush=common/scripts/install-run-rush.js
ARG rushx=common/scripts/install-run-rushx.js 


COPY . $path
RUN npm install -g azure-functions-core-tools@3 --unsafe-perm true
RUN cd $path && \
    node $rush check
RUN  cd $path && \
    node $rush install 
RUN  cd $path && \
    node $rush update 
RUN  cd $path && \ 
    node $rush build

WORKDIR $path/functions
ENTRYPOINT [ "func", "host", "start", "--port", "80" ]
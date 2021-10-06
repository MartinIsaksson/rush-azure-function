# To enable ssh & remote debugging on app service change the base image to the one below
# FROM mcr.microsoft.com/azure-functions/node:3.0-appservice
FROM mcr.microsoft.com/azure-functions/node:3.0-node14-appservice
##FROM mcr.microsoft.com/azure-functions/node:3.0-node14-core-tools as base 
# THIS CAN BE USED IF WE NEED TO CALL e.g. "FUNC HOST START" or Npm start
ENV AzureWebJobsScriptRoot=/home/site/wwwroot/functions \
    AzureFunctionsJobHost__Logging__Console__IsEnabled=true
ARG path=/home/site/wwwroot
ARG rush=common/scripts/install-run-rush.js
ARG rushx=common/scripts/install-run-rushx.js 


COPY . $path

RUN cd $path && \
    node $rush check
RUN  cd $path && \
    node $rush install 
RUN  cd $path && \
    node $rush update 
RUN  cd $path && \ 
    node $rush build

WORKDIR $path/functions

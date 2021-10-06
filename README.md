###DOCKER EXAMPLE COMMANDS 
 - BUILDING: $ docker build --tag animal224/rushtestfunctionsimage:v1.0.0 -f functions/Dockerfile .
 - RUNNING: docker run -p 8080:80 -it animal224/rushtestfunctionsimage:v1.0.0 

 - Deploying: az functionapp create --name digitaltwin-functions-qa --storage-account digitaltwinqalake --resource-group rg-spc_digital_twin_qa --plan ASP-rgspcdigitaltwinqa-8b24 --deployment-container-image-name digitaltwin/       functions:v1.0.0 

 ### Deploy docker image
 #### az login
 #### az acr login --name <REPOSITORYNAME>
  - Give username (found on the targeted Container registry)
  - Give Password (found on the targeted Container registry)
 #### docker tag <IMAGE> <REPOSITORYNAME>.azurecr.io/<FOLDER>/<IMAGE>:<VERSION>
 #### docker push <REPOSITORYNAME>.azurecr.io/<FOLDER>/<IMAGE>
 #### az functionapp create --name <FUNCTIONNAME> --storage-account <STORAGEACCOUNT> --resource-group <RESOURCEGROUP> --plan <SERVICEPLANNAME> --deployment-container-image-name <REPOSITORYNAME>.azurecr.io/<FOLDER>/<IMAGE>:<VERSION> --functions-version 3

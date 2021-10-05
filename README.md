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
 
az storage account show-connection-string --resource-group AzureFunctionsContainers-rg --name funcstorageaccounttest --query connectionString --output tsv

az functionapp config appsettings set --name dt-consid-func --resource-group AzureFunctionsContainers-rg --settings AzureWebJobsStorage=DefaultEndpointsProtocol=https;EndpointSuffix=core.windows.net;AccountName=funcstorageaccounttest;AccountKey=80/YzyLIsejKtq3CLfHQHkngtknUmdq+iYxn+ekfANyBw+eAlni5zQxTrwkXsjWJYUerg2i0V9cXpVab8HMkUA==

az functionapp deployment container config --enable-cd --query CI_CD_URL --output tsv --name dt-consid-func --resource-group AzureFunctionsContainers-rg

az functionapp config container set --docker-custom-image-name kubernetesacrconsid.azurecr.io/digitaltwin/functions:v1.0.0 --docker-registry-server-password lDYxXBf7zBeBUtaBIdsnQO5Fv6=SrDD2 --docker-registry-server-url https://kubernetesacrconsid .azurecr.io --docker-registry-server-user kubernetesacrconsid --name dt-consid-func --resource-group AzureFunctionsContainers-rg

az functionapp deployment container show-cd-url --name dt-consid-fun --resource-group AzureFunctionsContainers-rg
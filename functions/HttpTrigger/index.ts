import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { randomName, randomFileName } from '@libs/random';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    const rName = randomName() + " " + randomFileName();
    const responseMessage = name
        ? "Hello, " + rName + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response." + " " + rName;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

};

export default httpTrigger;
var azure = require('azure-storage');
var blobService = azure.createBlobService();
const STORAGE_ACCOUNT_NAME = process.env.AZURE_STORAGE_ACCOUNT_NAME;
const ACCOUNT_ACCESS_KEY = process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY;
const containerName = "backstopimages";
const containerURL = ContainerURL.fromServiceURL(serviceURL, containerName);
const aborter = Aborter.timeout(30 * ONE_MINUTE);
const filePath = "tests/";

const content = "hello!";
const fileName = "test.txt";

async function uploadLocalFile(aborter, containerURL, filePath) {

    filePath = path.resolve(filePath);

    const fileName = path.basename(filePath);

    return await uploadFileToBlockBlob(aborter, filePath);
}
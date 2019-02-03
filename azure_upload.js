var azure = require('azure-storage');
var blobService = azure.createBlobService();

blobService.createBlockBlobFromLocalFile('backtop', 'backstopimages', 'text.txt', function(error, result, response) {
    if (!error) {
        // file uploaded
    }
});

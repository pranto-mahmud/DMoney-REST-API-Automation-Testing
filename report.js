const newman = require('newman');
require('dotenv').config();
newman.run({
    collection:`https://api.postman.com/collections/49377738-c254140b-969a-44d9-8bbc-ba98ee33fc1d?access_key=${process.env.pmat_key}`,
    reporters:'htmlextra',
    iterationCount:1,
    reporter:{
        htmlextra:{
            export: './Reports/report.html',
        }
    }
}, function(err){
    if(err){throw  err;}
    console.log("Collection tun complete!");
}
);
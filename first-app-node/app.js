const os = require("os");
const fs = require("fs");
var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log(`Total Memory: ${totalMem}; Free Memory: ${freeMem}`);

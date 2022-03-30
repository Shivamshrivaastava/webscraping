let path = require("path");
let fs = require("fs");
for(let i=1; i<=10;i++){
let dirpath = __dirname+`\\Lecture-${i}`;
fs.mkdirSync(dirpath);
fs.WriteFileSync(path.join(dirpath,"readme.md"),`#readme for ${dirpath}`);

}
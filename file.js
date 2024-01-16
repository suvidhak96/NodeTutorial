const fs=require('fs');
const data=process.argv;
// fs.writeFileSync(data[2],data[3])//data[2] file name. data[3] content of file

// fs.writeFileSync("fileSystm.txt","hello wold")// file already exist and add new data in file

// fs.appendFileSync("fileSystm.txt","This is node ")

//read file start
const buf_data=fs.readFileSync('fileSystm.txt')
original_data=buf_data.toString();
console.log(original_data)
// read file end

//rename file
fs.renameSync("fileSystm.txt","fsReadwrite.txt");
// console.log();
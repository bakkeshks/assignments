const fs = require('fs');
const file = 'file.txt';
fs.readFile(file,'utf-8', (err,data)=>{
    if(err){
        console.log(err);
    }else{
        const processedData = data.replace(/\s+/g, ' ');
        fs.writeFile(file,processedData,'utf-8', (err)=>{
            if(err){
                console.log(err);
            }else{
                    console.log("File updated ")
            }
        })
    }
});

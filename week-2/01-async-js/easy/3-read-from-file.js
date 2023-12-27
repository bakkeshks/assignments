const fs = require('fs');
const file = 'file.txt';
fs.readFile(file,'utf-8',(err,data)=>{
    if(err){
        console.log(err);
    } else{
        console.log(data);
        // Simulate an expensive operation
        let startTime = Date.now();
        expensiveOperation(); // Call the expensive function
        let endTime = Date.now();
        console.log("Expensive operation took:", endTime - startTime, "milliseconds");
    }
});

// Simulate an expensive operation
function expensiveOperation() {
    // Increase the loop count to make it more expensive
    for (let i = 0; i < 100000000; i++) {
      // Perform some computationally intensive task
      Math.sqrt(Math.random());
    }
  }
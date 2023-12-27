function logEverySecond() {
    console.log("Logging every 1 second (approximately)");
    setTimeout(logEverySecond, 1000); // Schedule the next log after 1 second
  }
  
  // Start the initial timeout:
  setTimeout(logEverySecond, 1000);
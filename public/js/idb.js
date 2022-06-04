let indexDb;
const request = indexedDB.open('budget-tracker', 1);


// Request Functions

  // this event will emit if the database version changes (nonexistant to version 1, v1 to v2, etc.)
  request.onupgradeneeded = function(event) {
    const db = event.target.result;
    
    db.createObjectStore('new_budget', { autoIncrement: true });
  };
  
    // upon a success
  request.onsuccess = function(event) {
    db = event.target.result;
  
    if (navigator.onLine) {
      updateRecord();
    }
  };
  
    // upon an error
  request.onerror = function(event) {
    console.log(event.target.errorCode);
  };
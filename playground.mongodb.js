
use('playground');

// Insert a few documents into the sales collection.
db.getCollection('userse').insertMany([
    {
      "name": "diensh",
      "email": "arekardinesh@gmail.com",
      "job": "fullstack dev"
    },
    {
      "name": "john",
      "email": "john.doe@example.com",
      "job": "frontend dev"
    },
    {
      "name": "alice",
      "email": "alice.smith@example.com",
      "job": "backend dev"
    }
  ]
  );


// Print a message to the output window.
console.log(`success.`);


//Requiring the modules -> It should always be done on the top
const express = require("express");
const ejs = require("ejs"); //View Engine
const path = require("path");

//Creating our server
const app = express();

app.use(express.json());

//Setting Up EJS

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "/public")));

const PORT = process.env.PORT || 3000;

// GET, POST, PATCH, DELETE

//@GET /
//description: GET request to home page
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/search", (req, res) => {
  const query = req.query;

  const question = query.question;

  //TF-IDF ALgo

  //   let cnt = 0;
  //   for (let i = 0; i < 2000; i++) {
  //     for (let j = 0; j < 1000; j++) {
  //       cnt++;
  //     }
  //   }

  //List of 5 questions

  setTimeout(() => {
    const arr = [
      {
        title: "Chef and String - XYSTR",
        url: "https://www.codechef.com/problems/XYSTR",
        statement: "The sum of two elements.",
      },
      {
        title: "Count Subarrays - SUBINC",
        url: "https://www.codechef.com/problems/SUBINC",
        statement: "The sum of two elements.",
      },
      {
        title: "Alternating subarray prefix - ALTARAY",
        url: "https://www.codechef.com/problems/ALTARAY",
        statement: "The sum of two elements.",
      },
      {
        title: "Chef and Wedding Arrangements - CHEFWED",
        url: "https://www.codechef.com/problems/CHEFWED",
        statement: "The sum of two elements.",
      },
      {
        title: "Chef and Frogs - FROGV",
        url: "https://www.codechef.com/problems/FROGV",
        statement: "The sum of two elements.",
      },
    ];
    res.json(arr);
  }, 3000);
});

//Assigning Port to our application
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
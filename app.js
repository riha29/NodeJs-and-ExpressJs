// const http= require('http')
// const port= 3000

// const server =http.createServer( (req, res)=> {
//     res.write('hello node')
//     res.end()
// })

// server.listen(port, (error) => {
//     if (error){
//         console.log('something went wrong', error)
//     }
//     else{
//         console.log('server is listening on port '+ port)
//     }
// })

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  parameter = req.params.parameter;
  res.send("Hello World! Listen to my motive: ${parameter}");
});

module.exports = app;
// app.post("/", (req, res) => {
//   res.send("Got a POST request");
// });

// app.put("/user", function (req, res) {
//   res.send("Got a PUT request at /user");
// });

// app.delete("/user", function (req, res) {
//   res.send("Got a DELETE request at /user");
// });

// String path
app.get("/about", function (req, res) {
  res.send("About Page");
});

// // String pattern
// app.get("/ab?cd", function (req, res) {
//   res.send("ab?cd");
// });

// // Regular expression
// app.get(/.*fly$/, function (req, res) {
//   res.send("/.*fly$/");
// });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

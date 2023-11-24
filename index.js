import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let posts = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", res.locals={posts: posts});
   }); 

app.post("/submit", (req, res) => {
  console.log(req.body["postTitle"]);
  console.log(req.body["textarea"]);
  const fecha = new Date();
  posts.unshift({"title": req.body["postTitle"],"user": req.body["user"], "body":req.body["textarea"], "date": fecha.toDateString()});
  console.log(posts);
  res.redirect("/");
  
});

app.get("/FAQs", (req, res) => {
  res.render("FAQs.ejs", res.locals={posts: posts});

});

app.get("/RAQs", (req, res) => {
  res.render("RAQs.ejs", res.locals={posts: posts});

});
  
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 
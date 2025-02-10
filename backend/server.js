import express from "express"
const app = express();
app.use(express.json());

app.listen(8080, () => {
  console.log("Сервер запущен на http://localhost:8080");
});

app.get('/test', (req, res) => {
  const test = "test";

  const testObject = {
    name: "test name from object",
  }

  const data = {
    stringTest: "dasdas",
    numberTest: 123123,
    objectTest: testObject
  };

  res.json(data);
});
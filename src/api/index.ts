
import "express-async-errors";
import router from "./routes"
import express from 'express'
// eslint-disable-next-line @typescript-eslint/no-var-requires


const app = express();



app.get("/", (req, res) => res.send("Express  Server"));
app.use("/api", router);

app.all("*", (req, res) => res.status(404).json({ data: "Route not found" }));

app.use((err, req, res, next) => {
  console.log('Error', err);

  next(err)
  return res.status(500).json({ error: err.message })


});



const PORT = process.env.PORT || 3434;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at ${PORT}`);
});

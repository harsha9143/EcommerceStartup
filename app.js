const express = require("express");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const cartRouter = require("./routes/cartRouter");

const app = express();

app.use((req, res, next) => {
  if (req.url === "/") {
    return res.send("<h1>welcome to home page</h1>");
  }
  next();
});

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/cart", cartRouter);

app.use((req, res, next) => {
  res.status(404).send("<h1>404 - Page not Found!</h1>");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`connection eshtablished successfully http://localhost:${PORT}`);
});

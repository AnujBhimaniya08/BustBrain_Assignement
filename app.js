const express = require("express");
const app = express();
const cors = require("cors");
const OauthRouter = require("./auth/auth");
const formRouter = require("./formsRoutes/formRoute");
const cookieParser = require("cookie-parser");
const { logInMiddleware } = require("./middleware/user");
app.set("view engine", "ejs");
app.use(
  cors({
    origin: ["http://localhost:5173", "*"],
    credentials: true, // coz im using cookkie
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", OauthRouter);
app.use("/form", formRouter);
app.get("/clear", (req, res) => {
  res.clearCookie("access_token", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
  res.clearCookie("refresh_token", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
  res.clearCookie("authjs.session-token", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
  res.send(console.log("cookie vanished"));
});
app.get("/", logInMiddleware, (req, res) => {
  res.json({ message: "hello to my server" });
});
app.listen(3000, (req, res) => {
  console.log("server is running");
});

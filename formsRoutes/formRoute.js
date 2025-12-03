const { Router } = require("express");
const { logInMiddleware } = require("../middleware/user");
const router = Router();
const axios = require("axios");
const { getBaseId } = require("../utils.js/getBaseId");
router.get("/", logInMiddleware, (req, res) => {
  const token = req.user.accessToken;
  res.send("hello to my server");
});
router.post("/createform", logInMiddleware, async (req, res) => {

  res.send("here your form will be created");
});
router.get("/getbases", logInMiddleware, async (req, res) => {
  const token = req.user?.accessToken;
  if (!token) res.status(401).json({ error: " your arent authenticated" });
  try {
    const response = await axios.get("https://api.airtable.com/v0/meta/bases", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    res.send(response.data.bases);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "airtable failed" });
  }
});
router.get("/getTables", logInMiddleware, async (req, res) => {
  const token = req.user?.accessToken;
  const index = req.query.index;

  if (!token) res.status(401).json({ error: "Missing access token" });
  try {
    const baseId = await getBaseId(index, token);
    if (!baseId) throw new Error("Failed to get the base ID");
    const response = await axios.get(
      `https://api.airtable.com/v0/meta/bases/${baseId}/tables`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    res.send(response.data.tables);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "airtable failed" });
  }
});
module.exports = router;

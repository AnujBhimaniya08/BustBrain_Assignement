const axios = require("axios");
async function getBaseId(index, token) {
  try {
    const response = await axios.get("https://api.airtable.com/v0/meta/bases", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const baseId = await response.data.bases[index]?.id;

    return baseId;
  } catch (error) {
    console.error(error);
  }
}
module.exports = { getBaseId };

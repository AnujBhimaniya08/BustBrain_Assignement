import axios from "axios";

export async function handleSubmit(index, tableId) {
  try {
    const response = await axios.post(
      "http://localhost:3000/form/createform",
      { tableId, index },
      {
        withCredentials: true,
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("error:", error);
  }
}

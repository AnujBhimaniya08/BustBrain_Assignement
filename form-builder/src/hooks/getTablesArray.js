import axios from "axios";
export default async function getTablesArray(index) {
  try {
    const response = await axios.get("http://localhost:3000/form/getTables", {
      params: { index },
      withCredentials: true,
    });
    const data = await response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error("error : ", error);
  }
}

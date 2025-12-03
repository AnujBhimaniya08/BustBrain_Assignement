import axios from "axios";
export default async function GetBaseArray() {
  try {
    const response = await axios.get("http://localhost:3000/form/getbases", {
      withCredentials: true,
    });
    const data = await response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error("error : ", error);
  }
}

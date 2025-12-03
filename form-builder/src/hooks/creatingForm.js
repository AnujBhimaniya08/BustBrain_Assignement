import axios from "axios";
export default async function creatingForm() {
  try {
    const response = await axios.get("http://localhost:3000/form", {
      withCredentials: true,
    });
    const data = await response.data;
    
    return data;
  } catch (error) {
    console.error("error : ", error);
  }
}

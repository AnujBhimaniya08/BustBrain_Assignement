import axios from "axios";
export default async function handleAuthProtection() {
  const response = await axios.get("http://localhost:3000/", {
    withCredentials: true,
  });
  const data = await response.data;

  if (data) return false;
  else return true;
}

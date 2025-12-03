import axios from "axios"
export default async function clearCookie(){
    await axios.get("http://localhost:3000/clear");
    
}
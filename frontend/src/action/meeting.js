
import { API_ENDPOINT } from "../constant";

 async function meeting(data) {
    const url = `${API_ENDPOINT}/meeting/meeting-id`;
    const response = await fetch(url, {
        method: 'get',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return response;
}
export default meeting
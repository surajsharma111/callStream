import { API_ENDPOINT } from "../constant";

async function meeting(data) {
    const url = `${API_ENDPOINT}/meeting/meeting-id`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data) // Send data in the request body
    });

    return response;
}

export default meeting;

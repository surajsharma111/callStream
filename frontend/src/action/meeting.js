import { API_ENDPOINT } from "../constant";

export async function meetingId(data) {
    const url = `${API_ENDPOINT}/meeting-id`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data) // Send data in the request body
    });

    return response;
    
}
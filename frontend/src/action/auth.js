import { API_ENDPOINT } from "../constant";

export async function signIn(data) {
    const url = `${API_ENDPOINT}/auth/sign-in`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data) // Send data in the request body
    });

    return response;
    
}
export async function sendOtp(data) {
    const url = `${API_ENDPOINT}/auth/sign-up/send-otp`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data) // Send data in the request body
})
return response
}

export async function registerUser(data) {
    const url = `${API_ENDPOINT}/auth/sign-up/verify-otp`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type" : 'application/json'
        },
        body: JSON.stringify(data)
    })
return response
}
export async function forgotPassword(data) {
    const url = `${API_ENDPOINT}/auth/forgot-password`;
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  }
   async function resetPassword(data) {
    const url = `${API_ENDPOINT}/auth/reset-password`;
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  }
  export default resetPassword
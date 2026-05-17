const API_URL = "http://localhost:5000/api";

const BASE_URL = "http://localhost:5000/api";

function getToken() {
    return localStorage.getItem("token");
}

async function apiRequest(endpoint, method = "GET", body = null) {

    const options = {
        method,
        headers: {
            "Content-Type": "application/json"
        }
    };

    const token = getToken();

    if (token) {
        options.headers["Authorization"] = `Bearer ${token}`;
    }

    if (body) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    return response.json();
}
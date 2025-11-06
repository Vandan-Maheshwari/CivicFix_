// ✅ Replace this with your actual backend URL (Render Flask backend)
const BACKEND_URL = "https://civicfix-pqzn.onrender.com";

// ✅ Example function to submit login form data
async function loginUser(email, password) {
    try {
        const response = await fetch(`${BACKEND_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        console.log("Login Response:", data);
        return data;
    } catch (error) {
        console.error("Login Error:", error);
    }
}

// ✅ Example function to register/signup user
async function registerUser(name, email, password) {
    try {
        const response = await fetch(`${BACKEND_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();
        console.log("Signup Response:", data);
        return data;
    } catch (error) {
        console.error("Signup Error:", error);
    }
}

// ✅ Example: Submit complaint form with image
async function submitComplaint(formData) {
    try {
        const response = await fetch(`${BACKEND_URL}/predict`, {
            method: "POST",
            body: formData // must be FormData (image + details)
        });

        const data = await response.json();
        console.log("Complaint Submitted:", data);
        return data;
    } catch (error) {
        console.error("Complaint Error:", error);
    }
}

// ✅ Example: Get user data after login using token
async function getUserProfile(token) {
    try {
        const response = await fetch(`${BACKEND_URL}/profile`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        const data = await response.json();
        console.log("User Profile:", data);
        return data;
    } catch (error) {
        console.error("Profile Error:", error);
    }
}

// ✅ Make these functions usable in other JS files:
window.api = {
    loginUser,
    registerUser,
    submitComplaint,
    getUserProfile
};

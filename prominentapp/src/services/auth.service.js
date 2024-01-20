import axios from "axios";

const API_BASE =
    process.env.NODE_ENV === "development"
        ? "http://localhost:4000/api/v1"
        : process.env.REACT_APP_BASE_URL;
const API_URL = "/auth";

const signup = (email, password) => {
    return axios
        .post(`${API_BASE}${API_URL}/`, {
            email,
            password,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const login = (email, password) => {
    return axios
        .post(`${API_BASE}${API_URL}/signin`, {
            email,
            password,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const authService = {
    signup,
    login,
    logout,
    getCurrentUser,
};

export default authService;

import axios from "axios";

// Create an Axios instance with the base URL of the FastAPI backend
const api = axios.create({
	baseURL: "http://localhost:8000",
});

// You can add interceptors or default headers here if needed
export default api;

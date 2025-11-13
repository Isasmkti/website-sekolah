import axios from "axios";

// Konfigurasi dasar axios
const httpClient = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
});

// Interceptor optional (buat logging atau token)
httpClient.interceptors.response.use(
  response => response,
  error => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default httpClient;

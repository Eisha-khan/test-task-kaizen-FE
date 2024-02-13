import axios from "axios";

const headers = {
  accept: "application/json",
  "Content-Type": "application/json",
  "X-CSRFToken":
    "wWCoFsTzSjtPHMFxhkZw2amaMueSyYjwxjyJMjlXI5wlH6ejKWJGTUyyZIweO6Me",
};

const apiClient = axios.create({
  baseURL: "https://kaizen-server-m1wh.onrender.com",
  timeout: 3000,
  headers,
});

export default apiClient;

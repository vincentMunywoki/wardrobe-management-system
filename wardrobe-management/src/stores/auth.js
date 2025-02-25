import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: localStorage.getItem("token") || "",
  }),
  actions: {
    async login(credentials) {
      try {
        const response = await axios.post("http://localhost:8000/api/login", credentials);
        this.token = response.data.token;
        this.user = response.data.user;
        localStorage.setItem("token", this.token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
        useRouter().push("/dashboard");
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
    async register(userData) {
      try {
        await axios.post("http://localhost:8000/api/register", userData);
        useRouter().push("/login");
      } catch (error) {
        console.error("Registration failed:", error);
      }
    },
    logout() {
      this.token = "";
      this.user = null;
      localStorage.removeItem("token");
      axios.defaults.headers.common["Authorization"] = "";
      useRouter().push("/login");
    },
  },
});

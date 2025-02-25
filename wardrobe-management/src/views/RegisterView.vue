<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const name = ref("");
const email = ref("");
const password = ref("");

const handleRegister = () => {
  authStore.register({ name: name.value, email: email.value, password: password.value });
};
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-md w-80">
      <h2 class="text-xl font-semibold text-center mb-4">Register</h2>
      <input v-model="name" type="text" placeholder="Full Name" class="w-full p-2 border rounded mb-2" />
      <input v-model="email" type="email" placeholder="Email" class="w-full p-2 border rounded mb-2" />
      <input v-model="password" type="password" placeholder="Password" class="w-full p-2 border rounded mb-2" />
      <button @click="handleRegister" class="w-full bg-blue-500 text-white p-2 rounded">Register</button>
      <p class="text-center text-sm mt-2">
        Already have an account? <router-link to="/login" class="text-blue-500">Login</router-link>
      </p>
    </div>
  </div>
</template>

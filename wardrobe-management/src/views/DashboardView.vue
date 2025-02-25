<script setup>
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <div class="p-6">
    <h2 class="text-2xl font-semibold">Welcome to Your Wardrobe!</h2>
    <button @click="authStore.logout()" class="mt-4 bg-red-500 text-white px-4 py-2 rounded">Logout</button>
  </div>
</template>

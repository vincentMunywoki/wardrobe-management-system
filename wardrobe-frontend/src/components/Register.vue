<template>
    <div class="auth-container">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input v-model="user.name" type="text" placeholder="Name" required />
        <input v-model="user.email" type="email" placeholder="Email" required />
        <input v-model="user.password" type="password" placeholder="Password." required />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
//   import authService from '@/services/authService';
  
  export default {
    data() {
      return {
        user: { name: '', email: '', password: '' }
      };
    },
    methods: {
      async register() {
        try {
          const response = await authService.register(this.user);
          alert(response.data.message);
        } catch (error) {
          alert('Registration failed');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .auth-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background: #f9f9f9;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  h2 {
    color: #333;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  
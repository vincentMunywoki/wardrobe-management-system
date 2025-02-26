<template>
    <div class="auth-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input v-model="credentials.email" type="email" placeholder="Email" required />
        <input v-model="credentials.password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  // import authService from '@/services/authService';
  
  export default {
    data() {
      return {
        credentials: { email: '', password: '' }
      };
    },
    methods: {
      async login() {
        try {
          const response = await authService.login(this.credentials);
          localStorage.setItem('token', response.data.token);
          alert('Login successful');
        } catch (error) {
          alert('Login failed');
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
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  button:hover {
    background-color: #218838;
  }
  </style>
  
<template>
    <div class="auth-container">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input v-model="user.name" type="text" placeholder="Name" required />
        <input v-model="user.email" type="email" placeholder="Email" required />
        <input v-model="user.password" type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account?
      <router-link to="/login" class="switch-btn">Login Here</router-link></p>
    </div>
  </template>

  
  <script>
  import authService from '@/services/authService';
  
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
          this.$router.push('/login'); // Redirect to login
        } catch (error) {
          alert('Registration failed');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Reuse styles from Login.vue */
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
  
  /* Switch Button */
  .switch-btn {
    display: inline-block;
    margin-top: 10px;
    padding: 2px;
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
    border-radius: 5px;
    transition: 0.3s;
  }
  
  .switch-btn:hover {
    background-color: #28a745;
    color: white;
  }
  </style>
  

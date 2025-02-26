<script setup>
import { ref } from 'vue';

const isRegister = ref(false);

const toggleForm = () => {
    isRegister.value = !isRegister.value;
};
</script>

<template>
    <div class="container">
        <div class="form-box">
            <h2>{{ isRegister ? 'Register' : 'Login' }}</h2>

            <form>
                <div class="input-group">
                    <label>Email</label>
                    <input type="email" required>
                </div>

                <div class="input-group">
                    <label>Password</label>
                    <input type="password" required>
                </div>

                <div v-if="isRegister" class="input-group">
                    <label>Confirm Password</label>
                    <input type="password" required>
                </div>

                <button type="submit">
                    {{ isRegister ? 'Register' : 'Login' }}
                </button>
            </form>

            <p>
                {{ isRegister ? 'Already have an account?' : "Don't have an account?" }}
                <button @click="toggleForm">
                    {{ isRegister ? 'Login' : 'Register' }}
                </button>
            </p>
        </div>
    </div>
</template>

<style scoped>
/* Basic styling */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
}

.form-box {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
}

h2 {
    margin-bottom: 20px;
}

.input-group {
    margin-bottom: 15px;
    text-align: left;
}

.input-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.input-group input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background-color: #0056b3;
}

p {
    margin-top: 15px;
}

p button {
    background: none;
    border: none;
    color: #007bff;
    cursor: pointer;
    font-size: 14px;
}

p button:hover {
    text-decoration: underline;
}
</style>

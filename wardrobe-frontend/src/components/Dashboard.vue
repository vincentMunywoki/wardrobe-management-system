<template>
    <div class="container">
      <h1>Wardrobe Management</h1>
      
      <!-- Add Clothing Item Form -->
      <form @submit.prevent="addItem">
        <input v-model="newItem.name" placeholder="Item Name" required />
        <select v-model="newItem.category">
          <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
        <button type="submit">Add Item</button>
      </form>
      
      <!-- Search & Filter -->
      <input v-model="searchQuery" placeholder="Search items..." class="search-box" />
      <select v-model="filterCategory">
        <option value="">All Categories</option>
        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
      </select>
      
      <!-- Clothing Items List -->
      <ul>
        <li v-for="(item, index) in filteredItems" :key="index">
          <span>{{ item.name }} - {{ item.category }}</span>
          <button @click="editItem(index)">Edit</button>
          <button @click="deleteItem(index)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categories: ["Tops", "Bottoms", "Shoes"],
        items: [],
        newItem: { name: "", category: "Tops" },
        searchQuery: "",
        filterCategory: ""
      };
    },
    computed: {
      filteredItems() {
        return this.items.filter(item => {
          return (
            item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
            (this.filterCategory === "" || item.category === this.filterCategory)
          );
        });
      }
    },
    methods: {
      addItem() {
        this.items.push({ ...this.newItem });
        this.newItem.name = "";
        this.newItem.category = "Tops";
      },
      editItem(index) {
        const updatedName = prompt("Edit item name", this.items[index].name);
        if (updatedName) this.items[index].name = updatedName;
      },
      deleteItem(index) {
        this.items.splice(index, 1);
      }
    }
  };
  </script>
  
  <style>
  .container {
    width: 50%;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #f9f9f9;
    text-align: center;
  }
  .search-box {
    margin: 10px 0;
    padding: 5px;
    width: 80%;
  }
  button {
    margin: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    border-bottom: 1px solid #ddd;
  }
  </style>
  
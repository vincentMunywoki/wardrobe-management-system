<template>
    <div class="container">
      <h1>Wardrobe Management</h1>
  
      <!-- Add Clothing Item Form -->
      <form @submit.prevent="addItem" class="form">
        <input v-model="newItem.name" placeholder="Enter item name..." required class="input" />
        <select v-model="newItem.category" class="select">
          <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
        <button type="submit" class="btn add">Add Item</button>
      </form>
  
      <!-- Search & Filter -->
      <div class="filter-container">
        <input v-model="searchQuery" placeholder="Search items..." class="input search-box" />
        <select v-model="filterCategory" class="select">
          <option value="">All Categories</option>
          <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
      </div>
  
      <!-- Clothing Items List -->
      <ul class="item-list">
        <li v-for="(item, index) in filteredItems" :key="index" class="item">
          <span>{{ item.name }} - <strong>{{ item.category }}</strong></span>
          <div class="actions">
            <button @click="editItem(index)" class="btn edit">Edit</button>
            <button @click="deleteItem(index)" class="btn delete">Delete</button>
          </div>
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
  
  <style scoped>
  /* Container */
  .container {
    width: 90%;
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  /* Headings */
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
  }
  
  /* Forms */
  .form, .filter-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
  
  .input, .select {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    flex: 1;
    min-width: 150px;
  }
  
  .select {
    max-width: 200px;
  }
  
  /* Buttons */
  .btn {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
    white-space: nowrap;
  }
  
  .add {
    background: #28a745;
    color: white;
  }
  
  .add:hover {
    background: #218838;
  }
  
  .edit {
    background: #ffc107;
    color: black;
  }
  
  .edit:hover {
    background: #e0a800;
  }
  
  .delete {
    background: #dc3545;
    color: white;
  }
  
  .delete:hover {
    background: #c82333;
  }
  
  /* Items List */
  .item-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 12px;
    border-bottom: 1px solid #ddd;
    align-items: center;
    font-size: 16px;
  }
  
  .actions {
    display: flex;
    gap: 10px;
  }
  
  @media (max-width: 600px) {
    .form, .filter-container {
      flex-direction: column;
      align-items: stretch;
    }
  
    .actions {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  </style>
  
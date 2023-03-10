Vue.createApp({
  data() {
    return {
      user: {
        name: 'Dylan de Bruijn',
        age: 29,
        favoriteNumber: Math.random()
      },
      imageUrl: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    }
  },
  methods: {
    addFiveYears() {
      return this.user.age + 5;
    }
  }
}).mount('#assignment');
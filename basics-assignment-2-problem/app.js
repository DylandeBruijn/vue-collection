Vue.createApp({
  data() {
    return {
      userOutputA: "",
      userOutputB: "",
    };
  },
  methods: {
    showAlert() {
      alert("Button was clicked!");
    },
    onUserInputA(event) {
      this.userOutputA = event.target.value;
    },
    onUserInputB(event) {
      this.userOutputB = event.target.value;
    }
  }
}).mount("#assignment");
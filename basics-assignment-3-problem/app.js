Vue.createApp({
  data() {
    return {
      count: 0
    };
  },
  methods: {
    add(number) {
      this.count = this.count + number;
    }
  },
  computed: {
    result() {
      if (this.count === 37) {
        return this.count;
      }
      if (this.count > 37) {
        return "Too much!";
      }
      return 'Not there yet!'
    }
  },
  watch: {
    result() {
      const that = this;
      setTimeout(function() {
        that.count = 0;
      }, 5000)
    }
  }
}).mount("#assignment");

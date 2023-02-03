Vue.createApp({
  data() {
    return {
      typedClass: "",
      typedInlineClass: "",
      showParagraph: true
    };
  },
  methods: {
    toggleParagraph() {
      this.showParagraph = !this.showParagraph;
    }
  },
  computed: {
    paragraphClass() {
      return {
        user1: this.typedClass === "user1",
        user2: this.typedClass === "user2",
        visible: this.showParagraph,
        hidden: !this.showParagraph
      };
    }
  }
}).mount("#assignment");
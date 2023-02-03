Vue.createApp({
  data() {
    return {
      task: 'test',
      tasks: [],
      showList: true
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.task);
    },
    toggleList() {
      this.showList = !this.showList;
    }
  },
  computed: {
    buttonCaption() {
      return this.showList ? 'Hide' : 'Show';
    }
  }
}).mount("#assignment");
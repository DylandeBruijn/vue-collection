Vue.createApp({
  data() {
    return {
      task: 'test',
      tasks: [],
      showTaskList: true
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.task);
    },
    toggleList() {
      this.showTaskList = !this.showTaskList;
    }
  },
  computed: {
    buttonCaption() {
      return this.showTaskList ? 'Hide' : 'Show';
    }
  }
}).mount("#assignment");
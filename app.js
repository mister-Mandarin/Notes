"use strict";

const App = {
  data() {
    return {
      title: "Notes",
      input: {
        value: "",
        placeholder: "Введите текст",
      },
      notes: [],
      edit: false,
      editNoteID: "",
    };
  },
  mounted() {
    this.searchNotes();
  },
  // watch следит за свойствами, и когда оно меняется, то выполняет функцию.
  // https://vuejs.org/guide/essentials/watchers.html
  watch: {
    notes: {
      handler(fullNotes) {
        localStorage.setItem("notes", JSON.stringify(fullNotes));
      },
      deep: true,
    },
  },
  methods: {
    editNote(index) {
      let curTask = this.notes[index];
      this.editNoteID = index;
      this.input.value = curTask;
      this.edit = true;
    },
    searchNotes() {
      const a = localStorage.getItem("notes");
      if (JSON.parse(a).length == 0) {
        this.notes = ["Пример 1", "Пример 2", "Пример 3"];
      } else this.notes = JSON.parse(a);
    },
    sendData() {
      if (!this.edit) {
        this.notes.push(this.input.value);
      } else {
        this.notes[this.editNoteID] = this.input.value;
        this.edit = false;
        this.editNoteID = "";
      }

      this.input.value = "";
    },
    remove(index) {
      this.notes.splice(index, 1);
    },
  },
};

Vue.createApp(App).mount("#app");

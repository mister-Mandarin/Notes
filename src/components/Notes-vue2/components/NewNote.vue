<template>
  <!-- new note -->
  <div class = "new-note">
    <form @submit.prevent = "addNote">
      <div class = "note-title">
        <div class = "note-title-1">
          <label>Title</label>
          <input v-model = "note.title" placeholder = "Введите заголовок..." type = "text">
        </div>
        <div class = "note-title-2">
          <label>Priority</label>
          <select v-model = "note.priority" required>
            <option disabled selected value = "">Select priority</option>
            <option class = "green" value = "standard">Standard</option>
            <option class = "yellow" value = "important">Important</option>
            <option class = "red" value = "very important">Very important</option>
          </select>
        </div>
      </div>
      <label>Description</label>
      <textarea v-model = "note.descr" placeholder = "Описание заметки..." style = "margin-bottom: 30px;"></textarea>
      <button class = "btn btnPrimary" type = "submit">Добавить заметку</button>
    </form>
  </div>
</template>

<script>
export default {
	props: {
		note: {
			type: Object,
			required: true
		}
	},
	methods: {
		addNote() {
			console.log(this.note);
			this.$emit('addNote', this.note);
		}
	}
};
</script>

<style lang = "scss">
.new-note {
  text-align: center;
}

.note-title {
  display: flex;
  flex-direction: row;
}


.note-title-1 {
  flex-grow: 1;
  flex-shrink: 1;
}

.note-title-2 {
  margin-left: 20px;
}

.green {
  background-color: #26de81;
}

.yellow {
  background-color: #fed330;
}

.red {
  background-color: #fc5c65;
}
</style>


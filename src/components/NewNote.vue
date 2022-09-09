<template>
  <!-- new note -->
  <div class = "new-note">
    <div class = "note-title">
      <div class = "note-title-1">
        <label>Title</label>
        <input v-model = "note.title" type = "text">
      </div>
      <div class = "note-title-2">
        <label>Priority</label>
        <select v-model = "note.priority" required>
          <option disabled selected value = "">Select priority</option>
          <option value = "standard">Standard</option>
          <option value = "important">Important</option>
          <option value = "very important">Very important</option>
        </select>
      </div>
    </div>
    <label>Description</label>
    <textarea v-model = "note.descr"></textarea>
    <button class = "btn btnPrimary" @click = "addNote">New note</button>
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
</style>


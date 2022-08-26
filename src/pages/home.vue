<template>
  <div class = 'md-body'>
    <MainForm @sendData = 'sendData'/>
    <ListNotes @removeNote = "removeNote" @editNote = "editNote" :notes = "items"/>
  </div>
</template>

<script>
import Form from '@/components/Notes/Form';
import List from '@/components/Notes/List';

export default {
	components: {
		MainForm: Form,
		ListNotes: List
	},
	data() {
		return {
			items: ['Пример 1', 'Пример 2', 'Пример 3']
		};
	},
	methods: {
		sendData(note) {
			this.items.push(note.trim());
		},
		removeNote(index) {
			this.items.splice(index, 1);
		},
		editNote(index) {
			const curNote = this.items[index];
			this.editNoteIndex = index;
			this.input.value = curNote;
		}
	}
};
</script>

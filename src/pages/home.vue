<template>
  <div class='md-body'>
    <MainForm @sendData='sendData'/>
    <ListNotes @removeNote="removeNote" :notes="items"/>
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
			items: []
		};
	},
	mounted() {
		// при создании страницы ДО ЛОГИКИ вызываем метод searchNotes,
		// который вставляет болванку если массив записей пустой
		this.searchNotes();
	},
	// watch следит за свойствами, и когда оно меняется, то выполняет функцию.
	// https://vuejs.org/guide/essentials/watchers.html
	watch: {
		items: {
			handler(fullNotes) {
				localStorage.setItem('items', JSON.stringify(fullNotes));
			},
			deep: true,
		},
	},
	methods: {
		searchNotes() {
			const a = localStorage.getItem('items');
			if (JSON.parse(a) == null || JSON.parse(a).length == 0) {
				this.items = [{
					title: 'Задача 1',
					tags: [{
						title: 'Дом'
					},
					{
						title: 'Работа'
					}]
				},
				{
					title: 'Задача 2',
					tags: [{
						title: 'Работа'
					}]
				},
				{
					title: 'Задача 3',
					tags: []
				}];
			} else this.items = JSON.parse(a);
		},
		sendData(title) {
			const note = {
				title: title,
				tags: []
			};
			this.items.push(note);
		},
		removeNote(index) {
			this.items.splice(index, 1);
		},
		// editNote(index) {
		// 	const curNote = this.items[index];
		// 	this.editNoteIndex = index;
		// 	this.input.value = curNote;
		// }
	}
};
</script>

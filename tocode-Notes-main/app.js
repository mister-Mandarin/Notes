'use strict';

const App = {
	data() {
		return {
			title: 'Notes',
			input: {
				value: '',
				placeholder: 'Введите текст',
			},
			notes: [],
			editNoteIndex: null,
			lengthError: false,
		};
	},
	mounted() {
		// при создании страницы ДО ЛОГИКИ вызываем метод,
		// который вставляет болванку если массив записей пустой
		this.searchNotes();
	},
	// watch следит за свойствами, и когда оно меняется, то выполняет функцию.
	// https://vuejs.org/guide/essentials/watchers.html
	watch: {
		notes: {
			handler(fullNotes) {
				localStorage.setItem('notes', JSON.stringify(fullNotes));
			},
			deep: true,
		},
	},
	methods: {
		editNote(index) {
			const curNote = this.notes[index];
			this.editNoteIndex = index;
			this.input.value = curNote;
		},
		searchNotes() {
			const a = localStorage.getItem('notes');
			if (JSON.parse(a).length == 0) {
				this.notes = ['Пример 1', 'Пример 2', 'Пример 3'];
			} else this.notes = JSON.parse(a);
		},
		sendData() {
			function validate(value) {
				return value.length > 3;
			}

			this.lengthError = validate(this.input.value);

			console.log(this.editNoteIndex);
			console.log(!this.editNoteIndex);
			if (this.lengthError) {
				// отправляем данные
				// ! == для того чтобы можно было редактировать 0 элемент массива
				if (!this.editNoteIndex && this.editNoteIndex !== 0) {
					this.notes.push(this.input.value.trim());
				} else {
					this.notes[this.editNoteIndex] = this.input.value.trim();
					// this.edit = false;
					this.editNoteIndex = null;
				}
				this.lengthError = false;
				this.input.value = '';
			} else {
				// выводим ошибку
				this.lengthError = true;
			}
		},
		remove(index) {
			this.notes.splice(index, 1);
		},
	},
};

Vue.createApp(App).mount('#app');

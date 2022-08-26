<template>
  <form @submit.prevent = 'sendData'>
    <textarea
        @keyup.enter = "sendData"
        required
        v-model = 'value'
        placeholder = 'Введите заметку и нажмите Enter...'
    />
    <button class = "btn btnPrimary btnLong" type = "submit">Записать</button>
  </form>
</template>

<script>
export default {
	data() {
		return {
			value: ''
		};
	},
	methods: {
		sendData() {

			const lengthError = this.value.length > 3;

			if (lengthError) {
				// отправляем данные
				// ! == для того чтобы можно было редактировать 0 элемент массива
				// if (!this.editNoteIndex && this.editNoteIndex !== 0) {
				// } else {
				this.$emit('sendData', this.value);
				this.value = '';
				// }
				// 	this.lengthError = false;
				// 	this.input.value = '';
				// } else {
				// 	// выводим ошибку
				// 	this.lengthError = true;
				// }

			}
		}
	}
};
</script>
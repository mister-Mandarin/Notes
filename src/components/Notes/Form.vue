<template>
  <form @submit.prevent='sendData'>
    <textarea
      @keyup.enter="sendData"
      required
      v-model='value'
      placeholder='Введите заметку и&nbsp;нажмите Enter...'
    />
    <TagList :tags="tags" @clickTag="clickTag"/>
    <button class="btn btnPrimary btnLong" type="submit">Записать</button>
  </form>
</template>

<script>
import TagList from '@/components/Notes/UI/TagList';

export default {
	components: {
		TagList
	},
	data() {
		return {
			value: '',
			tags: [
				{
					title: 'Дом',
					active: false
				},
				{
					title: 'Работа',
					active: false
				},
				{
					title: 'Учёба',
					active: false
				},
				{
					title: 'Личное',
					active: false
				}]
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
		},
		clickTag(tag) {
			console.log(tag);

		}
	}
};
</script>

<style lang="scss">
textarea {
  margin-bottom: 0;
}
</style>

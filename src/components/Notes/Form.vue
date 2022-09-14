<template>
  <form @submit.prevent = "sendData">
    <textarea
      v-model = "value"
      placeholder = "Введите заметку и&nbsp;нажмите Enter..."
      required
      @keyup.enter = "sendData"
    />
    <TagList :tags = "tagsName" isActive />
    <button class = "btn btnPrimary btnLong" type = "submit">Записать</button>
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
			tagsName: [
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
			const activeTags = this.tagsName.filter(el => el.active === true);
			const lengthError = this.value.length > 3;

			if (lengthError) {
				const currentNote = {
					title: this.value,
					tags: activeTags
				};
				this.$store.dispatch('sendData', currentNote);
				this.value = '';
				// WOW работает! Перебираем массив, чтобы после отправки заметки
				// сделать активные теги неактивными
				this.tagsName = this.tagsName.map(el => ({
					...el,
					active: el.active === true ? el.active === false : el.active
				}));
			}
		}
	}
};
</script>

<style lang = "scss">
textarea {
  margin-bottom: 0;
}
</style>

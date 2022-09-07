<template>
  <div class = "md-body">
    <MainForm />
    <ListNotes />
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
	beforeMount() {
		// при создании страницы ДО ЛОГИКИ вызываем метод searchNotes,
		// который вставляет болванку если массив записей пустой
		// this.searchNotes();
		this.$store.watch(() => this.$store.getters.getListNotes);
		this.$store.dispatch('searchNotes');
	},
	// watch следит за свойствами, и когда оно меняется, то выполняет функцию.
	// https://vuejs.org/guide/essentials/watchers.html
	watch: {}
};
</script>

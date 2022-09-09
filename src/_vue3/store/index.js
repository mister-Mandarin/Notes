import { createStore } from 'vuex';
import { transformLocalStorage, emptyLocalStore, updateLocalStorage } from '@/localStorage';

const store = createStore({
	state: {
		listNotes: []
	},
	mutations: {
		sendData(state, notes) {
			state.listNotes.push(notes);
		},
		removeNote(state, index) {
			state.listNotes.splice(index, 1);
		},
		searchNotes(state, notes) {
			state.listNotes = notes;
		}
	},

	actions: {
		sendData(context, note) {
			const notes = {
				title: note.title,
				tags: note.tags
			};
			context.commit('sendData', notes);
		},
		removeNote(context, index) {
			context.commit('removeNote', index);
		},
		searchNotes(context) {
			if (emptyLocalStore) {
				const defaultItems = [
					{
						title: 'Задача 1',
						tags: [
							{ title: 'Дом' },
							{ title: 'Работа' }]
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
				context.commit('searchNotes', defaultItems);
			} else {
				context.commit('searchNotes', transformLocalStorage);
			}
		}
	},

	getters: {
		getListNotes(state) {
			updateLocalStorage(state.listNotes);
			return state.listNotes;
		}
	}
});

export default store;
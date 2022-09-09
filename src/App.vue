<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <section>
        <div class="container">
          <div class="note-header" style="margin: 36px 0; justify-content: center;">
            <p> {{ title }} </p>
          </div>
          <!-- message -->
          <message v-if="message" :message="message"/>

          <!-- new note -->
          <newNote :note="note" @addNote="addNote"/>

          <div class="note-header" style="margin: 36px 0;">
            <!-- title -->
            <h1> {{ title }} </h1>

            <!-- search -->
            <search
              :value="search"
              placeholder="Find your note"
              @search="search = $event"/>

            <!-- icons controls -->
            <div class="icons">
              <svg :class="{ active: grid }" fill="none" height="24"
                   stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                   style="cursor: pointer;"
                   viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" @click="grid = true">
                <rect height="7" width="7" x="3" y="3"></rect>
                <rect height="7" width="7" x="14" y="3"></rect>
                <rect height="7" width="7" x="14" y="14"></rect>
                <rect height="7" width="7" x="3" y="14"></rect>
              </svg>
              <svg :class="{ active: !grid }" fill="none" height="24"
                   stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                   style="cursor: pointer;"
                   viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" @click="grid = false">
                <line x1="8" x2="21" y1="6" y2="6"></line>
                <line x1="8" x2="21" y1="12" y2="12"></line>
                <line x1="8" x2="21" y1="18" y2="18"></line>
                <line x1="3" x2="3" y1="6" y2="6"></line>
                <line x1="3" x2="3" y1="12" y2="12"></line>
                <line x1="3" x2="3" y1="18" y2="18"></line>
              </svg>
            </div>
          </div>

          <!-- note list -->
          <notes
            :grid="grid"
            :notes="notesFilter"
            @edit="editNote"
            @remove="removeNote"
            @submitEdit="submitEdit"
            @unsubmitEdit="unsubmitEdit"
          />

        </div>
      </section>

    </div>
  </div>
</template>

<script>
import message from '@/components/Message.vue';
import notes from '@/components/Notes.vue';
import newNote from '@/components/NewNote.vue';
import search from '@/components/Search.vue';

export default {
	components: {
		message, notes, newNote, search
	},
	data() {
		return {
			title: 'Notes App',
			search: '',
			message: null,
			grid: true,
			edit: null,
			note: {
				title: '',
				descr: '',
				priority: '',
				edit: true
			},
			notes: [
				{
					title: 'First Note',
					descr: 'Description for first note',
					date: new Date(Date.now()).toLocaleString(),
					priority: 'important',
					edit: true
				},
				{
					title: 'Second Note',
					descr: 'Description for second note',
					date: new Date(Date.now()).toLocaleString(),
					priority: 'very important',
					edit: true
				},
				{
					title: 'Third Note',
					descr: 'Description for third note',
					date: new Date(Date.now()).toLocaleString(),
					priority: 'standard',
					edit: true
				}
			]
		};
	},
	computed: {
		notesFilter() {
			let array = this.notes,
				search = this.search;
			if (!search) return array;
			// Small
			search = search.trim().toLowerCase();
			// Filter
			array = array.filter(function (item) {
				if (item.title.toLowerCase().indexOf(search) !== -1) {
					return item;
				}
			});
			// Error
			return array;
		}
	},
	methods: {
		addNote() {
			let {title, descr, priority} = this.note;

			if (title === '') {
				this.message = 'title can`t be blank!';
				return false;
			}

			this.notes.push({
				title,
				descr,
				date: new Date(Date.now()).toLocaleString(),
				priority,
				edit: true
			});
			this.message = null;
			this.note.title = '';
			this.note.descr = '';
			this.note.priority = '';
		},
		removeNote(index) {
			this.notes.splice(index, 1);
		},
		editNote(index) {
			this.edit = this.notes[index].title;
			this.notes[index].edit = !this.notes[index].edit;
		},
		submitEdit(index) {
			this.notes[index].date = new Date(Date.now()).toLocaleString();
			this.notes[index].edit = !this.notes[index].edit;
			this.edit = null;
		},
		unsubmitEdit(index) {
			this.notes[index].title = this.edit;
			this.notes[index].edit = !this.notes[index].edit;
			this.edit = null;
		}
	}
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>

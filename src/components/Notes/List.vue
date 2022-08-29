<template>
  <div class="notes-list">
    <div class="note-item" v-for="(note, index) in notes" :key="index">
      <div class="note-header">
        <p>{{ note.title }}</p>

        <div class="note-actions">
          <div @click="$emit('removeNote', index)">
            <img src="@/assets/img/remove.png" alt="del">
          </div>
          <!--          <div @click = "$emit('editNote', index)">-->
          <!--            <img src = "@/assets/img/edit.png" alt = "edit">-->
          <!--          </div>-->
        </div>
      </div>
      <div class="note-footer">
        <TagList isPreview v-if="note.tags && note.tags.length > 0" :tags="note.tags"/>
      </div>
    </div>
  </div>
</template>

<script>
import TagList from '@/components/Notes/UI/TagList';

export default {
	components: {
		TagList
	},
	props: {
		notes: {
			type: Array,
			required: true
		}
	},
	data() {
		return {};
	},
	methods: {}
};
</script>

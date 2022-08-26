<template>
  <div class = "notes-list">
    <div class = "note-item" v-for = "(note, index) in notes" :key = "index">
      <div class = "note-header">
        <p>{{ note }}</p>

        <div class = "note-actions">
          <div @click = "$emit('removeNote', index)">
            <img src = "@/assets/img/remove.png" alt = "del">
          </div>
          <div @click = "$emit('editNote', index)">
            <img src = "@/assets/img/edit.png" alt = "edit">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		notes: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {};
	},
	methods: {},
};
</script>

<template>
  <div class="tags-list">
    <div
      class="tag-item"
      v-for="(tag, index) in tags" :key="index"
      :class="{isPreview: isPreview, isActive: tag.active && !isPreview }"
      @click="actionTag(index)"
    >
      <span>{{ tag.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		tags: {
			type: Array,
			required: true
		},
		isActive: {
			type: Boolean,
			default: false,
		},
		isPreview: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {};
	},
	methods: {
		actionTag(index) {
			this.$emit('clickTag', this.tags[index]);
			this.tags[index].active = !this.tags[index].active;
		}
	}
};
</script>

<style lang="scss">
.tags-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.tag-item {
  padding: 8px 22px;
  margin: 0px 10px 10px 0px;
  background-color: #e9e9e9;
  border-radius: 14px;
  user-select: none;
  cursor: pointer;
  line-height: 30px;

  &.isPreview {
    padding: 0px;
    color: #444ce0;
    cursor: default;
    background-color: #ffffff;
    margin: 0px 5px 0px 0px;

    &:before {
      content: "#";
    }
  }

  &.isActive {
    background-color: #444ce0;
    color: #fff;
  }

  &:last-child {
    margin-right: 0;
  }
}
</style>

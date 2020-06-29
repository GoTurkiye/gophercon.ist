<template>
  <div class="custom-card flex1 mt-5" :class="'custom-card-' + position">
    <div class="timer timer-absolute">{{ time }}</div>
    <pre>{{ $t(track) }}</pre>
    <p class="title">{{ title }}</p>
    <Detail
      :title="title"
      :author="author"
      :desc="desc"
    />
    <div v-if="author" class="author">
      <img :src="'assets/img/speakers/' + avatar" alt="avatar" class="avatar" />
      {{ author }}
    </div>
  </div>
</template>

<script>
import Detail from "./Detail.vue";
export default {
  props: ["position", "title", "author", "desc", "track", "time", "avatar"],
  components: {
    Detail
  }
};
</script>

<style>
</style>

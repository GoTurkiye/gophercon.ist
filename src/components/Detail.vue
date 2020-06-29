<template>
  <p class="description">
    <span v-if="desc.length < 140">{{ desc }}</span>
    <span v-if="desc.length >= 140">
      {{ desc.substring(0, 140) }}...
      <span
        v-on:click="showMore({title, author, desc})"
        class="show_more"
        href="javascript::void"
      >{{ this.$t("show_more") }}</span>
    </span>
  </p>
</template>

<script>
import Vue from "vue";
import "sweetalert2/dist/sweetalert2.min.css";
export default {
  props: ["title", "author", "desc"],
  methods: {
    showMore: ({title, author, desc}) => {
      const html = `<div><p style="font-size: 20px;color:#000;margin-top: 20px;font-weight:bold">${title}</p><p style="font-size: 14px;color:#666;">${author}</p><p style="font-size: 15px;color:#333;line-height: 22px">${desc}</p></div>`;
      Vue.swal(html);
    }
  }
};
</script>

<style>
.show_more {
  margin-left: 5px;
  color: #007bff;
  cursor: pointer;
}
</style>

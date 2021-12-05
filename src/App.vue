<template>
  <div id="app">
    <div class="mobile-menu" v-show="showMenu">
      <ul class="menu">
        <li v-show="sponsor">
          <a href="/" @click="showMenu = !showMenu"> {{ $t("home") }}</a>
        </li>
        <li>
          <a href="#about" @click="showMenu = !showMenu"> {{ $t("About") }}</a>
        </li>
        <li>
          <a href="#speakers" @click="showMenu = !showMenu">{{
            $t("Speakers")
          }}</a>
        </li>
        <li>
          <a href="#schedule" @click="showMenu = !showMenu">{{
            $t("Schedule")
          }}</a>
        </li>
        <li v-show="!sponsor">
          <a href="#sponsors" @click="showMenu = !showMenu">{{
            $t("Sponsors")
          }}</a>
        </li>
        <li v-show="!sponsor">
          <a href="#ticket" @click="showMenu = !showMenu">{{
            $t("Tickets")
          }}</a>
        </li>
        <li v-show="sponsor">
          <a href="#ticket" @click="showMenu = !showMenu">{{ $t("jobs") }}</a>
        </li>
        <li>
          <a
            class="btn btn-custom"
            target="_blank"
            href="https://www.youtube.com/watch?v=Mx-Vu0dK49k"
            ><img
              src="/assets/img/youtube.png"
              style="width: 40px; margin-right: 10px"
            />
            {{ $t("_turkish_track") }}</a
          >
        </li>
        <li>
          <a
            class="btn btn-custom"
            target="_blank"
            href="https://www.youtube.com/watch?v=dEJ-bsNFKSI"
            ><img
              src="/assets/img/youtube.png"
              style="width: 40px; margin-right: 10px"
            />
            {{ $t("_english_track") }}</a
          >
        </li>
      </ul>
      <a href="javascript:" class="close-menu" @click="showMenu = !showMenu"
        >x</a
      >
    </div>

    <a href="javascript:" class="menu-toggle" @click="showMenu = !showMenu">
      <img src="/assets/img/open-menu.svg" alt="open mobile menu" />
    </a>

    <div class="mobile-nav">
      <div class="language-wrapper">
        <a
          href="javascript:"
          class="language-button"
          @click="showLanguages = !showLanguages"
        >
          {{ this.$i18n.locale }}
        </a>
        <ul class="language-picker" v-show="showLanguages">
          <li v-if="this.$i18n.locale != 'tr'">
            <a href="#" @click="lang('tr')" class="language-button">TR</a>
          </li>
          <li v-if="this.$i18n.locale != 'en'">
            <a href="#" @click="lang('en')" class="language-button">EN</a>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      showMenu: false,
      showLanguages: false,
      sponsor: false,
    };
  },
  mounted() {
    if (window.location.search.startsWith("?%2Fsponsor%2F")) {
      var decoded = decodeURIComponent(
        window.location.search.replaceAll("?", "")
      );
      this.$router.push(decoded);
    }

    this.sponsor = this.$route.params.name.length > 0;
  },
  methods: {
    lang: function (lang) {
      if (lang === "tr") {
        this.$i18n.locale = "tr";
      } else {
        this.$i18n.locale = "en";
      }
      this.showLanguages = false;
    },
  },
};
</script>

<style>
</style>

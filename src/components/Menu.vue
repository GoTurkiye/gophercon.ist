<template>
  <div class="header-absolute">
    <div class="mobile-menu" v-show="showMenu">
      <ul class="menu">
        <li v-show="sponsor">
          <router-link to="/" @click="showMenu = !showMenu"> {{ $t("home") }}</router-link>
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
          <a href="#ticket" @click="showMenu = !showMenu">{{
            $t("jobs")
          }}</a>
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
    <div class="container">
      <header>
        <a href="javascript:" class="logo">
          <img src="/assets/img/gophercon.png" alt="logo" />
        </a>
        <ul class="menu">
          <li class="language-wrapper">
            <a
              href="javascript:"
              class="button language-button"
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
          </li>
          <li>
            <a
              href="javascript:"
              class="button menu-toggle"
              @click="showMenu = !showMenu"
            >
              <img
                src="/assets/img/open-menu-white.svg"
                alt="open mobile menu"
              />
            </a>
          </li>
        </ul>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      showMenu: false,
      showLanguages: false,
      sponsor: false,
    };
  },
  mounted() {
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

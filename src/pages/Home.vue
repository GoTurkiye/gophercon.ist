<template>
  <div id="home">
    <section id="slider" class="slider">
      <img class="sliderbg" src="/assets/img/slider.png" alt="slider" />
      <img class="sliderbgmobile" src="/assets/img/slider.png" alt="slider" />

      <Menu></Menu>
      <div class="announcement-aboslute">
        <div v-if="live == true" class="live">
          <img
            src="/assets/img/radio.png"
            style="width: 30px; margin-right: 5px; margin-top: -2px"
          />
          {{ $t("live") }}
        </div>
        <h1>{{ $t("header_title") }}</h1>
        <p>{{ $t("header_slogan") }}</p>
        <div class="buttons">
          <br />
          <br />
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
        </div>
      </div>
    </section>
    <section class="about" id="about">
      <div class="container">
        <div class="about-flex">
          <img src="/assets/img/gopher-hi.png" alt="gopher" class="gopher" />
          <h2 class="title">{{ $t("ABOUT CONFERENCE") }}</h2>
          <div v-html="$t('event_details')"></div>
          <div class="buttons">
            <a
              class="btn btn-custom"
              target="_blank"
              href="https://discord.gg/MpFEK4a"
              ><img
                src="/assets/img/discord.png"
                style="width: 40px; margin-right: 10px"
              />
              {{ $t("DISCORD") }}</a
            >
          </div>
        </div>
      </div>
    </section>
    <section class="speakers" id="speakers">
      <h2 class="title">{{ $t("SPEAKERS") }}</h2>
      <div class="container">
        <div class="row">
          <div
            class="col-12 col-md-4 col-lg-3"
            v-for="speaker in this.speakers"
            v-bind:key="speaker"
          >
            <div class="profile">
              <img :src="speaker.avatar" alt="avatar" class="avatar" />
              <p class="name">{{ speaker.name }}</p>
              <p class="position">{{ speaker.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="schedule" id="schedule">
      <img
        src="/assets/img/gopher-02.png"
        alt="gopher"
        class="gopher hide-mobile"
      />
      <h2 class="title">{{ $t("SCHEDULE") }}</h2>

      <div class="container">
        <div class="feed-out">
          <div class="feed">
            <div class="line-center">
              <div class="track-title flex1 hide-mobile">
                <p>{{ $t("Sponsor Track 1") }}</p>
                <img class="arrow" src="/assets/img/arrow.svg" alt="arrow" />
              </div>
              <div class="flex1 flex-center">
                <div class="timer">10:30 - {{ $t("Start") }}</div>
              </div>
              <div class="track-title flex1 hide-mobile">
                <p>{{ $t("Sponsor Track 2") }}</p>
                <img class="arrow" src="/assets/img/arrow.svg" alt="arrow" />
              </div>
            </div>
            <div class="line-center">
              <div class="turkish-tracks">
                <div
                  v-for="track in turkishTracks"
                  v-bind:key="track"
                  class="custom-card custom-card-left flex1 mt-5"
                >
                  <div class="timer timer-absolute">
                    {{ track.start }} - {{ track.end }}
                  </div>
                  <pre>Turkish Track</pre>
                  <p v-if="track.speaker.company_name == 'Trendyol'">
                    Sponsor:
                    <img
                      src="/assets/img/sponsors/trendyoltech.png"
                      style="max-width: 100px; max-height: 25px"
                    />
                  </p>
                  <p v-if="track.speaker.company_name == 'Bestcloudforme'">
                    Sponsor:
                    <img
                      src="/assets/img/sponsors/bestcloudforme.png"
                      style="max-width: 100px; max-height: 25px"
                    />
                  </p>
                  <p v-if="track.speaker.company_name == 'Modanisa'">
                    Sponsor:
                    <img
                      src="/assets/img/sponsors/modanisa.png"
                      style="max-width: 100px; max-height: 25px"
                    />
                  </p>
                  <p class="title">{{ track.title }}</p>
                  <div class="author">
                    <img
                      :src="track.speaker.avatar"
                      alt="avatar"
                      class="avatar"
                    />
                    {{ track.speaker.name }}
                  </div>
                </div>
              </div>
              <div class="english-tracks">
                <div
                  v-for="track in englishTracks"
                  v-bind:key="track"
                  class="custom-card custom-card-right flex1 mt-5"
                >
                  <div class="timer timer-absolute">
                    {{ track.start }} - {{ track.end }}
                  </div>
                  <pre>English Track</pre>
                  <p v-if="track.speaker.company_name == 'Trendyol'">
                    Sponsor:
                    <img
                      src="/assets/img/sponsors/trendyoltech.png"
                      style="max-width: 100px; max-height: 25px"
                    />
                  </p>
                  <p v-if="track.speaker.company_name == 'Bestcloudforme'">
                    Sponsor:
                    <img
                      src="/assets/img/sponsors/bestcloudforme.png"
                      style="max-width: 100px; max-height: 25px"
                    />
                  </p>
                  <p v-if="track.speaker.company_name == 'Modanisa'">
                    Sponsor:
                    <img
                      src="/assets/img/sponsors/modanisa.png"
                      style="max-width: 100px; max-height: 25px"
                    />
                  </p>
                  <p class="title">{{ track.title }}</p>
                  <div class="author">
                    <img
                      :src="track.speaker.avatar"
                      alt="avatar"
                      class="avatar"
                    />
                    {{ track.speaker.name }}
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="line-center">
              <div class="flex1 flex-center">
                <div class="timer timer-gray mt-5">
                  Coffee Break 10:10 - 10:40
                </div>
              </div>
            </div> -->
            <div class="line-center">
              <div class="flex1 flex-center">
                <div class="timer mt-5">18:00 - {{ $t("finish") }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="ticket" id="ticket">
      <img
        src="/assets/img/gopher-07.png"
        alt="gopher"
        class="gopher hide-mobile"
      />
      <h2 class="title">{{ $t("Tickets") }}</h2>
      <div class="container">
        <div class="tables">
          <div class="table mt-4" v-for="ticket in tickets" v-bind:key="ticket">
            <img
              src="/assets/img/gopher-03.png"
              alt="gopher"
              class="gopher-free"
            />
            <div class="name">{{ ticket.name }}</div>
            <p v-if="ticket.price == 0" class="price">{{ $t("Free") }}</p>
            <p v-if="ticket.price != 0" class="price">{{ ticket.price }} TL</p>
            <div class="mt-4" v-html="ticket.description"></div>

            <a
              href="https://kommunity.com/goturkiye/events/gophercon-turkey-1c8eab1d/tickets"
              class="buy buy-red"
              >{{ $t("Register") }}</a
            >
          </div>
        </div>
      </div>
    </section>

    <section class="sponsors" id="sponsors">
      <img
        src="/assets/img/gopher-06.png"
        alt="gopher"
        class="gophers hide-mobile"
      />
      <h2 class="title">{{ $t("main") }}</h2>
      <div class="container">
        <div class="sponsor-list">
          <div
            class="sponsor"
            v-for="sponsor in mainsponsors"
            v-bind:key="sponsor"
          >
            <router-link :to="sponsor.link">
              <img :src="sponsor.logo" :alt="sponsor.name" />
            </router-link>
          </div>
        </div>
      </div>
      <br /><br /><br />
      <h2 class="title">{{ $t("platinum") }}</h2>
      <div class="container">
        <div class="sponsor-list">
          <div
            class="sponsor"
            v-for="sponsor in platinumponsors"
            v-bind:key="sponsor"
          >
            <router-link :to="sponsor.link">
              <img :src="sponsor.logo" :alt="sponsor.name" />
            </router-link>
          </div>
        </div>
        <p class="info">
          {{ $t("Would you like to be the part of this great event?") }}
          <br />
          <span v-html="$t('please_get_in_touch')"></span>
        </p>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Footer from "../components/Footer.vue";
import _ from "lodash";

const API_URL =
  "https://api.kommunity.com/api/v3/goturkiye/events/gophercon-turkey-1c8eab1d";
const API_TICKETS_URL =
  "https://api.kommunity.com/api/v1/tickets?event_id=2e8bca4e-5d18-49ca-809f-322383121a98";

export default {
  name: "Home",
  metaInfo() {
    return {
      title: this.$t("title"),
      titleTemplate: "%s",
      meta: [
        {
          name: "description",
          content: this.$t("meta_description"),
          vmid: "description",
        },
        {
          name: "title",
          content: this.$t("meta_title"),
          vmid: "title",
        },
        {
          property: "og:title",
          content: this.$t("og_title"),
          vmid: "og:title",
        },
        {
          property: "og:description",
          content: this.$t("og_description"),
          vmid: "og:description",
        },
        {
          property: "og:type",
          content: "article",
          vmid: "og:type",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
          vmid: "twitter:card",
        },
        {
          property: "og:url",
          content: location.href,
          vmid: "og:url",
        },
        {
          property: "og:image",
          content: this.$t("og_image"),
          vmid: "og:image",
        },
      ],
    };
  },
  data() {
    return {
      live: true,
      days: [],
      speakers: [],
      sessions: [],
      tickets: [],
      turkishTracks: [
        {
          start: 0,
          end: 0,
          title: "",
          speakerName: "",
          avatar: "",
        },
      ],
      englishTracks: [
        {
          start: 0,
          end: 0,
          title: "",
          speakerName: "",
          avatar: "",
        },
      ],
      mainsponsors: [
        {
          type: "main",
          name: "Trendyol Tech",
          link: "/sponsor/trendyoltech",
          logo: "/assets/img/sponsors/trendyoltech.png",
        },
      ],
      platinumponsors: [
        {
          type: "platinum",
          name: "Bestcloudforme",
          link: "/sponsor/bestcloudforme",
          logo: "/assets/img/sponsors/bestcloudforme.png",
        },
        /*{
          type: "platinum",
          name: "Modanisa",
          link: "/sponsor/modanisa",
          logo: "/assets/img/sponsors/bestcloudforme.png",
        },*/
      ],
    };
  },
  mounted() {
    this.getData();
  },
  components: {
    Menu,
    Footer,
  },
  methods: {
    getData: function () {
      this.$axios.get(API_URL).then((response) => {
        this.speakers = response.data.data.speakers;

        const tracks = response.data.data.schedule[0].tracks;

        this.englishTracks = tracks[0].sessions.map((session) => ({
          start: session.start,
          end: session.end,
          title: session.talks[0].title,
          speaker: _.filter(
            this.speakers,
            _.matches({ slug: session.talks[0].speakers[0] })
          )[0],
        }));

        this.turkishTracks = tracks[1].sessions.map((session) => ({
          start: session.start,
          end: session.end,
          title: session.talks[0].title,
          speaker: _.filter(
            this.speakers,
            _.matches({ slug: session.talks[0].speakers[0] })
          )[0],
        }));
      });

      this.$axios.get(API_TICKETS_URL).then((response) => {
        this.tickets = _.chain(response.data.data)
          .toPairs()
          .sortBy(0)
          .take(3)
          .fromPairs()
          .value();

        var t1 = this.tickets[1];
        var t2 = this.tickets[2];
        this.tickets[1] = t2;
        this.tickets[2] = t1;
      });

      var start = new Date("12/18/2021 10:00:00");
      var end = new Date("12/19/2021 18:30:00");

      if (start <= Date.now() && end >= Date.now()) {
        this.live = true;
      }
    },
  },
};
</script>

<style>
</style>

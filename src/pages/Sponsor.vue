<template>
  <div id="home">
    <section id="slider" class="slider" style="min-height: 75px !important">
      <Menu></Menu>
    </section>
    <section class="about" id="about">
      <div class="container">
        <div class="about-flex">
          <h1 class="title">{{ $t(company.type) }}</h1>
          <a :href="company.url" target="_blank">
            <img :src="company.logo" :alt="company.title" class="gopher" />
          </a>

          <ul class="social">
            <li>
              <a target="_blank" :href="company.twitter">
                <img src="/assets/img/twitter.svg" alt="twitter" />
              </a>
            </li>
            <li>
              <a target="_blank" :href="company.linkedin">
                <img src="/assets/img/linkedin.svg" alt="linkedin" />
              </a>
            </li>
          </ul>
          <div v-html="$t(company.about)"></div>
          <div class="buttons" style="padding-top: 30px; padding-bottom: 30px">
            <a class="btn btn-custom" target="_blank" :href="company.discord"
              ><img
                src="/assets/img/discord.png"
                style="width: 40px; margin-right: 10px"
              />
              {{ $t("stand") }}</a
            >
          </div>
        </div>
      </div>
    </section>
    <section class="speakers" id="speakers" v-show="speakers.length > 0">
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
    <section
      class="schedule"
      id="schedule"
      v-show="turkishTracks.length > 0 || englishTracks.length > 0"
    >
      <div class="broadcast">
        <div v-if="live == true" class="live">
          <img
            src="/assets/img/radio.png"
            style="width: 30px; margin-right: 5px; margin-top: -2px"
          />
          {{ $t("live") }}
        </div>
        <div class="buttons line-center" style="margin-bottom: 40px">
          <a
            class="btn broadcast-btn"
            target="_blank"
            href="https://www.youtube.com/watch?v=Mx-Vu0dK49k"
            ><img
              src="/assets/img/youtube.png"
              style="width: 40px; margin-right: 10px"
            />
            {{ $t("_turkish_track") }}</a
          >
          <a
            class="btn broadcast-btn"
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
    <section class="ticket" id="ticket" v-show="company.jobs.length > 0">
      <img
        src="/assets/img/gopher-07.png"
        alt="gopher"
        class="gopher hide-mobile"
      />
      <h2 class="title">{{ $t("jobs") }}</h2>
      <div class="container">
        <div class="tables">
          <div class="table mt-4" v-for="job in company.jobs" v-bind:key="job">
            <img
              src="/assets/img/gopher-03.png"
              alt="gopher"
              class="gopher-free"
            />
            <div class="name">{{ job.title }}</div>
            <div class="row">
              <div class="col-12 col-md-6">
                <img :src="job.img" width="100%" />
              </div>
              <div class="col-12 col-md-6">
                <p v-html="job.desc"></p>
                <br />
                <ul>
                  <li v-for="item in job.items" v-bind:key="item">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>

            <a :href="job.url" class="buy buy-red" target="_blank">{{
              $t("apply")
            }}</a>
          </div>
        </div>
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
  name: "Sponsor",
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
      companies: {
        trendyoltech: {
          name: "Trendyol",
          title: "Trendyol Tech",
          type: "main",
          logo: "/assets/img/sponsors/trendyoltech.png",
          url: "https://www.linkedin.com/company/trendyolgroup/",
          linkedin: "https://www.linkedin.com/company/trendyolgroup/",
          twitter: "https://twitter.com/trendyoltech",
          youtube: "https://www.youtube.com/channel/UCUBiayLMggBAsiYvGLzQJ5w",
          discord: "https://discord.gg/RsJRKHNew5",
          about:
            "If you are a big fan of Tech, curious about scaling services to millions, have interest in Software Development Methodologies, love playing with Big Data and enjoy being a Polyglot, come join us! Food and beverages are also included.",
          jobs: [
            {
              title: "Golang Developer",
              img: "https://media-exp1.licdn.com/dms/image/C4E22AQFQcbf6z6NXQQ/feedshare-shrink_2048_1536/0/1638447161956?e=1641427200&v=beta&t=VFmDiMTp318LkPChWuhHdQvLLZllk_5CYQkjs-AY6CM",
              url: "https://www.linkedin.com/posts/trendyolgroup_we-are-looking-for-golang-developers-if-activity-6872145490822127617-XPLG/",
              desc: "We are looking for Golang Developers! <br>If you have a good understanding of data structures, algorithms, design patterns; an experience with Golang or want to work with Go modules, don't miss this opportunity! 🚀",
              items: [
                "Experience with Golang or desire to learn Golang!",
                "Familiarity with the principles and trade-offs of a microservices architecture, caching and messaging",
                "Practical knowledge about OOP, Design Patterns,Clean Code,Craftsmanship culture, Refactoring and Unit Testing.",
              ],
            },
          ],
        },
        bestcloudforme: {
          name: "Bestcloudfor.me",
          title: "Bestcloudfor.me",
          type: "platinum",
          logo: "/assets/img/sponsors/bestcloudforme.png",
          url: "https://bestcloudfor.me/",
          linkedin: "https://www.linkedin.com/company/bestcloudforme/",
          twitter: "https://twitter.com/bestcloudforme",
          youtube: "https://www.youtube.com/channel/UCC5QWJKPzzLFuggLqWAjhiw",
          discord: "https://discord.gg/cRCqytR2e4",
          about:
            "Advance your cloud, DevOps, SysOps and continuous delivery capabilities for increased automation and efficiency.",
          jobs: [],
        },
      },
      company: {},
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
      this.company = this.companies[this.$route.params.name];

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

        this.speakers = _.filter(
          this.speakers,
          (s) => s.company_name == this.company.name
        );
        this.englishTracks = _.filter(
          this.englishTracks,
          (s) => s.speaker.company_name == this.company.name
        );
        this.turkishTracks = _.filter(
          this.turkishTracks,
          (s) => s.speaker.company_name == this.company.name
        );
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

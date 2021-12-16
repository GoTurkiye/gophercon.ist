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

          <div v-html="company.about[$i18n.locale]"></div>
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
            <div class="name">{{ job[$i18n.locale].title }}</div>
            <div class="row">
              <div class="col-12 col-md-6">
                <img :src="job[$i18n.locale].img" width="100%" />
              </div>
              <div class="col-12 col-md-6">
                <p v-html="job[$i18n.locale].desc"></p>
                <br />
                <ul>
                  <li v-for="item in job[$i18n.locale].items" v-bind:key="item">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>

            <a :href="job[$i18n.locale].url" class="buy buy-red" target="_blank">{{
              $t("apply")
            }}</a>
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
              <div class="turkish-tracks" style="min-width: 50%">
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
              <div class="english-tracks" style="min-width: 50%">
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
    <section class="schedule" id="workshop">
      <h2 class="title">{{ $t("workshops") }}</h2>

      <div class="container">
        <div class="feed-out">
          <div class="feed">
            <div class="line-center">
              <div class="flex1 flex-center">
                <div class="timer">
                  {{ $t("workshop_start") }} 11:00 - {{ $t("Start") }}
                </div>
              </div>
            </div>
            <div
              class="line-center"
              v-for="track in workshops"
              v-bind:key="track"
            >
              <div class="custom-card line-center flex1 mt-5">
                <div class="timer timer-absolute">
                  {{ track.start }} - {{ track.end }}
                </div>
                <pre>{{ $t("workshop") }}</pre>
                <p v-if="track.sponsor == 'Trendyol'">
                  Sponsor:
                  <img
                    src="/assets/img/sponsors/trendyoltech.png"
                    style="max-width: 100px; max-height: 25px"
                  />
                </p>
                <p v-if="track.sponsor == 'Bestcloudfor.me'">
                  Sponsor:
                  <img
                    src="/assets/img/sponsors/bestcloudforme.png"
                    style="max-width: 100px; max-height: 25px"
                  />
                </p>
                <p v-if="track.sponsor == 'Modanisa'">
                  Sponsor:
                  <img
                    src="/assets/img/sponsors/modanisa.png"
                    style="max-width: 100px; max-height: 25px"
                  />
                </p>
                <p class="title">{{ track.title }}</p>
                <div class="author">
                  <img :src="track.avatar" alt="avatar" class="avatar" />
                  {{ track.speakerName }}
                </div>
                <p><br>{{ track.desc[[$i18n.locale]] }}</p>
                <a
                  class="btn btn-custom"
                  target="_blank"
                  v-show="track.public"
                  :href="track.url"
                  ><img
                    src="/assets/img/youtube.png"
                    style="width: 30px; margin-right: 10px"
                  />
                  {{ $t("live") }}</a
                >
                <a
                  class="btn btn-custom"
                  target="_blank"
                  v-show="!track.public"
                  :href="track.url"
                >
                  {{ $t("apply") }}</a
                >
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
                <div class="timer mt-5">19:30 - {{ $t("finish") }}</div>
              </div>
            </div>
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
      live: false,
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

      workshops: [
        {
          start: "11:00",
          end: "12:30",
          title: "Go ile Ölçeklenebilir Web Uygulamaları",
          speakerName: "Hüseyin Aküzüm",
          avatar:
            "https://media.kommunity.com/live/goturkiye/events/gophercon-turkey-1c8eab1d/speakers/huseyin-akuzum_live_61a5e29b0344b.jpeg",
          sponsor: "Trendyol",
          public: false,
          url: "https://forms.gle/1JpvHyAGf3B3WgGG7",
          desc: {
            en: "",
            tr: "",
          },
        },
        {
          start: "12:45",
          end: "14:15",
          title: "Consumer Driven Contract  Using Pact in Go",
          speakerName: "Abdulsamet İleri",
          avatar:
            "https://media.kommunity.com/live/goturkiye/events/gophercon-turkey-1c8eab1d/speakers/abdulsamet-ileri_live_61b2f37e78623.jpeg",
          sponsor: "Modanisa",
          public: false,
          url: "https://bit.ly/3INYviV",
          desc: {
            en: "Do you want to test all of your services in a way that is faster and more reliable than end-to-end testing? Do you want to find out before you deploy whether or not your applications and services will work together? By using Pact framework, Consumer Driven Contract (CDC) Testing offers rapid and solid answer to overcome the problem of slow integration testing of large and distributed systems. In this workshop, we will look over the implementation of these ever getting more promising concepts by utilizing the Go programming language. You will have the power of managing continuously evolving your codebases knowing that Pact will guarantee contracts and specifications are met.  Apply with the button below.",
            tr: "Bu atölye Mikroservis mimarisinde çok sayıda kullanılan (provider) ve kullanıcı (consumer) servislerinin kontrat yapısı ile değişikliklerde olası sorunların Consumer Driven Contract testleri ile hızlı bir şekilde farkına varılması hakkında olacak. Kısıtlı sayıda katılıma açık bu etkinlik için aşağıdaki başvur butonuna tıklayabilirsiniz.",
          },
        },
        {
          start: "14:30",
          end: "16:00",
          title: "Csv bir dosyayı MongoDB Kaydetme",
          speakerName: "Bora Kaşmer",
          avatar:
            "https://media.kommunity.com/live/goturkiye/events/gophercon-turkey-1c8eab1d/speakers/bora-kasmer_live_619b633797c33.png",
          sponsor: "",
          public: true,
          url: "https://www.youtube.com/watch?v=sg1rWz6v-kE",
          desc: {
            en: "",
            tr: "",
          },
        },
        {
          start: "16:15",
          end: "17:45",
          title: "How to Cache With Sidecar Pattern",
          speakerName: "Ahmet Avcı & Kenan Faruk Çakır",
          avatar:
            "https://media.kommunity.com/live/goturkiye/events/gophercon-turkey-1c8eab1d/speakers/kenan-faruk-cakir_live_61a5e2f59346f.jpg",
          sponsor: "Trendyol",
          public: false,
          url: "https://forms.gle/3vv8r2rccyBKduqx9",
          desc: {
            en: "",
            tr: "",
          },
        },
        {
          start: "18:00",
          end: "19:30",
          title: "Run your Go App on AWS Lambda",
          speakerName: "Harun Demirci & Engincan Höke & Gökhan Nihal",
          avatar:
            "https://media.kommunity.com/live/goturkiye/events/gophercon-turkey-1c8eab1d/speakers/harun-demirci_live_61b76b83121de.jpeg",
          sponsor: "Bestcloudfor.me",
          public: false,
          url: "https://forms.gle/kNUjJ5FBrcNqMT4fA",
          desc: {
            en: "",
            tr: "",
          },
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
          about: {
            en: "Our purpose is to create the greatest positive impact in our country and ecosystem by enabling commerce, empowered by technology!<br><br>We are a Tech company - Technology is the driver, e-commerce is the outcome. We were established in 2010 to provide a seamless e-commerce experience to our customers and SMEs. In ten years, we became the largest e-commerce company in Turkey, as well as one of the leading global platforms. Trendyol is the 1st Turkish company to achieve the decacorn status and the most valuable private internet company in the EMEA region.<br><br>We will continue to grow with Trendyol Tech; one of the leading R&D centers, our last-mile delivery solution (Trendyol Express), instant grocery and food delivery through its own courier network (Trendyol Go), digital wallet, consumer-to-consumer channel (Dolap) and many other services. We are scaling fast and profitably, expanding into international markets.<br><br>Our culture is at the core of everything we do. Focused on results, keeping our customers first, we always work for better and always test, iterate and improve. We learn from our mistakes, direct and open feedback is at the core of our culture. If you want to learn, grow and deliver; are result-oriented, love teamwork, appreciate open communication, learning and iteration, and make decisions with data, Come, join our tribe!",
            tr: "Our purpose is to create the greatest positive impact in our country and ecosystem by enabling commerce, empowered by technology!<br><br>We are a Tech company - Technology is the driver, e-commerce is the outcome. We were established in 2010 to provide a seamless e-commerce experience to our customers and SMEs. In ten years, we became the largest e-commerce company in Turkey, as well as one of the leading global platforms. Trendyol is the 1st Turkish company to achieve the decacorn status and the most valuable private internet company in the EMEA region.<br><br>We will continue to grow with Trendyol Tech; one of the leading R&D centers, our last-mile delivery solution (Trendyol Express), instant grocery and food delivery through its own courier network (Trendyol Go), digital wallet, consumer-to-consumer channel (Dolap) and many other services. We are scaling fast and profitably, expanding into international markets.<br><br>Our culture is at the core of everything we do. Focused on results, keeping our customers first, we always work for better and always test, iterate and improve. We learn from our mistakes, direct and open feedback is at the core of our culture. If you want to learn, grow and deliver; are result-oriented, love teamwork, appreciate open communication, learning and iteration, and make decisions with data, Come, join our tribe!",
          },
          jobs: [
            {
              tr: {
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
              en: {
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
          about: {
            en: "Advance your cloud, DevOps, SysOps and continuous delivery capabilities for increased automation and efficiency.",
            tr: "Advance your cloud, DevOps, SysOps and continuous delivery capabilities for increased automation and efficiency.",
          },
          jobs: [],
        },
        modanisa: {
          name: "Modanisa",
          title: "Modanisa",
          type: "platinum",
          logo: "/assets/img/sponsors/modanisa.png",
          url: "https://bit.ly/3oPZnfc",
          linkedin: "https://bit.ly/3GLqo9N",
          twitter: "https://bit.ly/3ETV2ND",
          youtube: "https://www.youtube.com/channel/UCuEGkLQk-sUGE_CO78bB1Ig",
          discord: "https://discord.gg/tHZxfquYdq",
          about: {
            en: "Modanisa.com launched on Mother’s Day, 2011. We were the first Turkish fashion platform to deliver online clothes shopping to our target audience in such variety. Born in Istanbul, we now have customers in 140 countries. We offer contents in 6 languages: Turkish, Arabic, English, French, German and Bahasa. We speak our customers’ language, we recognize their needs, and we know their preferences. Each month, we reach 30 million visitors from all over the world via our app and desktop platforms. We sell over 1000 brands and 100 thousand products, shipping thousands of packages a day to five continents. We employ confident and youthful staff from different nationalities and cultures whose average age is 28. As Turkey’s first international online shopping site platform and e-export champion, we are proud to introduce small producers and designers to the world. We may be growing fast, but we still adhere to our start-up ethos.",
            tr: 'Modanisa.com, 2011 yılının Anneler Günü’nde açılışını yaptı. Doğum yerimiz İstanbul ve 140 ülkeden müşterilerimiz var. Yayınlarımızı Türkçe, Arapça, İngilizce, Fransızca, Almanca ve Bahasa olmak üzere 6 dilde gerçekleştiriyoruz. Dünyanın 5 kıtasına her gün binlerce kargo gönderiyoruz. Her ay dünyanın dört bir yanından "muhafazakar" giyim tarzını benimsemiş 30 milyon ziyaretçiye app, mobil ve desktop platformlarından ulaşıyoruz. Onların dilini konuşuyor, ihtiyaçlarını tanıyor, tercihlerini biliyoruz. Şimdilik satışını yaptığımız marka sayısı 1000, ürün çeşitliliğimiz 100 bin. Farklı milliyet ve kültürlerden, yaş ortalaması 28 olan genç ve atak bir insan kaynağımız var.Bugün, ülkemizin ilk uluslararası online alışveriş sitesi ve e-ihracat şampiyonu olarak, Türkiye\'nin hazır giyimdeki gücünü dünyayla buluşturmanın gururunu yaşıyoruz. Müşterilerimizin sevgisi, güveni ve yakın ilgisiyle büyümeye devam ediyoruz; büyürken de start up ruhumuzu koruyoruz.',
          },
          jobs: [
            {
              tr: {
                title: "Full Stack Developer",
                img: "/assets/img/sponsors/modanisa-job-2.jpg",
                url: "https://bit.ly/3yoD0At",
                desc: "Teknoloji ekibimize, büyük ölçekli dağıtık sistemleri mikro-servis ve mikro-önyüz mimarilerini kullanarak gerçekleştirecek Full Stack Yazılım Geliştirici olarak aramıza katılmak için bu fırsatı kaçırma.<br><br>Hiyerarşik olmayan bir ortamda %100 remote ve otonom bir ekibe katılarak dinamik, heyecan veren, yenilikçi, sürekli büyüyen ve gelişen ürün ve projelerde aktif rol almak isteyen meraklı bir teknoloji uzmanı isen veya olmak istiyorsan bizim aradığımız kişi sen olabilirsin.",
                items: [
                  "Modern programlama dilleri ve önyüz teknolojilerinde tecrübe sahibi isen, (tercihen Golang, Vuejs ve/veya Flutter)",
                  "Test-yönelimli yazılım geliştirme (TDD) ve kabul-testi-yönelimli yazılım geliştirme (A-TDD) kullanarak yüksek kaliteli ve iyi test edilmiş yazılım geliştirmeyi benimsemişsen",
                  "Bilgisayar bilimleri kavramlarına güçlü bir aşinalığın varsa ve kullanarak bilgi ve tecrübe sahibi olmuşsan (algoritma tasarımı ve karmaşıklığı, eşzamanlı çalışan yazılım, çok görevli ve kaynak paylaşımlı yazılımlar)",
                  "Farklı yazılım geliştirme metodolojileri ve paradigmaları hakkında bilgi sahibi isen (Nesne Yönelimli Programlama, Fonksiyonel Programlama, Yalın Kod, Tasarım Şekilleri)",
                  "Dağıtık mimariler konusunda bilgi sahibi isen",
                ],
              },
              en: {
                title: "Full Stack Developer",
                img: "/assets/img/sponsors/modanisa-job-2.jpg",
                url: "https://bit.ly/3yoD0At",
                desc: "We are looking for new talents to join our Technology team as a Full Stack Developer for creating large-scale distributed systems out of micro-services and micro-frontend.<br><br>Are you a technology enthusiast and looking for a new challenge and likes to work within a dynamic, exciting, innovative, scaling up working environment by joining a highly autonomous team in a non-hierarchical environment. You might be the one for us.",
                items: [
                  "Experienced in modern languages and frontend technologies, preferably in Golang, Vuejs and/or Flutter",
                  "You can skillfully write high-quality, well-tested code using test-driven design (TDD)  and acceptance test-driven design (A-TDD) using refactoring continuously",
                  "Strong computer science skills (algorithm design/complexity, concurrency, multi-tasking, resource sharing)",
                  "Knowledge of different software development methodologies and paradigms (OOP, FP, Clean Code, Design Patterns)",
                  "Understanding distributed systems",
                ],
              },
            },
          ],
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
        this.workshops = _.filter(
          this.workshops,
          (s) => s.sponsor == this.company.name
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

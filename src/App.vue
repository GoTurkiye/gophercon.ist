<template>
  <div id="app">
    <div class="mobile-menu">
      <ul class="menu">
        <li>
          <a href="#about">{{ $t('About') }}</a>
        </li>
        <li>
          <a href="#speakers">{{ $t('Speakers') }}</a>
        </li>
        <li>
          <a href="#schedule">{{ $t('Schedule') }}</a>
        </li>
        <li>
          <a href="#sponsors">{{ $t('Sponsors') }}</a>
        </li>
        <li>
          <a href="#ticket" class="button">{{ $t('Tickets') }}</a>
        </li>
      </ul>
      <a href="javascript:" class="close-menu">x</a>
    </div>

    <div class="mobile-nav">
      <a href="javascript:" class="menu-toggle">
        <img src="/assets/img/open-menu.svg" alt="open mobile menu" />
      </a>
      <div class="language-wrapper">
        <a href="javascript:" class="language-button" @click="showLanguages = !showLanguages">
          {{ this.$i18n.locale }}
        </a>
        <ul class="language-picker" v-show="showLanguages">
          <li v-if="this.$i18n.locale != 'tr'">
            <a href="/tr" class="language-button">TR</a>
          </li>
          <li v-if="this.$i18n.locale != 'en'">
            <a href="/en" class="language-button">EN</a>
          </li>
        </ul>
      </div>
    </div>

    <section id="slider" class="slider">
      <img class="sliderbg" src="/assets/img/slider.png" alt="slider" />
      <img class="sliderbgmobile" src="/assets/img/slider.png" alt="slider" />

      <div class="header-absolute">
        <div class="container">
          <header>
            <a href="#" class="logo">
              <img src="/assets/img/gophercon.png" alt="logo" />
            </a>
            <ul class="menu">
              <li class="language-wrapper">
                <a href="javascript:" class="button language-button" @click="showLanguages = !showLanguages">
                  {{ this.$i18n.locale }}
                </a>
                <ul class="language-picker" v-show="showLanguages">
                  <li v-if="this.$i18n.locale != 'tr'">
                    <a href="/tr" class="button language-button">TR</a>
                  </li>
                  <li v-if="this.$i18n.locale != 'en'">
                    <a href="/en" class="button language-button">EN</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:" class="button menu-toggle">
                  <img src="/assets/img/open-menu-white.svg" alt="open mobile menu" />
                </a>
              </li>
            </ul>
          </header>
        </div>
      </div>
      <div class="announcement-aboslute">
        <h1>{{ $t('header_title') }}</h1>
        <p>{{ $t('header_slogan') }}</p>
        <div class="buttons">
          <a class="btn btn-custom" href="#ticket">{{ $t('_register') }}</a>
        </div>
      </div>
    </section>
    <section class="about" id="about">
      <div class="container">
        <div class="about-flex">
          <img src="/assets/img/gopher-hi.png" alt="gopher" class="gopher" />
          <h2 class="title">{{ $t('ABOUT CONFERENCE') }}</h2>
          <div v-html="$t('event_details')"></div>
        </div>
      </div>
    </section>
    <section class="speakers" id="speakers">
      <h2 class="title">{{ $t('SPEAKERS') }}</h2>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 col-lg-3">
            <div class="profile">
              <img src="assets/img/speakers/teiva-harsanyi.jpg" alt="avatar" class="avatar" />
              <p class="name">Teiva Harsanyi</p>
              <p class="position">Software Engineer at Beat</p>
              <ul class="social">
                <li>
                  <a target="_blank" href="https://twitter.com/teivah">
                    <img src="assets/img/twitter.svg" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/teivah">
                    <img src="assets/img/github.svg" alt="github" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.linkedin.com/in/teiva-harsanyi/">
                    <img src="assets/img/linkedin.svg" alt="linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-3">
            <div class="profile">
              <img src="assets/img/speakers/jaana-dogan.jpg" alt="avatar" class="avatar" />
              <p class="name">Jaana Dogan</p>
              <p class="position">Staff Engineer at Google</p>
              <ul class="social">
                <li>
                  <a target="_blank" href="https://twitter.com/rakyll">
                    <img src="assets/img/twitter.svg" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/rakyll">
                    <img src="assets/img/github.svg" alt="github" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.linkedin.com/in/jaana-dogan-9079ba1aa/">
                    <img src="assets/img/linkedin.svg" alt="linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-3">
            <div class="profile">
              <img src="assets/img/speakers/dave-cheney.jpg" alt="avatar" class="avatar" />
              <p class="name">Dave Cheney</p>
              <p class="position">Project member of Go</p>
              <ul class="social">
                <li>
                  <a target="_blank" href="https://twitter.com/davecheney">
                    <img src="assets/img/twitter.svg" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/davecheney">
                    <img src="assets/img/github.svg" alt="github" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-3">
            <div class="profile">
              <img src="assets/img/speakers/ibrahim-serdar-acikgoz.jpg" alt="avatar" class="avatar" />
              <p class="name">Ibrahim Serdar Açıkgöz</p>
              <p class="position">Software Engineer at Mattermost</p>
              <ul class="social">
                <li>
                  <a target="_blank" href="https://twitter.com/isacikgoz">
                    <img src="assets/img/twitter.svg" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/isacikgoz">
                    <img src="assets/img/github.svg" alt="github" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.linkedin.com/in/isacikgoz/">
                    <img src="assets/img/linkedin.svg" alt="linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-3">
            <div class="profile">
              <img src="assets/img/speakers/talia-nassi.png" alt="avatar" class="avatar" />
              <p class="name">Talia Nassi</p>
              <p class="position">Developer Advocate at Split.io</p>
              <ul class="social">
                <li>
                  <a target="_blank" href="https://twitter.com/talia_nassi">
                    <img src="assets/img/twitter.svg" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.linkedin.com/in/talianassi/">
                    <img src="assets/img/linkedin.svg" alt="linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-3">
            <div class="profile">
              <img src="assets/img/speakers/oguzhan-yilmaz.jpeg" alt="avatar" class="avatar" />
              <p class="name">Oğuzhan Yılmaz</p>
              <p class="position">CTO at Masomo</p>
              <ul class="social">
                <li>
                  <a target="_blank" href="https://twitter.com/c1982">
                    <img src="assets/img/twitter.svg" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/c1982">
                    <img src="assets/img/github.svg" alt="github" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://tr.linkedin.com/in/oguzhanyilmaz">
                    <img src="assets/img/linkedin.svg" alt="linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-3">
            <div class="profile">
              <img src="assets/img/speakers/fahri-yardimci.jpg" alt="avatar" class="avatar" />
              <p class="name">Fahri Yardımcı</p>
              <p class="position">Site Reliability Engineer at Atlassian</p>
              <ul class="social">
                <li>
                  <a target="_blank" href="https://twitter.com/FahriYardimci">
                    <img src="assets/img/twitter.svg" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/ffahri">
                    <img src="assets/img/github.svg" alt="github" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.linkedin.com/in/fahriyardimci/">
                    <img src="assets/img/linkedin.svg" alt="linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-3">
            <div class="profile">
              <img src="assets/img/speakers/erhan-yakut.jpeg" alt="avatar" class="avatar" />
              <p class="name">Erhan Yakut</p>
              <p class="position">Team Lead at ICS Defense</p>
              <ul class="social">
                <li>
                  <a target="_blank" href="https://twitter.com/yakuter">
                    <img src="assets/img/twitter.svg" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/yakuter">
                    <img src="assets/img/github.svg" alt="github" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.linkedin.com/in/erhan-yakut/">
                    <img src="assets/img/linkedin.svg" alt="linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-3">
            <div class="profile">
              <img src="assets/img/speakers/amit-mishra.jpg" alt="avatar" class="avatar" />
              <p class="name">Amit Mishra</p>
              <p class="position">Lead Software Architect at Fox</p>
              <ul class="social">
                <li>
                  <a target="_blank" href="https://www.linkedin.com/in/amit-mishra-0838a87/">
                    <img src="assets/img/linkedin.svg" alt="linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-3">
            <div class="profile">
              <img src="assets/img/speakers/pamir-erdem.jpg" alt="avatar" class="avatar" />
              <p class="name">Pamir Erdem</p>
              <p class="position">Azure Specialist at Microsoft</p>
              <ul class="social">
                <li>
                  <a target="_blank" href="https://github.com/Pamir">
                    <img src="assets/img/github.svg" alt="github" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.linkedin.com/in/pamirerdem/">
                    <img src="assets/img/linkedin.svg" alt="linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-3">
            <div class="profile">
              <img src="assets/img/speakers/ekta-garg.jpg" alt="avatar" class="avatar" />
              <p class="name">Ekta Garg</p>
              <p class="position">Software Engineer at Grofers</p>
              <ul class="social">
                <li>
                  <a target="_blank" href="https://twitter.com/_ektagarg">
                    <img src="assets/img/twitter.svg" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/ektagarg">
                    <img src="assets/img/github.svg" alt="github" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-3">
            <div class="profile">
              <img src="assets/img/speakers/cem-sancak.jpg" alt="avatar" class="avatar" />
              <p class="name">Cem Sancak</p>
              <p class="position">Big Data Engineer at Insider</p>
              <ul class="social">
                <li>
                  <a target="_blank" href="https://www.linkedin.com/in/cem-sancak-53294697/">
                    <img src="assets/img/linkedin.svg" alt="linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-3">
            <div class="profile">
              <img src="assets/img/speakers/endre-simo.jpg" alt="avatar" class="avatar" />
              <p class="name">Endre Simo</p>
              <p class="position">Sr. Software Developer at Reea</p>
              <ul class="social">
                <li>
                  <a target="_blank" href="https://twitter.com/simo_endre">
                    <img src="assets/img/twitter.svg" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/esimov">
                    <img src="assets/img/github.svg" alt="github" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/endre-simo/?originalSubdomain=ro"
                  >
                    <img src="assets/img/linkedin.svg" alt="linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-3">
            <div class="profile">
              <img src="assets/img/speakers/kemal-akkoyun.jpg" alt="avatar" class="avatar" />
              <p class="name">Kemal Akkoyun</p>
              <p class="position">SRE at RedHat</p>
              <ul class="social">
                <li>
                  <a target="_blank" href="https://twitter.com/kkakkoyun">
                    <img src="assets/img/twitter.svg" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/kakkoyun">
                    <img src="assets/img/github.svg" alt="github" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-3">
            <div class="profile">
              <img src="assets/img/speakers/huseyin-guner.jpeg" alt="avatar" class="avatar" />
              <p class="name">Hüseyin Güner</p>
              <p class="position">Software Engineer at Trendyol</p>
              <ul class="social">
                <li>
                  <a target="_blank" href="https://twitter.com/husguner">
                    <img src="assets/img/twitter.svg" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/gunerhuseyin">
                    <img src="assets/img/github.svg" alt="github" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/huseyin-guner/?originalSubdomain=tr"
                  >
                    <img src="assets/img/linkedin.svg" alt="linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-3">
            <div class="profile">
              <img src="assets/img/speakers/oguz-yarimtepe.jpg" alt="avatar" class="avatar" />
              <p class="name">Oğuz Yarımtepe</p>
              <p class="position">Site Reliability Engineer Team Lead, GittiGidiyor</p>
              <ul class="social">
                <li>
                  <a target="_blank" href="https://github.com/oguzy">
                    <img src="assets/img/github.svg" alt="github" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/oguzyarimtepe/"
                  >
                    <img src="assets/img/linkedin.svg" alt="linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="schedule" id="schedule">
      <img src="/assets/img/gopher-02.png" alt="gopher" class="gopher hide-mobile" />
      <h2 class="title">{{ $t('SCHEDULE') }}</h2>
      <div class="container">
        <div class="feed-out">
          <div class="feed">
            <div class="line-center">
              <div class="track-title flex1 hide-mobile">
                <p>{{ $t('Sponsor Track 1') }}</p>
                <img class="arrow" src="/assets/img/arrow.svg" alt="arrow" />
              </div>
              <div class="flex1 flex-center">
                <div class="timer">11:00 - {{ $t('Start') }}</div>
              </div>
              <div class="track-title flex1 hide-mobile">
                <p>{{ $t('Sponsor Track 2') }}</p>
                <img class="arrow" src="/assets/img/arrow.svg" alt="arrow" />
              </div>
            </div>
            <div class="line-center">
              <Card
                position="left"
                track="Sponsor Track 1"
                time="11:00 - 12:00"
                avatar="talia-nassi.png"
                title="Testing in Production"
                author="Talia Nassi"
                desc="How do you know your feature is working perfectly in production? If something breaks in production, how will you know? Will you wait for a user to report it to you? What do you do when your staging test results do not reflect current production behavior? In order to test proactively as opposed to reactively, try testing in production! You will have an increased accuracy of test results, your tests will run faster due to the elimination of bad data, and you will have higher confidence before releases. This can be accomplished through feature flagging, canary releases, setting up a proper CI/CD pipeline, and data cleanup. You will leave this talk with strategies to mitigate risk, to better your understanding of the steps to get there, and to shift your company’s testing culture, so you can provide the best possible experience to your users. At the end of the day, we don't care if your features work in staging, we care if they work in production."
              />
              <Card
                position="right"
                track="Sponsor Track 2"
                time="11:00 - 12:00"
                avatar="cem-sancak.jpg"
                title="Canlıdan Go Kesitleri"
                author="Cem Sancak"
                desc="Go ile geliştirmeyi keyifli kılan ana mekaniklerden ikisi, eş zamanlı işleme (concurrency) becerileri ve kanallar (channels). Bu konuşmamda üstünde çalıştığım canlı sistemlerde sık sık karşıma çıkan kullanım senaryolarını ve örnek kodları paylaşıyor olacağım. Bana ayrılan zamanın sonunda, dinleyenlere eş zamanlı programlama ile düşünebilmenin servis tasarımlarını nasıl değiştirebileceğini aktarabilmeyi ve Go'yu başarılı kılan parçalar hakkında biraz daha derin bilgi sunmayı hedefliyorum."
              />
            </div>
            <div class="line-center">
              <Card
                position="left"
                track="Sponsor Track 1"
                time="12:00 - 13:00"
                avatar="kemal-akkoyun.jpg"
                title="Building Observable Go Services"
                author="Kemal Akkoyun"
                desc="In modern days, we run our applications as loosely coupled micro-services on distributed, elastic infrastructure as (mostly) stateless workloads. Under these circumstances, observability has become a key attribute to understand how our applications run and behave in action, in order to provide highly available and resilient service. There exist several observability signals, such as “log”, “metric”, “tracing” and “profiling” that can be collected from a running service, which we can also call pillars of observability. Using these signals, we can create real-time, actionable alerts, create panels where we can monitor applications closely, and perform in-depth analysis to find the root of the systems’ failures. Within the Go and CNCF ecosystem, there are a variety of tools that can collect and make these observable signals useful. During this talk, Kemal will first introduce the tools that can be embedded in the services to make critical services observable, and share the patterns that will enable them to be used efficiently in the applications and services. Moreover,  he will demonstrate how to use these collected signals in real-life scenarios, using tools within the CNCF ecosystem (Loki, Prometheus, OpenTelemetry, Jaeger, Conprof). He also aims to share the methods that are used to build and run applications running under heavy-traffic, and to understand the origin of the problems encountered in running systems."
              />
              <Card
                position="right"
                track="Sponsor Track 2"
                time="12:00 - 13:00"
                avatar="ibrahim-serdar-acikgoz.jpg"
                title="Go Struct Tag'lerini kullanmak"
                author="Ibrahim Serdar Açıkgöz"
                desc="Go'da çogu zaman verilerin JSON, YAML biçimlerine serileştirilmede bize yardımcı olmasi için veri tiplerine etiketler ekliyoruz. Peki bunun nasıl çalıştıgını hiç düşündünüz mü? Ya da farklı amaçlarda kullanma fırsatınız oldu mu? Gelin hep beraber bu özelligin nasıl çalıştıgına bir bakalım ve kendi amaçlarımız için neler yapılabilecegini tartışalım." />
            </div>
            <div class="line-center">
              <Card
                position="left"
                track="Sponsor Track 1"
                time="13:00 - 14:00"
                avatar="teiva-harsanyi.jpg"
                title="Mechanical Sympathy in Go"
                author="Teiva Harsanyi"
                desc="“You don’t have to be an engineer to be a racing driver, but you do have to have Mechanical Sympathy” - Jackie Steward, 3-time F1 world champion. Applying mechanical sympathy to software means that understanding how the hardware is working can help us in designing more efficient algorithms, data structures, etc. In this talk, we will see concrete examples applied to Go where having a mechanical sympathy can lead in application performance optimization."
              />
              <Card
                position="right"
                track="Sponsor Track 2"
                time="13:00 - 14:00"
                avatar="oguzhan-yilmaz.jpeg"
                title="Go Performans Rehberi"
                author="Oğuzhan Yılmaz"
                desc="Go programlama dili her ne kadar performans odaklı olsa da yazılım geliştirirken vereceğimiz kararlar bunu çok etkiliyor. Bazen küçük bir string birleştirmesi veya standard bir for loop'u cloud ortamlarında bile performans problemlerine yol açabiliyor. Bu konuşmada Go ile yazılım geliştirirken günlük hayatta kullandığımız tip, fonksiyon ve tasarımları uygularken nasıl daha performanslı hale getirebileceğimizi ve performans ile alakalı Go'nun sunduğu native fonksiyonları ve hileleri keşfedeceğiz. Bu rehber sayesinde küçük ip uçları ile nasıl büyük farklar yaratılabilir hep beraber göreceğiz."
              />
            </div>
            <div class="line-center">
              <Card
                position="left"
                track="Sponsor Track 1"
                time="14:00 - 15:00"
                avatar="fahri-yardimci.jpg"
                title="Distributed Tracing on Go using OpenTelemetry"
                author="Fahri Yardımcı"
                desc="In the microservices era, monitoring applications become harder due to distributed and asynchronous data flow, therefore quickly identifying errors and performance problems is crucial. Tracing will help identify which part of the code is problematic, or causing latency. With the multiple microservices, Distributed tracing is used for identifying the applications and functions which cause errors. OpenTelemetry is a CNCF (Cloud Native Computing Foundation) sandbox project and aims to production-ready in the second half of 2020. In this talk, I'll talk about what is Tracing, Spans, Injecting/Extracting traces via HTTP, and Tracing models with the OpenTelemetry implementations."
              />
              <Card
                position="right"
                track="Sponsor Track 2"
                time="14:00 - 15:00"
                avatar="erhan-yakut.jpeg"
                title="Go Projelerinde Clean Code Mimarisinin Uygulanması"
                author="Erhan Yakut"
                desc="Geçmişten günümüze yazılım alanında birçok şey değişti; programlama dilleri, frameworkler, sistemler... Bunların esasında birer araç olduğunu düşünürsek aslında değişmeleri gayet normal. Buna karşılık Clean Code prensipleri gibi tam anlamıyla değişmeyen şeyler de var. Sunumumda Clean Code prensiplerinin Go projelerinde uygulanmasını anlatacağım."
              />
            </div>
            <div class="line-center">
              <Card
                position="left"
                track="Sponsor Track 1"
                time="15:00 - 16:00"
                avatar="amit-mishra.jpg"
                title="How Go enabled us to build a platform to live stream SuperBowl 2020 to millions of concurrent users"
                author="Amit Mishra"
                desc="I am part of Architect team which is responsible for building platform to live stream the contents at Fox. As I first time speaker , I would like to share our story and challenges we face everyday while streaming contents. I would like to share how Go helped us building a playback platform which can handle these challenges and serve magical moment to millions of concurrent users without any issue."
              />
              <Card
                position="right"
                track="Sponsor Track 2"
                time="15:00 - 16:00"
                avatar="pamir-erdem.jpg"
                avatarSecond="oguz-yarimtepe.jpg"
                title="Developing Custom Kubernetes Schedulers"
                author="Pamir Erdem, Oğuz Yarımtepe"
                desc="Without best practices; deploying an application on kubernetes , by no means make it production-grade. Sometime we need to scale our application depending on customers needs. In this talk we are going to develop a custom kubernetes scheduler for high available multi zonal scheduler."
              />
            </div>
            <div class="line-center">
              <Card
                position="left"
                track="Sponsor Track 1"
                time="16:00 - 17:00"
                avatar="ekta-garg.jpg"
                title="Running Go in browsers using WASM"
                author="Ekta Garg"
                desc="Web Assembly AKA WASM is a new way of running high-level languages into the browsers. Cases where you need to do complex computations like gaming, 3d rendering, AI stuff, etc in browser using any language of your choice (which has support for WASM). If there are programs, algorithms written in GO, you can simply port them to the browser using WASM. It's a concept, not a language which you would require to code in, it's a binary format that gets ported into the browser directly. It gives a great performance, portability, no more deployment dependency, offers a variety of languages to code in best suitable to the nature of your problem."
              />
              <Card
                position="right"
                track="Sponsor Track 2"
                time="16:00 - 17:00"
                avatar="jaana-dogan.jpg"
                title="Go Derleyecisini Kendisinden Dinlemek"
                author="Jaana Dogan"
                desc="Çoğunluğun sandığının aksine, Go derleyicisini anlamak için derleyiciler konusunda uzman olmaya gerek yoktur. Go araçları kendilerini anlatabilmek ve debug edilebilmelerini sağlamak için birden fazla seçenek sunmaktadır. Go araçlarını ve derleyicisini daha yakından tanıyarak derleyici optimizasyonlarını görebilir, kendi programlarınızı makine kodundan denetleyebilir, modern derleyicilerin nasıl çalıştığını öğrenebilir ve Go diline destek verebilirsiniz. Bu konuşmada hem Go kullanıcılarının hem de geliştiricilerinin günlük hayatlarına katkıda bulunacak birçok araçtan ve yöntemden bahsedeceğiz."
              />
            </div>
            <div class="line-center">
              <Card
                position="left"
                track="Sponsor Track 1"
                time="16:00 - 17:00"
                avatar="endre-simo.jpg"
                title="Face detection in Go and Webassembly"
                author="Endre Simo"
                desc="Year-by-year the Go language is evolving as it increases the projects and libraries built around it, even though the Go ecosystem is still well behind its competitors in terms of computer vision, machine learning, data analysis etc."
              />
              <div class="empty-card custom-card-right flex1 mt-5 hide-mobile"></div>
            </div>
            <div class="line-center">
              <Card
                position="left"
                track="Sponsor Track 1"
                time="17:00 - 18:00"
                avatar="dave-cheney.jpg"
                title="High performance JSON parsing"
                author="Dave Cheney"
                desc="This is a talk about the design strategies I employed to build a package that can tokenise JSON 8-10x faster than the standard library.In the talk I'll cover the high level design of the package. I'll show how design a API that avoids allocation and unnecessary copying (this is a major contributor to the performance of the library). Finally I'll touch on some of the optimisation decisions in the package and show how they work in sympathy with inlining and bounds check elimination."
              />
              <Card
                position="right"
                track="Sponsor Track 2"
                time="17:00 - 18:00"
                avatar="huseyin-guner.jpeg"
                title="Go ile 1.5M Throughput"
                author="Hüseyin Güner"
                desc="Konuşma genel olarak Trendyol'da Java-Go geçişi ile elde ettiğimiz kaynak kazanımı, yüksek scale ölçeği, yaşadığımız zorluklar, karşılaştığımız buglar, çözüm yöntemlerimiz, profiling ve Go ile alakalı deneyimlerin konu olacağı, Go dili ve internalları hakkında olacak."
              />
            </div>
            <div class="line-center">
              <div class="flex1 flex-center">
                <div class="timer mt-5">18:00 - Finish</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="ticket" id="ticket">
      <img src="/assets/img/gopher-07.png" alt="gopher" class="gopher hide-mobile" />
      <h2 class="title">{{ $t('TICKETS') }}</h2>
      <div class="container">
        <div class="tables">
          <div class="table mt-4">
            <img src="/assets/img/gopher-03.png" alt="gopher" class="gopher-free" />
            <div class="name">{{ $t('STANDARD') }}</div>
            <p class="price">{{ $t('Free') }}</p>
            <ul>
              <li v-html="$t('free_ticket_1')"></li>
            </ul>
            <a
              href="https://kommunity.com/goturkiye/events/gophercon-turkey-59b694b8/tickets"
              target="_blank"
              class="buy"
            >{{$t('REGISTER')}}</a>
          </div>
          <div class="table table-red">
            <img src="/assets/img/gopher-04.png" alt="gopher" class="gopher-support" />
            <div class="name">{{$t('EXCLUSIVE')}}</div>
            <p class="price">
              <small>TRY</small>49.99
            </p>
            <ul>
              <li v-html="$t('exclusive_ticket_1')"></li>
              <li v-html="$t('exclusive_ticket_2')"></li>
              <li v-html="$t('exclusive_ticket_3')"></li>
              <li v-html="$t('exclusive_ticket_4')"></li>
            </ul>
            <a
              href="https://kommunity.com/goturkiye/events/gophercon-turkey-59b694b8/tickets"
              target="_blank"
              class="buy buy-red"
            >{{$t('BUY NOW')}}</a>
          </div>
          <div class="table mt-4">
            <img src="/assets/img/gopher-05.png" alt="gopher" class="gopher-community" />
            <div class="name">{{$t('SPONSORSHIP')}}</div>
            <p class="price">
              <small>TRY</small>4000
            </p>
            <ul>
              <li v-html="$t('sponsorship_ticket_1')"></li>
              <li v-html="$t('sponsorship_ticket_2')"></li>
              <li v-html="$t('sponsorship_ticket_3')"></li>
              <li v-html="$t('sponsorship_ticket_4')"></li>
            </ul>
            <a
              href="https://kommunity.com/goturkiye/events/gophercon-turkey-59b694b8/tickets"
              target="_blank"
              class="buy"
            >{{$t('BUY NOW')}}</a>
          </div>
        </div>
      </div>
    </section>
    <section class="sponsors" id="sponsors">
      <img src="/assets/img/gopher-06.png" alt="gopher" class="gophers hide-mobile" />
      <h2 class="title">{{$t('SPONSORS')}}</h2>
      <div class="container">
        <div class="sponsor-list"><!-- owl-carousel owl-theme -->
          <div class="sponsor">
            <a href="https://itsmoneo.com" target="_blank">
              <img src="https://itsmoneo.com/assets/image/logo.svg" alt="sponsor" />
            </a>
          </div>
          <div class="sponsor">
            <a href="https://www.modanisa.com/" target="_blank">
              <img src="/assets/img/modanisa.png" alt="sponsor" />
            </a>
          </div>
          <div class="sponsor">
            <a href="https://www.lingaros.com/" target="_blank">
              <img src="/assets/img/linga.png" alt="sponsor" style="padding: 0 25px; max-height: 45px" />
            </a>
          </div>
          <div class="sponsor">
            <a href="https://useinsider.com/" target="_blank">
              <img src="/assets/img/insider.png" alt="sponsor" style="padding: 0 20px; max-height: 42px" />
            </a>
          </div>
        </div>
        <p class="info">
          {{$t('Would you like to be the part of this great event?')}}
          <br />
          <span v-html="$t('please_get_in_touch')"></span>
        </p>
      </div>
    </section>

    <footer>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4"></div>
          <div class="col-12 col-md-4">
            <ul class="footer-menu">
              <li>
                <a target="_blank" href="https://golang.org/conduct">{{$t('Code of Conduct')}}</a>
              </li>
              <li>
                <a
                  href="mailto:support@kommunity.com?Subject=GopherCon Contact"
                >{{$t('Contact Us')}}</a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-4">
            <ul class="footer-social-menu">
              <li>
                <a href="https://twitter.com/goturkiye" title="twitter" target="_blank">
                  <img src="/assets/img/twitter-white.svg" alt="twitter" />
                </a>
              </li>
              <li>
                <a href="https://kommunity.com/goturkiye" title="kommunity" target="_blank">
                  <img src="/assets/img/kommunity.svg" alt="kommunity" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
export default {
  name: "App",
  metaInfo() {
    return {
      title: this.$t("title"),
      titleTemplate: "%s",
      meta: [
        {
          name: "description",
          content: this.$t("meta_description"),
          vmid: "description"
        },
        {
          name: "title",
          content: this.$t("meta_title"),
          vmid: "title"
        },
        {
          property: "og:title",
          content: this.$t("og_title"),
          vmid: "og:title"
        },
        {
          property: "og:description",
          content: this.$t("og_description"),
          vmid: "og:description"
        },
        {
          property: "og:type",
          content: "article",
          vmid: "og:type"
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
          vmid: "twitter:card"
        },
        {
          property: "og:url",
          content: location.href,
          vmid: "og:url"
        },
        {
          property: "og:image",
          content: this.$t("og_image"),
          vmid: "og:image"
        }
      ]
    };
  },
  data() {
    return {
      showLanguages: false,
    }
  },
  mounted() {
    // let url = document.location.href
    // let indexOfSharp = url.indexOf('#')
    // let lang = url.substring(indexOfSharp + 1)
    //
    // this.$i18n.locale = lang

    let lang = this.$route.name;
    this.$i18n.locale = lang;
  },
  components: {
    Card
  }
};
</script>

<style>
</style>

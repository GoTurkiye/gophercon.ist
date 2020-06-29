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

    <a href="javascript:" class="menu-toggle">
      <img src="/assets/img/open-menu.svg" alt="open mobile menu" />
    </a>

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
              <p class="position">Staff Engineer, Google</p>
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
              <p class="position">GitHub</p>
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
              <p class="position">Lead Software Architect</p>
              <ul class="social">
                <li>
                  <a target="_blank" href="https://www.linkedin.com/in/amitkailashmishra/">
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
              <p class="position">Microsoft - Azure Specialist</p>
              <ul class="social">
                <li>
                  <a target="_blank" href="https://github.com/Pamir?tab=followers">
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
              <p class="position">Grofers & SDE</p>
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
              <p class="position">Senior Software Developer at @Reea</p>
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
              <p class="position">Senior Software Developer at @Reea</p>
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
              <p class="position">Software Developer</p>
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
                <div class="timer">10:00 - {{ $t('Start') }}</div>
              </div>
              <div class="track-title flex1 hide-mobile">
                <p>{{ $t('Sponsor Track 2') }}</p>
                <img class="arrow" src="/assets/img/arrow.svg" alt="arrow" />
              </div>
            </div>
            <div class="line-center">
              <div class="custom-card custom-card-left flex1 mt-5">
                <div class="timer timer-absolute">10:00 - 11:00</div>
                <pre>{{ $t('Sponsor Track 1') }}</pre>
                <p class="title">Mechanical Sympathy in Go</p>
                <p class="description">
                    <Detail
                    title="Mechanical Sympathy in Go"
                    author="Teiva Harsanyi"
                    desc="“You don’t have to be an engineer to be a racing driver, but you do have to have Mechanical Sympathy” - Jackie Steward, 3-time F1 world champion.
Applying mechanical sympathy to software means that understanding how the hardware is working can help us in designing more efficient algorithms, data structures, etc.
In this talk, we will see concrete examples applied to Go where having a mechanical sympathy can lead in application performance optimization."/>
                </p>
                <div class="author">
                  <img src="assets/img/speakers/teiva-harsanyi.jpg" alt="avatar" class="avatar" />
                  Teiva Harsanyi
                </div>
              </div>
              <div class="custom-card custom-card-right flex1 mt-5">
                <div class="timer timer-absolute">10:00 - 11:00</div>
                <pre>{{ $t('Sponsor Track 2') }}</pre>
                <p class="title">Go Derleyecisini Kendisinden Dinlemek</p>
                <p class="description">
                  <Detail
                    title="Go Derleyecisini Kendisinden Dinlemek"
                    author="Jaana Dogan"
                    desc="Çoğunluğun sandığının aksine, Go derleyicisini anlamak için derleyiciler üzerine uzman olmaya gerek bulunmamaktadır. Go araçları kendileri anlatabilmek ve debug edilebilmeleri için birden fazla seçenek sunmakta. Go araçlarını ve derleyicisini daha yakından tanıyarak derleyici optimizasyonlarını görebilir, kendi programlarınızı makine kodundan denetleyebilir, modern derleyicilerin nasıl çalışıtığını öğrenebilir ve Go diline destek verebilirsiniz. Bu konuşmada hem Go kullanıcılarının hem de geliştiricilerinin günlük hayatlarına katkıda bulunacak bir çok araçtan ve yöntemden bahsedeceğiz."
                  />
                </p>
                <div class="author">
                  <img src="assets/img/speakers/jaana-dogan.jpg" alt="avatar" class="avatar" />
                  Jaana Dogan
                </div>
              </div>
            </div>
            <div class="line-center">
              <div class="custom-card custom-card-left flex1 mt-5">
                <div class="timer timer-absolute">11:00 - 12:00</div>
                <pre>{{ $t('Sponsor Track 1') }}</pre>
                <p class="title">High performance JSON parsing</p>
                <Detail
                    title="High performance JSON parsing"
                    author="Dave Cheney"
                    desc="This is a talk about the design strategies I employed to build a package that can tokenise JSON 8-10x faster than the standard library.In the talk I'll cover the high level design of the package. I'll show how design a API that avoids allocation and unnecessary copying (this is a major contributor to the performance of the library). Finally I'll touch on some of the optimisation decisions in the package and show how they work in sympathy with inlining and bounds check elimination."
                  />
                <div class="author">
                  <img src="assets/img/speakers/dave-cheney.jpg" alt="avatar" class="avatar" />
                  Dave Cheney
                </div>
              </div>
              <div class="custom-card custom-card-right flex1 mt-5">
                <div class="timer timer-absolute">11:00 - 12:00</div>
                <pre>{{ $t('Sponsor Track 2') }}</pre>
                <p class="title">Exploiting Go Struct Tags</p>
                <Detail
                    title="Exploiting Go Struct Tags"
                    author="Ibrahim Serdar Açıkgöz"
                    desc="We all use Go struct tags especially when working with JSON, YAML, etc. But have you ever wondered how they work? Or, more interestingly how we can use it for different purposes? Let's dive into inner-mechanisms of struct tags and explore the possibilities of what can be done."
                  />                <div class="author">
                  <img
                    src="assets/img/speakers/ibrahim-serdar-acikgoz.jpg"
                    alt="avatar"
                    class="avatar"
                  />
                  Ibrahim Serdar Açıkgöz
                </div>
              </div>
            </div>
            <div class="line-center">
              <div class="custom-card custom-card-left flex1 mt-5">
                <div class="timer timer-absolute">12:00 - 13:00</div>
                <pre>{{ $t('Sponsor Track 1') }}</pre>
                <p class="title">Testing in Production</p>
                <Detail
                    title="Testing in Production"
                    author="Talia Nassi"
                    desc="How do you know your feature is working perfectly in production? If something breaks in production, how will you know? Will you wait for a user to report it to you? What do you do when your staging test results do not reflect current production behavior? In order to test proactively as opposed to reactively, try testing in production! You will have an increased accuracy of test results, your tests will run faster due to the elimination of bad data, and you will have higher confidence before releases. This can be accomplished through feature flagging, canary releases, setting up a proper CI/CD pipeline, and data cleanup. You will leave this talk with strategies to mitigate risk, to better your understanding of the steps to get there, and to shift your company’s testing culture, so you can provide the best possible experience to your users. At the end of the day, we don't care if your features work in staging, we care if they work in production."
                  /> 
                <div class="author">
                  <img src="assets/img/speakers/talia-nassi.png" alt="avatar" class="avatar" />
                  Talia Nassi
                </div>
              </div>
              <div class="custom-card custom-card-right flex1 mt-5">
                <div class="timer timer-absolute">12:00 - 13:00</div>
                <pre>{{ $t('Sponsor Track 2') }}</pre>
                <p class="title">Go Performans Rehberi</p>
                <Detail
                    title="Go Performans Rehberi"
                    author="Oğuzhan YILMAZ"
                    desc="Go programlama dili her ne kadar performans odaklı olsada yazılım geliştirirken vereceğimiz kararlar bunu çok etkiliyor. Bazen küçük bir string birleştirmesi veya standard bir for loop'u cloud ortamlarında bile performans problemlerine yol açabiliyor. Bu konuşmada go ile yazılım geliştirken günlük kullandığımız tip, fonksiyon ve tasarımları uygularken nasıl daha performanslı hale getirebiliriz, performans ile alakalı Go'nun sunduğu native fonksiyonları ve hileleri keşfedeceğiz. Bu rehber sayesinde küçük ip uçları ile nasıl büyük farklar yaratılabilir her beraber göreceğiz."
                  />
                <div class="author">
                  <img src="assets/img/speakers/oguzhan-yilmaz.jpeg" alt="avatar" class="avatar" />
                  Oğuzhan YILMAZ
                </div>
              </div>
            </div>
            <div class="line-center">
              <div class="custom-card custom-card-left flex1 mt-5">
                <div class="timer timer-absolute">13:00 - 14:00</div>
                <pre>{{ $t('Sponsor Track 1') }}</pre>
                <p class="title">Distributed Tracing on Golang using OpenTelemetry</p>
                <Detail
                    title="Distributed Tracing on Golang using OpenTelemetry"
                    author="Fahri Yardımcı"
                    desc="In the microservices era, monitoring applications become harder due to distributed and asynchronous data flow, therefore quickly identifying errors and performance problems is crucial. Tracing will help identify which part of the code is problematic, or causing latency. With the multiple microservices, Distributed tracing is used for identifying the applications and functions which cause errors. OpenTelemetry is a CNCF (Cloud Native Computing Foundation) sandbox project and aims to production-ready in the second half of 2020. In this talk, I'll talk about what is Tracing, Spans, Injecting/Extracting traces via HTTP, and Tracing models with the OpenTelemetry implementations."
                  />
                <div class="author">
                  <img src="assets/img/speakers/fahri-yardimci.jpg" alt="avatar" class="avatar" />
                  Fahri Yardımcı
                </div>
              </div>
              <div class="custom-card custom-card-right flex1 mt-5">
                <div class="timer timer-absolute">13:00 - 14:00</div>
                <pre>{{ $t('Sponsor Track 2') }}</pre>
                <p class="title">Go Projelerinde Clean Code Mimarisinin Uygulanması</p>
                <p class="description">
                  <Detail
                    title="Go Projelerinde Clean Code Mimarisinin Uygulanması"
                    author="Erhan Yakut"
                    desc="Geçmişten günümüze yazılım alanında birçok şey değişti; programlama dilleri, frameworkler, sistemler... Bunların esasında birer araç olduğunu düşünürsek aslında değişmeleri gayet normal. Buna karşılık Clean Code prensipleri gibi tam anlamıyla değişmeyen şeyler de var. Sunumumda Clean Code prensiplerinin Go projelerinde uygulanmasını anlatacağım."
                  />
                </p>
                <div class="author">
                  <img src="assets/img/speakers/erhan-yakut.jpeg" alt="avatar" class="avatar" />
                  Erhan Yakut
                </div>
              </div>
            </div>
            <div class="line-center">
              <div class="custom-card custom-card-left flex1 mt-5">
                <div class="timer timer-absolute">14:00 - 15:00</div>
                <pre>{{ $t('Sponsor Track 1') }}</pre>
                <p
                  class="title"
                >How goLang enabled us to build a platform to live stream SuperBowl 2020 to millions of concurrent users!</p>
                <Detail
                    title="How goLang enabled us to build a platform to live stream SuperBowl 2020 to millions of concurrent users!"
                    author="Amit Mishra"
                    desc="I am part of Architect team which is responsible for building platform to live stream the contents at Fox. As I first time speaker , I would like to share our story and challenges we face everyday while streaming contents. I would like to share how goLang helped us building a playback platform which can handle these challenges and serve magical moment to millions of concurrent users without any issue."
                  />
                <div class="author">
                  <img src="assets/img/speakers/amit-mishra.jpg" alt="avatar" class="avatar" />
                  Amit Mishra
                </div>
              </div>
              <div class="custom-card custom-card-right flex1 mt-5">
                <div class="timer timer-absolute">14:00 - 15:00</div>
                <pre>{{ $t('Sponsor Track 2') }}</pre>
                <p class="title">Developing Custom Kubernetes Schedulers</p>
                <Detail
                    title="Developing Custom Kubernetes Schedulers"
                    author="Pamir Erdem"
                    desc="Without best practices; deploying an application on kubernetes , by no means make it production-grade. Sometime we need to scale our application depending on customers needs. In this talk we are going to develop a custom kubernetes scheduler for high available multi zonal scheduler."
                  />
                <div class="author">
                  <img src="assets/img/speakers/pamir-erdem.jpg" alt="avatar" class="avatar" />
                  Pamir Erdem
                </div>
              </div>
            </div>
            <div class="line-center">
              <div class="custom-card custom-card-left flex1 mt-5">
                <div class="timer timer-absolute">15:00 - 16:00</div>
                <pre>{{ $t('Sponsor Track 1') }}</pre>
                <p class="title">Running Go in browsers using WASM</p>
                <Detail
                    title="Running Go in browsers using WASM"
                    author="Ekta Garg"
                    desc="Web Assembly AKA WASM is a new way of running high-level languages into the browsers. Cases where you need to do complex computations like gaming, 3d rendering, AI stuff, etc in browser using any language of your choice (which has support for WASM). If there are programs, algorithms written in GO, you can simply port them to the browser using WASM. It's a concept, not a language which you would require to code in, it's a binary format that gets ported into the browser directly. It gives a great performance, portability, no more deployment dependency, offers a variety of languages to code in best suitable to the nature of your problem."
                  />
                <div class="author">
                  <img src="assets/img/speakers/ekta-garg.jpg" alt="avatar" class="avatar" />
                  Ekta Garg
                </div>
              </div>
              <div class="custom-card custom-card-right flex1 mt-5">
                <div class="timer timer-absolute">15:00 - 16:00</div>
                <pre>{{ $t('Sponsor Track 2') }}</pre>
                <p class="title">Canlıdan Go Kesitleri</p>
                <Detail
                    title="Canlıdan Go Kesitleri"
                    author="Cem Sancak"
                    desc="Go ile gelistirmeyi keyifli kilan ana mekaniklerden ikisi es zamanli isleme (concurrency) becerileri ve kanallar (channels). Bu konusmamda ustunde calistigim canli sistemlerde sik sik karsima cikan kullanim senaryolarini ve ornek kodlari paylasiyor olacagim. Bana ayrilan zamanin sonunda, dinleyenlerin es zamanli programlama ile dusunebilmenin servis tasarimlarini nasil degistirebilecegini aktarabilmeyi ve Go'yu basarili kilan parcalar hakkinda biraz daha derin bilgiye sahip olmalarini hedefliyorum."
                  />
                <div class="author">
                  <img src="assets/img/speakers/cem-sancak.jpg" alt="avatar" class="avatar" />
                  Cem Sancak
                </div>
              </div>
            </div>
            <div class="line-center">
              <div class="custom-card custom-card-left flex1 mt-5">
                <div class="timer timer-absolute">15:00 - 16:00</div>
                <pre>{{ $t('Sponsor Track 1') }}</pre>
                <p class="title">Face detection in Go and Webassembly</p>
                <Detail
                    title="Face detection in Go and Webassembly"
                    author="Endre Simo"
                    desc="Year-by-year the Go language is evolving as it increases the projects and libraries built around it, even though the Go ecosystem is still well behind its competitors in terms of computer vision, machine learning, data analysis etc."
                  />
                <div class="author">
                  <img src="assets/img/speakers/endre-simo.jpg" alt="avatar" class="avatar" />
                  Endre Simo
                </div>
              </div>
              <div class="empty-card custom-card-right flex1 mt-5 hide-mobile"></div>
            </div>
            <div class="line-center">
              <div class="custom-card custom-card-left flex1 mt-5">
                <div class="timer timer-absolute">16:00 - 17:00</div>
                <pre>{{ $t('Sponsor Track 1') }}</pre>
                <p class="title">Gözlemlenebilir Go servisleri inşa etmek</p>
                <Detail
                    title="Gözlemlenebilir Go servisleri inşa etmek"
                    author="Kemal Akkoyun"
                    desc="Günümüzde, Go uygulamalarımızı dağıttık, birbirine gevşek şekilde bağlı mikro-servisler olarak inşa edip, esnek ve fazlasıyla değişken altyapı üzerinde kısa yaşam döngüleri olan iş yükleri olarak koşturuyoruz. Bu koşullar altında, gözlemlenebilirlik, yazdığımız uygulamalarımızın nasıl çalıştığını ve nasıl davrandığını anlamak ve yüksek düzeyde erişilebilir, hatalara dirençli hizmet sunmak için kilit bir nitelik haline geldi. Bir uygulamadan toplanabilecek “log”, “metric”, “tracing” ve “profiling” gibi sinyalleri, gözlemlenebilirlik sütunları adı altında toplayabiliriz. Bu sinyalleri kullanarak gerçek zamanlı, eyleme geçirilebilir uyarılar yaratabilir, uygulamaları yakinen takip edebileceğimiz paneller oluşturabilir ve sistemde oluşan sıkıntıları kökenini bulabilmek için derinlemesine analizler yapabiliriz. Go ve CNCF ekosistemi içinde, bu gözlenebilirlik sinyallerini toparlayabilecek ve kullanışlı hale getirecek çeşitli araçlar mevcut. Bu konuşma sırasında Kemal, ilk olarak kritik hizmetleri gözlemlenir kılmak için servisler içinde kullanılabilecek araçları tanıtıp, bu araçları uygulama içinde verimli şekilde kullanılmasını sağlayacak örüntüleri paylaşacaktır. Daha sonrasında toplanan bu sinyallerin nasıl kullanılacağını, gerçek senaryolar üzerinde, CNCF ekosistemi içindeki araçları (Loki, Prometheus, OpenTelemetry, Jaeger, Conprof) kullanarak demo edecektir. Yoğun trafik altında koşan uygulamaları inşa edip çalıştırırken ya da çalışan sistemlerde karşılaşılan problemlerin kökenini anlamak için kullanılan yöntemleri dinleyecekleri paylaşmayı amaçlamaktadır."
                  />
                <div class="author">
                  <img src="assets/img/speakers/kemal-akkoyun.jpg" alt="avatar" class="avatar" />
                  Kemal Akkoyun
                </div>
              </div>
              <div class="custom-card custom-card-right flex1 mt-5">
                <div class="timer timer-absolute">16:00 - 17:00</div>
                <pre>{{ $t('Sponsor Track 2') }}</pre>
                <p class="title">Go ile 1.5M Throughput</p>
                <Detail
                    title="Go ile 1.5M Throughput"
                    author="Hüseyin Güner"
                    desc="Konuşma genel olarak Trendyolda Java-Go geçişi ile elde ettiğimiz kaynak kazanımı, yüksek scale ölçeği, yaşadığımız zorluklar, karşılaştığımız buglar, çözüm yöntemlerimiz, profiling ve go ile alakalı deneyimlerin konu alacağı, go dili ve internalları hakkında olacak."
                  />
                <div class="author">
                  <img src="assets/img/speakers/huseyin-guner.jpeg" alt="avatar" class="avatar" />
                  Hüseyin Güner
                </div>
              </div>
            </div>
            <div class="line-center">
              <div class="flex1 flex-center">
                <div class="timer mt-5">17:00 - Finish</div>
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
        <div class="owl-carousel owl-theme">
          <div class="sponsor">
            <a href="https://itsmoneo.com" target="_blank">
              <img src="https://itsmoneo.com/assets/image/logo.svg" alt="sponsor" />
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
import Detail from "./components/Detail.vue";
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
    Detail
  }
};
</script>

<style>
</style>

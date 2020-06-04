<template>
    <div id="app">
        <div class="mobile-menu">
            <ul class="menu">
                <li><a href="#about">{{ $t('About') }}</a></li>
                <li><a href="#speakers">{{ $t('Speakers') }}</a></li>
                <li><a href="#schedule">{{ $t('Schedule') }}</a></li>
                <li><a href="#sponsors">{{ $t('Sponsors') }}</a></li>
                <li><a href="#ticket" class="button">{{ $t('Tickets') }}</a></li>
            </ul>
            <a href="javascript:" class="close-menu">x</a>
        </div>

        <a href="javascript:" class="menu-toggle">
            <img src="/assets/img/open-menu.svg" alt="open mobile menu"/>
        </a>

        <section id="slider" class="slider">
            <img class="sliderbg" src="/assets/img/slider.png" alt="slider"/>
            <img class="sliderbgmobile" src="/assets/img/slider.png" alt="slider"/>

            <div class="header-absolute">
                <div class="container">
                    <header>
                        <a href="#" class="logo"
                        ><img src="/assets/img/gophercon.png" alt="logo"
                        /></a>
                        <ul class="menu">
                            <li>
                                <a href="javascript:" class="button menu-toggle">
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
            <div class="announcement-aboslute">
                <h1>{{ $t('header_title') }}</h1>
                <p>{{ $t('header_slogan') }}</p>
                <div class="buttons">
                    <a class="btn btn-custom" href="https://kommunity.com/goturkiye/events/gophercon-turkey-59b694b8/cfp" target="_blank">{{ $t('Call for Papers') }}</a>
                    <a class="btn btn-custom" href="#ticket">{{ $t('_register') }}</a>
                </div>
            </div>
        </section>
        <section class="about" id="about">
            <div class="container">
                <div class="about-flex">
                    <img src="/assets/img/gopher-hi.png" alt="gopher" class="gopher"/>
                    <h2 class="title">{{ $t('ABOUT CONFERENCE') }}</h2>
                    <div v-html="$t('event_details')">
                    </div>
                </div>
            </div>
        </section>
        <section class="speakers" id="speakers">
            <h2 class="title">{{ $t('SPEAKERS') }}</h2>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-4">
                        <div class="profile">
                            <img height="180px" src="/assets/img/gopher-05.png" alt="avatar" class="avatar"/>
                            <p class="name">{{ $t('You?') }}</p>
                            <!-- <p class="description">
                              Gopher
                            </p> -->
                            <ul class="social">
                                <li>
                                    <a href="#"
                                    ><img src="/assets/img/twitter.svg" alt="twitter"
                                    /></a>
                                </li>
                                <li>
                                    <a href="#"
                                    ><img src="/assets/img/github.svg" alt="github"
                                    /></a>
                                </li>
                                <li>
                                    <a href="#"
                                    ><img src="/assets/img/linkedin.svg" alt="linkedin"
                                    /></a>
                                </li>
                            </ul>
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
            <h2 class="title">{{ $t('SCHEDULE') }}</h2>
            <div class="container">
                <div class="feed-out">
                    <div class="feed">
                        <div class="line-center">
                            <div class="track-title flex1 hide-mobile">
                                <p>{{ $t('Sponsor Track 1') }}</p>
                                <img class="arrow" src="/assets/img/arrow.svg" alt="arrow"/>
                            </div>
                            <div class="flex1 flex-center">
                                <div class="timer">10:00 - {{ $t('Start') }}</div>
                            </div>
                            <div class="track-title flex1 hide-mobile">
                                <p>{{ $t('Sponsor Track 2') }}</p>
                                <img class="arrow" src="/assets/img/arrow.svg" alt="arrow"/>
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
            <h2 class="title">{{ $t('TICKETS') }}</h2>
            <div class="container">
                <div class="tables">
                    <div class="table mt-4">
                        <img
                                src="/assets/img/gopher-03.png"
                                alt="gopher"
                                class="gopher-free"
                        />
                        <div class="name">{{ $t('STANDARD') }}</div>
                        <p class="price">{{ $t('Free') }}</p>
                        <ul>
                            <li v-html="$t('free_ticket_1')"></li>
                        </ul>
                        <a href="https://kommunity.com/goturkiye/events/gophercon-turkey-59b694b8/tickets" target="_blank" class="buy">{{$t('REGISTER')}}</a>
                    </div>
                    <div class="table table-red">
                        <img
                                src="/assets/img/gopher-04.png"
                                alt="gopher"
                                class="gopher-support"
                        />
                        <div class="name">{{$t('EXCLUSIVE')}}</div>
                        <p class="price"><small>TRY</small>49.99</p>
                        <ul>
                            <li v-html="$t('exclusive_ticket_1')"></li>
                            <li v-html="$t('exclusive_ticket_2')"></li>
                            <li v-html="$t('exclusive_ticket_3')"></li>
                            <li v-html="$t('exclusive_ticket_4')"></li>
                        </ul>
                        <a href="https://kommunity.com/goturkiye/events/gophercon-turkey-59b694b8/tickets" target="_blank" class="buy buy-red">{{$t('BUY NOW')}}</a>
                    </div>
                    <div class="table mt-4">
                        <img
                                src="/assets/img/gopher-05.png"
                                alt="gopher"
                                class="gopher-community"
                        />
                        <div class="name">{{$t('SPONSORSHIP')}}</div>
                        <p class="price"><small>TRY</small>4000</p>
                        <ul>
                            <li v-html="$t('sponsorship_ticket_1')"></li>
                            <li v-html="$t('sponsorship_ticket_2')"></li>
                            <li v-html="$t('sponsorship_ticket_3')"></li>
                            <li v-html="$t('sponsorship_ticket_4')"></li>
                        </ul>
                        <a href="https://kommunity.com/goturkiye/events/gophercon-turkey-59b694b8/tickets" target="_blank" class="buy">{{$t('BUY NOW')}}</a>
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
            <h2 class="title">{{$t('SPONSORS')}}</h2>
            <div class="container">
                <div class="owl-carousel owl-theme">
                    <div class="sponsor">
                        <a href="https://itsmoneo.com" target="_blank"
                        ><img
                                src="https://itsmoneo.com/assets/image/logo.svg"
                                alt="sponsor"
                        /></a>
                    </div>
                </div>
                <p class="info">
                    {{$t('Would you like to be the part of this great event?')}}
                    <br/>
                    <span v-html="$t('please_get_in_touch')"></span>
                </p>
            </div>
        </section>

        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-4">
                    </div>
                    <div class="col-12 col-md-4">
                        <ul class="footer-menu">
                            <li>
                                <a target="_blank" href="https://golang.org/conduct"
                                >{{$t('Code of Conduct')}}</a
                                >
                            </li>
                            <li>
                                <a href="mailto:support@kommunity.com?Subject=GopherCon Contact"
                                >{{$t('Contact Us')}}</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-4">
                        <ul class="footer-social-menu">
                            <li>
                                <a href="https://twitter.com/goturkiye" title="twitter" target="_blank"
                                ><img src="/assets/img/twitter-white.svg" alt="twitter"
                                /></a>
                            </li>
                            <li>
                                <a href="https://kommunity.com/goturkiye" title="kommunity" target="_blank"
                                ><img src="/assets/img/kommunity.svg" alt="kommunity"
                                /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'App',
        metaInfo() {
            return {
                title: this.$t('title'),
                titleTemplate: '%s',
                meta: [
                    {
                        'name': 'description',
                        'content': this.$t('meta_description'),
                        'vmid': 'description'
                    },
                    {
                        'name': 'title',
                        'content': this.$t('meta_title'),
                        'vmid': 'title'
                    },
                    {
                        'property': 'og:title',
                        'content': this.$t('og_title'),
                        'vmid': 'og:title'
                    },
                    {
                        'property': 'og:description',
                        'content': this.$t('og_description'),
                        'vmid': 'og:description'
                    },
                    {
                        'property': 'og:type',
                        'content': 'article',
                        'vmid': 'og:type'
                    },
                    {
                        'name': 'twitter:card',
                        'content': 'summary_large_image',
                        'vmid': 'twitter:card'
                    },
                    {
                        'property': 'og:url',
                        'content': location.href,
                        'vmid': 'og:url'
                    },
                    {
                        'property': 'og:image',
                        'content': this.$t('og_image'),
                        'vmid': 'og:image'
                    }
                ]
            }
        },
        mounted() {
            // let url = document.location.href
            // let indexOfSharp = url.indexOf('#')
            // let lang = url.substring(indexOfSharp + 1)
            //
            // this.$i18n.locale = lang

            let lang = this.$route.name
            this.$i18n.locale = lang
        }
    }
</script>

<style>

</style>

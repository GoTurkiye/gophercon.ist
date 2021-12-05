<template>
  <div>

    <footer>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4"></div>
          <div class="col-12 col-md-4">
            <ul class="footer-menu">
              <li>
                <a target="_blank" href="https://golang.org/conduct">{{
                  $t("Code of Conduct")
                }}</a>
              </li>
              <li>
                <a
                  href="mailto:contact@gopher.istanbul?Subject=GopherCon Contact"
                  >{{ $t("Contact Us") }}</a
                >
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-4">
            <ul class="footer-social-menu">
              <li>
                <a
                  href="https://twitter.com/goturkiye"
                  title="twitter"
                  target="_blank"
                >
                  <img src="/assets/img/twitter-white.svg" alt="twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://kommunity.com/goturkiye"
                  title="kommunity"
                  target="_blank"
                >
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
export default {
  name: "Footer",
};
</script>

<style>
</style>

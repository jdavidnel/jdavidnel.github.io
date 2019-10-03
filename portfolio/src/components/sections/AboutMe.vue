<template>
  <section class="colorlib-about" data-section="about">
      <div class="colorlib-narrow-content">
        <div class="row">
          <div class="col-md-12">
            <!-- <div class="row row-bottom-padded-sm " data-animate-effect="fadeInLeft"> -->
            <div class="row row-bottom-padded-sm " data-animate-effect="fadeInLeft">
              <div class="col-md-12">
                <div class="about-desc">
                  <span class="heading-meta">About Us</span>
                  <h2 class="colorlib-heading">Who Am I?</h2>
                  <p><strong>Hi I'm Ja</strong> On her way she met a copy.</p>
                  <p>line of blind text by the name of Lorem Ipsum decided to leave</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3" data-animate-effect="fadeInLeft">
                <div class="services color-1">
                  <span class="icon2"><i class="icon-bulb"></i></span>
                  <h3>Graphic Design</h3>
                </div>
              </div>
              <div class="col-md-3" data-animate-effect="fadeInRight">
                <div class="services color-2">
                  <span class="icon2"><i class="icon-globe-outline"></i></span>
                  <h3>Web Design</h3>
                </div>
              </div>
              <div class="col-md-3 " data-animate-effect="fadeInTop">
                <div class="services color-3">
                  <span class="icon2"><i class="icon-data"></i></span>
                  <h3>Software</h3>
                </div>
              </div>
              <div class="col-md-3 " data-animate-effect="fadeInBottom">
                <div class="services color-4">
                  <span class="icon2"><i class="icon-phone3"></i></span>
                  <h3>Application</h3>
                </div>
              </div>
            </div>
            <!-- <div class="row">
              <div class="col-md-12 " data-animate-effect="fadeInLeft">
                <div class="hire">
                  <h2>I am happy to know you <br>that 300+ projects done sucessfully!</h2>
                  <a href="#" class="btn-hire">Hire me</a>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import $ from 'jquery';

@Component
export default class AboutMe extends Vue {
  public mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

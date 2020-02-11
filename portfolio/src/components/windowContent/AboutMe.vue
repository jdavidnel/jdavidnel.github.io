<template>
  <section class="colorlib-about" data-section="about">
      <div class="colorlib-narrow-content">
        <div class="row">
          <div class="col-md-12">
            <div class="row row-bottom-padded-sm" data-animate-effect="fadeInLeft">
              <div class="full-content">
                  <div class="row-custom">
                    <div class="col-md-3">
                      <h2>Nom Prénom</h2>
                    </div>
                    <div class="col-md-9">
                      <span><strong>Nelson Jean-David</strong></span>
                    </div>
                  </div>
                  <div class="row-custom">
                    <div class="col-md-3">
                      <h2>Age</h2>
                    </div>
                    <div class="col-md-9">
                      <span>25 ans</span>
                    </div>
                  </div>
                  <div class="row-custom">
                    <div class="col-md-3">
                      <h2>Description</h2>
                    </div>
                    <div class="col-md-9">
                      <span>Porté sur le développement Mobile, d'application lourde ou web. Je suis passionné par toutes les domaines portant sur l'informatique. Ce site me sert a exposer mes differentes connaissances sur le sujet, mais ausi a vous permettre de mieux me connaitre pour une eventuel collaboration.Ayant été formé a devenir expert dans tout les domaine de l'informatique , mes compétences s'étendent sur plusieurs domaines d'activités.( Aller dans sur l'onglet compétences pour les decouvrir) </span>
                    </div>
                  </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3" data-animate-effect="fadeInLeft">
                <div class="services color-1">
                  <span class="icon2"><i class="icon-bulb"></i></span>
                  <h3>Business Developpment</h3>
                </div>
              </div>
              <div class="col-md-3" data-animate-effect="fadeInRight">
                <div class="services color-2">
                  <!-- <span class="icon2"><i class="icon-globe-outline"></i></span> -->
                  <span class="icon2"><i class="icon-layers2"></i></span>
                  <h3>Web Front and Back End</h3>
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

.full-content {
  width: 100%;
}

.row-custom {
  display: block;
}

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

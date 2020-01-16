<template>
  <section class="colorlib-experience" data-section="experience">
    <div class="colorlib-narrow-content">
      <div class="row">
        <div class="col-md-12 " data-animate-effect="fadeInLeft">
          <span class="heading-meta">Experience</span>
          <h2 class="colorlib-heading ">Work Experience</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
              <div class="timeline-centered">
                <article class="timeline-entry " data-animate-effect="fadeInLeft">
                  <div class="timeline-entry-inner">

                      <div class="timeline-icon color-1">
                        <i class="icon-pen2"></i>
                      </div>

                      <div class="timeline-label">
                        <h2><a href="#">Full Stack Developpeur</a> <span> Mai 2016 - Septembre 2019</span></h2>
                        <p></p>
                      </div>
                  </div>
                </article>


                <article class="timeline-entry " data-animate-effect="fadeInRight">
                  <div class="timeline-entry-inner">
                    <div class="timeline-icon color-2">
                      <i class="icon-pen2"></i>
                    </div>
                    <div class="timeline-label">
                    <h2><a href="#">Administrateur web</a> <span> Septembre 2015 - Janvier 2016</span></h2>
                      <p>Realisation et maintenance d'une application web pour une association a but non lucrative ( Music'all touch ) dont le but est que tous puisse acceder a la musique. L'application</p>
                      <ul>
                        <li><strong>PHP</strong></li>
                        <li><strong>Javascript (JQUERY)</strong></li>
                        <li>gestion de projet</li>
                        <li>Front End</li>
                        <li>Back End</li>
                        <li>Design graphic</li>
                      </ul>
                    </div>
                  </div>
                </article>

                <article class="timeline-entry " data-animate-effect="fadeInLeft">
                  <div class="timeline-entry-inner">
                      <div class="timeline-icon color-3">
                        <i class="icon-pen2"></i>
                      </div>
                      <div class="timeline-label">
                      <h2><a href="#">Stagiaire Ingenieur Informatique</a> <span> Avril 2015 - Juin 2015</span></h2>
                        <p>Dans le cadre du projet "Theatromania" porté par laboratoire de recherche <a href="http://www.labex-arts-h2h.fr/">Labex Arts-H2H</a> de <a href="https://www.univ-paris8.fr/">l'université Paris 8</a> pour la Bibliothèque National de France, j'ai intégré <a href="http://citu-paragraphe.fr/">l'équipe Citu de la section paragraphe</a>, et ai été amené a seconder l'ingénieur informatique en charge d'un projet en rapport avec la réalité augmentée.</p>
                        <ul>
                        <li><strong>Cartographie</strong></li>
                        <li><strong>C #</strong></li>
                        <li><strong>Unity</strong></li>
                        <li>CSS</li>
                        <li>XML</li>
                      </ul>
                      </div>
                  </div>
                </article>

                <!-- <article class="timeline-entry " data-animate-effect="fadeInTop">
                  <div class="timeline-entry-inner">
                      <div class="timeline-icon color-4">
                        <i class="icon-pen2"></i>
                      </div>
                      <div class="timeline-label">
                      <h2><a href="#">Creative Designer</a> <span>2017-2018</span></h2>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                      </div>
                  </div>
                </article>

                <article class="timeline-entry " data-animate-effect="fadeInLeft">
                  <div class="timeline-entry-inner">
                      <div class="timeline-icon color-5">
                        <i class="icon-pen2"></i>
                      </div>
                      <div class="timeline-label">
                      <h2><a href="#">UI/UX Designer at Envato</a> <span>2017-2018</span></h2>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                      </div>
                  </div>
                </article> --> 

                <article class="timeline-entry begin " data-animate-effect="fadeInBottom">
                  <div class="timeline-entry-inner">
                      <div class="timeline-icon color-none">
                      </div>
                  </div>
                </article>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import $ from 'jquery';

@Component
export default class Experiences extends Vue {
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

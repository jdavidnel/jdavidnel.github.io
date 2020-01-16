<template>
 <section class="colorlib-skills" data-section="skills">
    <div class="colorlib-narrow-content">
      <div class="row">
        <div class="col-md-12" data-animate-effect="fadeInLeft">
          <span class="heading-meta">Mes competences</span>
          
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 " data-animate-effect="fadeInLeft">
          <h2 class="colorlib-heading ">Compétences techniques</h2>
          <p></p>
        </div>
        <div class="col-md-6 " data-animate-effect="fadeInLeft">
          <div class="progress-wrap">
            <h3>React Native</h3>
            <div class="progress">
              <div class="progress-bar color-1" role="progressbar" aria-valuenow="75"
                aria-valuemin="0" aria-valuemax="100" style="width:75%">
                <span>75%</span>
                </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 " data-animate-effect="fadeInRight">
          <div class="progress-wrap">
            <h3>C#</h3>
            <div class="progress">
              <div class="progress-bar color-2" role="progressbar" aria-valuenow="60"
                aria-valuemin="0" aria-valuemax="100" style="width:60%">
                <span>60%</span>
                </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 " data-animate-effect="fadeInLeft">
          <div class="progress-wrap">
            <h3>Python</h3>
            <div class="progress">
              <div class="progress-bar color-3" role="progressbar" aria-valuenow="85"
                aria-valuemin="0" aria-valuemax="100" style="width:85%">
                <span>85%</span>
                </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 " data-animate-effect="fadeInRight">
          <div class="progress-wrap">
            <h3>NodeJS</h3>
            <div class="progress">
              <div class="progress-bar color-4" role="progressbar" aria-valuenow="90"
                aria-valuemin="0" aria-valuemax="100" style="width:90%">
                <span>90%</span>
                </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 " data-animate-effect="fadeInLeft">
          <div class="progress-wrap">
            <h3>C, C++</h3>
            <div class="progress">
              <div class="progress-bar color-5" role="progressbar" aria-valuenow="70"
                aria-valuemin="0" aria-valuemax="100" style="width:70%">
                <span>70%</span>
                </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 " data-animate-effect="fadeInRight">
          <div class="progress-wrap">
            <h3>Java, Java Android</h3>
            <div class="progress">
              <div class="progress-bar color-6" role="progressbar" aria-valuenow="80"
                aria-valuemin="0" aria-valuemax="100" style="width:80%">
                <span>80%</span>
                </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 " data-animate-effect="fadeInRight">
          <div class="progress-wrap">
            <h3>HTML, CSS, JQuery</h3>
            <div class="progress">
              <div class="progress-bar color-6" role="progressbar" aria-valuenow="80"
                aria-valuemin="0" aria-valuemax="100" style="width:80%">
                <span>90%</span>
                </div>
            </div>
          </div>
        </div>
         <div class="col-md-6 " data-animate-effect="fadeInRight">
          <div class="progress-wrap">
            <h3>SQL, NO SQL</h3>
            <div class="progress">
              <div class="progress-bar color-4" role="progressbar" aria-valuenow="50"
                aria-valuemin="0" aria-valuemax="100" style="width:50%">
                <span>50%</span>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 " style="margin-top: 80px" data-animate-effect="fadeInLeft">
          <h2 class="colorlib-heading ">Compétences non techniques</h2>
        </div>
        <div class="col-md-6 " data-animate-effect="fadeInLeft">
          <h3>Gestion de projet</h3>  
        </div>
        <div class="col-md-6 " data-animate-effect="fadeInLeft">
          <h3>Autonomie</h3>  
        </div>
        <!--<div class="col-md-6 " data-animate-effect="fadeInRight">
          <h3>Developpement d'Affaires</h3>
        </div>
        <div class="col-md-6 " data-animate-effect="fadeInLeft">
          <h3>Marketing digital</h3>          
        </div>
        <div class="col-md-6 " data-animate-effect="fadeInLeft">
          <h3>Négociation</h3>          
        </div> -->
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import $ from 'jquery';

@Component
export default class Skills extends Vue {
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

<template>
  <div class="window" v-show="this.start">
    <div class="row-custom window-title">
      <div class="windows-icons-top-left">
        <img src="../assets/icons/windows/cli.png"/>
        <p>Invite de commande</p>
      </div>
      <div class="windows-icons-top-right">
        <div class="window-controls window-hover">
          <img src="../assets/icons/windows/line.png" />
        </div>
        <div class="window-controls window-hover">
          <img src="../assets/icons/windows/square.png" />
        </div>
        <div class="window-controls window-hover-close">
          <img src="../assets/icons/windows/closecross.png" />
        </div>
      </div>
    </div>
    <div class="row-custom cli-writer">
      <div class="col-md-12">
        <p>Microsoft Windows [Version 10.0.17134.1006]</p>
      </div>
      <div class="col-md-12">
        <p>(c) 2018 Jean-David Nelson. All rights reserved.</p>
      </div>
    </div>
    <div class="row-custom cli-writer">
      <div id="typewritermsg">
        <TypeWriter v-bind:start="start" timelaps=60 v-bind:data="data" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import * as _ from 'lodash';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Language, VisitorType } from '../types/Enum';
import { launchAndClearInterval } from '@/scripts/Utils/Times';
import TypeWriter from '@/components/TypeWriter.vue';

@Component({
  components: {
    TypeWriter,
  },
})
export default class Cli extends Vue {

  private start: boolean = false;

  private visitor: VisitorType = VisitorType.None;
  /* private data: string[] = [
    'Bonjour et bienvenue, mon nom est NELSON Jean-david.',
    'Je suis developpeur full stack, je suis un passionné de nouvelles technologies.', 
    'ce site me sert de vitrine pour plusieurs projets mais aussi de cv.',
    'J\'aimerais savoir pour quel raison etes vous venu sur ce site ?'
  ]; */
  private data: string[] = [
    'Bonjour et bienvenue sur mon portefolio.',
    'Mon nom est NELSON Jean-david.',
    'Ce site me sert de vitrine pour mes differentes realisations et a me presenter.',
    'J\'espere que vous apprecierez l\'experience :) . ',
    'www.jeandavidnelson.com launch website',
  ];
  
  public mounted() {
    this.$root.$on("App::Animation::End", () => {
      this.start = true;
    });
  }

  private setVisitor(type: VisitorType): void {
    this.visitor = type;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/_typo.scss';

body {
  display:table
}

#app {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.windows-icons-top-left {
  float: left;
  img {
    width: 100%;
    max-width: 30px;
    display: inline;
  }
  p {
    display: inline;
  }
}

.window-hover:hover {
  background-color: grey;
}

.window-hover-close:hover {
  background-color: red;
}

.window-controls {
  display: inline;
  padding: 5px;
  img {
    width: 100%;
    max-width: 15px;
  }
}

.windows-icons-top-right {

  float: right;
}

.row-custom {
  display: block;
}

.window-title {
  background-color: #D6DAD9;
  color : black;
  min-height: 25px;
  
  p {
    font-size: 15px;
  }
}

.window {
  border: 1px solid #D6DAD9;
  width: 100%;
  max-width: 800px;
  height: 450px;
  overflow: hidden;
  margin: auto;
}

.cli-writer {
    text-align: left;
    font-size: 20px;
    color: #A9A9A9;
    font-family: "ubuntu";
}

h1 {
  font-family: "veteran Typewriter";
  font-size: 4em;
}

h1::after{
  content: '|';
  color: white;
}
h1 .welcome {
  color:white;
  font-size: 2em;
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

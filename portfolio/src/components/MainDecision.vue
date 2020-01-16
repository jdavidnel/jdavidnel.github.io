<template>
  <div id="typewritermsg" class="row align-items-center">
      <TypeWriter timelaps=60 v-bind:data="data" />
      <!--<div v-if="animationFinish" class="row align-items-center">
        <div class="col">
            <button type="button" class="btn btn-success"
            @click="setVisitor(VisitorType.Recruteur)">Recruteur</button>
            <button type="button" class="btn btn-primary"
            @click="setVisitor(VisitorType.Sponsor)" >Commanditaire</button>
        </div> 
      </div> -->
  </div>

    <!-- <div v-if="animationFinish" class="row align-items-center">
    <div class="col">
        <button type="button" class="btn btn-success"
        @click="setVisitor(VisitorType.Recruteur)">Recruteur</button>
        <button type="button" class="btn btn-primary"
        @click="setVisitor(VisitorType.Sponsor)" >Commanditaire</button>
    </div>
  </div>-->
</template>

<script lang="ts">
import * as _ from 'lodash';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Language, VisitorType } from '../types/Enum';
import { launchAndClearInterval } from '@/scripts/Utils/Times';
import TypeWriter from '@/components/TypeWriter.vue';

@Component({
  components: {
    TypeWriter,
  },
})
export default class MainDecision extends Vue {

  private animationFinish: boolean = false;
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
    'Ce site me sert de vitrine pour mes differentes realisations et a me présenter.',
    'J\'espere que vous apprécierez l\'expérience :) . ',
  ];

  public mounted() {
    this.$root.$on("TypeWritter::Animation::End", () => {
      this.animationFinish = true;
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

h1 {
  font-family: "veteran Typewriter";
  font-size: 4em;
}

h1::after{
  content: '|';
  color: black;
}
h1 .welcome {
  color:black;
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

<template>
<div>
 <section class="colorlib-about">
  <h1>Bonjour, Vous chercher un developpeur ? Ca tombe bien car je suis developpeur freelance.</h1>
 </section>
 <AboutMe />
 <Expertise />
 <Skills /> 
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Language } from '../types/Enum';
import AboutMe from '@/components/sections/AboutMe.vue';
import Expertise from '@/components/sections/Expertise.vue';
import Skills from '@/components/sections/Skills.vue';
import MainDecision from '@/components/MainDecision.vue';

@Component({
  components: {
    AboutMe,
    Expertise,
    Skills,
    MainDecision,
  },
})
export default class MainApp extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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

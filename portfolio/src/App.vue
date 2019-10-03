<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <MainDecision timelaps=150 />

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Navbar from './components/Navbar.vue';
import MainApp from './components/MainApp.vue';
import MainDecision from '@/components/MainDecision.vue';
import { VisitorType } from '@/types/Enum';

@Component({
  components: {
    MainDecision,
  },
})
export default class App extends Vue {
  private decision: VisitorType = VisitorType.None;
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

html,#app,body,#typewritermsg {
  height: 100%;
}

</style>

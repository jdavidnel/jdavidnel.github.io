<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> 
    <Navbar v-if="makedecision" />
    <MainDecision v-if="!makedecision"/>
    <MainApp v-else /> -->
    <Cli v-if="animation" /> 
    <Kernel v-else />

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Navbar from './components/Navbar.vue';
import MainApp from './components/MainApp.vue';
import MainDecision from '@/components/MainDecision.vue';
import Cli from '@/components/Cli.vue';
import Kernel from '@/components/Kernel.vue';
import { VisitorType } from '@/types/Enum';
import $ from 'jquery';

@Component({
  components: {
    Cli,
    Kernel,
  },
})
export default class App extends Vue {

  private animation: boolean = true;

  public mounted() {

    setTimeout(() => { 
      $("body").css({ 'background-color': 'black' });
      $("body").css('background-image', 'none');
      this.$root.$emit("App::Animation::End");
    }, 3000);

    this.$root.$on('TypeWritter::Animation::End', () => {
      this.animation = false;
      $("body").removeAttr('style');
      $("body").addClass("wallpaper-bg");
      $("#app").css({ 'background-color': 'transparent' });
    });
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  /* margin-top: 60px; */
}

body {
  display:table
}

#app {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.html {
  height: 100%;
  width: 100%;
}

body {
  background: no-repeat center url("./assets/bootloader.gif");
  background-size: cover;
}

.wallpaper-bg {
  background: no-repeat center url("./assets/wallpaper.jpg");
  background-size: cover;
}

.full-div {
  height: 100%;
}

html,#app,body {
  height: 100% !important;
}

</style>

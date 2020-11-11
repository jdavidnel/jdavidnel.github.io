<template>
  <div id="app">
    <Authentification v-if="currentState === 'AUTHENTIFICATION'" />
    <MobileGesture v-else-if="currentState === 'ANDROID'" />
    <Kernel v-else />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import $ from 'jquery';

import Authentification from '@/components/desktop/Authentification.vue';
import Kernel from '@/components/desktop/Kernel.vue';
import MobileGesture from '@/components/mobile/MobileGesture.vue';

import { mobileAndTabletcheck } from './scripts/utils/Utils';

@Component({
  components: {
    Kernel,
    Authentification,
    MobileGesture,
  },
})
export default class App extends Vue {
  private animation: boolean = true;

  private currentState: string = "AUTHENTIFICATION";

  private checkStr(str: string) {

  }

  public mounted() {
    if (mobileAndTabletcheck()) {
      this.currentState = "ANDROID";
      $('body').toggleClass('android-boot');
      console.log("Mobile detected !");
    } else {
      $('body').toggleClass('window-boot');
    }

    setTimeout(() => {
      $('body').css({ 'background-color': 'black' });
      $('body').css('background-image', 'none');
      this.$root.$emit('App::Animation::End');
    }, 2000);

    this.$root.$on('TypeWritter::Animation::End', () => {
      this.animation = false;
      this.currentState = "KERNEL";
      $('body').removeAttr('style');
      $('body').addClass('wallpaper-bg');
      $('#app').css({ 'background-color': 'transparent' });
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

.android-boot {
  background: no-repeat center url("./assets/android_boot.gif");
  background-size: cover;
}

.window-boot {
  background: no-repeat center url("./assets/windows_boot.gif");
  background-size: cover;
}

body {
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

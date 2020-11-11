<template>
  <div class="window" v-show="this.start">
    <LockedScreen v-if="isLocked"/>
    <HomeScreen v-else/>
  </div>
</template>

<script lang="ts">
import * as _ from 'lodash';
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import $ from 'jquery';
import LockedScreen from './screens/LockedScreen.vue';
import HomeScreen from './screens/HomeScreen.vue';
import { Language, VisitorType } from '../../types/Enum';

@Component({
  components: {
    LockedScreen,
    HomeScreen
  },
})
export default class MobileGesture extends Vue {
    
    private isLocked: boolean = true;
    private start: boolean = false;

    public mounted() {
      this.$root.$on('App::Animation::End', () => {
        this.start = true;
      });
      this.$root.$on('LockedScreen::Unlock',() => {
          alert("event received !");
          this.isLocked = false;
      });
      this.$root.$on('LockedScreen::lock',() => {
          this.isLocked = true;
      });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/*
body {
  display:table
}

#app {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
*/
.window {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: auto;
  /* background: no-repeat center url("../../assets/wallpaper_auth.jpg"); 
  display: table; */
}

.blur-it {
    backdrop-filter: blur(5px);
}

.display-date {
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;

    section {
        text-align: left;
        padding: 2%;

        span:nth-of-type(1) {
            font-size: 7.5rem;
        }
        span:nth-of-type(2) {
            font-size: 2em;
        }
    }

    span {
        display: block;
    }
}

.no-blured-content {
    position: absolute;
    height: 100%;
    width: 100%;
    display: table;
}

/**
 * Profile image component
 */
.profile-header-container{
    margin: 0 auto;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}

.profile-header-img {
    padding: 54px;
}

.profile-header-img > img.img-circle {
    width: 200px;
    height: 200px;
    border: 2px solid #D6DAD9;
}

.profile-header {
    margin-top: 43px;
}

/**
 * Ranking component
 */
.rank-label-container {
    margin-top: 10px;
    /* z-index: 1000; */
    text-align: center;
}

.label.rank-label {
    /*background-color: rgb(81, 210, 183);
    padding: 5px 10px 5px 10px;
    border-radius: 27px;*/
    font-size: 20px;
}
</style>

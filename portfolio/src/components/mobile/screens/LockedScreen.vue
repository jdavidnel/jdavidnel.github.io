<template>
  <div v-touch:swipe="handlerSwipe" v-touch:touch="handlerSwipe" class="window" v-show="this.start">
    <StateBar />
    <div class="display-date">
        <section>
            <span>{{hours}}</span>
            <span>{{date}}</span>
        </section>
    </div>
  </div>
</template>

<script lang="ts">
import * as _ from 'lodash';
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import $ from 'jquery';
import StateBar from '@/components/mobile/basics/StateBar.vue';
import { Language, VisitorType } from '@/types/Enum';
import { launchAndClearInterval } from '@/scripts/Utils/Times';

@Component({
  components: {
    StateBar,
  },
})
export default class LockedScreen extends Vue {
    private start: boolean = false;

    private login: boolean = false;

    private today: Date = new Date();

    private hours: string = '';

    private date: string = '';

    private days: string[] = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

    private months:string[] = ['Janvier', 'Fevr', 'Mardi', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Saptembre', 'Octobre', 'Novembre', 'Decembre'];

    private visitor: VisitorType = VisitorType.None;

    private handlerSwipe (direction: any) {
      alert("Swiped !");
      this.$root.$emit("LockedScreen::Unlock");
    }

    public getDate() : string {
      return `${this.days[this.today.getDay()]}. ${this.today.getDate()} ${this.months[this.today.getMonth()]}.`;
    }

    public getHours() : string {
      const pad:Function = (nbr: number) => ((nbr < 10) ? `0${nbr}` : `${nbr}`);
      return `${this.today.getHours()}:${pad(this.today.getDate())}`;
    }

    private logUser() {
      const element: Element = (this.$refs.noblured as Element);
      this.login = !this.login;
      setTimeout(() => {
        this.$root.$emit('TypeWritter::Animation::End');
      }, 2000);
    }

    public mounted() {
      this.today = new Date();
      this.$root.$on('App::Animation::End', () => {
        this.start = true;
      });
      setInterval(() => {
        this.date = this.getDate();
        this.hours = this.getHours();
      }, 1000);
    }

    private setVisitor(type: VisitorType): void {
      this.visitor = type;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

body {
  display:table
}

#app {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.window {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: auto;
  background: no-repeat center url("../../../assets/wallpaper_auth.jpg");
  display: table;
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

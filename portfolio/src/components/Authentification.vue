<template>
  <div class="window" v-show="this.start">
    <div v-on:click="logUser" ref="noblured" class="no-blured-content">
        <div v-show="this.login" class="profile-header-container">   
            <div class="profile-header-img">
                <img class="img-circle" src="../assets/moi.jpg" />
                <!-- badge -->
                <div class="rank-label-container">
                    <span class="label rank-label">Jean-David NELSON</span>
                </div>
                <div class="spinner-marge spinner-border text-light" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            
        </div> 
    </div>
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
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Language, VisitorType } from '../types/Enum';
import { launchAndClearInterval } from '@/scripts/Utils/Times';
import TypeWriter from '@/components/TypeWriter.vue';
import $ from 'jquery';

@Component({
  components: {
    TypeWriter,
  },
})
export default class Authentification extends Vue {

    private start: boolean = false;
    private login: boolean = false;
    private today: Date = new Date();

    private hours: string = "";
    private date: string = "";

    private days: string[] = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
    private months:string[] = ['Janvier','Fevrier','Mardi','Avril','Mai','Juin','Juillet','Aout','Saptembre','Octobre','Novembre','Decembre'];

    private visitor: VisitorType = VisitorType.None;

    public getDate() : string {
        return `${this.days[this.today.getDay()]} ${this.today.getDate()} ${this.months[this.today.getMonth()]}`;
    }

    public getHours() : string {
        let pad:Function = (nbr: number) => {
            return (nbr < 10) ? `0${nbr}` : `${nbr}`;
        };
        return `${this.today.getHours()}:${pad(this.today.getDate())}`;
    }

    private logUser() {
        let element: Element = (this.$refs.noblured as Element);
        $(element).toggleClass("blur-it");
        this.login = !this.login;
        setTimeout(() => {
            this.$root.$emit('TypeWritter::Animation::End');
        }, 2000);
    }

    public mounted() {
        this.today = new Date();
        this.$root.$on("App::Animation::End", () => {
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
@import '../assets/scss/_typo.scss';

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
  background: no-repeat center url("../assets/wallpaper_auth.jpg");
    display: table;
}

.spinner-marge {
    margin-top: 5px
}

.blur-it {
    backdrop-filter: blur(5px);
}

.display-date {
    color: white;
    display: table-cell;
    vertical-align: bottom;

    section {
        text-align: left;
        padding: 50px 50px;

        span:nth-of-type(1) {
            font-size: 10em;
        }
        span:nth-of-type(2) {
            font-size: 5em;
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

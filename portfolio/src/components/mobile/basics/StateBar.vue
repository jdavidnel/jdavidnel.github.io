<template>
  <div class="system-navbar">
    <div class="right">
        <div class="pourcentage">
            <span>61%</span>
        </div>
        <div class="icons">
            <img src="@/assets/icons/android/system/battery2.png" alt="battery"/>
        </div>
    </div>
    <div class="left">
        <div class="operator">
            <span>Bouygues Telecom</span>
        </div>
        <div class="icons">
            <img src="@/assets/icons/android/system/wifi.png" alt="wifi"/>
        </div>
    </div>
    <!-- <span v-if="state === MobileState.HOMESCREEN">{{hours}}</span> -->
  </div>
</template>

<script lang="ts">
import * as _ from 'lodash';
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import $ from 'jquery';
import { MobileState } from '../../../types/Enum/index';

@Component({
  components: {
  },
})
export default class StateBar extends Vue {
    private today: Date = new Date();

    private hours: string = '';

    private date: string = '';

    // private state: MobileState = MobileState.LOCKED;

    private state: MobileState = MobileState.LOCKED;

    public getHours() : string {
      const pad:Function = (nbr: number) => ((nbr < 10) ? `0${nbr}` : `${nbr}`);
      return `${this.today.getHours()}:${pad(this.today.getDate())}`;
    }

    public mounted() {
      this.today = new Date();
      setInterval(() => {
        this.hours = this.getHours();
      }, 1000);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.system-navbar {
    width: 100%;
    padding: 5px 5px;
}

.right {
  float: right;
  display: inline-flex;
  .pourcentage {
      font-size: 1.3rem;
  }
  .icons {
      max-width: 30px;
      margin: 0px 5px;
      img  {
          width: 100%;
      }
  }
}

.left {
  float: left;
  display: inline-flex;
  .operator {
    font-size: 1.3rem;
  }
  .icons {
    margin: 0px 5px;
    /*padding-top: 2px; */
  }
}

.icons {
  max-width: 15px;

  img  {
      width: 100%;
  }
}

</style>

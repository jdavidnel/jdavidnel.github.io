<template>
  <div class="system-navbar">
    <div class="system-content">
        <div>
            <div>
                <span>Bouygues Telecom</span>
            </div>
            <div class="icons">
                <img src="@/assets/icons/android/system/wifi.png" alt="wifi"/>
            </div>
        </div>
        <div class="battery">
            <div class="pourcentage">
                <span>21%</span>
            </div>
            <div class="icons">
                <img src="@/assets/icons/android/system/battery.png" alt="battery"/>
            </div>
        </div>
        <!-- <span v-if="state === MobileState.HOMESCREEN">{{hours}}</span> -->
    </div>
  </div>
</template>

<script lang="ts">
import * as _ from 'lodash';
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import $ from 'jquery';
import { MobileState } from '@/types/Enum/index';
import { launchAndClearInterval } from '@/scripts/Utils/Times';

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
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
}

.system-content {
    display: inline;
    /*display: inline-flex;
    align-items: center;*/
}

.battery {
    /* display: inline-flex; */
    float: right;
    padding: 5px;
    .pourcentage {
        font-size: 1.5rem;
    }
    .icons {
        max-width: 8%;
        margin: 0px 5px;
        img  {
            width: 100%;
        }
    }
}

.icons {
    max-width: 15px;

    img  {
        width: 100%;
    }
  }

</style>

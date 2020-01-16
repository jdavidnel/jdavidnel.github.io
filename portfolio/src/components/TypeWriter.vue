<template>
  <div class="col align-items-center">
    <h1 class="typewriter">C:\Users\JeanDavidNelson>{{msg}}</h1>
  </div>
</template>

<script lang="ts">
import * as _ from 'lodash';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Language } from '../types/Enum';
import { launchAndClearInterval } from '@/scripts/Utils/Times';

@Component({
  components: {
  },
})
export default class Typewriter extends Vue {
  @Prop({ required: true }) readonly timelaps!: number;
  @Prop({ required: true }) readonly data!: string[];
  @Prop({ required: true }) readonly start!: boolean;
  @Prop({ default: 40 }) readonly clearingDuration!: number;

  public msg: string = '';
  private writting: boolean = false;

  public mounted() {
    if (this.start) {
      this.displaySentence(this.data);
    }
  }

  private clearSentence(): void {
    let clearing: any = null;
    
    clearing = setInterval(() => {
      if (this.msg.length === 0 || _.isNil(this.msg)) {
        this.writting = true;
        clearInterval(clearing);
      } else {
        this.msg = this.msg.slice(0, -1);
      }
    }, this.clearingDuration);
  }
  
  private displaySentence(data: string[], clearing: boolean = true): void {
    let index: number = ( data.length > 0 ) ? 0 : -1;
    let chars: string[] | null = ( index === -1 ) ? null : data[0].split('');
    let clearTime: any = null;

    clearTime = setInterval(async () => {

      if (_.isNil(chars) || _.isNil(this.msg) 
      || data.length === 0) {
        clearInterval(clearTime);
        return;
      }
      if (index !== chars.length) {
        this.msg += chars[index];
        index += 1;
      } else {
        clearInterval(clearTime);    
        await this.makePromise(() => {
          if (clearing) {
            this.clearSentence();
          } else {
            this.$root.$emit('TypeWritter::Animation::End');
          }
        }, 2000).then(async (reason: any) => {
          while (this.writting === false) {
            await this.timeout(100);
          }
          this.writting = false;
          let newdata: string[] = data.length === 1 ? [] : _.slice(data,1);
          this.displaySentence(newdata, newdata.length > 1 ? true : false);
        });
      }
    }, this.timelaps);
  }

  @Watch('start')
  public startTypeWritter(newValue: boolean, oldValue: boolean) {
    if (newValue === true) {
      setTimeout(() => {
        this.displaySentence(this.data);
      });
    }
  }

  private timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private async sleep(fn: Function, ...args: any[]) {
      await this.timeout(3000);
      return fn(...args);
  }

  private makePromise(lambda: Function, ms: number): Promise<boolean> {
    return new Promise((resolve, reject) => setTimeout(() => {
        try {
          lambda();
          resolve(true);
        } catch(e) {
          reject(false);
        }
      }, ms));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/_typo.scss';

/*
h1 {
  font-family: "veteran Typewriter";
  font-size: 4em;
}
*/

.typewriter {
  text-align: left;
  font-size: 20px;
  color: #A9A9A9;
  font-family: "ubuntu";
}
h1::after{
  content: '_';
  color: white;
  font-weight: bold;
  -webkit-animation: blindspot 0.5s infinite; /* Safari 4.0 - 8.0 */
  animation: blindspot 0.5s infinite;
  animation-direction: alternate;
}


/* Safari 4.0 - 8.0 */
@-webkit-keyframes blindspot {
  from {opacity: 0;}
  to {opacity: 1;}
}

@keyframes blindspot {
  from {opacity: 0;}
  to {opacity: 1;}
}

h1 .welcome {
  color:white;
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

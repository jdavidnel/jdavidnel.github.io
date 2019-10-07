<template>
  <div id="typewritermsg" class="row align-items-center">
    <div class="col  align-items-center">
      <h1 class="typewriter">{{msg}}</h1>
    </div>
  </div>
  <!-- <div v-if="animationFinish" class="row align-items-center">
    <div class="col">
        <button type="button" class="btn btn-success"
        @click="setVisitor(VisitorType.Recruteur)">Recruteur</button>
        <button type="button" class="btn btn-primary"
        @click="setVisitor(VisitorType.Sponsor)" >Commanditaire</button>
    </div>
  </div>-->
</template>

<script lang="ts">
import * as _ from 'lodash';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Language, VisitorType } from '../types/Enum';
import { launchAndClearInterval } from '@/scripts/Utils/Times';

@Component({
  components: {
  },
})
export default class MainDecision extends Vue {
  @Prop({ required: true }) readonly timelaps!: number;
  @Prop({ required: true }) readonly data!: string[];
  @Prop({ default: 80 }) readonly clearingDuration!: number;

  public msg: string = '';
  private animationFinish: boolean = false;
  private visitor: VisitorType = VisitorType.None;

  public mounted() {
    this.displaySentence(this.data);
  }

  private clearSentence(): void {
    let clearing: any = null;
    
    clearing = setInterval(() => {
      if (this.msg.length === 0 || _.isNil(this.msg)) {
        this.animationFinish = true;
        clearInterval(clearing);
      } else {
        this.msg = this.msg.slice(0, -1);
      }
    }, this.clearingDuration);
  }

  private setVisitor(type: VisitorType): void {
    this.visitor = type;
  }
  
  private displaySentence(data: string[], clearing: boolean = true): void {
    let index: number = ( data.length > 0 ) ? 0 : -1;
    let chars: string[] | null = ( index === -1 ) ? null : data[0].split('');
    let clearTime: any = null;

    clearTime = setInterval(async () => {
      console.log("interval ! Data lenght :" + data.length);
      if (_.isNil(chars) || _.isNil(this.msg) 
      || data.length === 0) {
        console.log("finished !! ");
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
            console.log("clearing !");
            this.clearSentence();
          }
        }, 5000).then(async (reason: any) => {
          while (this.animationFinish === false) {
            //console.log("wait");
            await this.timeout(100);
          }
          this.animationFinish = false;
          let newdata: string[] = _.slice(data,1);
          console.log("Reponse promise :" + reason);
          console.log("Nouveau Tableau : ");
          console.log(newdata);
          this.displaySentence(newdata, newdata.length > 1 ? true : false);
        });
      }
    }, this.timelaps);
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

h1 {
  font-family: "veteran Typewriter";
  font-size: 4em;
}

h1::after{
  content: '|';
  color: black;
}
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

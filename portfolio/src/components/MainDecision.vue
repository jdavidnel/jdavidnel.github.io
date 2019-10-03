<template>
<div id="typewritermsg" class="row align-items-center">
  <div class="col">
    <h1 class="typewriter">{{msg}}</h1>
  </div>
</div>
</template>

<script lang="ts">
import * as _ from 'lodash';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Language } from '../types/Enum';
import { launchAndClearInterval } from '@/scripts/Utils/Times';

@Component({
  components: {
  },
})
export default class MainDecision extends Vue {
  @Prop({ required: true }) readonly timelaps!: number;

  public msg: string = '';
  private clearingDuration: number = 80;
  
  public mounted() {
    const welcomestr: string = 'Bonjour et bienvenue mon nom est Jean-david Nelson. Ce site me sert a présenter mes projets dans le cadre d\'un contrat de freelance, ou pour qu\'un recruteur puissent mieux me connaitre :)';
    this.displaySentence(welcomestr);
  }

  /*
  private async displaySentence(sentence: string): Promise<void> {
    let destructuredStr : string[] = sentence.split('');
    let index: number = 0;
    let timeoutID: any = null;

    while (index !== destructuredStr.length) {
      timeoutID = await setTimeout(() => {
        this.msg += destructuredStr[index];
      },this.timelaps);
      clearTimeout(timeoutID);
      index += 1;
      console.log("index " + index);
    }
  } */

  private clearSentence(): void {
    let clearing: any = null;
    
    clearing = setInterval(() => {
      if (this.msg.length === 0 || _.isNil(this.msg)) {
        clearInterval(clearing);
      } else {
        this.msg = this.msg.slice(0, -1);
      }
    }, this.clearingDuration);
  }

  
  private displaySentence(sentence: string): void {
    let destructuredStr : string[] = sentence.split('');
    let index: number = 0;
    let clearing: any = null;

    clearing = setInterval(async () => {
      this.msg += destructuredStr[index];
      index += 1;
      if (index === destructuredStr.length) {        
        clearInterval(clearing);
        await setTimeout(() => {
          this.clearSentence();
        }, 5000);
      }
    }, this.timelaps);
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

<template>
<div v-show="show" class="dropup-content" style="display: inline-flex;">
  <div class="first-colonne">
    <div class="boot-settings">
      <img src="/images/icons/settings.png">
      <img v-on:click="redirect('home')" src="/images/icons/power.png">
    </div>
  </div>
  <div class="colonne">
    <div class="desktop-selection">
      <p>Menu de Navigation</p>
    </div>
    <div class="desktop-selection">
      <div class="starting-logo">
        <img alt="Menu"  title="Menu" src="/images/moi2.png" />
      </div>
      <div class="text">
        <p>A propos de moi</p>
      </div>
    </div>
    <div class="desktop-selection">
      <div class="starting-logo">
        <img alt="Menu"  title="Menu" src="/images/icons/work.png" />
      </div>
      <div class="text">
        <p>Mes experiences</p>
      </div>
    </div>
    <div class="desktop-selection">
      <div class="starting-logo">
        <img alt="Menu"  title="Menu" src="/images/icons/skills.png" />
      </div>
      <div class="text">
        <p>Mes competences</p>
      </div>
    </div>
    <div class="desktop-selection">
      <div class="starting-logo">
        <img alt="Menu"  title="Menu" src="/images/icons/degree.png" />
      </div>
      <div class="text">
        <p>Mes diplomes</p>
      </div>
    </div>
    <div class="desktop-selection">
      <div class="starting-logo">
        <img alt="Menu"  title="Menu" src="/images/icons/freelance.png" />
      </div>
      <div class="text">
        <p>Mes projets</p>
      </div>
    </div>
    <div class="desktop-selection">
      <div class="starting-logo">
        <img alt="Menu"  title="Menu" src="/images/icons/cv.png" />
      </div>
      <div class="text">
        <p>Cv</p>
      </div>
    </div>
    <div class="desktop-selection">
      <div class="starting-logo">
        <img alt="Menu"  title="Menu" src="/images/icons/contact2.png" />
      </div>
      <div class="text">
        <p>Contact</p>
      </div>
    </div>
    <div class="desktop-selection" v-on:click="redirect('github')">
      <div class="starting-logo">
        <img alt="Menu"  title="Menu" src="/images/icons/github.png" />
      </div>
      <div class="text">
        <p>Github</p>
      </div>
    </div>
    <div class="desktop-selection" v-on:click="redirect('linkedin')">
      <div class="starting-logo">
        <img alt="Menu"  title="Menu" src="/images/icons/linkedin.png" />
      </div>
      <div class="text">
        <p>Linkedin</p>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import * as _ from 'lodash';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Language, VisitorType } from '../types/Enum';
import { launchAndClearInterval } from '@/scripts/Utils/Times';
import { ShortCutIcon } from "@/types/Interface";
import Shortcut from "./Shortcut.vue";

@Component({
  components: {
  },
})
export default class BootMenu extends Vue {

  @Prop({ required: true }) readonly show!: boolean;

  private redirect(link: string): void {
    switch(link) {
      case "linkedin":
        window.open('https://www.linkedin.com/in/jean-david-nelson/', '_blank');
        break;
      case "github":
        window.open('https://github.com/jdavidnel', '_blank');
        break;
      case "home":
        window.location.href = "http://localhost:8080/";
        break;
      default:
        break;
    }
  }

  private setVisitor(type: VisitorType): void {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/_typo.scss';

.first-colonne {
  margin-right: 15px;
  width: 40px;
}

.colonne {
  margin-right: 30px;
  margin-left: 15px;
}

.boot-settings {
  max-width: 40px;
  padding: 5px;
  position: fixed;
  bottom: 65px;
  margin-bottom: 0;
  img {
    width: 100%;
    padding: 5px;
    margin-bottom: 5px;
  }
}

.boot-settings img:hover {
  background: rgba(180, 181, 176, 0.2);
  border: 1px solid #949494;
}
.desktop-selection {
  margin: 5px 0 5px 0;
  padding-left: 10px;
  p {
    margin: 5px 15px 5px 10px;
  }

  .text {
    text-align: center;
    vertical-align: middle;
    line-height: 45px;
  }

  .starting-logo {
    max-width: 50px;
    background-color: white;
    img {
      width: 100%;
    }
  }
}

.dropup-content {
  display: none;
  position: absolute;
  background-color: black;
  min-width: 160px;
  bottom: 65px;
  z-index: 1;
  padding: 5px 10px 10px 10px;
}

.dropup-content .desktop-selection {
  color: white;
  display: flex;
  font-family: "ubuntu";
  font-size: 15px;
}

.dropup-content .desktop-selection:hover {
  background: rgba(180, 181, 176, 0.2);
  border: 0.5px solid #949494;
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes animatehover {
  from {
    border: 0;
  }
  to {
    border: 0.5px solid #949494;
  }
}

@keyframes animatehover {
  from {
    border: 0;
  }
  to {
    border: 0.5px solid #949494;
  }
}

.dropup:hover .dropbtn {
  background-color: #2980B9;
}


.logo {
  max-width: 65px;
  padding: 15px;
  img {
    width: 100%;
  }
}

</style>

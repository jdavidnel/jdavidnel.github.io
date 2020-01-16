<template>
<div class="window-container">
  <div class="row-custom first-line window-controls-top justify-content-between">
    <div class="windows-icons-top-left windows-icons-top">
      <img src="../assets/icons/windows/folder.png" />
      <img src="../assets/icons/windows/file.png" />
      <img src="../assets/icons/windows/document.png" />
      <p class="windows-title">{{title}}</p>
    </div>
    <div class="windows-icons-top-right windows-icons-top">
      <div class="window-controls">
        <img class="window-hover" src="../assets/icons/windows/line.png" />
      </div>
      <div class="window-controls window-hover">
        <img class="window-hover" src="../assets/icons/windows/square.png" />
      </div>
      <div class="window-controls  window-hover-close">
        <img class="window-hover-close" src="../assets/icons/windows/closecross.png" />
      </div>
    </div>
  </div>
  <div class="row-custom window-fake-nav window-controls-top justify-content-between">
    <div class="window-first-link">Fichier</div>
    <div class="window-navboard">Accueil</div>
    <div class="window-navboard">Partage</div>
    <div class="window-navboard">Affichage</div>
  </div>
  <div class="row-custom windows-content">
    <slot>Aucun fichier n'as été ouvert</slot>
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
export default class Window extends Vue {

  @Prop({ default: "Explorateur de fichiers" }) readonly title!: string;

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

.window-first-link {
  background-color: #044e98;
  color: white;
}

.window-navboard:hover {
  border: 1px solid #c9c9c9;
}

.first-line {
  margin-bottom: 10px;
}

.window-fake-nav {
  div {
    display: inline;
    padding: 10px;
  }
  text-align: left;
  border-bottom: 1px solid #c9c9c9;
  font-size: 15px;
}

.row-custom {
  display: block;
}

.window-hover:hover {
  background-color: grey;
}

.window-hover-close:hover {
  background-color: red;
}

.windows-content {
  height: 640px;
}

.window-controls-top {
  height: 30px;
}

.window-container {
  width: 1200px;
  height: 700px;
  background-color: white;
  position: absolute;
  color: black;
  overflow: hidden;
  top: 15%;
  left: 350px;
}


.windows-icons-top-left {
  float: left;
  padding: 5px 0 0 10px;

}

.windows-icons-top-right {
  float: right;
}

.windows-icons-top {  
  p {
    display: inline;
  }

  img {
    width: 100%;
    max-width: 20px;
    display: inline;
  }
}

.windows-icons-top-left img {
  color: grey;
  font-weight: bold;
  font-size: 25px;
}


.windows-icons-top-left img::after {
  content: '|';
  color: grey;
  font-weight: bold;
  font-size: 25px;
}

.window-controls {
  display: inline;
  
  img {
    max-width: 30px;
    padding: 5px;
  }

  .window-hover img:hover {
    background-color: grey;
  }
  
}

</style>

<template>
<div ref="windowcontent" v-on:click="focusWindow" v-if="visible" v-draggable="draggableValue" class="window-container">
  <div class="row-custom first-line window-controls-top justify-content-between">
    <div class="windows-icons-top-left windows-icons-top">
      <img src="@/assets/icons/windows/folder.png" />
      <img src="@/assets/icons/windows/file.png" />
      <img src="@/assets/icons/windows/document.png" />
      <p class="windows-title">{{title}}</p>
    </div>
    <div class="windows-icons-top-right windows-icons-top">
      <div v-on:click="reduce()" class="window-controls">
        <img class="window-hover" src="@/assets/icons/windows/line.png" />
      </div>
      <div class="window-controls window-hover">
        <img class="window-hover" src="@/assets/icons/windows/square.png" />
      </div>
      <div v-on:click="close()" class="window-controls  window-hover-close">
        <img class="window-hover-close" src="@/assets/icons/windows/closecross.png" />
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
    <Skills v-if="check('Compétences')"/>
    <Experiences v-else-if="check('Expériences')" />
    <Degree v-else-if="check('Diplômes')" />
    <!-- <AboutMe v-if="title === 'AboutMe'" />
    <Skills v-else-if="title === 'Skills'" />
    <Expertise v-else-if="title === 'Expertise'" />
    <div v-else>
      {{title}}
    </div> -->
  </div>
</div>
</template>

<script lang="ts">
import * as _ from 'lodash';
import $ from 'jquery';
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import { Draggable } from 'draggable-vue-directive';
import { Guid } from 'guid-typescript';

import { Language, VisitorType } from '@/types/Enum';
import { ShortCutIcon, PortfolioWindowReduced } from '@/types/Interface';

import Shortcut from './Shortcut.vue';
import {
  Skills, AboutMe, Expertise, Experiences, Degree,
} from './windowContent';

import { launchAndClearInterval } from '@/scripts/Utils/Times';

@Component({
  components: {
    Skills,
    AboutMe,
    Expertise,
    Experiences,
    Degree,
  },
  directives: {
    Draggable,
  },
})
export default class Window extends Vue {
  @Prop({ default: 'Explorateur de fichiers' }) readonly title!: string;

  @Prop({ default: () => Guid.create() }) readonly id!: Guid;

  public visible: boolean = true;

  public handleId:string = 'handle-id';

  public draggableValue: any = {
    handle: undefined,
  };

  // private currentTab: any =  'Skills';
  // private tabs:string[] = ['Skills', 'AboutMe', 'Expertise', 'Experiences'];
  private instance: PortfolioWindowReduced = { id: this.id.toString(), instance: this };

  private check: Function = (str: string) => (this.title === str)

  private focusWindow() {
    console.log('Emit focus from normal windows');
    this.$emit('Window::Focus::Get', this.instance);
  }

  public addFocus() {
    const element: Element = (this.$refs.windowcontent as Element);
    if (_.isNil(element)) {
      throw new Error('Element introuvable');
    }
    $(element).addClass('focus-on');
  }

  public removeFocus() {
    const element: Element = (this.$refs.windowcontent as Element);
    if (_.isNil(element)) {
      throw new Error('Element introuvable');
    }
    $(element).removeClass('focus-on');
  }

  public mounted() {
    console.log(`constructeur windows ${this.id.toString()}`);
    this.visible = true;
    this.draggableValue.handle = this.$refs[this.handleId];
  }

  private redirect(link: string): void {
    switch (link) {
      case 'linkedin':
        window.open('https://www.linkedin.com/in/jean-david-nelson/', '_blank');
        break;
      case 'github':
        window.open('https://github.com/jdavidnel', '_blank');
        break;
      case 'home':
        window.location.href = 'http://localhost:8080/';
        break;
      default:
        break;
    }
  }

  public Open() {
    this.visible = true;
  }

  private close() {
    this.visible = false;
    this.$emit('Window::Close', this.instance);
    // this.$destroy();
  }

  private reduce() {
    this.$emit('Window::Reduce', this.instance);
    this.visible = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

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

.focus-on {
  z-index: 2000;
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
  max-height: 630px;
  overflow-x: scroll;
}

.window-controls-top {
  height: 30px;
}

.window-container {
  max-width: 1200px;
  max-height: 700px;
  background-color: white;
  position: absolute;
  color: black;
  overflow: hidden;
  top: 15%;
  left: 350px;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(51,50,51,1);
  -moz-box-shadow: 0px 0px 20px 0px rgba(51,50,51,1);
  box-shadow: 0px 0px 20px 0px rgba(51,50,51,1);
}


.windows-icons-top-left {
  float: left;
  padding: 5px 0 0 10px;
  font-size: 15px;
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
    padding: 10px;
  }

  .window-hover img:hover {
    background-color: grey;
  }

}

</style>

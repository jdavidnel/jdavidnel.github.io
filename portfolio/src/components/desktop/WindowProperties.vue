<template>
<div ref="windowcontent" v-on:click="focusWindow" v-if="visible" v-draggable="draggableValue" class="window-container">
  <div class="row-custom window-controls-top first-line justify-content-between">
    <div class="windows-icons-top-left windows-icons-top">
      <img src="@/assets/icons/skills/folder.png" />
      <p class="windows-title">Propriété de: {{title}}</p>
    </div>
    <div class="windows-icons-top-right windows-icons-top">
      <div v-on:click="close()" class="window-controls  window-hover-close">
        <img class="window-hover-close" src="@/assets/icons/windows/closecross.png" />
      </div>
    </div>
  </div>
  <div class="row-custom window-fake-nav window-controls-top justify-content-between">
    <div class="window-navboard">Géneral</div>
    <div class="window-navboard">Sécurité</div>
    <div class="window-navboard">Détails</div>
    <div class="window-navboard">Version précédente</div>
  </div>
  <div class="row-custom windows-content">
    <div class="row-custom">
      <AboutMe v-if="check('Qui suis-je ?')" />
      <Contact v-else-if="check('Contact')" />
    </div>
  </div>
  <div class="row-custom padCustom">
    <button type="button" v-on:click="close()">OK</button>
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
import { PortfolioWindowPropsReduced } from '@/types/Interface';

import Shortcut from './Shortcut.vue';
import {
  Skills, AboutMe, Expertise, Experiences, Contact,
} from '@/components/desktop/windowContent';

import { launchAndClearInterval } from '@/scripts/Utils/Times';

@Component({
  components: {
    Skills,
    AboutMe,
    Expertise,
    Experiences,
    Contact,
  },
  directives: {
    Draggable,
  },
})
export default class WindowProperties extends Vue {
  @Prop({ default: 'Explorateur de fichiers' }) readonly title!: string;

  @Prop({ default: () => Guid.create() }) readonly id!: Guid;

  public visible: boolean = true;

  private currentTab: any = 'Skills';

  private tabs:string[] = ['Skills', 'AboutMe', 'Expertise', 'Experiences'];

  public handleId:string = 'handle-id';

  public draggableValue: any = {
    handle: undefined,
  };

  private refWindowContent?: Element = undefined;

  private instance: PortfolioWindowPropsReduced = { id: this.id.toString(), instance: this };


  private check: Function = (str: string) => (this.title === str)

  private focusWindow() {
    this.$root.$emit('Window::Focus::Get', this.instance);
  }

  public addFocus() {
    if (_.isNil(this.refWindowContent)) {
      console.log(this.refWindowContent);
      throw new Error("Add focus element isn't Possible , element not found");
    }
    $(this.refWindowContent).addClass('focus-on');
  }

  public removeFocus() {
    if (_.isNil(this.refWindowContent)) {
      console.log(this.refWindowContent);
      throw new Error("Remove focus element isn't Possible , element not found");
    }
    $(this.refWindowContent).removeClass('focus-on');
  }

  public mounted() {
    console.log('constructeur windows');
    this.draggableValue.handle = this.$refs[this.handleId];
    this.refWindowContent = this.$refs.windowcontent as Element;
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

  private close() {
    console.log(`Event close windows value : ${this.visible} with indentifiant`);
    this.visible = false;
    this.$emit('Window::Close', this.instance);
    console.log(`apres event close windows value : ${this.visible} with indentifiant`);
  }

  private setVisitor(type: VisitorType): void {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.padCustom {
  padding: 10px 10px;
  text-align: right;

  button {
    width: 70px;
    border: 1px solid grey;
  }

  button:hover{
    border: 1px solid blue;
  }
}

.window-first-link {
  background-color: #044e98;
  color: white;
}

.window-navboard:first-of-type {
  border-top: 1px solid #c9c9c9;
  border-left: 1px solid #c9c9c9;
  border-right: 1px solid #c9c9c9;
  border-bottom: none;
  background-color: white;
}

.focus-on {
  z-index: 2000;
}

.window-navboard:not(:first-of-type):hover {
  background-color: #D1E8F3;
}

.window-navboard {
  border-top: 1px solid #c9c9c9;
  border-right: 1px solid #c9c9c9;
  border-bottom: 1px solid #c9c9c9;
}

.window-fake-nav {
  margin: 0px 10px;
  background-color: #efefef;
  div {
    display: inline;
    padding: 5px;
    font-size: 10px;
  }
  text-align: left;
  /*border-bottom: 1px solid #c9c9c9;*/
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
  height: calc(100% - 20%);
  background-color: #ffffff;
  margin: 0 10px;
  border-left: 1px solid #c9c9c9;
  border-right: 1px solid #c9c9c9;
  border-bottom: 1px solid #c9c9c9;
  padding-bottom: 5px;
}

.window-controls-top {
  height: 25px;
}

.first-line {
  margin-bottom: 10px;
  background-color: white;
  height: 30px;
}
.window-container {
  max-width: 500px;
  max-height: 600px;
  background-color: #efefef;
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
    margin-right: 10px;
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
    margin: 0;
  }

  .window-hover img:hover {
    background-color: grey;
  }

}

.logo {
  max-width: 45px;
  img {
    width: 100%
  }
}
</style>

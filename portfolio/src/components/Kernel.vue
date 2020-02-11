<template>
  <div id="wallpaper" class="full-div">
    <div ref="windowcontainer" class="main-content align-items-center">
      <div id="desktop" class="col">
        <Shortcut
          v-for="item in ShortCutData"
          v-bind:data="item"
          v-bind:key="item.name"
        />
        <WindowProperties />     
      </div>
    </div>
    <div ref="window-taskbar" class="navbar-desktop">
      <BootMenu v-bind:show="bootMenu" />
      <div class="logo dropup" v-on:click="boot">
        <img alt="Menu"  title="Menu" src="../assets/icons/windows.png" />
      </div>
      <div class="logo">
        <img alt="Recherche" title="Recherche" src="../assets/icons/glass.png" />
      </div>
      <div class="logo">
        <img alt="Mes competences" title="Mes competences" src="../assets/icons/skills2.png" />
      </div>
      <div class="logo">
        <img alt="Mes diplômes" title="Mes diplômes" src="../assets/icons/degree2.png" />
      </div>
      <div class="logo">
        <img alt="CV" title="CV" src="../assets/icons/cv2.png" />
      </div>
      <div class="logo">
        <img alt="Mes réalisations" title="Mes réalisations" src="../assets/icons/freelance2.png" />
      </div>
      <div class="logo">
        <img alt="contact" title="contact" src="../assets/icons/contact2.png" />
      </div>
      <div class="logo">
        <img alt="github" title="github" src="../assets/icons/github2.png" />
      </div>
      <div class="logo">
        <img alt="linkedin" title="linkedin" src="../assets/icons/linkedin.png" />
      </div>
      <div 
        v-for="item in test"
        v-bind:data="item"
        v-bind:key="item.id">
        <div v-on:click="openReducedWindow(item.id)" :data="item.id" class="logo active">
          <img alt="linkedin" title="linkedin" src="../assets/icons/linkedin.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import * as _ from 'lodash';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Language, VisitorType, WindowState } from '../types/Enum';
import { launchAndClearInterval } from '@/scripts/Utils/Times';
import { ShortCutIcon } from "@/types/Interface";
import Shortcut from "./Shortcut.vue";
import BootMenu from "./BootMenu.vue";
import Window from "./Window.vue";
import { createWindow, createWindowProps } from "../scripts/Utils/WindowsCreator";
import { SlotItem, PortfolioWindow, PortfolioWindowReduced, PortfolioWindowProps, PortfolioWindowPropsReduced } from '@/types/Interface';
import WindowProperties from './WindowProperties.vue';
import { Guid } from 'guid-typescript';

@Component({
  components: {
    Shortcut,
    BootMenu,
    Window,
    WindowProperties
  },
})
export default class Kernel extends Vue {
  
  private ShortCutData: ShortCutIcon[] = [
    { name: "Qui suis-je ?", link: "/images/moi2.png", color: "white"},
    { name: "Experiences", link: "/images/icons/work.png", color: "#F8F8F8"},
    { name: "Competences", link: "/images/icons/skills.png", color: "#84F0DB"},
    { name: "Diplomes", link: "/images/icons/degree2.png", color: "transparent"},
    { name: "CV", link: "/images/icons/cv2.png", color: "transparent"},
    { name: "Contact", link: "/images/icons/contact.png", color: "white"},
  ];
  private windows: Map<string,any> = new Map();
  private windowsProps: Map<string,any> = new Map();

  private bootMenu: boolean = false;

  public handleId:string = "handle-id";
  public draggableValue: any =  {
      handle: undefined
  };

  public test: Function | null = null;

  get windowsReduced() {

    let newarray: PortfolioWindowReduced[] = [];

    this.windows.forEach((value:PortfolioWindow, key: string, map: Map<string,PortfolioWindow>) => {
      if(value.state === WindowState.REDUCED) {
        newarray.push({ id: key, instance: value.instance });
      }
    });
    return newarray;
  }

  public mounted() {
    this.test = () => {
      let newarray: PortfolioWindowReduced[] = [];

      this.windows.forEach((value:PortfolioWindow, key: string, map: Map<string,PortfolioWindow>) => {
        if(value.state === WindowState.REDUCED) {
          newarray.push({ id: key, instance: value.instance });
        }
      });
      return newarray;
    };
    this.draggableValue.handle = this.$refs[this.handleId];

    this.$root.$on('Window::Props::Open', (item: SlotItem) => {
      console.log("tentative d'ouverture de window props");
      let newWindow: PortfolioWindowProps = createWindowProps(item.title);

      if (this.windowsProps.get(newWindow.id.toString())) {
        return;
      }

      newWindow.instance.$on("Window::Close", (item: PortfolioWindowPropsReduced ) => {
        let fakeWindow: PortfolioWindowProps | undefined = this.windowsProps.get(item.id);
        if (!fakeWindow || _.isNil(fakeWindow)) {
          return;
        }
        //fakeWindow.instance.$destroy();
        this.windowsProps.delete(item.id);
      });
      newWindow.instance.$on("Window::Focus::Get", (item: PortfolioWindowPropsReduced) => {
        this.windowsProps.forEach((value:PortfolioWindowProps, key: string, map: Map<string,PortfolioWindowProps>) => {
          if(key === item.id) {
            value.instance.addFocus();
          } else {
            value.instance.removeFocus();
          }
        });
      });

      this.windows.set(newWindow.id.toString(), newWindow);
      let element: Element = (this.$refs.windowcontainer as Element);
      if (!_.isNil(element)) {
        element.appendChild(newWindow.instance.$el);
      }

    });

    this.$root.$on('Window::Open', (item: SlotItem) => {
      let newWindow: PortfolioWindow = createWindow(item.title, item.component);

      if (this.windows.get(newWindow.id.toString())) {
        return;
      }

      newWindow.instance.$on("Window::Close", (item: PortfolioWindowReduced ) => {
        let fakeWindow: PortfolioWindow | undefined = this.windows.get(item.id);
        if (!fakeWindow || _.isNil(fakeWindow)) {
          return;
        }
        //fakeWindow.instance.$destroy();
        this.windows.delete(item.id);
      });

      newWindow.instance.$on("Window::Reduce", (item: PortfolioWindowReduced ) => {
        newWindow.state = WindowState.REDUCED;
      });

      newWindow.instance.$on("Window::Focus::Get", (item: PortfolioWindowReduced) => {
        this.windows.forEach((value:PortfolioWindow, key: string, map: Map<string,PortfolioWindow>) => {
          if(key === item.id) {
            value.instance.addFocus();
          } else {
            value.instance.removeFocus();
          }
        });
      });

      this.windows.set(newWindow.id.toString(), newWindow);
      let element: Element = (this.$refs.windowcontainer as Element);
      if (!_.isNil(element)) {
        element.appendChild(newWindow.instance.$el);
      }
    });

  }

  private boot(){
    if (this.bootMenu === true)
      this.bootMenu = false;
    else 
      this.bootMenu = true;
  }

  private openReducedWindow(id: string) {
    console.log(`Ouverture d'une fenetre reduite ${id}`);
    let fakeWindow: PortfolioWindow | undefined = this.windows.get(id);
    if (!fakeWindow || _.isNil(fakeWindow)) {
      console.log("id de la fenetre n'existe pas !");
      return;
    }
    fakeWindow.state = WindowState.OPENED;
    this.windows.delete(id);
    this.windows.set(id, fakeWindow);
    fakeWindow.instance.Open();
  }
  
  private setVisitor(type: VisitorType): void {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/_typo.scss';

/*
.windowcontainer {
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 0;
}
*/
.desktop-selection {
  p {
    margin: 5px 0px 5px 15px;
  }

  .starting-logo {
    max-width: 45px;

    img {
      width: 100%;
    }
  }
}

.main-content {
  height: 100%;
}

#desktop {
  padding: 20px 3% 0 3%;
  height: 100% !important;
}

#dropup {
  display: none;
  /*
  position: relative;
  display: inline-block; */
}

.dropup-content {
  display: none;
  position: absolute;
  background-color: rgba(25, 36, 41, 0.98);
  min-width: 160px;
  bottom: 65px;
  z-index: 1;
}

.dropup-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-family: "ubuntu";
  font-size: 15px;
}

.dropup-content a:hover {background: rgba(180, 181, 176, 0.2);}

.dropup:hover .dropup-content {
  display: block;
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

.navbar-desktop {
  background-color: rgba(29, 42, 48, 0.98);
  position: fixed;
  bottom: 0;
  margin-bottom: 0;
  width: 100%;
  padding: 0px 5px 0px 5px;
  text-align: left;
}

/*
.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
*/

.navbar-desktop div {
  display: inline-flex;
}

.navbar a:hover {
  background: #f1f1f1;
  color: black;
}

.logo:hover {
    background: rgba(148, 148, 148, 0.26);

}

.navbar a.active {
  background-color: #4CAF50;
  color: white;
}
</style>

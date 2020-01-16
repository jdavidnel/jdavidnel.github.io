<template>
  <div id="wallpaper" class="full-div">
    <div class="main-content align-items-center">
       <window />
      <div id="desktop" class="col">
        <Shortcut
          v-for="item in ShortCutData"
          v-bind:data="item"
          v-bind:key="item.name"
        />       
      </div>
    </div>
    <div class="navbar-desktop">
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
      <div class="logo active">
        <img alt="linkedin" title="linkedin" src="../assets/icons/linkedin.png" />
      </div>
      <div class="logo active">
        
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
import BootMenu from "./BootMenu.vue";
import Window from "./Window.vue";

@Component({
  components: {
    Shortcut,
    BootMenu,
    Window
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

  private bootMenu: boolean = false;

  public mounted() {

  }

  private boot(){
    console.log("avant");
    console.log(this.bootMenu);
    if (this.bootMenu === true)
      this.bootMenu = false;
    else 
      this.bootMenu = true;
    console.log("apres");
    console.log(this.bootMenu);
  }
  private setVisitor(type: VisitorType): void {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/_typo.scss';

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
  background-color: black;
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
  background-color: black;
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

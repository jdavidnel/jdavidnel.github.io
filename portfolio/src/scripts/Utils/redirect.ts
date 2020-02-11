import Vue from 'vue';
import { SlotItem } from '@/types/Interface';
import { Skills, Experiences, AboutMe } from "@/components/windowContent";

function redirect(link: string, emiteur: Vue): void {
    switch(link) {
      case "linkedin":
        window.open('https://www.linkedin.com/in/jean-david-nelson/', '_blank');
        break;
      case "github":
        window.open('https://github.com/jdavidnel', '_blank');
        break;
      case "Skills":
        console.log("skills emition");
        windowOpening(emiteur, { title: 'Skills', component: new Skills()});
        break;
      case "AboutMe":
          console.log("About me event loading");
          windowPropsOpening(emiteur, { title: 'A propos de moi', component: new AboutMe()});
          break;
      case "Experiences":
          console.log("Experiences emition");
          windowOpening(emiteur, { title: 'Experiences', component: new Experiences()});
          break;
      case "home":
        window.location.href = "http://localhost:8080/";
        break;
      default:
        break;
    }
}

function windowOpening(emiteur: Vue, item: SlotItem) {
    emiteur.$root.$emit('Window::Open', item);
}

function windowPropsOpening(emiteur: Vue, item: SlotItem) {
  emiteur.$root.$emit('Window::Props::Open', item);
}


export {
    redirect
}

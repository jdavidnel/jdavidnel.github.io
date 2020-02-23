import Vue from 'vue';
import { SlotItem } from '@/types/Interface';
import {
  Skills, Experiences, AboutMe, Degree, Contact,
} from '@/components/desktop/windowContent';

function redirect(link: string, emiteur: Vue): void {
  switch (link) {
    case 'Linkedin':
      window.open('https://www.linkedin.com/in/jean-david-nelson/', '_blank');
      break;
    case 'Github':
      window.open('https://github.com/jdavidnel', '_blank');
      break;
    case 'Contact':
      windowPropsOpening(emiteur, { title: 'Contact', component: new Contact() });
      break;
    case 'Compétences':
      windowOpening(emiteur, { title: 'Compétences', component: new Skills() });
      break;
    case 'Diplômes':
      windowOpening(emiteur, { title: 'Diplômes', component: new Degree() });
      break;
    case 'Cv':
      window.open('/file/CV_jeandavidnelson.pdf', 'Cv Francais Jean-David Nelson');
      break;
    case 'Qui suis-je ?':
      windowPropsOpening(emiteur, { title: 'Qui suis-je ?', component: new AboutMe() });
      break;
    case 'Expériences':
      windowOpening(emiteur, { title: 'Expériences', component: new Experiences() });
      break;
    case 'Home':
      window.location.href = '/';
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
  redirect,
};

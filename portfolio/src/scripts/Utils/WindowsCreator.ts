
import Vue, { VNode } from 'vue';
import { Guid } from 'guid-typescript';
import { PortfolioWindow, PortfolioWindowProps } from '@/types/Interface';
import { WindowState } from '@/types/Enum';

import WindowCustom from '@/components/desktop/Window.vue';
import WindowProperties from '@/components/desktop/WindowProperties.vue';


function createWindow(title: string, Component: Vue) : PortfolioWindow {
  // let ComponentWindow = Vue.extend(WindowJS);
  const id: Guid = Guid.create();

  const instance = new WindowCustom({
    propsData: { title, id },
  });
  instance.$mount(); // pass nothing
  const data: PortfolioWindow = {
    id,
    instance,
    title,
    state: WindowState.OPENED,
  };
  // Component.$mount();
  return data;
}


function createWindowProps(title: string) : PortfolioWindowProps {
  // let ComponentWindow = Vue.extend(WindowJS);
  const id: Guid = Guid.create();

  const instance = new WindowProperties({
    propsData: { title, id },
  });
  instance.$mount(); // pass nothing
  const data: PortfolioWindowProps = {
    id,
    instance,
    title,
    state: WindowState.OPENED,
  };
  // Component.$mount();
  return data;
}


export {
  createWindow,
  createWindowProps,
};

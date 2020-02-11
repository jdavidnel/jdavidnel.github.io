import { PortfolioWindow, PortfolioWindowProps } from "../../types/Interface";
import Window from "../../components/Window.vue";
import WindowProperties from "../../components/WindowProperties.vue";
import Vue, { VNode } from 'vue';
import { Guid } from "guid-typescript";
import { WindowState } from '@/types/Enum';



function createWindow(title: string, Component: Vue) : PortfolioWindow {
    //let ComponentWindow = Vue.extend(WindowJS);
    let id: Guid = Guid.create();

    let instance = new Window({
        propsData: { title: title, id: id }
    });
    instance.$mount(); // pass nothing
    let data: PortfolioWindow = {
        id: id,
        instance: instance,
        title: title,
        state: WindowState.OPENED
    }
    //Component.$mount();
    return data;
}


function createWindowProps(title: string) : PortfolioWindowProps {
    //let ComponentWindow = Vue.extend(WindowJS);
    let id: Guid = Guid.create();

    let instance = new WindowProperties({
        propsData: { title: title, id: id }
    });
    instance.$mount(); // pass nothing
    let data: PortfolioWindowProps = {
        id: id,
        instance: instance,
        title: title,
        state: WindowState.OPENED
    }
    //Component.$mount();
    return data;
}


export {
    createWindow,
    createWindowProps,
}
import Vue from 'vue';
import { Guid } from "guid-typescript";
import { WindowState } from './Enum';
import AWindow from "../components/AWindow";
import Window from "../components/Window.vue";
import WindowProperties from "../components/WindowProperties.vue";

export interface ShortCutIcon {
    name: string;
    link: string;
    color: string;
};


export interface SlotItem {
    title: string;
    component: Vue;
}

export interface PortfolioWindow {
    id: Guid;
    instance: Window;
    title: string;
    state: WindowState;
}

export interface PortfolioWindowProps {
    id: Guid;
    instance: WindowProperties;
    title: string;
    state: WindowState;
}

export interface PortfolioWindowReduced {
    id: string;
    instance: Window;
}

export interface PortfolioWindowPropsReduced {
    id: string;
    instance: WindowProperties;
}
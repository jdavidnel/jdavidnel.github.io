import Vue, { VNode } from 'vue';
import { PortfolioWindow, PortfolioWindowReduced } from '@/types/Interface';

export const serverBus = new Vue();

const windowsReduced: PortfolioWindowReduced[] = [];

export {
  windowsReduced,
};

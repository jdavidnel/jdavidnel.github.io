import * as _ from 'lodash';
import $ from 'jquery';
import { Prop, Vue } from 'vue-property-decorator';
import { PortfolioWindowReduced } from "@/types/Interface";
import Shortcut from "./Shortcut.vue";
import { Skills, AboutMe, Expertise, Experiences } from "./windowContent";
import { Draggable } from 'draggable-vue-directive';
import { Guid } from "guid-typescript";

export default abstract class AWindow extends Vue {

    /*@Prop({ default: "Explorateur de fichiers" }) readonly title!: string;
    @Prop({ default: () => { return Guid.create();} }) readonly id!: Guid;
  
    public visible: boolean = true;
    public handleId:string = "handle-id";
    public draggableValue: any =  {
        handle: undefined
    };*/
  
    //private currentTab: any =  'Skills';
    //private tabs:string[] = ['Skills', 'AboutMe', 'Expertise', 'Experiences'];
  
    /*private check: Function = (str: string) => {
      return (this.title === str);
    }
    
    public addFocus() {
      let element: Element = (this.$refs.windowcontent as Element);
      if (_.isNil(element)) {
        throw new Error("Element introuvable");
      }
      $(element).addClass("focus-on");
    }
  
    public removeFocus() {
      let element: Element = (this.$refs.windowcontent as Element);
      if (_.isNil(element)) {
        throw new Error("Element introuvable");
      }
      $(element).removeClass("focus-on");
    }

    abstract mounted(): void;
  
    private redirect(link: string): void {
      switch(link) {
        case "linkedin":
          window.open('https://www.linkedin.com/in/jean-david-nelson/', '_blank');
          break;
        case "github":
          window.open('https://github.com/jdavidnel', '_blank');
          break;
        case "home":
          window.location.href = "http://localhost:8080/";
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
      this.$emit("Window::Close",this.instance);
      //this.$destroy();
    }
  
    private reduce() {
      this.$emit("Window::Reduce", this.instance);
      this.visible = false;
    } */
  }
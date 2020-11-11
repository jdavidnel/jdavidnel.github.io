<template>
  <div class="full-content">
    <div class="row">
      <div class="icons-row col-md-4">
        <div class="icons">
          <img src="@/assets/moi.jpg" alt="jean-david Nelson" />
        </div>
      </div>
      <div class="col-md-8">
        <div class="table">
          <div class="cell-vertical-table">
            <input class="input-window-props form-control" type="text" placeholder="Présentation" readonly>
          </div>
        </div>
      </div>
    </div>
    <div class="side-bar row-custom">
      <div class="col-md-12">
      </div>
    </div>
    <div class="row-content row">
      <div class="padl30 col-md-4">
        <span>Description :</span>
      </div>
      <div class="padr30 col-md-8">
        <span>{{highco}}</span>
      </div>
    </div>
  </div>
            <!-- <div class="row">
              <div class="col-md-3" data-animate-effect="fadeInLeft">
                <div class="services color-1">
                  <span class="icon2"><i class="icon-bulb"></i></span>
                  <h3>Business Developpment</h3>
                </div>
              </div>
              <div class="col-md-3" data-animate-effect="fadeInRight">
                <div class="services color-2">
                  <span class="icon2"><i class="icon-layers2"></i></span>
                  <h3>Web Front and Back End</h3>
                </div>
              </div>
              <div class="col-md-3 " data-animate-effect="fadeInTop">
                <div class="services color-3">
                  <span class="icon2"><i class="icon-data"></i></span>
                  <h3>Software</h3>
                </div>
              </div>
              <div class="col-md-3 " data-animate-effect="fadeInBottom">
                <div class="services color-4">
                  <span class="icon2"><i class="icon-phone3"></i></span>
                  <h3>Application</h3>
                </div>
              </div>
            </div> -->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { WorkExperience } from "@/types/Enum";
import $ from 'jquery';

@Component
export default class ExperienceDetails extends Vue {

  private dataExperience: Map<WorkExperience, string> = new Map();
  private experienceSpeech: string[] = [
    "Dans le cadre d'un stage en conception et développement, j'accompagne la societé Alteva dans toutes les étapes de création d'un ETL modulaire (Extraxt-Transform-Load) de la conception au developpement, sur plusieurs problématiques telles que celles liées aux coûts, et à la perfomance du programme (transfert de données dans un service tiers de cloud).",
    "Dans le cadre d'un stage,j'ai intégré l'équipe de recherche Paragraphe de l'université PARIS 8 et travailler sur plusieurs projets transversaux pour la bibliotheque nation de france. j'ai pu participer a la réalisation du projet \"Theatromania\", une application de réalité augmenté permettant de visiter et rédécouvrir la bibliotheque national de france."  ];
  @Prop({ required: true }) readonly experience!: string;

  private initFlag() {
    //dataExperience.set()
  }
  public mounted() {
    //dataExperience.
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.table {
  width: 100%;
  height: 100%;
  display: table;

  .cell-vertical-table {
    display: table-cell;
    vertical-align: middle;
  }
}

.icons-row{
  padding: 15px 15px 15px 30px;
}

.padl30 {
  padding-left: 30px;
}

.padr30 {
  padding-right: 30px;
}

.input-window-props {
  max-width: 250px;
}
.side-bar{
  height: 5px;
  padding: 0px 15px;
  margin: 10px 0px;

  div {
    border-bottom: 1px solid black;
  }
}
.row-content {
  padding: 5px 0px
}

.full-content {
  width: 100%;
  text-align: left;
  font-size: 1.2em;
}

.row-custom {
  display: block;

  .icons {
    max-width: 60px;
    img {
      width: 100%;
    }
  }
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

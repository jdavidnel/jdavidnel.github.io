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
        <span>Nom Prénom :</span>
      </div>
      <div class="col-md-8">
        <span>
          <strong>Nelson Jean-David</strong>
        </span>
      </div>
    </div>
    <div class="row-content row">
      <div class="padl30 col-md-4">
        <span>Age :</span>
      </div>
      <div class="col-md-8">
        <span>25 ans</span>
      </div>
    </div>
    <div class="row-content row">
      <div class="padl30 col-md-4">
        <span>Permis :</span>
      </div>
      <div class="col-md-8">
        <span>Permis A2, B</span>
      </div>
    </div>
    <div class="row-content row">
      <div class="padl30 col-md-4">
        <span>Qualitées :</span>
      </div>
      <div class="col-md-8">
        <span>Ambitieux, Autonome, Curieux, Inventif</span>
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
        <span>Formé à devenir expert et à performer dans tout les domaine de l'informatique , mes compétences s'étendent sur plusieurs domaines d'activités ( Cliquez sur l'icone "Compétences" pour pouvoir les vizualiser ) tel que le développement de client lourd, d'application mobile ou web. Ce site me sert à exposer mes différentes connaissances dans le domaine informatique, mais aussi de vous permettre de mieux me connaitre pour une éventuelle collaboration.</span>
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
import $ from 'jquery';

@Component
export default class AboutMe extends Vue {
  public mounted() {
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

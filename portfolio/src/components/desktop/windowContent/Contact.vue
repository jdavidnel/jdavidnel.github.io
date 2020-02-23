<template>
  <div class="full-content">
    <div class="row">
      <div class="icons-row col-md-4">
        <div class="icons">
          <img src="@/assets/moi.jpg" alt="jean-david Nelson" />
        </div>
      </div>
      <div class="padr30 col-md-8">
        <div class="table">
          <div class="cell-vertical-table">
            <input class="input-window-props form-control" type="text" placeholder="Me contacter" readonly>
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
        <span>Email Professionnel:</span>
      </div>
      <div class="col-md-8">
        <span>
          <strong>jeandavid_nelson@yahoo.fr</strong>
        </span>
      </div>
    </div>
    <div class="row-content row">
      <div class="padl30 col-md-4">
        <span>Email Epitech:</span>
      </div>
      <div class="col-md-8">
        <span>jeandavid-nelson@epitech.eu</span>
      </div>
    </div>
    <div class="row-content row">
      <div class="padl30 col-md-4">
        <span>Email Freelance:</span>
      </div>
      <div class="col-md-8">
        <span>jdavid_nel@yahoo.fr</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import $ from 'jquery';

@Component
export default class Contact extends Vue {
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

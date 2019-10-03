<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Jean-David</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
       aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Experiences
              <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import translate from 'google-translate-api';
import { Language } from '../types/Enum';

@Component
export default class Navbar extends Vue {
  @Prop({ default: Language.French }) readonly language!: Language;

  //  public translator(str: string): string {
  // let result: string = '';
  // return str;
  /* translate(str, { from: 'fr', to: (Language[this.language] as string) }).then((res) => {
    result = res.from.text.value;
    }).catch((err) => {
    throw new Error(err);
    });
    return result; */
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 .welcome {
  color:black;
  font-size: 2em;
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

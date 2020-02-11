<template>
  <div class="icons-Desktop">
    <div class="raccourcis" >
      <img 
      v-bind:alt="data.name"
      v-bind:title="data.name" 
      v-bind:src="data.link" />
    </div>
    <div>
      <p>{{ data.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import * as _ from 'lodash';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ShortCutIcon } from "@/types/Interface";

@Component({
  components: {
  },
})
export default class Shortcut extends Vue {

@Prop({ required: true }) data!: ShortCutIcon;
  

  public mounted() {
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/_typo.scss';

.icons-Desktop {
  display: block;
  max-width: 90px;
  text-align: center;
  font-size: 15px;
}

.icons-Desktop:hover {
  background-color: rgba(148, 148, 148, 0.26);
  font-size: 17px;
  max-width: 100px;
  border: 1px solid #949494;
  padding: 5px;
}
.raccourcis {
  max-width: 100px;
  padding: 15px;
  border-radius: 50px;
  img {
    width: 100%;
  }
}
</style>

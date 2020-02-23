<template>
  <div class="icons-Desktop" v-on:click="redirect(data.name)">
    <div class="raccourcis" >
      <img
      v-bind:alt="data.name"
      v-bind:title="data.name"
      v-bind:src="data.link" />
    </div>
    <div class="clips">
      <p>{{ data.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import * as _ from 'lodash';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ShortCutIcon } from '@/types/Interface';
import { redirect } from '@/scripts/Utils/redirect';

@Component({
  components: {
  },
})
export default class Shortcut extends Vue {
private redirect: Function = (title: string) => { redirect(title, this); };

@Prop({ required: true }) data!: ShortCutIcon;


public mounted() {
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.icons-Desktop {
  display: block;
  max-width: 95px;
  text-align: center;
  font-size: 15px;

  .clips {
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.icons-Desktop:hover {
  background-color: rgba(148, 148, 148, 0.26);
  border: 1px solid #949494;
  /*padding: 5px;*/
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

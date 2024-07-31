<template>
  <div :class="$containet">
    <ViewerSmi :items="smi" />
  </div>
</template>
<script setup>
import ViewerSmi from "~/components/blocks/ViewerSmi.vue";
import { smiInfo } from "~/assets/info/smi.js";

const smi = smiInfo();
console.log(smi);
</script>

<style lang="scss" module>
.container {
}
</style>

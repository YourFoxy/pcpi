<template>
  <div :class="$containet">
    <Details :books="nonperiodic" />
  </div>
</template>
<script setup>
import Details from "~/components/blocks/resources/Details.vue";
import { nonperiodicInfo } from "~/assets/info/nonperiodic.js";
const nonperiodic = nonperiodicInfo();
</script>

<style lang="scss" module>
.container {
}
</style>

<template>
  <div :class="$containet">
    <Details :books="periodic" />
  </div>
</template>
<script setup>
import Details from "~/components/blocks/resources/Details.vue";
import { periodicInfo } from "~/assets/info/periodic.js";
const periodic = periodicInfo();
</script>

<style lang="scss" module>
.container {
}
</style>

<template>
  <div :class="$style.container" v-for="item in items" :key="item">
    <div v-if="item.id === route.params.slug">
      <Viewer :gallery="item.gallery" />
    </div>
  </div>
</template>

<script setup>
import Viewer from "~/components/blocks/Viewer.vue";

const route = useRoute();

const props = defineProps({
  items: {
    type: Array,
    default: [],
  },
});
</script>
<style lang="scss" module>
.container {
}
</style>

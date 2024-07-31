<template>
  <div :class="$style.container" v-for="articles in items" :key="articles">
    <div v-for="item in articles" :key="item">
      <div v-for="i in item" :key="i">
        <div v-if="i.id === route.params.slug">
          <Viewer :gallery="i.gallery" />
        </div>
      </div>
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

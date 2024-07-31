<template>
  <div :class="$style.navigation">
    <div
      :class="[
        $style.character,
        { [$style.active]: character === activeCharacter },
      ]"
      v-for="(character, index) in characters"
      :key="index"
    >
      <a v-bind:href="'#' + character">{{ character }}</a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  characters: {
    type: Array,
    default: [""],
  },
  activeCharacter: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" module>
.w {
  @include LargTextBold;

  list-style-type: none;
}
.character {
  @include LargTextBold;
  margin-bottom: 0.25rem;
  color: #000;
}
.active {
  color: $orange;
}
</style>

<template>
  <div :class="$style.container">
    <div :class="$style.menu">
      <NuxtLink to="/news">
        <div :class="$style.section">Новости</div>
      </NuxtLink>
      <div :class="[$style.section, $style.active]">ПЦПИ в СМИ</div>
    </div>

    <SMI />
  </div>
</template>

<script setup>
import SMI from "~/components/blocks/news/SMI.vue";
</script>

<style lang="scss" module>
.container {
  margin-bottom: 3rem;

  .menu {
    margin-left: 3.75rem;
    margin-top: 1rem;
    display: flex;
    border-bottom: 2px solid $gray-opacity;
    position: sticky;
    background: $white;
    top: 0;
    @include xl-tablet {
      margin-left: 1rem;
    }
    .section {
      @include LargText;
      margin-right: 1rem;
      cursor: pointer;
      position: relative;
      padding: 1rem 0 0.25rem 0;
      top: 0.1rem;
    }
    .active {
      @include LargTextBold;
      border-bottom: 2px solid $orange;

      font-weight: 600;
    }
  }
}
</style>

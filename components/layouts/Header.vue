<template>
  <div :class="$style.header">
    <div :class="$style.left">
      <NuxtLink to="/"
        ><div :class="$style.logo" @click="setActive(0)">ПЦПИ</div></NuxtLink
      >
    </div>
    <div :class="$style.right">
      <Section
        :name="section.name"
        :isActive="active === index"
        :toPage="section.toPage"
        @click="setActive(index)"
        v-for="(section, index) in sections"
        :key="index"
      />
    </div>
    <div :class="$style.burgerIcon" @click="openBurger()">
      <Icon icon="burger" />
      <!-- <img src="~/public/images/arrowTop.png" alt="" /> -->
    </div>
    <div :class="$style.burger" v-if="showBurger">
      <Section
        :name="section.name"
        :isActive="active === index"
        :toPage="section.toPage"
        @click="setActive(index)"
        v-for="(section, index) in sections"
        :key="index"
        :class="$style.section"
      />
    </div>
  </div>
</template>

<script setup>
import Section from "~/components/blocks/header/Section.vue";
import Icon from "~/components/common/Icon.vue";
const active = ref(0);
const showBurger = ref(false);

const setActive = (index) => {
  active.value = index;
  showBurger.value = false;
};

const openBurger = () => {
  showBurger.value = true;
};
const section = (name, toPage) => {
  return { name: name, toPage: toPage };
};

const sections = [
  section("О ПЦПИ", "/"),
  section("ПЦПИ Брестской области", "/centers"),
  section("Ресурсы", "/resources"),
  section("Услуги", "/services"),
  section("Правовое просвещение", "/pravo"),
  section("Новости", "/news"),
  section("Режим работы", "/time"),
];
</script>

<style lang="scss" module>
.header {
  @include container;
  width: 100%;

  background-color: $gray;
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  justify-content: space-between;
  align-items: center;
  .logo {
    @include H2;
    color: $white;
    @include xxl-tablet {
      @include H3;
      color: $white;
    }
  }
  .right {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    @include xxl-tablet {
      gap: 1rem;
    }
    @include xl-tablet {
      display: none;
    }
  }
  .burgerIcon {
    display: none;
    @include xl-tablet {
      display: block;
    }
  }
  .burger {
    height: 100vh;
    width: 20rem;
    position: absolute;
    background-color: $gray;
    right: 0;
    top: 3rem;
    z-index: 30;
    padding: 2rem;
    display: none;
    .section {
      margin-bottom: 1rem;
    }
    @include xl-tablet {
      display: block;
    }
  }
}
</style>

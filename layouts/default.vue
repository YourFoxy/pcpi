<template>
  <main :class="$style.layout">
    <header :class="$style.header">
      <!-- <Header v-if="route.fullPath !== path" /> -->
      <Header v-if="showHeader()" />
    </header>
    <div :class="$style.content">
      <div :class="$style.toTop" @click="toTop()">
        <Icon icon="arrowTop" />
        <!-- <img src="~/public/images/arrowTop.png" alt="" /> -->
      </div>
      <slot />
    </div>
    <footer v-if="showFooter()" :class="$style.footer">
      <Footer />
    </footer>
  </main>
</template>
<script setup>
import Header from "~/components/layouts/Header.vue";
import Footer from "~/components/layouts/Footer.vue";
import Icon from "~/components/common/Icon.vue";

const route = useRoute();
const regexHeader = /.+(viewer-)+.{3,}$/gi;
const regexFooter = /.+(viewer-)+.{3,}$/gi;

const showHeader = () => {
  return regexHeader.exec(route.fullPath) === null;
};
const showFooter = () => {
  return regexFooter.exec(route.fullPath) === null;
};

const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style lang="scss" module>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: $white;

  .content {
    flex: 1 1 auto;
    width: 100%;
    .toTop {
      position: fixed;
      bottom: 2rem;
      right: 0.5rem;
      cursor: pointer;

      img {
        width: 2rem;
        object-fit: cover;
        position: sticky;
        top: 0;

        object-fit: cover;
      }
    }
  }
  .header,
  .footer {
    width: 100%;
  }
}
</style>

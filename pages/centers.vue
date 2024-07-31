<template>
  <div :class="$style.container">
    <DividerCenterTitle :title="title" />
    <div :class="$style.centers">
      <details v-for="center in centers" :key="center">
        <summary :class="$style.center" class="center">
          {{ center.center[0].name }}
        </summary>
        <div :class="$style.box">
          <div
            v-for="(lib, index) in center.center"
            :key="index"
            :class="$style.lib"
          >
            <a target="_blank" v-bind:href="lib.url">
              {{ index + 1 }}. {{ lib.name }}</a
            >
          </div>
        </div>
      </details>
    </div>
  </div>
</template>

<script setup>
import DividerCenterTitle from "~/components/blocks/DividerCenterTitle.vue";
import json from "~/assets/info/centers.json";

const centers = json.centers;
const title = "ПЦПИ публичных библиотек Брестской области";

onMounted(() => {
  const details = document.querySelectorAll(".center");
  details.forEach((item) => {
    item.addEventListener("click", (e) => {
      const openItem = document.querySelector("details[open]");

      if (openItem) openItem.open = false;

      if (openItem.firstChild === item) e.preventDefault();
    });
  });
});
</script>

<style lang="scss" module>
.container {
  .centers {
    @include container;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin: 3rem 0;
    flex: 1fr 1fr;
    flex-direction: row;
    justify-content: center;
    .center {
      @include LargTextBold;
      // width: 25rem;
      // min-height: 4.25rem;
      width: 26rem;
      min-height: 12rem;
      //
      align-content: center;
      // padding: 1rem;
      padding: 2rem;
      border-radius: 0.5rem;
      // color: $white;
      // background-color: $light-gray;
      border: 2px solid $light-gray;
      //

      //
      text-align: center;
      list-style-type: none;
      cursor: pointer;
      &:hover {
        background-color: $orange;
        color: $white;
      }
      @include tablet {
        width: 18rem;
      }
    }
    .box {
      // width: 25rem;
      width: 26rem;
      background-color: $orange;
      border-radius: 0.5rem;
      margin-top: 0.5rem;
      padding: 1rem 1rem 0 1rem;
      .lib {
        @include LargText;
        color: $white;
        padding-bottom: 1rem;
        :hover {
          color: $gray;
          font-weight: 600;
        }
      }
      @include tablet {
        width: 18rem;
      }
    }
  }
}
</style>

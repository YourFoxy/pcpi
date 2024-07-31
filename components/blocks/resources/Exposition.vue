<template>
  <div :class="$style.container">
    <DividerCenterTitle :title="title" />
    <div :class="$style.cards">
      <div :class="$style.card" v-for="item in exposition" :key="item">
        <a target="_blank" :href="item.url"
          ><img :src="item.img" alt="" />
          <div :class="$style.description">
            <div :class="$style.text" v-html="item.name"></div></div
        ></a>
      </div>
    </div>
  </div>
</template>

<script setup>
import DividerCenterTitle from "~/components/blocks/DividerCenterTitle.vue";
import { expositionInfo } from "~/assets/info/exposition.js";
const title = "Виртуальные выставки";
const exposition = expositionInfo();
</script>

<style lang="scss" module>
.container {
  .cards {
    @include container;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 2rem;
    .card {
      width: 18rem;
      height: 26rem;
      cursor: pointer;
      overflow: hidden;
      .description {
        position: relative;
        height: 110%;
        top: -26.3rem;
        display: none;
        background-color: $black-opacity;
        .text {
          @include LargText;
          color: $white;
          height: 25rem;
          padding: 1.25rem;
          overflow: hidden;
          border-radius: 0.25rem;
        }
      }

      img {
        width: 100%;
        height: 26rem;
        object-fit: cover;
        border-radius: 0.25rem;
        //   &:hover {
        //     filter: brightness(30%) blur(0.5px);
        //   }
      }
      &:hover {
        .description {
          display: block;
        }
      }
    }
  }
}
</style>

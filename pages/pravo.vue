<template>
  <div :class="$style.container">
    <DividerRightTitle :title="title" />
    <div :class="$style.info">
      <div v-for="project in projects" :key="project" :class="$style.card">
        <div :class="$style.name">
          <div :class="$style.marker"></div>
          <div>{{ project.name }}</div>
          <!-- <div :class="$style.divider" /> -->
        </div>
        <div :class="$style.text" v-html="project.text"></div>
      </div>
      <div :class="$style.description">
        <div v-html="pravo.text"></div>
        <div>
          <!-- <div :class="$style.subtitle">Дайджесты</div> -->
          <div :class="$style.digest">
            <a target="_blank" :href="pravo.pdf1">
              <img :src="pravo.img1" alt=""
            /></a>
            <a target="_blank" :href="pravo.pdf2">
              <img :src="pravo.img2" alt=""
            /></a>
          </div>
        </div>
      </div>

      <div :class="$style.media">
        <div :class="$style.subtitle">
          Электронные сервисы «Адвокат онлайн» и «Нотариус онлайн»
        </div>

        <!-- <div :class="$style.subtitle">
            Видеопрезентация о деятельности ПЦПИ Брестской областной библиотеки
            им М Горького
          </div> -->
        <iframe
          src="https://www.youtube.com/embed/ELioI3F-IHw?si=pR6zw9R0pZEvpESC"
          title="YouTube video player"
          frameborder="0"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          :class="$style.video"
        ></iframe>
      </div>
      <!-- <div :class="$style.pdf">
        <div :class="$style.digest">Дайджесты</div>

        <img src="~/public/images/image.png" alt="" :class="$style.digest" />
        <img src="~/public/images/image.png" alt="" :class="$style.digest" />
      </div>
      <div :class="$style.media">
        <div :class="$style.subtitle">
          Видеопрезентация о деятельности ПЦПИ Брестской областной библиотеки им
          М Горьког
        </div>
        <iframe
          src="https://www.youtube.com/embed/KQpyfIXL4ug?si=7ZQt_zQqdgdc_D9W"
          title="YouTube video player"
          frameborder="0"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          :class="$style.video"
        ></iframe>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import DividerRightTitle from "~/components/blocks/DividerRightTitle.vue";
import json from "~/assets/info/projects.json";

import { pravoInfo } from "~/assets/info/pravo.js";
const pravo = pravoInfo();

const projects = json.projects;
const title = "Наши проекты";

const section = (name, toPage) => {
  return { name: name, toPage: toPage };
};
</script>

<style lang="scss" module>
.container {
  .info {
    @include container;
    margin-top: 3rem;

    .card {
      display: flex;
      margin-bottom: 2rem;
      border-bottom: 2px dashed $gray-opacity;
      padding-bottom: 1rem;
      @include tablet {
        display: block;
      }
      .name {
        @include H3;
        min-width: 48rem;
        display: flex;
        @include laptop {
          min-width: 35rem;
        }
        @include xl-tablet {
          min-width: 25rem;
        }
        @include mobile {
          min-width: 20rem;
        }
        .marker {
          height: 1rem;
          min-width: 1rem;
          background-color: $orange;
          margin-top: 0.375rem;
          margin-right: 1rem;
        }
        .divider {
          min-width: 4rem;
          flex: 1;
          border-bottom: 1px solid $gray;
          position: relative;
          top: -6.2rem;
          margin: 0 1rem;
        }
      }
      .text {
        @include LargText;
        text-align: justify;
        margin-left: 2rem;
        p {
          margin-bottom: 0.5rem;
        }
        // color: $white;
      }
    }
    .description {
      @include LargText;
      text-align: justify;
      margin-bottom: 2rem;
      display: flex;
      @include tablet {
        display: block;
      }
      p {
        margin-bottom: 0.5rem;
      }
      .subtitle {
        margin-left: 2rem;
        @include H3-5;
        margin-bottom: 1.5rem;
      }
      .digest {
        display: flex;
        gap: 1.5rem;
        margin-left: 2rem;
        // background-color: $orange;
        @include xl-tablet {
          display: block;
        }
        img {
          width: 18rem;
          height: 30rem;
          object-fit: cover;
          @include xxl-tablet {
            width: 14rem;
            height: 23rem;
          }
        }
      }
    }
    .media {
      text-align: center;
      width: 100%;
      text-align: center;

      margin: 3rem 0;
      .subtitle {
        margin-left: 2rem;
        @include H3-5;
        margin-bottom: 1.5rem;
        text-align: center;
      }
      .video {
        width: 64rem;
        height: 37rem;
        @include xxl-tablet {
          width: 44rem;
          height: 27rem;
        }
        @include xl-tablet {
          width: 32rem;
          height: 20rem;
        }
        @include tablet {
          width: 25rem;
          height: 15rem;
        }
        @include mobile {
          width: 20rem;
          height: 12rem;
        }
      }
    }
  }
}
</style>

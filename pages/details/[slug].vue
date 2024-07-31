<template>
  <div :class="$style.container" v-for="item in news" :key="item">
    <div v-if="item.id === route.params.slug">
      <div :class="$style.preview">
        <img :src="item.gallery[0]" alt="" />
      </div>
      <div :class="$style.title">
        {{ item.name }}
      </div>
      <div :class="$style.backButton" @click="back()">Назад</div>
      <div :class="$style.news">
        <div :class="$style.text" v-html="item.text" />
        <NuxtLink :to="'/viewer-news/' + item.id"
          ><div :class="$style.gallery">
            <div :class="$style.imgs">
              <img
                :src="image"
                alt=""
                v-for="(image, index) in item.gallery"
                :key="index"
              />
            </div>
            <div :class="$style.hover">ГАЛЕРЕЯ</div>
          </div></NuxtLink
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { newsInfo } from "~/assets/info/news.js";
import Icon from "~/components/common/Icon.vue";
const news = newsInfo();
const route = useRoute();
const router = useRouter();
console.log(route.params);
defineProps({
  date: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  gallery: {
    type: Array,
    default: [],
  },
});
const back = () => {
  router.go(-1);
};
</script>

<style lang="scss" module>
.container {
  .backButton {
    position: absolute;
    // top: 0;
    top: 4rem;

    cursor: pointer;
    background-color: $gray-opacity;
    color: $white;
    padding: 0.5rem 1rem;
  }
  .preview {
    display: inline-block;
    position: relative;
    line-height: 0;
    width: 100%;
    height: 30rem;
  }
  img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
  }
  .preview:after {
    content: "";
    display: block;
    width: 100%;
    height: 30rem;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient($opacity, $white);
  }

  .title {
    @include H2;
    @include container;
    text-align: center;
    margin-top: 5.5rem;
  }

  .news {
    @include container;
    display: flex;
    margin-top: 2rem;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 3rem;
    @include tablet {
      display: inline;
    }
    .text {
      @include LargText;
      width: 100%;
      text-align: justify;
      p {
        margin-top: 0.5rem;
      }
    }

    .gallery {
      width: 20rem;
      height: 20rem;
      margin-top: 0.75rem;
      margin-left: 2rem;
      overflow: hidden;
      @include tablet {
        width: 100%;
        margin-left: 0;
      }
      .imgs {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem;
        width: 100%;
        hight: 100%;
        img {
          width: 6rem;
          height: 6rem;
          object-fit: cover;
          border-radius: 0.25rem;
        }
      }
      .hover {
        @include LargTextBold;
        color: $white;
        text-align: center;
        align-content: center;
        width: 20rem;
        height: 20rem;
        background-color: $black-opacity;
        position: absolute;
        top: 44.4rem;
        display: none;
        border-radius: 0.5rem;
      }
      &:hover {
        .hover {
          display: block;
        }
      }
    }
  }
}
</style>

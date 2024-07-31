<template>
  <div :class="$style.container">
    <div :class="$style.viewer">
      <Icon icon="close" is-pointer :class="$style.close" @click="back()" />
      <div :class="$style.openImg">
        <img :src="gallery[active]" alt="" />
      </div>

      <div :class="$style.gallery">
        <img
          :src="img"
          v-for="(img, index) in gallery"
          :key="img"
          @click="setActive(index)"
          :class="[{ [$style.active]: active === index }]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from "~/components/common/Icon.vue";
const router = useRouter();
const route = useRoute();

const props = defineProps({
  gallery: {
    type: Array,
    default: [],
  },
});

const active = ref(0);

const setActive = (index) => {
  console.log(index);
  active.value = index;
};

window.addEventListener("keyup", function (e) {
  if (e.key === "ArrowLeft") {
    if (active.value > 0) {
      active.value = active.value - 1;
    }
  } else if (e.key === "ArrowRight") {
    active.value = active.value + 1;
  }
});
const back = () => {
  router.go(-1);
};
</script>
<style lang="scss" module>
.container {
  .viewer {
    margin: 0 1.5rem;
    display: flex;
    flex-direction: row-reverse;
    height: 100vh;
    overflow-y: hidden;
    @include xl-tablet {
      display: inline;
    }
    .gallery {
      overflow-y: scroll;
      width: 9.5rem;
      padding-right: 1rem;
      margin: 2rem 0;
      @include xl-tablet {
        display: flex;
        width: 100%;
        height: 14rem;
        overflow-y: none;
        overflow-x: scroll;
      }
      img {
        height: 13rem;
        width: 7rem;
        object-fit: cover;
        cursor: pointer;
        margin-bottom: 1rem;
        @include xl-tablet {
          margin-right: 1rem;
        }
      }
      .active {
        filter: brightness(30%) blur(0.5px);
      }
    }

    .openImg {
      width: 100%;
      height: 100vh;
      text-align: center;
      align-content: center;
      padding: 2rem 2rem 2rem 2rem;
      img {
        max-height: 100%;
        max-width: 100%;
      }
    }
    .close {
      padding-top: 2rem;
    }
  }
}
</style>

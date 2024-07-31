<template>
  <div :class="$style.container">
    <div :class="$style.gallery">
      <img src="~/public/images/image.png" /><img
        src="~/public/images/image.png"
      /><img src="~/public/images/image.png" /><img
        src="~/public/images/image.png"
      /><img src="~/public/images/image.png" />
    </div>
    <div :class="$style.openImg"><img src="~/public/images/111.jpg" /></div>

    <Icon icon="close" is-pointer :class="$style.close" @click="back()" />
  </div>
</template>

<script setup>
import Icon from "~/components/common/Icon.vue";
const router = useRouter();
// const route = useRoute();
// console.log(route.fullPath);
window.addEventListener("wheel", function (e) {
  console.log(e);
});

const back = () => {
  router.go(-1);
};
</script>
<style lang="scss" module>
.container {
  margin: 0 1.5rem;
  display: flex;
  height: 100vh;
  overflow-y: hidden;
  .gallery {
    overflow-y: scroll;
    width: 9.5rem;
    padding-right: 1rem;
    margin: 2rem 0;
    img {
      height: 13rem;
      width: 7rem;
      object-fit: cover;
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
</style>

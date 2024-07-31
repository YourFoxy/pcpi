<template>
  <div :class="$style.container">
    <div>
      <div :class="$style.title">{{ title }}</div>

      <div
        :class="$style.yearBlock"
        class="yearBlock"
        v-for="item in smi"
        :key="item"
        :id="item.year"
      >
        <div :class="$style.year">
          {{ item.year }}
        </div>
        <div :class="$style.blocks">
          <Article
            v-for="article in item.articles"
            :key="article"
            :text="article.text"
            :isActive="article.gallery.length !== 0"
            :articleId="article.id"
          />
        </div>
      </div>
    </div>
    <div :class="$style.nav">
      <CharacterNavigation
        :characters="characters"
        :activeCharacter="activeCharacter"
      />
    </div>
  </div>
</template>

<script setup>
import DividerRightTitle from "~/components/blocks/DividerRightTitle.vue";
import Article from "~/components/blocks/news/Article.vue";
import CharacterNavigation from "~/components/blocks/news/CharacterNavigation.vue";
import { smiInfo } from "~/assets/info/smi.js";

const title = "ПЦПИ в СМИ";
const smi = smiInfo();

const characters = ref([]);

const activeCharacter = ref(characters[0]);

onMounted(() => {
  smi.forEach((i) => {
    console.log(i.year);
    characters.value.push(i.year);
  });

  window.addEventListener("scroll", function (e) {
    const markingCards = e.srcElement.getElementsByClassName("yearBlock");

    console.log("dddd");
    for (let i = 0; i < markingCards.length; i++) {
      if (markingCards[i].getBoundingClientRect().top > 0) {
        activeCharacter.value = markingCards[i].id;
        break;
      }
    }
  });
});
</script>

<style lang="scss" module>
.container {
  @include container;
  display: flex;
  justify-content: space-between;
  .title {
    @include H2;

    margin-top: 2.5rem;
    // padding: 0 1rem 0 3.75rem;
  }
  .yearBlock {
    @include tablet {
      max-width: 27rem;
    }
    @include mobile {
      max-width: 18rem;
    }
    .year {
      @include H3;
      width: 12rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
      border-bottom: 2px solid $orange;
    }
    .blocks {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      @include tablet {
        display: inline;
        width: 10rem;
        overflow: hidden;
      }
    }
  }
  .nav {
    position: sticky;
    top: 0;
    height: 100vh;
    text-align: center;
    padding-top: 11rem;
  }
}
</style>

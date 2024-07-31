<template>
  <div :class="$style.container">
    <DividerCenterTitle :title="title" :class="$style.title" />
    <div :class="$style.info">
      <div :class="$style.text">
        <b>Адрес: </b> 224016, г. Брест, б-р Космонавтов, 48
      </div>
      <div :class="$style.text"><b>Режим работы: </b> 10:00–19:00</div>
      <div :class="$style.text"><b>Выходные дни: </b> пятница</div>
      <div :class="$style.text">
        <b>Санитарный день: </b> последняя среда каждого месяца
      </div>
      <div :class="$style.text"><b>Телефон: </b> +375 162 57 48 74</div>
      <div :class="$style.text">
        <b>Адрес электронной почты библиотеки: </b>
        <a target="_blank" href="mailto:brest.lib@gmail.com"
          >brest.lib@gmail.com</a
        >
      </div>
    </div>
    <div :class="$style.preview"></div>
  </div>
</template>

<script setup>
import DividerCenterTitle from "~/components/blocks/DividerCenterTitle.vue";

const title = "Режим работы и контактная информация";
</script>

<style lang="scss" module>
.container {
  .title {
    padding-bottom: 2rem;
  }
  .info {
    @include container;
    .text {
      @include LargText;
      text-align: center;
      padding-top: 1rem;
      b {
        font-weight: 700;
      }
      a {
        color: $orange;
      }
    }
    padding-bottom: 17rem;
  }

  .preview {
    width: 100%;
    height: 24rem;

    background-image: linear-gradient($white, $opacity),
      url("~/public/images/time.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
}
</style>

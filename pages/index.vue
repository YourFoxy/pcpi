<template>
  <div :class="$style.container">
    <div :class="$style.img">
      <div :class="$style.blur">
        <div :class="$style.title">
          Публичный<br />Центр<br />Правовой<br />
          <span :class="$style.color">Информации</span>
          <a href="#description"> <div :class="$style.button">Далее</div></a>
        </div>
      </div>
    </div>

    <DividerCenterTitle :title="subtitle" id="description" />

    <div :class="$style.text">
      <p>
        В целях обеспечения реализации права граждан на получение полной,
        достоверной и своевременной правовой информации в Республике Беларусь
        создана государственная система правовой информации. Одним из её
        элементов являются публичные центры правовой информации, создаваемые
        <a href="https://kultura.by/" target="_blank"
          >Министерством культуры Республики Беларусь</a
        >
        с Национальным центром правовой информации Республики Беларусь на
        площадках государственных публичных библиотек. Подробнее о системе ПЦПИ
        республики можно узнать на сайте НЦПИ в разделе
        <a
          href="https://ncpi.gov.by/deyatelnost/publichnye-tsentry-pravovoy-informacii/ptspi-sotsialnyy-gosudarstvennyy-proekt/"
          target="_blank"
          >ПЦПИ — социальный государственный проект</a
        >.
        <a
          href="https://ncpi.gov.by/deyatelnost/publichnye-tsentry-pravovoy-informacii/ptspi-sotsialnyy-gosudarstvennyy-proekt/—"
          target="_blank"
          >Публичный центр правовой информации</a
        >
        пункт свободного доступа граждан к эталонной правовой информации,
        созданный для обеспечения формирования правовых знаний, навыков
        правомерного поведения, уважительного отношения к праву и содействия
        проведению мероприятий по правовому просвещению граждан.
      </p>
    </div>
    <div :class="$style.subtitle">
      Задачами публичного центра правовой информации являются:
    </div>
    <Goal
      v-for="(goal, index) in goals"
      :key="index"
      :text="goal"
      :number="index + 1"
      :isShowDivider="goals.length - 1 !== index"
    />
    <div :class="$style.text">
      <p>
        Подробнее об участии ПЦПИ в правовом просвещении граждан можно узнать на
        сайте НЦПИ в разделе
        <a
          href="https://ncpi.gov.by/deyatelnost/publichnye-tsentry-pravovoy-informacii/ptspi-v-sisteme-pravovogo-prosveshcheniya-naseleniya/"
          target="_blank"
          >ПЦПИ в системе правового просвещения населения</a
        >.
      </p>
    </div>
    <iframe
      src="https://www.youtube.com/embed/KQpyfIXL4ug?si=7ZQt_zQqdgdc_D9W"
      title="YouTube video player"
      frameborder="0"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      :class="$style.video"
    ></iframe>
  </div>
</template>
import type { Style } from '#build/components';

<script setup>
import DividerCenterTitle from "~/components/blocks/DividerCenterTitle.vue";
import Goal from "~/components/blocks/index/Goal.vue";
const subtitle = "О публичном центре правовой информации";

const goals = [
  "организация свободного доступа граждан к эталонной правовой информации",
  "формирование фонда периодических и непериодических печатных и электронных изданий, государственных информационно-правовых ресурсов, материалов научно-практического характера, способствующих полному и адекватному восприятию гражданами их прав и обязанностей",
  "использование эффективных форм и методов библиотечного, информационного и справочно-библиографического обслуживания в целях формирования у граждан правовых знаний, навыков правомерного поведения, уважительного отношения к праву",
];
</script>

<style lang="scss" module>
.container {
  // height: 100vh;
  text-align: center;

  .img {
    @include container;
    background-image: url("~/public/images/logo.png");
    background-repeat: no-repeat;
    background-position: right 8rem center;
    background-size: 43rem;
    padding-left: 0;
    padding-right: 0;
    @include xl-tablet {
      padding-left: 0;
      padding-right: 0;
    }
    .blur {
      @include container;
      max-width: 100%;
      height: 100vh;
      background-color: $black-opacity;

      backdrop-filter: blur(10px);
      align-content: center;
      // z-index: 1;
      .title {
        @include H1-5;
        text-align: left;
        color: $white;

        .color {
          color: $orange;
        }
        .button {
          @include LargTextBold;
          margin-top: 1.5rem;
          width: 7rem;
          padding: 0.5rem 1rem;
          text-align: center;
          color: $orange;
          border: 2px solid $orange;
          cursor: pointer;
          &:hover {
            background-color: $white;
            border: 2px solid $white;
            color: $gray;
            font-weight: 700;
          }
        }
        @include xxl-tablet {
          @include H1-5;
          color: $white;
        }
      }
    }
  }

  .text {
    @include container;
    @include LargText;
    margin-top: 1.5rem;
    text-align: justify;
    a {
      color: $orange;
    }
    p {
      padding-top: 0.75rem;
    }
  }
  .subtitle {
    @include H3;
    padding-top: 2rem;
    text-align: center;
  }
  .video {
    width: 64rem;
    height: 37rem;
    margin: 3rem 0;
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
  }
}
</style>

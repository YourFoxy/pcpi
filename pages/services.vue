<template>
  <div :class="$style.container">
    <DividerCenterTitle :title="freeTitle" />

    <div :class="$style.cards">
      <Card
        v-for="(card, index) in free"
        :key="index"
        :isActive="(index + 1) % 5 === 0"
        :text="card"
      />
    </div>
    <DividerCenterTitle :title="priceTitle" :class="$style.free" />
    <div :class="$style.cards">
      <Card
        v-for="(card, index) in pay"
        :key="index"
        :isActive="(index + 1) % 6 === 0"
        :text="card"
      />
    </div>
    <div :class="$style.text">
      Приглашаем всех желающих воспользоваться нашими услугами!
    </div>
  </div>
</template>
<script setup>
import Card from "~/components/blocks/services/Card.vue";
import DividerCenterTitle from "~/components/blocks/DividerCenterTitle.vue";
const priceTitle = "Платные услуги";
const freeTitle = "Услуги публичного центра правовой информации";
const free = [
  "предоставление свободного доступа к эталонной правовой информации",
  "предоставление полной информации о составе фондов и информационных ресурсах ПЦПИ",
  "консультационная помощь в поиске источников правовой информации",
  "выдача документов из фонда ПЦПИ для временного пользования",
  "бесплатные консультации нотариусов Брестского нотариального округа и адвокатов Брестской областной коллегии адвокатов",
  "консультации студентов учебной лаборатории «Юридическая клиника», организованной при юридическом факультете БрГУ им. А. С. Пушкина",
  "сервисы «Нотариус онлайн» и «Адвокат онлайн» (Вы можете задать вопрос и получить ответ по электронной почте)",
  "участие в занятиях Школы правовых знаний по правовому воспитанию молодёжи (для учащихся средних специальных учебных заведений г. Бреста)",
];
const pay = [
  "выдача изданий на дом",
  "тематический подбор литературы по различным отраслям права",
  "быстрый поиск документов в правовой базе в присутствии заказчика",
  "формирование пакета документов из правовой базы по запросу пользователя",
  "ксерокопирование",
  "сканирование",
  "вывод информации на печатный носитель",
  "запись информации на электронный носитель заказчика",
  "предоставление документов из фондов библиотеки для цифровой и фотосъемки на оборудовании пользователя",
];
</script>

<style lang="scss" module>
.container {
  margin-bottom: 3rem;
  .titleBlock {
    display: flex;
    .divider {
      margin-top: 3rem;
      flex: 1;
      border-bottom: 2px solid $orange;
      position: relative;
      top: -0.7rem;
    }
    .title {
      @include H2;
      text-align: center;
      margin-top: 2.5rem;
    }
  }
  .free {
    margin-top: 2rem;
  }
  .cards {
    @include container;
    margin-top: 4.5rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  .text {
    @include LargTextBold;
    text-align: center;
    padding-top: 3rem;
  }
}
</style>

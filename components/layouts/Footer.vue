<template>
  <div :class="$style.footer">
    <a href="http://brl.by/" :class="$style.left">
      <div :class="$style.logo">
        <img src="~/public/images/logo.png" alt="" />
      </div>
      <div :class="$style.name">
        Брестская областная <br />
        библиотека им. М.Горького, 2024©
      </div></a
    >

    <div :class="$style.right">
      <div :class="$style.mail">
        <div>Связаться с администратором:</div>
        <a target="_blank" href="mailto:library_brl.by@mail.ru"
          >library_brl.by@mail.ru</a
        >
      </div>
      <div :class="$style.text">
        При использовании материалов сайта гиперссылка на источник обязательна
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" module>
.footer {
  @include container;
  width: 100%;
  background-color: $gray;
  padding-top: 3rem;
  padding-bottom: 3rem;
  justify-content: space-between;
  display: flex;
  @include xl-tablet {
    display: block;
  }
  .left {
    display: flex;
    gap: 1.5rem;
    @include xl-tablet {
      text-align: center;
      padding-bottom: 1rem;
      display: block;
    }
    .logo {
      img {
        width: 5rem;
        object-fit: cover;
        @include xxl-tablet {
          width: 4rem;
        }
      }
    }
    .name {
      @include H3;
      color: $white;
      align-content: end;
      @include xxl-tablet {
        @include LargTextBold;
        color: $white;
      }
    }
  }
  .right {
    @include TextBold;
    color: $white;
    align-content: end;
    border-left: 2px solid $orange;
    padding-left: 1rem;
    @include xxl-tablet {
      @include SmallTextBold;
      color: $white;
    }
    @include xl-tablet {
      justify-content: center;
      text-align: center;
      border-left: none;
    }

    .mail {
      display: flex;
      gap: 1rem;
      padding-bottom: 0.5rem;
      @include xl-tablet {
        justify-content: center;
      }
      a {
        color: $orange;
      }
    }
  }
}
</style>

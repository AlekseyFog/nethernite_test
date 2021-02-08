<template>
  <div class="layout-footer">
    <div class="layout-footer__wrapper">
      <h2 class="layout-footer__text">
        Алексей Туманов
      </h2>
      <a
        class="layout-footer__link"
        href="https://github.com/AlekseyFog"
      >
        GitHub
      </a>
      <div
        class="layout-footer__img"
      >
        <img
          class="footer-img"
          src="/images/logo.jpeg"
          alt="Logo"
          width="100px"
          height="50px"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutFooter',
};
</script>

<style lang="scss" scoped>

.layout-footer__wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: $color-gray-05;
}
@media (min-width: $screen-sm) {
  .layout-footer__wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
.layout-footer__text{
  font-size: 20px;
  color: $color-gray-02;
  padding: 10px;
}

.layout-footer__link{
  padding: 15px;
  text-decoration: underline;
  color: $color-violet-03;
}


</style>

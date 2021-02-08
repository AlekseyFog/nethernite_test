<template>
  <div class="start-view">
    <div class="container">
      <StartPage />
    </div>
  </div>
</template>

<script>
  import StartPage from '@/components/start/StartPage';

  export default {
    name: 'StartView',
    components: {
      StartPage,
    },
  };
</script>

<style lang="scss" scoped>
  .start-view {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
</style>

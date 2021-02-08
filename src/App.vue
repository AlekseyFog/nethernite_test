<template>
  <div
    id="app"
    class="app"
  >
    <Preloader />
    <Layout>
      <transition
        appear
        name="fade-in"
        mode="out-in"
      >
        <router-view />
      </transition>
    </Layout>
    <Modal />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { VIEWPORT } from '@/store/types';
import Preloader from '@/components/preloader/Preloader';
import Layout from '@/components/layout/Layout';
import Modal from '@/components/modal/Modal';

export default {
  name: 'App',
  components: {
    Preloader,
    Modal,
    Layout,
  },
  created() {
    this.initViewport();
  },
  methods: {
    ...mapActions('viewport', {
      initViewport: VIEWPORT.INIT,
    }),
  },
};
</script>

<style lang="scss" src="@/assets/styles/base-style.scss"/>
<style lang="scss" scoped>
.app {
  min-height: 100vh;
}
</style>

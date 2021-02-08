<template>
  <div class="col-11 col-sm-8 col-lg-6 col-xl-5 search-modal">
    <div class="search-modal__wrapper">
      <div class="row mb-5">
        <div class="col-12">
          <h2 class="search-modal__title">
            Поиск
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mb-5">
          <NeInput
            placeholder="Package name"
            :value="packageName"
            @input="setPackageName($event.target.value)"
            @enter-press="searchAction"
          />
        </div>
        <div class="col-12 col-md-6 ml-auto">
          <NeButton
            :block="true"
            @click="searchAction"
          >
            {{ !!packageName ? 'Искать' : 'Закрыть' }}
          </NeButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { MODAL, START } from '@/store/types';

import NeInput from '@/components/form-items/ne-input/NeInput';
import NeButton from '@/components/form-items/ne-button/NeButton';

export default {
  name: 'SearchModal',
  components: {
    NeInput,
    NeButton,
  },
  computed: {
    ...mapGetters('start', {
      packageName: START.GET_PACKAGES_NAME,
    }),
  },
  methods: {
    ...mapActions('modal', {
      closeModal: MODAL.HIDE_MODAL,
    }),
    ...mapActions('start', {
      setPackageName: START.SET_PACKAGE_NAME,
      fetchPackageByName: START.FETCH_PACKAGES_BY_NAME,
    }),
    searchAction() {
      const { packageName } = this;
      if (packageName) {
        this.fetchPackageByName();
      }
      this.closeModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.search-modal__wrapper {
  padding: 0 30px;
  height: 100vh;
}
.search-modal__title {
  display: block;
  font-size: 25px;
  font-weight: 500;
  color: $color-gray-01;
  text-align: center;
}
</style>

<template>
  <div class="start-page">
    {{ packageList[pageNumber] }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { START } from '@/store/types';

export default {
  name: 'StartPage',
  computed: {
    ...mapGetters('start', {
      pageNumber: START.GET_PACKAGES_PAGE,
      packageList: START.GET_PACKAGES_BY_NAME,
    }),
  },
};
</script>

<style lang="scss" scoped></style>

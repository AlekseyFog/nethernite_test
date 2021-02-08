<template>
  <div class="start-page">
    <StartTable
      v-if="pageCount"
      :data="currentPage"
    />
    <StartPaginator
      v-if="pageCount"
      :page-index="pageNumber"
      :page-count="pageCount"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { START } from '@/store/types';

import StartTable from './StartTable';
import StartPaginator from './StartPaginator';

export default {
  name: 'StartPage',
  components: {
    StartTable,
    StartPaginator,
  },
  computed: {
    ...mapGetters('start', {
      pageNumber: START.GET_PACKAGES_PAGE,
      packageList: START.GET_PACKAGES_BY_NAME,
    }),
    currentPage() {
      const { packageList, pageNumber } = this;
      return packageList[pageNumber];
    },
    pageCount() {
      const { packageList } = this;
      const list = Array.isArray(packageList) ? packageList : [];
      return list.length;
    },
  },
};
</script>

<style lang="scss" scoped></style>

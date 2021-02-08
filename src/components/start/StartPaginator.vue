<template>
  <div class="start-paginator">
    <div
      v-for="(page, index) in pageCount"
      class="start-paginator__item"
      :class="pageIndex === index && 'start-paginator__item_selected'"
      @click="setPageIndex(index)"
    >
      <span>
        {{ page }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { START } from '@/store/types';

export default {
  name: 'StartPaginator',
  props: {
    pageIndex: {
      type: Number,
      default: 0,
    },
    pageCount: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    ...mapActions('start', {
      setPageIndex: START.SET_PACKAGES_PAGE,
    }),
  },
};
</script>

<style lang="scss" scoped>
  .start-paginator {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    padding: 20px 0;
  }
  .start-paginator__item {
    display: block;
    width: 30px;
    line-height: 30px;
    border-radius: 5px;
    margin: 5px;
    text-align: center;
    background: $color-violet-01;
    cursor: pointer;
    transform: scale(0.9);
    transition: transform $animation-time-03 $animation-easing;
  }
  .start-paginator__item_selected {
    transform: scale(1);
    background: $color-violet-03;
  }
  .start-paginator__item span {
    color: $color-gray-01;
    font-weight: 700;
    font-size: 15px;
    text-shadow: 0 0 3px $color-gray-04;
  }
</style>

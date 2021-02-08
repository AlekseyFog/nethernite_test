<template>
  <div class="start-table">
    <div class="start-table__table">
      <div class="start-table__table-head">
        <div class="row">
          <div class="col-8">
            Name
          </div>
          <div class="col-4">
            Version
          </div>
        </div>
      </div>
      <div class="start-table__table-body">
        <div
          class="row start-table__table-row"
          v-for="(item, index) in data"
          :key="index"
          @click="showDetailsModal(item)"
        >
          <div class="col-8">
            {{ item.package.name }}
          </div>
          <div class="col-4">
            {{ item.package.version }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { MODAL, START } from '@/store/types';

import DetailsModal from '@/components/modals/DetailsModal';

export default {
  name: 'StartTable',
  props: {
    data: {
      type: Array,
      default: () => ([]),
    },
  },
  methods: {
    ...mapActions('modal', {
      showModal: MODAL.SHOW_MODAL,
    }),
    ...mapActions('start', {
      setDetailsData: START.SET_DETAILS_DATA,
    }),
    showDetailsModal(item) {
      this.setDetailsData(item);
      this.showModal({
        component: DetailsModal,
      });
    },
  }
};
</script>

<style lang="scss" scoped>
.start-table {
  padding: 20px 0;
}
.start-table__table {
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  background: rgba($color-gray-01, 0.8);
}
.start-table__table-head thead {
  background: rgba($color-gray-01, 0.8);
  padding: 10px;
  color: $color-gray-05;
  font-size: 15px;
  font-weight: 700;
}
.start-table__table-body {
  margin-top: 10px;
  font-size: 15px;
  font-weight: 300;
  line-height: 20px;
}
.start-table__table-row {
  cursor: pointer;
  transition: background-color $animation-time-03 $animation-easing;
}
.start-table__table-row:hover {
  background: rgba($color-gray-01, 1);
}
</style>

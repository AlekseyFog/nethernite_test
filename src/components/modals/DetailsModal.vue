<template>
  <div class="col-11 col-sm-8 details-modal">
    <div class="details-modal__wrapper">
      <div class="row mb-5">
        <div class="col-12">
          <h2 class="details-modal__title">
            Package details
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mb-5">
          <div class="row">
            <div
              v-if="packageName"
              class="col-12 mb-3"
            >
              name: {{ packageName }}
            </div>
            <div
              v-if="packageAuthor"
              class="col-12 mb-3"
            >
              Author: {{ packageAuthor }}
            </div>
            <div
              v-if="packageDate"
              class="col-12 mb-3"
            >
              Date: {{ packageDate }}
            </div>
            <div
              v-if="packagelinks"
              class="col-12 mb-3"
            >
              <div class="details-modal__links">
                <a
                  v-for="(href, type) in packagelinks"
                  class="details-modal__link"
                  :href="href"
                  target="_blank"
                >
                  <span>{{ type }}:</span>
                  <span>{{ href }}</span>
                </a>
              </div>
            </div>
            <div
              v-if="packageKeywords"
              class="col-12 mb-3"
            >
              <div class="details-modal__keywords">
                <span
                  v-for="(keyword) in packageKeywords"
                  class="details-modal__keyword"
                >
                  #{{ keyword }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 ml-auto">
          <NeButton
            :block="true"
            @click="closeModalAction"
          >
            Close
          </NeButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import get from 'lodash/get';
import { DateTime } from 'luxon';
import { mapGetters, mapActions } from 'vuex';
import { MODAL, START } from '@/store/types';

import NeButton from '@/components/form-items/ne-button/NeButton';

export default {
  name: 'DetailsModal',
  components: {
    NeButton,
  },
  computed: {
    ...mapGetters('start', {
      detailsData: START.GET_DETAILS_DATA,
    }),
    packageName() {
      const { detailsData } = this;
      return get(detailsData, 'package.name', null);
    },
    packageAuthor() {
      const { detailsData } = this;
      return get(detailsData, 'package.author.name', null);
    },
    packagelinks() {
      const { detailsData } = this;
      return get(detailsData, 'package.links', null);
    },
    packageKeywords() {
      const { detailsData } = this;
      return get(detailsData, 'package.keywords', null);
    },
    packageDate() {
      const { detailsData } = this;
      const inputDate = get(detailsData, 'package.date', null);
      const outputFormat = 'DDDD';
      const luxonDate = DateTime.fromISO(inputDate);
      return luxonDate.invalid ? '' : luxonDate.toFormat(outputFormat);
    },
  },
  methods: {
    ...mapActions('modal', {
      closeModal: MODAL.HIDE_MODAL,
    }),
    ...mapActions('start', {
      setDetailsData: START.SET_DETAILS_DATA,
    }),
    closeModalAction() {
      this.setDetailsData({});
      this.closeModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.details-modal__wrapper {
  padding: 0 30px;
}
.details-modal__title {
  display: block;
  font-size: 25px;
  font-weight: 500;
  color: $color-gray-01;
  text-align: center;
}
.details-modal__link {
  display: block;
}
.details-modal__keywords {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.details-modal__keyword {
  display: block;
  padding: 5px;
  background-color: $color-violet-03;
  border-radius: 5px;
  margin: 5px;
}
.details-modal__links {
  overflow: hidden;
  display: block;
  padding: 5px;
  background: rgba($color-gray-01, 1);
  border-radius: 5px;
  margin: 5px;
}
.details-modal__link {
  color: $color-gray-04;
  text-decoration: none;
}
.details-modal__link span:first-child {
  font-weight: 700;
  margin-right: 10px;
}
.details-modal__link span:last-child {
  font-style: italic;
  text-decoration: underline;
}
</style>

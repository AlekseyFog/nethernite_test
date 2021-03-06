<template>
  <transition
    appear
    name="fade-in"
  >
    <div
      v-if="isVisible"
      class="modal modal_blur"
      :class="[
        isDefaultPosition && 'modal_padded',
        isBottom && 'modal_bottom',
      ]"
      @click="overlayClickHandler"
    >
      <div
        :class="[
          isDefaultPosition && 'container',
          !isDefaultPosition && 'container-fluid',
        ]"
      >
        <div
          class="row"
          :class="[
            isDefaultPosition && 'justify-content-center',
            isBottom && 'justify-content-center',
            isRight && 'justify-content-end',
          ]"
        >
          <transition
            :name="modalAnimationName"
          >
            <Component
              :is="component"
              v-show="componentIsVisible"
              class="modal__container"
              :class="[
                isBottom && 'modal__container_bottom',
                isRight && 'modal__container_right',
              ]"
              @click.native.stop
            />
          </transition>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import cloneDeep from 'lodash/cloneDeep';
  import isNull from 'lodash/isNull';
  import { mapGetters, mapActions } from 'vuex';
  import { MODAL } from '@/store/types';
  import { sleep } from '@/helpers/system';

  export default {
    name: 'Modal',
    data() {
      return {
        component: null,
        position: null,
        componentIsVisible: false,
      };
    },
    computed: {
      ...mapGetters('modal', {
        modalPosition: MODAL.GET_POSITION,
        modalComponent: MODAL.GET_COMPONENT,
        closable: MODAL.GET_CLOSABLE,
      }),
      isVisible() {
        const { component } = this;
        return !isNull(component);
      },
      isBottom() {
        const { position } = this;
        return position === 'bottom';
      },
      isRight() {
        const { position } = this;
        return position === 'right';
      },
      isDefaultPosition() {
        const { position } = this;
        return isNull(position);
      },
      modalAnimationName() {
        const { isDefaultPosition, isBottom, isRight } = this;
        return (isDefaultPosition && 'modal-default') || (isRight && 'modal-right') || (isBottom && 'modal-bottom');
      },
    },
    watch: {
      modalComponent() {
        this.setComponent();
        this.setVisibility();
      },
      modalPosition() {
        this.setPosition();
      },
    },
    methods: {
      ...mapActions('modal', {
        hideModal: MODAL.HIDE_MODAL,
      }),
      setComponent() {
        const { modalComponent } = this;
        this.component = cloneDeep(modalComponent);
      },
      setPosition() {
        const { modalPosition } = this;
        this.position = cloneDeep(modalPosition);
      },
      setVisibility() {
        const { component } = this;
        if (isNull(component)) {
          this.closeModal();
        }
        else {
          this.showModal();
        }
      },
      overlayClickHandler() {
        const { closable } = this;
        if (closable) {
          this.closeModal();
        }
      },
      async showModal() {
        await sleep(200);
        this.componentIsVisible = true;
      },
      async closeModal() {
        this.componentIsVisible = false;
        await sleep(200);
        this.hideModal();
      },
    },
  };
</script>

<style lang="scss" scoped>
  .modal {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    z-index: 12;
    overflow: hidden;
    transition: opacity $animation-time-02 $animation-easing;
  }
  .modal_blur {
    backdrop-filter: blur(10px);
    background-color: rgba($color-black-01, 0.4);
  }
  .modal_opacity {
    background-color: rgba($color-black-01, 0.8);
  }
  .modal_bottom {
    align-items: flex-end;
  }
  .modal_padded {
    padding: 12px 0;
  }
  .modal__container {
    padding-top: 48px;
    padding-bottom: 48px;
    border-radius: 10px;
    box-shadow: $modal-box-shadow;
  }
  .modal_blur .modal__container {
    background: rgba($color-gray-05, 0.4);
  }
  .modal_opacity .modal__container {
    background: rgba($color-gray-05, 0.8);
  }
  .modal__container_bottom {
    border-radius: 10px 10px 0 0;
  }
  .modal__container_right {
    border-radius: 0;
  }
</style>

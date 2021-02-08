<template>
  <div class="layout-navigation">
    <div class="layout-navigation__wrapper">
      <transition-group
        name="fade-in"
        mode="out-in"
        tag="div"
      >
        <div
          key="search"
          class="layout-navigation_item"
          @click="showSearchModal"
        >
          <SearchIcon />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import { MODAL, PRELOADER, VIEWPORT } from '@/store/types';

  import SearchModal from '@/components/modals/SearchModal';
  import SearchIcon from '@/assets/svg/search-icon.svg';

  export default {
    name: 'LayoutNavigation',
    components: {
      SearchIcon,
    },
    computed: {
      ...mapGetters('viewport', {
        viewportWidth: VIEWPORT.GET_VIEWPORT_WIDTH,
        viewportHeight: VIEWPORT.GET_VIEWPORT_HEIGHT,
      }),
    },
    mounted() {
      this.showSearchModal();
    },
    methods: {
      ...mapActions('preloader', {
        showPreloader: PRELOADER.SHOW_PRELOADER,
        hidePreloader: PRELOADER.HIDE_PRELOADER,
      }),
      ...mapActions('modal', {
        showModal: MODAL.SHOW_MODAL,
      }),
      showSearchModal() {
        this.showModal({
          component: SearchModal,
          position: 'right',
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .layout-navigation {
    background-color: $color-gray-02;
    width: 100%;
    height: 50px;
  }
  .layout-navigation__wrapper {
    position: sticky;
    top: 50px;
    bottom: 50px;
  }
  .layout-navigation_item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 45px;
    height: 45px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    transition: background-color $animation-time-01 $animation-easing;
    cursor: pointer;
  }

  .layout-navigation_item:hover {
    background-color: $color-violet-01;
  }
  .layout-navigation_item svg {
    display: block;
    width: 18px;
    height: 18px;
    color: $color-gray-01;
    margin: auto;
  }
</style>

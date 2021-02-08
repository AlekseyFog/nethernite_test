<template>
  <div
    class="ne-button"
    :class="[
      block && 'ne-button_block',
      disabled && 'ne-button_disabled',
    ]"
    @click="clickHandler"
  >
    <button
      :disabled="disabled"
      :type="type"
    >
      <span>
        <slot />
      </span>
    </button>
  </div>
</template>

<script>
  const TYPES_LIST = ['button', 'reset', 'submit'];

  export default {
    name: 'AmkButton',
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      block: {
        type: Boolean,
        default: false,
      },
      type: {
        default: TYPES_LIST[0],
        type: String,
        validator: (value) => TYPES_LIST.includes(value),
      },
    },
    methods: {
      clickHandler() {
        const { disabled } = this;
        if (!disabled) {
          this.$emit('click');
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .ne-button {
    display: inline-block;
    transform: scale(0.96);
    filter: brightness(0.96);
    transition: filter $animation-time-01 $animation-easing, transform $animation-time-01 $animation-easing;
  }
  .ne-button_block {
    display: block;
    width: 100%;
  }
  .ne-button:not(.ne-button_disabled):hover {
    transform: scale(0.98);
    filter: brightness(0.98);
  }
  .ne-button:not(.ne-button_disabled):active {
    transform: scale(1);
    filter: brightness(1);
  }
  .ne-button_disabled {
    filter: brightness(0.6);
  }
  .ne-button button {
    display: block;
    border-radius: 5px;
    border: 1px solid transparent;
    background-color: $color-violet-01;
    cursor: pointer;
  }
  .ne-button_disabled button {
    cursor: not-allowed;
  }
  .ne-button button span {
    display: block;
    text-align: center;
    padding: 10px 25px 8px 25px;
    font-size: 15px;
    line-height: 20px;
    font-weight: 500;
    text-transform: uppercase;
    color: $color-gray-01;
  }
</style>

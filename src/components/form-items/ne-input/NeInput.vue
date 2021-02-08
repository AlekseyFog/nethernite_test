<template>
  <div
    class="ne-input"
    :class="[
      disabled && 'ne-input_disabled',
    ]"
  >
    <label>
      <input
        ref="input"
        :type="type"
        :value="value"
        :placeholder="placeholder"
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
        @focus="eventHandler('focus')"
        @keypress.enter="eventHandler('enter-press')"
        @keydown="eventHandler('keypress', $event)"
        @keydown.38="eventHandler('up-press', $event)"
        @keydown.40="eventHandler('down-press', $event)"
        @keyup="eventHandler('keyup', $event)"
        @paste="eventHandler('paste', $event)"
        @input="eventHandler('input', $event)"
        @blur="eventHandler('blur')"
      />
    </label>
  </div>
</template>

<script>
  const INPUT_TYPES = ['text', 'password', 'number', 'email'];

  export default {
    name: 'AmkInput',
    props: {
      type: {
        default: INPUT_TYPES[0],
        type: String,
        validator: (value) => INPUT_TYPES.includes(value),
      },
      value: {
        default: '',
        required: true,
        validator: (prop) => ['string', 'number'].includes(typeof prop) || prop === null,
      },
      placeholder: {
        default: '',
        validator: (prop) => ['string'].includes(typeof prop) || prop === null,
      },
      min: {
        default: null,
        validator: (prop) => ['string', 'number'].includes(typeof prop) || prop === null,
      },
      max: {
        default: null,
        validator: (prop) => ['string', 'number'].includes(typeof prop) || prop === null,
      },
      step: {
        default: null,
        validator: (prop) => ['string', 'number'].includes(typeof prop) || prop === null,
      },
      disabled: {
        default: false,
        type: Boolean,
      },
    },
    methods: {
      resetInputState() {
        this.$forceUpdate();
      },
      setFocus() {
        this.$refs.input.focus();
      },
      eventHandler(eventName, $event) {
        const { disabled } = this;
        if (!disabled) {
          this.$emit(eventName, $event);
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .ne-input {
    display: block;
    width: 100%;
    background-color: $color-gray-01;
    border-radius: 5px;
    padding: 10px;
  }
  .ne-input label {
    display: block;
    width: 100%;
  }
  .ne-input label input {
    display: block;
    width: 100%;
    font-size: 13px;
    font-weight: 500;
    color: $color-black-01;
    border: none;
    appearance: none;
    user-select: text;
    background-color: transparent;
  }
  .ne-input_disabled input {
    color: $color-gray-03;
    cursor: not-allowed;
  }
  .ne-input input::-webkit-input-placeholder {
    font-size: 13px;
    opacity: 1;
    text-indent: 0;
    transform: translateZ(0);
    color: $color-gray-05;
    transition: text-indent $animation-time-02 $animation-easing, $animation-time-01 $animation-easing;
  }
  .ne-input input::-moz-placeholder {
    font-size: 13px;
    opacity: 1;
    text-indent: 0;
    transform: translateZ(0);
    color: $color-gray-05;
    transition: text-indent $animation-time-02 $animation-easing, opacity $animation-time-01 $animation-easing;
  }
  .ne-input input:-moz-placeholder {
    font-size: 13px;
    opacity: 1;
    text-indent: 0;
    transform: translateZ(0);
    color: $color-gray-05;
    transition: text-indent $animation-time-02 $animation-easing, opacity $animation-time-01 $animation-easing;
  }
  .ne-input input:-ms-input-placeholder {
    font-size: 13px;
    opacity: 1;
    text-indent: 0;
    transform: translateZ(0);
    color: $color-gray-05;
    transition: text-indent $animation-time-02 $animation-easing, opacity $animation-time-01 $animation-easing;
  }
  .ne-input input:focus::-webkit-input-placeholder {
    opacity: 0;
    text-indent: -500px;
    transition: text-indent $animation-time-02 $animation-easing, opacity $animation-time-01 $animation-easing;
  }
  .ne-input input:focus::-moz-placeholder {
    opacity: 0;
    text-indent: -500px;
    transition: text-indent $animation-time-02 $animation-easing, opacity $animation-time-01 $animation-easing;
  }
  .ne-input input:focus:-moz-placeholder {
    opacity: 0;
    text-indent: -500px;
    transition: text-indent $animation-time-02 $animation-easing, opacity $animation-time-01 $animation-easing;
  }
  .ne-input input:focus:-ms-input-placeholder {
    opacity: 0;
    text-indent: -500px;
    transition: text-indent $animation-time-02 $animation-easing, opacity $animation-time-01 $animation-easing;
  }
</style>

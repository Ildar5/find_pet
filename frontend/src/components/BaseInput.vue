<template>
  <div>
    <slot></slot>
    <input required="isRequired" :type="type" />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    type: {
      type: String,
      default: "text"
    },
    isRequired: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style module>
</style>

<template>
  <div :class="$style.container">
    <div>
      <span class="tag is-large">Спасибо за регистрацию, теперь вы можете авторизоваться</span>
      <b-button @click.prevent="onClickEnter" is-rounded>Войти</b-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickEnter() {
      this.$router.push(`/auth`);
    }
  }
};
</script>

<style lang="less" module>
.container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
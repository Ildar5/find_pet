<template>
  <section :class="$style.container">
    <img :class="$style.img" src="../assets/logo.png" alt="Логотип" />
    <div :class="$style.inputs">
      <b-field :class="$style.input">
        <b-input
          v-model="email"
          placeholder="Email"
          icon="email"
          :icon-right="email ? 'close-circle' : ''"
          @icon-right-click="onClearInput('email')"
          icon-right-clickable
        ></b-input>
      </b-field>
      <b-field :class="$style.input">
        <b-input
          v-model="password"
          placeholder="Пароль"
          icon="lock"
          type="password"
          :icon-right="password ? 'close-circle' : ''"
          @icon-right-click="onClearInput('password')"
          icon-right-clickable
        ></b-input>
      </b-field>
    </div>
    <b-button type="is-light">Войти</b-button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    onClearInput(type) {
      this[type] = "";
    }
  }
};
</script>

<style lang="less" module>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .img {
    width: 200px;
    height: 200px;
  }

  .inputs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    padding: 20px;
    width: 100%;
  }

  .input {
    width: 100% / 1.5;
  }
}
</style>
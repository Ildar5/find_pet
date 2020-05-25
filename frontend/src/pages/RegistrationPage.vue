<template>
  <section :class="$style.container">
    <h2 class="subtitle is-2">Регистрация</h2>
    <img :class="$style.img" src="../assets/puppy.png" alt="Логотип" />
    <div :class="$style.inputs">
      <b-field :class="$style.input">
        <b-input
          v-model="email"
          placeholder="Email"
          icon="email"
          maxlength="30"
          :icon-right="email ? 'close-circle' : ''"
          @icon-right-click="onClearInput('email')"
          icon-right-clickable
          required
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
          required
        ></b-input>
      </b-field>
      <b-field :class="$style.input">
        <b-input
          v-model="repeatPassword"
          placeholder="Повтор пароля"
          icon="lock"
          type="password"
          :icon-right="repeatPassword ? 'close-circle' : ''"
          @icon-right-click="onClearInput('repeatPassword')"
          icon-right-clickable
          required
        ></b-input>
      </b-field>
    </div>
    <b-button :loading="isLoading" @click="onClickRegister" type="is-light">Зарегистрироваться</b-button>
    <Notification />
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Notification from "@/components/Notification.vue";

export default {
  name: "RegistrationPage",

  components: {
    Notification
  },

  data() {
    return {
      email: "",
      password: "",
      repeatPassword: ""
    };
  },

  computed: {
    ...mapGetters({ isLoading: "userModule/isLoading" })
  },

  methods: {
    ...mapActions({
      registerUser: "userModule/registerUser"
    }),

    onClickRegister() {
      if (this.email && this.password && this.repeatPassword) {
        this.registerUser({
          email: this.email,
          password1: this.password,
          password2: this.repeatPassword
        });
      }
    },

    onClearInput(type) {
      console.log(this.$axios);
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
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 20px;
    width: 100%;
  }

  .input {
    width: 100% / 3;
  }
}
</style>
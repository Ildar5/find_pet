<template>
  <section :class="$style.container">
    <h2 class="subtitle is-2">Войти</h2>
    <img :class="$style.img" src="../assets/puppy.png" alt="Логотип" />
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
    <b-button :loading="isLoading" type="is-light" @click="onClickAuth">Войти</b-button>
    <Notification />
  </section>
</template>

<script>
import Notification from "@/components/Notification";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  components: {
    Notification
  },

  computed: {
    ...mapGetters({ isLoading: "userModule/isLoading" })
  },

  methods: {
    ...mapActions("userModule", ["authUser"]),

    onClearInput(type) {
      this[type] = "";
    },

    onClickAuth() {
      if (this.email && this.password) {
        this.authUser({ email: this.email, password: this.password });
      }
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
    margin: 0 auto;
    padding: 20px;
    width: 100%;
  }

  .input {
    width: 100% / 3;
  }
}
</style>
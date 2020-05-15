<template>
  <div>
    <div>
      <b-navbar shadow>
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img :class="$style.mainLogo" src="../assets/logo.png" alt="Поиск животных" />
          </b-navbar-item>
        </template>

        <template slot="start">
          <b-navbar-item href="#">Объявления</b-navbar-item>
          <b-navbar-item href="#">Поиск животного</b-navbar-item>
        </template>

        <template slot="end">
          <b-navbar-item tag="div">
            <div class="buttons">
              <router-link class="button is-light" to="/auth">Войти</router-link>
              <router-link class="button is-light" to="/registration">Регистрация</router-link>
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" module>
.mainLogo {
  height: 100px;
}
</style>
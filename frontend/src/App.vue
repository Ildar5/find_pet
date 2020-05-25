<template>
  <div id="app">
    <NavBar />
    <Notification />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Notification from "@/components/Notification";
export default {
  name: "App",
  components: {
    NavBar,
    Notification
  }
};
</script>

<style>
html,
body,
#app {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

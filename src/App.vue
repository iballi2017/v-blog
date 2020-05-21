<template>
  <div id="app">
    <Header />
    <!-- <home title="Welcome to My Blog" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <blogPage /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Header
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.bg-primary {
  background-color: rgba(77, 80, 78, 0.6);
  color: #ffffff;
}

.bg-success {
  background-color: rgba(101, 172, 133, 0.6);
  color: #ffffff;
}

.bg-danger {
  background-color: rgba(241, 52, 4, 0.6);
  color: #ffffff;
}

.alert {
  padding: 1.2em;
  font-size: 0.7rem;
  border-radius: 3px;
  margin: 1em 0;
}

.text-center {
  text-align: center;
}
.mt {
  margin-top: 1em;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.wrapper {
  width: 95%;
  margin: 0 auto;
}
.doc-link {
  margin-top: 3em;
  text-decoration: none;
  color: #2c3e50;
  font-weight: 600;
}
.doc-link:focus {
  outline: 0;
}
.doc-link::after {
  content: "";
  height: 3px;
  background: #2c3e50;
  display: block;
  transform: scaleX(0);
  transition: transform 250ms ease-in;
  transform-origin: right;
}
.doc-link:hover::after,
.doc-link:focus::after,
.doc-link.router-link-active::after {
  transform: scaleX(1);
  transition: transform 250ms ease-out;
  transform-origin: left;
}
</style>

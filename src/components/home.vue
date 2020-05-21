<template>
  <div>
    <h1 class="page-title">{{ title }}</h1>
    <BlogList />
  </div>
</template>

<script>
import BlogList from "./blogList.vue";
export default {
  name: "home",
  props: {},
  data() {
    return {
      title: "Welcome to My Blog",
    };
  },
  components: {
    BlogList,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-title {
  text-align: center;
  margin: 2em 0 1.9em 0;
}
</style>

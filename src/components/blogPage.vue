<template>
  <div class="">
    <!-- <p>{{ greet() }}</p> -->
    <!-- <button v-on:click="greet">Greet All</button>
    <button v-on:click="greeting">Greet Nigerians</button> -->
    <div class="blog-posts">
      <router-link to="/blog/addBlog" exact class="add-blog-link doc-link"
        >Add a Blog</router-link
      >
      <BlogList />
    </div>
  </div>
</template>

<script>
import BlogList from "./blogList.vue";
export default {
  name: "blogPage",
  props: {
    msg: String,
  },
  components: {
    BlogList,
  },
  methods: {
    greet: function() {
      alert("hello world!");
    },
    greeting: function() {
      alert("I greet you all Nigerians!");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog-posts {
  max-width: 600px;
  margin: 0 auto;
}
.doc-link {
  display: inline-block;
}
</style>

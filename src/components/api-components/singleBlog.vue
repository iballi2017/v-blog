<template>
  <div id="singleBlog">
    <h1 class="title">{{blog.title}}</h1>
    <article>
      <p class="content">{{blog.content}}</p>
    </article>
    <p class="author">
      <b v-if="blog.categories">Author:</b>
      {{blog.author}}
    </p>
    <dl class="blog-category">
      <dt>
        <b v-if="blog.categories">Categories:</b>
      </dt>
      <dd v-for="(category, cat) in blog.categories" :key="cat">{{category}}</dd>
    </dl>
    <!-- <ul>
      <li v-for="(categories, cat) in blog.categories" :key="cat">{{categories}}</li>
    </ul>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$http;
    // ###  .get("http://jsonplaceholder.typicode.com/posts/9")
    //     .get("http://jsonplaceholder.typicode.com/posts/" + this.id)
    //   .then(data => {
    //     console.log(data.body);
    //     this.blog = data.body;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    this.$http
      .get(
        "https://my-firebase-proj-112d2.firebaseio.com/posts/" +
          this.id +
          ".json"
      )
      .then(data => {
        console.log(data.body);
        // this.blog = data.body;
        return data.json();
      })
      .then(newData => {
        this.blog = newData;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>





<style scope>
#singleBlog {
  max-width: 960px;
  margin: 0 auto;
  padding: 1em;
  line-height: 1.8;
}
#singleBlog h1 {
  font-size: 3rem;
  margin: 0.4em 0 0.6em 0;
}

article {
  margin: 1em 0;
}

.blog-category {
  display: flex;
}

.blog-category dd {
  margin-left: 1.2em;
  background-color: gray;
  color: #fff;
  padding: 1px 7px;
  border-radius: 3px;
}
</style>
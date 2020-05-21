<template>
  <div class="viewBlogs">
    <div class="viewblog-inner" v-theme:column="'narrow'">
      <h1 class="text-center mt">{{ title | toUppercase }}</h1>

      <input class="search-input" type="text" v-model="search" placeholder="search blog" />

      <div class="blogItem" v-for="(blogItem, blgitm) in filteredBlogs" :key="blgitm">
        <router-link v-bind:to="'/blog/viewPosts/'+blogItem.id">
          <h3 v-rainbow>{{ blogItem.title }}</h3>
        </router-link>
        <p>{{ blogItem.content | snippet }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewBlogs",
  props: {
    msg: String
  },
  data() {
    return {
      title: "All Blog Articles",
      search: "",
      blogList: []
    };
  },

  created() {
    this.$http
      // .get("http://jsonplaceholder.typicode.com/posts")
      .get("https://my-firebase-proj-112d2.firebaseio.com/posts.json")
      .then(response => {
        return response.json();
        // console.log(x);
        // let data = response.body.slice(0, 10);
        // console.log(data);
        // this.blogList = data;
      })
      .then(newData => {
        console.log(newData);
        var blogsArray = [];
        for (let key in newData) {
          console.log(newData[key]);
          newData[key].id = key;
          blogsArray.push(newData[key]);
        }
        this.blogList = blogsArray;
      });

    // .catch(err => {
    //   console.log(err);
    // });
    // console.log(this.filteredBlogs);
  },

  computed: {
    filteredBlogs: function() {
      return this.blogList.filter(blog => {
        // console.log(blog);
        return blog.title.match(this.search);
        // return Boolean;
      });
    }
  },
  /*  registering filters (Locally)  */
  filters: {
    toUppercase: value => {
      return value.toUpperCase();
    },
    snippet: value => {
      return value.slice(0, 100) + "...";
    }
  },
  /* registering directives (Locally) */
  directives: {
    rainbow: {
      bind(el) {
        el.style.color =
          "#" +
          Math.random()
            .toString()
            .slice(2, 8);
        el.style.textTransform = "capitalize";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.viewblog-inner {
  max-width: 600px;
  margin: 0 auto;
  text-align: justify;
}

.search-input {
  width: 100%;
  padding: 10px;
}

.blogItem {
  margin: 20px;
  padding: 20px;
  background-color: #eee;
}
</style>

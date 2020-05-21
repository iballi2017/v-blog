<template>
  <div id="addBlog">
    <div class="form-container">
      <h2 class="page-title">Add a new blog</h2>
      <div class="bg-success alert" v-if="formSubmitted">
        <h3>Thanks for adding your post :)</h3>
        <p>Post {{ serverResponse }}</p>
      </div>
      <form action v-if="!formSubmitted">
        <div class="bg-danger alert" v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="(error, err) in errors" :key="err">{{ error }}</li>
          </ul>
        </div>
        <div class="bg-primary alert" v-if="sendingData && !formSubmitted">
          <b>Sending...</b>
        </div>
        <div class="form-grp">
          <label for="title">Blog Title</label>
          <input type="text" id="title" name="title" v-model.lazy="blog.title" />
        </div>
        <div class="form-grp">
          <label for="content">Blog content</label>
          <textarea type="text" id="content" rows="5" name="content" v-model.lazy="blog.content"></textarea>
        </div>

        <div class="form-grp" id="categories">
          <input type="checkbox" id="category1" value="angular" v-model="blog.categories" />
          <label for="category1">Angular</label>
          <input type="checkbox" id="category2" value="vue" v-model="blog.categories" />
          <label for="category2">Vue</label>
          <input type="checkbox" id="category3" value="react" v-model="blog.categories" />
          <label for="category3">React</label>
        </div>
        <!-- <div class="form-grp">
          <label for="author">Blog author</label>
          <input type="text" id="author" name="author" v-model.lazy="blog.author" />
        </div>-->

        <div class="form-grp">
          <label for>Author</label>

          <select v-model="blog.author">
            <option v-for="(author, auth) in authors" :key="auth">
              {{
              author
              }}
            </option>
          </select>
        </div>

        <div class="form-grp">
          <button class="form-btn" type="submit" v-on:click.prevent="postData">POST</button>
          <!-- <button class="form-btn" v-on:click.prevent="handler">TEST</button> -->
        </div>
      </form>

      <div id="preview">
        <h3>Preview</h3>
        <p>Blog title: {{ blog.title }}</p>
        <p>Blog content:</p>
        <p>{{ blog.content }}</p>
        <!-- <p>Author: {{ blog.author }}</p> -->
        <p>Categories:</p>
        <ul>
          <li v-for="(category, cat) in blog.categories" :key="cat">{{ category }}</li>
        </ul>
        <p>Author: {{ blog.author }}</p>
      </div>
      <router-link to="/blog" exact class="blogs-link doc-link">View Blogs</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "addBlog",
  props: {
    msg: String
  },
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["Angular Guru", "Vue Genius", "React Wizard"],
      formSubmitted: false,
      sendingData: false,
      serverResponse: "",
      errors: []
    };
  },

  methods: {
    /* Form Validation */
    // checkForm: function() {
    //   if (this.blog.title && this.blog.content) {
    //     return true;
    //   }

    //   this.errors = [];

    //   if (!this.blog.title) {
    //     this.errors.push("Title required.");
    //     return;
    //   }
    //   if (!this.blog.content) {
    //     this.errors.push("Content required.");
    //     return;
    //   }
    // },

    /* Old Codeblock   */
    // ########################################
    // postData: function() {
    //   if (!this.blog.title || !this.blog.content) {
    //     this.errors = [];

    //     if (!this.blog.title) {
    //       this.errors.push("Title required.");
    //     }
    //     if (!this.blog.content) {
    //       this.errors.push("Content required.");
    //     }
    //     return;
    //   } else if (this.blog.title && this.blog.content) {
    //     alert("Data sent and is processing...");
    //     this.sendingData = true;
    //     this.errors = [];
    //     //.................calling the form validation function
    //     this.$http
    //       // .post("https://jsonplaceholder.typicode.com/posts", {
    //       .post("http://jsonplaceholder.typicode.com/posts", {
    //         title: this.blog.title,
    //         body: this.blog.content,
    //         userId: 1,
    //       })
    //       .then((response) => {
    //         console.log(response);
    //         this.formSubmitted = true;
    //         console.log(response.statusText);
    //         this.serverResponse = response.statusText;
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   }
    // },

    /*   Edited Codeblock  */
    // ########################################
    postData: function() {
      if (!this.blog.title || !this.blog.content) {
        this.errors = [];

        if (!this.blog.title) {
          this.errors.push("Title required.");
        }
        if (!this.blog.content) {
          this.errors.push("Content required.");
        }
        return;
      } else if (this.blog.title && this.blog.content) {
        alert("Data sent and is processing...");
        this.sendingData = true;
        this.errors = [];
        //.................calling the form validation function
        this.$http
          // .post("https://jsonplaceholder.typicode.com/posts", {
          .post(
            "https://my-firebase-proj-112d2.firebaseio.com/posts.json",
            this.blog
          )
          .then(response => {
            console.log(response);
            this.formSubmitted = true;
            console.log(response.statusText);
            this.serverResponse = response.statusText;
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blogs-link {
  display: block;
  padding-top: 3em;
  text-decoration: none;
}
#addBlog {
  max-width: 500px;
  margin: 20px auto;
}
.page-title {
  text-transform: capitalize;
}

.form-container {
  margin-right: 2em;
  margin-left: 2em;
}
.form-grp {
  margin: 20px 0 10px;
}
label {
  display: block;
  cursor: pointer;
}
input[type="text"],
textarea,
select {
  width: 100%;
  padding: 8px;
}
#categories {
  margin-top: 20px;
}
#categories label {
  display: inline-block;
  margin-right: 2em;
}
#categories input {
  display: inline-block;
  margin-right: 10px;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
  line-height: 2;
}

#preview li {
  margin: 5px 0;
  padding: 5px;
  background: rgba(131, 114, 122, 0.2);
}
h3 {
  margin-top: 10px;
}

ul {
  padding: 0 2em;
}

.form-btn {
  width: 100%;
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 0.7em;
}
.doc-link {
  display: inline-block;
}
</style>

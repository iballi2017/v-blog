
import home from "./components/home.vue";
import blogPage from "./components/blogPage.vue";
import PageNotFound from "./components/page-not-found.vue"
import addBlog from "./components/addBlog.vue"
import viewBlogs from "./components/api-components/viewBlogs.vue"
import postBlog from "./components/api-components/postBlog.vue"
import singleBlog from "./components/api-components/singleBlog.vue"

export default [
    { path: "/", component: home },
    { path: "/blog", component: blogPage },
    { path: "/blog/addBlog", component: addBlog },
    { path: "/blog/postBlog", component: postBlog },
    { path: "/blog/viewPosts", component: viewBlogs },
    { path: "/blog/viewPosts/:id", component: singleBlog },
    { path: "**", component: PageNotFound }
]
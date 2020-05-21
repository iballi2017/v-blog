<template>
  <header>
    <nav class="wrapper">
      <h2 class="brandLogo">BrandLogo</h2>

      <ul class="nav-tab">
        <li class="nav-list" v-for="(navLink, dd) in navLinks" v-bind:key="dd">
          <router-link :to="navLink.link" exact class="nav-link">{{
            navLink.linkTag
          }}</router-link>
        </li>
        <!-- <li class="nav-list">
          <router-link to="/" exact class="nav-link">Home</router-link>
        </li>
        <li class="nav-list">About</li>
        <li class="nav-list">
          <router-link to="/blog" exact class="nav-link">Blog</router-link>
        </li>
        <li class="nav-list">Login</li> -->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },

  data() {
    return {
      // navLinks: ["Home", "About", "Blog", "Login"],
      // links: ["/", "/blog"],
      navLinks: [
        { linkTag: "Home", link: "/" },
        { linkTag: "About", link: "/h" },
        { linkTag: "Blog", link: "/blog" },
        { linkTag: "View Posts", link: "/blog/viewPosts" },
        { linkTag: "Add Post", link: "/blog/postBlog" },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background: #2c3e50;
  color: #ffffff;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 2em;
  padding-bottom: 2em;
}

.brandLogo {
  flex-basis: 30%;
}

.nav-tab {
  display: flex;
  flex-basis: 70%;
  justify-content: flex-end;
}

.nav-list {
  margin-left: 1.3em;
  list-style: none;
}
.nav-link {
  color: #ffffff;
  text-decoration: none;
}
.nav-link::after {
  content: "";
  height: 3px;
  background: orangered;
  display: block;
  transform: scaleX(0);
  transition: transform 250ms ease-in;
  transform-origin: right;
}
.nav-link:hover::after,
.nav-link:focus::after,
.nav-link.router-link-active::after {
  transform: scaleX(1);
  transition: transform 250ms ease-out;
  transform-origin: left;
}
.nav-link:focus {
  outline: 0;
}
.nav-link.router-link-active {
  color: orangered;
}
</style>

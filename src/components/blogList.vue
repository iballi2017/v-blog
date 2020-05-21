<template>
  <div class="">
    <ul class="blog-posts">
      <li
        class="post-item animate"
        v-for="(blogPost, testKey) in blogPosts"
        v-bind:key="testKey"
      >
        <!-- ### "testKey" can be anything -->
        <h2 class="post-title">{{ blogPost.title }}</h2>
        <p class="post-content">{{ blogPost.content }}</p>
        <p class="post-author">Author: {{ blogPost.author }}</p>
        <p>{{ blogPost.date }}</p>
      </li>
    </ul>
  </div>
  <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore harum ullam doloribus quo mollitia expedita culpa voluptatum quibusdam! Iusto, adipisci, illum nesciunt itaque placeat distinctio commodi deleniti vel maxime dicta facere, et ut ratione incidunt. Repellendus, accusantium inventore. Recusandae officiis, sint cum dolores ut minus accusantium numquam modi rem incidunt adipisci perspiciatis ab odio magni explicabo distinctio? Veritatis neque nesciunt commodi recusandae eos exercitationem ea distinctio voluptatum fuga suscipit sapiente voluptatibus sunt praesentium, error facilis autem cumque quisquam? Rem quas, aperiam blanditiis ducimus voluptatum cumque culpa voluptatem hic. Cum quo architecto enim odit ea animi totam fugiat numquam voluptatibus quidem neque magnam incidunt nihil dolores, maiores deleniti nostrum. Deserunt iusto ut corrupti suscipit dolorum itaque error dolores, commodi nesciunt officia aliquid, saepe iste minus repudiandae perspiciatis autem doloremque quaerat laborum praesentium natus veniam. Debitis provident voluptate mollitia in deserunt blanditiis illo ducimus commodi asperiores officiis, eaque eligendi harum. Illum molestias atque at omnis ipsam ipsa veritatis quos quo corporis mollitia possimus exercitationem, unde maiores, tempora iure hic assumenda tempore rerum delectus optio nam placeat id. Doloribus reprehenderit vitae aperiam similique ipsum laborum vel odio, quaerat nostrum velit expedita cupiditate tempora itaque molestias excepturi aliquam soluta nam exercitationem neque? Exercitationem, natus? -->
</template>

<script>
export default {
  name: "BlogList",
  props: {
    msg: String,
  },

  data() {
    return {
      blogPosts: [
        {
          id: 1,
          title: "The New Age of Vue",
          content:
            " laborum praesentium natus veniam. Debitis provident voluptate mollitia in deserunt blanditiis illo ducimus commodi asperiores officiis, eaque eligendi harum.",
          author: "tempora iure hic",
          likes: null,
          date: new Date(),
        },
        {
          id: 2,
          title: "Angular Vs Vue",
          content:
            " laborum praesentium natus veniam. Debitis provident voluptate mollitia in deserunt blanditiis illo ducimus commodi asperiores officiis, eaque eligendi harum.",
          author: "tempora iure hic",
          likes: null,
          date: new Date(),
        },
        {
          id: 3,
          title: "Is Vue worth it?",
          content:
            " laborum praesentium natus veniam. Debitis provident voluptate mollitia in deserunt blanditiis illo ducimus commodi asperiores officiis, eaque eligendi harum.",
          author: "tempora iure hic",
          likes: null,
          date: new Date(),
        },
        {
          id: 4,
          title: "Angular is a Framework",
          content:
            "Kaborum praesentium natus veniam. Debitis provident voluptate mollitia in deserunt blanditiis illo ducimus commodi asperiores officiis, eaque eligendi harum.",
          author: "tempora iure hic",
          likes: null,
          date: new Date(),
        },
      ],
    };
  },
  mounted: () => {
    // Testing IntersectionObserver
    const postItem = document.querySelectorAll(".post-item");
    // console.log(postItem);
    const options = {
      rootMargin: "0px 0px -100px 0px",
    };
    const postItemObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry.target);
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.remove("animate");
        entry.target.classList.add("animate-alt");
        console.log(entry.target);
      });
    }, options);
    postItem.forEach((post) => {
      postItemObserver.observe(post);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog-posts {
  list-style: none;
}
.post-item {
  background: rgba(146, 131, 148, 0.4);
  margin: 1em 0.5em;
  padding: 0.7em;
}
.post-title {
  margin-bottom: 0.5em;
}

.post-content {
  margin: 0.5em 0em;
}

.post-author {
  text-transform: capitalize;
  font-weight: 600;
  margin-bottom: 0.5em;
}
.animate:nth-child(even) {
  transform: translateX(40px);
}
.animate:nth-child(odd) {
  transform: translateX(-40px);
}
.animate-alt {
  transform: translateX(0px);
  transition: background-color 250ms ease-in-out;
  transition: transform 250ms ease-in-out;
  transition-timing-function: ease-in-out;
}
</style>

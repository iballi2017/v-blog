<template>
  <div class="error-msg">
    <h1 class="msg-head">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
  props: {},
  data() {
    return {
      msg: "OOps! page not found!",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error-msg {
  text-align: center;
  height: 80vh;
  display: grid;
  place-content: center;
}

.msg-head {
  text-transform: capitalize;
  font-size: 3rem;
}
</style>

<template lang="html">
    <div class="card" style="margin: 20px">
      <div class="card-content">
        <figure>
          <img v-bind:src="mediaURI">
        </figure>
        <p class="title">{{ article.title }}</p>
        <p class="subtitle is-6">{{ article.content }}</p>
      </div>
    </div>
</template>

<script>

export default {
  data() {
    return {

    };
  },
  computed: {
    mediaURI: function () {
      return this.article.mediaURI;
    }
  },
  props: ['article'],
  components: {

  },
}
</script>

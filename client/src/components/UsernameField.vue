<template lang="html">
  <b-field label="Username">
      <b-input
          type="username"
          placeholder="Your username"
          required
          v-model="content"
          @input="handleInput"
          >
      </b-input>
  </b-field>
</template>

<script>
export default {
  prop: ['value'],
  data() {
    return {
      content: ''
    };
  },
  watch: {
    value: function (n) {
      this.content = n;
    }
  },
  methods: {
    handleInput () {
      this.$emit('input', this.content)
    }
  }
}
</script>

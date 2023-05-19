<script>

export default {
  data() {
    return {
      term: "",
    }
  },
  props: {
    placeholder: String,
  },

  emits: ["on-search"],

  methods: {
    clear() {
      this.term = "";
    },
    search() {
      this.$emit("on-search", this.term);
    },
  },
};
</script>


<template>
  <form @submit.prevent>
    <div class="input-group input-group-sm">
      <input type="text" class="form-control" :placeholder="placeholder" v-model="term">
      <button class="btn btn-danger" type="button" @click="search">Search</button>
      <button class="btn btn-danger" type="button" @click="clear">Reset</button>
    </div>

  </form>
</template>

<style lang="scss" scoped></style>

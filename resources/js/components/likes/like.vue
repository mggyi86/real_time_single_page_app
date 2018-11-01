<template>
    <div>
        <v-btn icon @click="like">
            <v-icon color="red">favorite</v-icon> {{ count }}
        </v-btn>
    </div>
</template>

<script>
export default {
  props: [ 'data' ],
  data() {
    return {
      liked: false,
      count: this.data.like_count
    }
  },
  methods: {
    like: function() {
      if(User.loggedIn()) {
        this.liked = !this.liked;
        this.liked ? this.increment() : this.decrement();
      }
    },
    increment: function() {
      this.count++;
    },
    decrement: function() {
      this.count--;
    }
  }
}
</script>

<style>

</style>

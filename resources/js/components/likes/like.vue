<template>
    <div>
        <v-btn icon @click="likeReply">
            <v-icon :color="color">favorite</v-icon> {{ count }}
        </v-btn>
    </div>
</template>

<script>
export default {
  props: [ 'data' ],
  data() {
    return {
      liked: this.data.liked,
      count: this.data.like_count
    }
  },
  methods: {
    likeReply: function() {
      if(User.loggedIn()) {
        this.liked ? this.decrement() : this.increment();
        this.liked = !this.liked;
      }
    },
    increment: function() {
      axios.post(`/api/like/${this.data.id}`)
        .then(res => this.count++);
    },
    decrement: function() {
      axios.delete(`/api/like/${this.data.id}`)
        .then(res => this.count--);
    }
  },
  computed: {
    color: function() {
      return this.liked ? 'red' : 'red lighten-4';
    }
  }
}
</script>

<style>

</style>

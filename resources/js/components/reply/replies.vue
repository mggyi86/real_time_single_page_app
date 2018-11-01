<template>
    <div>
        <reply
        v-for="(reply, index) in replies"
        :key="replies.indexOf(reply)"
        :data="reply"
        :index="index"
        v-if="replies"></reply>
    </div>
</template>

<script>
import Reply from './reply';

export default {
  props: [ 'question' ],
  data() {
    return {
      replies: this.question.replies
    }
  },
  components: { Reply },
  methods: {
    listen: function() {
      EventBus.$on('newReply', (reply) => {
        this.replies.unshift(reply);
      });
      EventBus.$on('deleteReply', (index) => {
        axios.delete(`/api/question/${this.question.slug}/reply/${this.replies[index].id}`)
          .then(res => {
            this.replies.splice(index, 1);
          });
      });
      EventBus.$on('updateReply', (reply) => {
        axios.patch(`/api/question/${this.question.slug}/reply/${reply.id}`, reply)
          .then(res => console.log(res));
      })
    }
  },
  created() {
    this.listen();
  }
}
</script>

<style>

</style>

<template>
    <div v-if="question">
        <edit-question
        v-if="editing"
        :data="question"
        ></edit-question>

        <show-question
        :data="question"
        v-else
        ></show-question>

        <v-container>
            <replies :question="question"></replies>
            <new-reply :questionSlug="question.slug"></new-reply>
        </v-container>
    </div>
</template>

<script>
import Replies from '../reply/replies';
import NewReply from '../reply/newReply';
import ShowQuestion from './ShowQuestion';
import EditQuestion from './editQuestion';

export default {
  components: {
    ShowQuestion,
    EditQuestion,
    Replies,
    NewReply
  },
  data() {
    return {
      question: null,
      editing: false
    }
  },
  methods: {
    listen: function() {
      EventBus.$on('startEditing', () => {
        this.editing = true;
      });
      EventBus.$on('cancelEditing', () => {
        this.editing = false;
      })
    },
    getQuestion: function() {
      axios.get(`/api/question/${this.$route.params.slug}`)
      .then(res => {
          this.question = res.data.data;
      });
    }
  },
  created() {
    this.listen();
    this.getQuestion();
  }
}
</script>

<style>

</style>

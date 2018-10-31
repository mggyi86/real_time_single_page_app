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
    </div>
</template>

<script>
import ShowQuestion from './ShowQuestion';
import EditQuestion from './editQuestion'

export default {
  components: {
    ShowQuestion,
    EditQuestion
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

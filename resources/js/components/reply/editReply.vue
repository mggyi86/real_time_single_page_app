<template>
    <div>
        <markdown-editor v-model="reply.reply"></markdown-editor>
        <v-card-actions>
            <v-btn icon small @click="update">
                <v-icon color="green">save</v-icon>
            </v-btn>
            <v-btn icon small @click="cancel">
                <v-icon color="black">cancel</v-icon>
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script>
export default {
  props: [ 'reply' ],
  methods: {
    update: function() {
      this.reply.body = this.reply.reply;
      EventBus.$emit('updateReply', this.reply);
      //EventBus.$emit('updateReply', { body: this.reply.reply }); //second way
      this.cancel();
    },
    cancel: function() {
      EventBus.$emit('cancelEditingReply');
    }
  }
}
</script>

<style>

</style>

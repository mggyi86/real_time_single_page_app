<template>
    <div class="text-xs-center">
        <v-menu offset-y>
        <v-btn icon slot="activator">
            <v-icon color="red">add_alert</v-icon> {{ unreadsCount }}
        </v-btn>
        <v-list>
            <v-list-tile
            v-for="(item, index) in unreads"
            :key="index"
            >
                <router-link :to="item.data.path">
                    <v-list-tile-title>{{ item.data.question }}</v-list-tile-title>
                </router-link>
            </v-list-tile>

            <v-divider></v-divider>

            <v-list-tile
            v-for="(item, index) in reads"
            :key="index"
            >
                <v-list-tile-title>{{ item.data.question }}</v-list-tile-title>
            </v-list-tile>
        </v-list>
        </v-menu>
    </div>
</template>

<script>
export default {
  data() {
    return {
      reads: {},
      unreads: {},
      unreadsCount: 0
    }
  },
  methods: {
    getNotification: function() {
      axios.post('/api/notifications')
        .then(res => {
          console.log(res.data.unread.length);
          this.reads = res.data.read,
          this.unreads = res.data.unread,
          this.unreadsCount = res.data.unread.length
        });
    }
  },
  created() {
    if(User.loggedIn()) {
      this.getNotification();
    }
  },
}
</script>

<style>

</style>

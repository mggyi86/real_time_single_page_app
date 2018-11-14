<template>
    <div class="text-xs-center">
        <v-menu offset-y>
        <v-btn icon slot="activator">
            <v-icon :color="color">add_alert</v-icon> {{ unreadsCount }}
        </v-btn>
        <v-list>
            <v-list-tile
            v-for="item in unreads"
            :key="item.id"
            >
                <router-link :to="item.path">
                    <v-list-tile-title @click="readNotification(item)">
                        {{ item.question }}
                    </v-list-tile-title>
                </router-link>
            </v-list-tile>

            <v-divider></v-divider>

            <v-list-tile
            v-for="(item, index) in reads"
            :key="index"
            >
                <v-list-tile-title>{{ item.question }}</v-list-tile-title>
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
        //   console.log(res.data.unread.length);
          this.reads = res.data.read,
          this.unreads = res.data.unread,
          this.unreadsCount = res.data.unread.length
        })
        .catch(error => console.log(error));
    },
    readNotification: function(notification) {
      axios.post('/api/markAsRead', { id: notification.id })
        .then(res => {
          this.unreads.splice(notification, 1);
          this.reads.push(notification);
          this.unreadsCount--;
        });
    }
  },
  computed: {
    color: function() {
      return this.unreadsCount > 0 ? 'red' : 'red lighten-4';
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

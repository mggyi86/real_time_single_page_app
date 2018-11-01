<template>
    <v-container>
        <v-form @submit.prevent="submit">
            <v-text-field
            v-model="form.name"
            label="Category Name"
            required
            ></v-text-field>

            <v-btn type="submit" color="pink" v-if="editSlug">Update</v-btn>
            <v-btn type="submit" color="teal" v-else>Create</v-btn>
        </v-form>

        <v-card>
            <v-toolbar color="indigo" dark dense>
                <v-toolbar-title>Categories</v-toolbar-title>
            </v-toolbar>

            <v-list>
                <div>
                    <v-list-tile
                    v-for="(category, index) in categories"
                    :key="categories.indexOf(category)">
                        <v-list-tile-action>
                            <v-btn icon small @click="edit(index)">
                                <v-icon color="orange">edit</v-icon>
                            </v-btn>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ category.name }}
                            </v-list-tile-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                            <v-btn icon small @click="destroy(category, index)">
                                <v-icon color="red">delete</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>

                    <v-divider></v-divider>
                </div>
            </v-list>
        </v-card>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: null
      },
      categories: null,
      editSlug: null
    }
  },
  methods: {
    submit: function() {
      this.editSlug ? this.update() : this.create();
    },
    update: function() {
      axios.patch(`/api/category/${this.editSlug}`, this.form)
        .then(res => {
          this.categories.unshift(res.data);
          this.form.name = null;
          this.editSlug = null;
        });
    },
    create: function() {
      axios.post('/api/category', this.form)
        .then(res => {
          this.categories.unshift(res.data);
          this.form.name = null;
        });
    },
    destroy: function(category, index) {
      axios.delete(`/api/category/${category.slug}`)
        .then(res => this.categories.splice(index, 1));
    },
    edit: function(index) {
      this.form.name = this.categories[index].name;
      this.editSlug = this.categories[index].slug;
      this.categories.splice(index, 1);
    }
  },
  created() {
    if(! User.admin()) {
      this.$router.push({ name: 'forum' });
    }
    axios.get('/api/category')
      .then(res => this.categories = res.data.data);
  }
}
</script>

<style>

</style>

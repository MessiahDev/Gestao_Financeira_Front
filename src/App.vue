<template>
  <v-app >
    <v-row class="black">
      <v-col cols="3" class="d-flex mt-8" style="height: 95vh;">
        <v-card
          class="mx-auto black"
          width="256"
          tile
        >
          <v-navigation-drawer permanent class="black">
            <v-list class="black">
              <v-list-item>
                <v-list-item-avatar>
                  <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                </v-list-item-avatar>
              </v-list-item>

              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title class="text-h6 white--text">
                    John Leider
                  </v-list-item-title>
                  <v-list-item-subtitle class="white--text">john@vuetifyjs.com</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-icon>mdi-menu-down</v-icon>
                </v-list-item-action>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list
              nav
              dense
              class="black white--text"
            >
              <v-list-item-group
                v-model="selectedItem"
                color="white--text"
                class="black white--text"
              >
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  class="black white--text"
                >
                  <v-list-item-icon>
                    <v-icon class="white--text" v-text="item.icon"></v-icon>
                  </v-list-item-icon>

                  <v-list-item-content class="black white--text">
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-col>
      <v-col cols="9" class="d-flex justify-center align-center">
        <v-main>
          <router-view/>
        </v-main>
      </v-col>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
      selectedItem: 0,
      items: [
        { text: 'My Files', icon: 'mdi-folder' },
        { text: 'Shared with me', icon: 'mdi-account-multiple' },
        { text: 'Starred', icon: 'mdi-star' },
        { text: 'Recent', icon: 'mdi-history' },
        { text: 'Offline', icon: 'mdi-check-circle' },
        { text: 'Uploads', icon: 'mdi-upload' },
        { text: 'Backups', icon: 'mdi-cloud-upload' },
      ],
    }),
});
</script>

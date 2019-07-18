<template>
  <v-app dark>
    <v-navigation-drawer :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" fixed app>
      <v-list dark>
        <template v-for="(item, i) in itemsLeftMenu">
          <v-list-tile :to="item.to" :key="i" router exact v-if="!item.external">
            <v-list-tile-action dark>
              <v-icon v-html="item.icon"/>
            </v-list-tile-action>
            <v-list-tile-content dark>
              <v-list-tile-title v-text="item.title"/>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile :href="item.to" :key="i" v-else>
            <v-list-tile-action dark>
              <v-icon v-html="item.icon"/>
            </v-list-tile-action>
            <v-list-tile-content dark>
              <v-list-tile-title v-text="item.title"/>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar :clipped-left="clipped" fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"/>
      </v-btn>
      <img src="~/../assets/img/logo-wide.svg" height="60%" alt="logo">
      <v-toolbar-title v-text="title"/>
      <v-spacer></v-spacer>
      <appMenu :profile="profile"></appMenu>
    </v-toolbar>
    <v-content>
      <v-container style="max-width:1600px">
        <nuxt/>
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app height="auto">
      <appFooter />
    </v-footer>
  </v-app>
</template>

<style>
.v-list__tile--active {
  color: white;
}
</style>

<script>
import appFooter from '~/components/appFooter.vue'
import appMenu from '~/components/appMenu.vue'

export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      itemsLeftMenu: [
        { icon: 'events', title: 'Events', to: '/events' },
        { icon: 'android', title: 'Hi', to: '/hello' }
      ],
      miniVariant: false,
      title: process.env.title,
      version: process.env.appVersion,
      diffStartResponse: 0,
      timeComponentUpdated: 0,
      profile:{
        firstName: 'costin',
        lastName: 'raiser',
        email: 'raisercostin@<someserver>',
        isAuth: true
      }
    }
  },
  components: {
    appFooter,
    appMenu
  }
}
</script>

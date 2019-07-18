<template>
  <v-menu open-on-hover offset-y left>
    <v-list>
      <v-layout>
        <b>{{ profile.firstName }} {{ profile.lastName }}</b>
        <br>
        <b>
          <small>{{ profile.email }}</small>
        </b>
        <br>
        <span v-show="profile.isAuth">
          <i>
            <font color="warning">Not authenticated!</font>
          </i>
        </span>
      </v-layout>
      <v-list-tile v-for="item in filterMenu(items)" :key="item.title" @click="menuItemClick(item)">
        <span class="pa-2">
          <v-icon>{{ item.icon }}</v-icon>
        </span>
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
    <v-btn slot="activator">
      <v-avatar size="32" color="white">
        <img :src="avatar" alt="avatar">
      </v-avatar>
      <v-icon right>menu</v-icon>
    </v-btn>
  </v-menu>
</template>

<script>

export default {
  name: 'appMenu',
  props: {
    avatar: {
      type: String,
      default:
        'https://media.licdn.com/dms/image/C4E0BAQHAVLb-qXTq6A/company-logo_200_200/0?e=2159024400&v=beta&t=_aYNWKD037Acs7LxWesPSjNFeuUnrS-8Inhj2sDVcDs',
      required: false
    },
    profile: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      tile: false,
      isAuth: false,
      items: [
        {
          path: '/',
          title: 'Home',
          icon: 'home',
          authenticated: false
        },
        {
          path: '/events',
          title: 'Events',
          icon: 'account_circle',
          authenticated: false
        },
        {
          path: '/hello',
          title: 'Hi',
          icon: 'android',
          authenticated: false
        },
        {
          path: '/',
          title: 'Login',
          icon: 'login',
          authenticated: false
        },
        {
          path: '/auth',
          title: 'Hi',
          icon: 'secure',
          authenticated: true
        },
        {
          path: '/',
          title: 'Logout',
          icon: 'logout',
          authenticated: true
        }
      ]
    }
  },
  methods: {
    filterMenu(items) {
      return items.filter(x => x.authenticated == this.isAuth)
    },
    menuItemClick(item) {
      if (item.path !== '/logout' && item.path !== '/login') {
        this.$router.push(item.path)
      } else if (item.path === '/login') {
        window.location.href = Cfg.url.urlLogin
      } else window.location.href = Cfg.url.urlLogout
    }
  }

}
</script>

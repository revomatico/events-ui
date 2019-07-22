<template>
  <div>
    <v-layout row wrap px-0 ma-0 pa-0 fill-height>
      <v-card width="100%">
        <v-card-title>
          Events
          <v-flex>
            <popup />
          </v-flex>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="eventsTable.search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="eventsTable.headers"
          :items="eventsTable.desserts"
          :search="eventsTable.search"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td v-for="i in props.item" :key="i">{{i}}</td>
          </template>
        </v-data-table>
        <v-carousel>
          <v-carousel-item v-for="(item,i) in eventsTable.desserts" :key="i" :src="item[4]"></v-carousel-item>
        </v-carousel>
      </v-card>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-date-picker v-model="dates" multiple></v-date-picker>
      </v-flex>
      <v-flex xs12 sm6>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :nudge-right="40"
          :return-value.sync="dates"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-combobox
              v-model="dates"
              multiple
              chips
              small-chips
              label="Multiple picker in menu"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-combobox>
          </template>
          <v-date-picker v-model="dates" multiple no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.menu.save(dates)">OK</v-btn>
          </v-date-picker>
        </v-menu>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import popup from './popup'
export default {
  components: { popup },
  data() {
    return {
      eventsTable: {
        search: '',
        headers: [
          { text: 'Name', value: '[0]' },
          { text: 'Date', value: '[1]' },
          { text: 'Singers', value: '[2]' },
        ],
        desserts: [],
      },
      dates: [],
      menu: false,
    }
  },
  mounted() {
    this.readAll()
  },
  methods: {
    readAll() {
      fetch('http://localhost:8080/events.json')
        .then(res => res.json())
        .then(out => {
          this.eventsTable.desserts = out
          //console.log('all events are loaded: ', out)
          setTimeout(this.readAll, 1000)
        })
        .catch(err => {
          throw err
        })
    },
  },
}
</script>

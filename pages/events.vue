<template>
  <v-layout row wrap px-0 ma-0 pa-0 fill-height>
    <v-card width="100%">
      <v-card-title>
        Events
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
          <td v-for="i in props.item" :key="i">
            {{i}}
          </td>
        </template>
      </v-data-table>
      <v-carousel>
    <v-carousel-item
      v-for="(item,i) in eventsTable.desserts"
      :key="i"
      :src="item[4]"
    ></v-carousel-item>
  </v-carousel>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      eventsTable: {
        search: '',
        headers: [
          { text: 'Name', value: '[0]' },
          { text: 'Date', value: '[1]' }
        ],
        desserts: []
      }
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
          setTimeout(this.readAll,1000)
        })
        .catch(err => {
          throw err
        })
    }
  }
}
</script>

<template>
  <v-dialog max-width="800px">
    <v-btn slot="activator" small dark color="#737373">
      <v-icon>add</v-icon>
      <span small>Add New Events</span>
    </v-btn>
    <v-card>
      <v-card-title>
        <template>
          <v-expansion-panel>
            <v-expansion-panel-content v-for="(item,i) in 1" :key="i">
              <template v-slot:header>
                <div>New Concert</div>
              </template>
              <v-card-text>
                  <v-form class="px-3">
                      <v-text-field label="Concert" v-model="concert" prepend-icon="music_note"></v-text-field>
                      <v-text-field label="Date" v-model="date" prepend-icon="event"></v-text-field>
                      <v-text-field label="Singer" v-model="singer" prepend-icon="record_voice_over"></v-text-field>
                      <v-btn class="success mx-0 mt-3" small dark >Add Event</v-btn>
                  </v-form>
              </v-card-text>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </template>
      </v-card-title>
    </v-card>
  </v-dialog>
</template>
        </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    data(){
        return{
            concert: '',
            date: '',
            singer: '',
        }
    }
}
</script>


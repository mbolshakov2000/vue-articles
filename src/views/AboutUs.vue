<template>
  <div style="text-align: center; margin-top:20px;"><h2>О нас</h2>
  <div v-if="workers_status == REQUESTED">
    <p>Секундочку...</p>
    <v-carousel cycle>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
  </div>
  <div v-else-if="workers_status == SUCCEEDED">
    <v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            ФИО
          </th>
          <th class="text-left">
            Должность
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="worker in workers"
          :key="worker.name"
        >
          <td class="text-left">{{ worker.name }}</td>
          <td class="text-left">{{ worker.job }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </div>
  </div>
</template>


<script>
import {mapState} from 'vuex'
import {Types} from '@/store/types.js';
export default {
  name: 'AboutUs',
  props: {
      
  },
  data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  computed: mapState({
    workers: state => state.workers,
    workers_status: 'workers_status',
  }),
  created() {
    // Instantiate article status constants for template.
    this.SUCCEEDED = Types.request_status.SUCCEEDED;
    this.REQUESTED = Types.request_status.REQUESTED;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

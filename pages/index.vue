<template>
  <b-container variant="dark">
    <b-jumbotron header="RO Edu Events" lead="Bla bla bla something about something">
      <!-- <p>For more information visit our website</p>
        <b-btn variant="primary" href="https://bootstrap-vue.js.org/">More Info</b-btn> -->
      <b-button size="sm" v-on:click="swap=!swap" variant="primary">
                Change Style
            </b-button>
    </b-jumbotron>
    <b-card-group v-bind:columns="swap" v-bind:deck="!swap" wrap>
      <event-card v-for="event in events" v-bind:key="event.uid" v-bind:item="event"></event-card>
    </b-card-group>
  </b-container>
</template>

<script>
import axios from '~/plugins/axios'
import EventCard from '~/components/EventCard'
export default {
  components: { EventCard },
  async asyncData() {
    let { data } = await axios.get('/api/events')
    return { events: data }
  },
  head() {
    return {
      title: 'Users'
    }
  },
  data() {
    return {
      swap: true,
      name: "Petre"
    }
  }
}
</script>

<style scoped>

</style>

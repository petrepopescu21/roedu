<template>
<b-container>
  <b-card-group deck class="carddeck">
    <event-card-large :item="event" />
    <event-details :data="event.info" :title="event.title"/>
  </b-card-group>

</b-container>
</template>

<script>
import axios from '~/plugins/axios'
import marked from 'marked'
import EventCardLarge from '~/components/EventCardLarge'
import EventDetails from '~/components/EventDetails'
export default {
  components: {EventCardLarge,EventDetails},
  computed: {
    desc() {
      var str = this.event.description
      str = str.split('<br>')
      var res = ""
      for (var s of str) {
        res = res + "<p>" + s + "</p>"
      }
      return res
    }
  },
  name: 'id',
  asyncData ({ params, error }) {
    return axios.get('/api/events/' + params.id)
      .then((res) => {
        return { event: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Event not found' })
      })
  },
  head () {
    return {
      title: `${this.event.title}`
    }
  }
}
</script>

<style scoped>
  .page-row {
    margin-top: 5%;
  }
  .desc {
    margin-top: 50px;
  }
  .white {
    background-color: white;
    padding-left: 40px;
    padding-top: 40px;
  }
  .carddeck {
    margin-top: 32px;
  }
</style>

<template>
    <b-card v-bind:title="item.title" v-bind:img-src="item.image?item.image:null" v-bind:img-alt="item.image?'Image':null" v-bind:img-top="item.image?true:false" footer-tag="footer" tag="article" class="mb-2" style="min-width: 30%;">
        <b-badge pill v-bind:variant="badge[item.category].style">{{badge[item.category].title}}</b-badge>
        <p class="card-text">
            <em>{{date}}</em><br> {{item.subtitle}}
        </p>
        <div slot="footer">
                <b-button :to="item.uid" variant="primary">Read more</b-button>
            
        </div>
    </b-card>
</template>

<script>
import mom from 'moment-timezone'
export default {
    name: "eventcard",
    props:
    ['item'],
    data() {
        return {
            badge: {
                mtc: { style: "primary", title: "MTC/Company Visit/Job Fair" },
                rot: { style: "success", title: "Release of Talent" },
                tech: { style: "warning", title: "Tech Events" },
                diversity: { style: "info", title: "Diversity" },
                other: { style: "danger", title: "Other" }
            }
        }
    },
    computed: {
        date() {
            let dates = mom(this.item.info.start_date).tz('Europe/Bucharest')
            let datee = mom(this.item.info.end_date).tz('Europe/Bucharest')

            if (dates.calendar() == datee.calendar()) {
                return "On " + dates.calendar() + " from " + dates.format('LT') + " to " + datee.format('LT')
            }

            else {
                return "From " + dates.calendar() + " to " + datee.calendar()
            }
        }
    }

}
</script>
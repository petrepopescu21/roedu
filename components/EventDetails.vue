<template>
    <b-card title="Event Details" footer-tag="footer" tag="article" class="mb-2" style="height: 100%;">
        <h5>Location</h5>
        <p class="card-text">
            {{data.location}}
        </p>
        <h5>Start Date</h5>
        <p>{{data.start_date}}</p>
        <h5>End Date</h5>
        <p>{{data.end_date}}</p>
        <div slot="footer">
            <b-button v-b-modal.modal1 variant="primary">Register</b-button>
        </div>
        <b-modal lazy id="modal1" :title="modaltitle">
            <p class="my-2">Please complete the form in order to register. You will receive a confirmation via email once your application has been reviewed.</p>
            <b-form-group id="fieldset1" label="Enter your name">
                <b-form-input v-model="name" type="text" placeholder="John Doe" required></b-form-input>
            </b-form-group>
            <b-form-group id="fieldset1" label="Enter your email">
                <b-form-input v-model="email" type="email" placeholder="john" required></b-form-input>
            </b-form-group>
            <b-form-group id="fieldset1" label="Enter an optional message">
                <b-form-textarea id="textarea1" v-model="message" placeholder="Message..." :rows="3" :max-rows="6"></b-form-textarea>
            </b-form-group>

        </b-modal>
    </b-card>
</template>

<script>
export default {
    name: "eventdetails",
    props: ['data', 'title'],
    computed: {
        modaltitle() {
            return "Register to " + this.title
        }
    },
    data() {
        return {
            name: undefined,
            email: undefined,
            message: undefined
        }
    }
}
</script>
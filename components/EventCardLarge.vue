<template>
    <b-card 
    v-bind:title="item.title" 
    v-bind:img-src="item.image?item.image:null" 
    v-bind:img-alt="item.image?'Image':null" 
    v-bind:img-top="item.image?true:false" 
    
    tag="article" 
    class="mb-2" 
    style="min-width: 70%;">
        <h5>
            {{item.subtitle}}
        </h5>
        <div v-html="item.description"></div>
        <div slot="footer">
                <b-button variant="default" to="/">&lt;Go back to list</b-button>
        </div>
    </b-card>
    
</template>

<script>
export default {
    name: "eventcardlarge",
    props:
    ['item','desc']
}
</script>
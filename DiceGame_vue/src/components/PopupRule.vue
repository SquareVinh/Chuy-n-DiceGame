<template>
    <div class="wrapper-popup" v-bind:class="getRulePopup">
        <div class="rule" >
            <h3>Rule </h3>
            <p v-html="getrule"></p>
            
            <button  v-on:click="confirm" class="confirm">I got it</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'popup-rule',
   
    data() {
        return {

        }
    },
    methods: {
        confirm() {
            // Truyền event ra App.vue
           
            this.$store.commit('IS_RULE');
        }
    },
    computed: {
        getRulePopup: function() {
            return {
                'open-popup': this.$store.state.data.iRule
            }
        },
        getrule(){
            if (this.$store.state.introduce[0].status>0)
              return (this.$store.state.rulegame[0].content);
            if (this.$store.state.introduce[1].status>0)
              return (this.$store.state.rulegame[1].content);
            if (this.$store.state.introduce[2].status>0)
              return (this.$store.state.rulegame[2].content);
        }
        
    }
}
</script>

<style>
    .wrapper-popup {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.4);
        opacity: 0;
        visibility: hidden;
        transition: all .3s ease;
    }
    .wrapper-popup.open-popup {
        opacity: 1;
        visibility: visible;
    }
    .rule {
        width: 500px;
        padding: 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1.2);
        background-color: #fff;
        position: absolute;
        font-family: Arial, Helvetica, sans-serif;
        transition: all .3s ease;
    }
    .open-popup .rule {
        transform: translate(-50%, -50%) scale(1);
    }
    /* scale -> class */
    .rule h3 {
        margin-bottom: 10px;
    }
    .rule .confirm {
        cursor: pointer;
        margin-top: 20px;
        padding: 8px 15px;
        border: 2px solid #333;
        background-color: #fff;
        transition: all .3s ease;
    }
    .rule .confirm:hover {
        color: #fff;
        background-color: #333;
    }
    /* kết hợp CSS3 với VueJs để xây dựng hiệu ứng - Zoom in - Zoom out */
</style>

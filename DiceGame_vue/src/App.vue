<template>
	<div id="app">
        <dice-one v-if="status1() >= 1" ></dice-one>
        <dice-two v-if="status2()>=1"> </dice-two>
        <dice-three v-if="status3()>=1"> </dice-three>
	</div>
</template>

<script>
import DiceOne from './components/DiceOne';
import DiceThree from './components/DiceThree.vue';
import DiceTwo from './components/DiceTwo.vue';


export default {
	name: 'app',
	data () {
		return {
            
		}
	},
	components: {       
       DiceOne,
       DiceTwo,
       DiceThree
    },
    computed: {
    },
    methods: {               
        status1(){
            return this.$store.state.introduce[0].status;
        },
        status2(){
            return this.$store.state.introduce[1].status;
        },
        status3(){
            return this.$store.state.introduce[2].status;
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

body {
    background-image: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url('/public/assets/back.jpg');
    background-size: cover;
    background-position: center;
    font-family: Lato;
    font-weight: 300;
    position: relative;
    height: 100vh;
    color: #555;
}

.wrapper {
    
    width: 1000px;
    height: 750px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}
</style>

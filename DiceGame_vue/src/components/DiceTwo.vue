<template>
	
        <div class="wrapper clearfix" >

            <players />

            <controls />
            
            <dices  />
            
            <popup-rule />

            <popup-main  />
        </div>
	
</template>

<script>
import Players from './Players';
import Controls from './Controls';
import Dices from './Dices';
import PopupRule from './PopupRule';
import PopupMain from './PopupMain';

export default {
	name: 'dice-two',
	data () {
		return {}
           
	},
	components: {
       Players,
        Controls,
        Dices,
        PopupRule,
        PopupMain
    },
    computed: {
       
    },
    methods: {  
         
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
    text-align: center;
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

<template>
  <div class="wrapper-popup" v-bind:class="getPopup">
    <div class="first">
      <h2>Choose a Game</h2>
       

      <div
        class="game_one" v-for="game in this.$store.state.introduce" :key="game.id" v-bind:style="game.color" ><br/>
        <h3>{{ game.title }}</h3><br />
        <img v-bind:src="game.ima" style="width: 100px; height: 100px"/><br/><br/>
        <div class="note"><b>{{ game.note }}</b><br/><br><br><br></div>
   
        <button class='btn' @click="ChooseGame(game.id)">Single Play</button><br><br>
        <button class='btn' @click="ChooseGame(game.id+3)">Two Player</button>
     
        
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup-main",

  computed: {
    getPopup() {
      
      return {
        "open-popup": this.$store.state.data.iMenu,
        
      };
    },
  },
  methods: {
    ChooseGame(index) {
      this.$store.commit("CHANGE_MAIN");
      this.$store.commit("CHOOSE_GAME",index);       
    },
    
  },
};
</script>

<style>
.wrapper-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}
.wrapper-popup.open-popup {
  opacity: 1;
  visibility: visible;
}
.first {
  overflow: auto;
  text-align: center;
  width: 790px;
  height: 600px;
  padding: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.2);
  background-color: #fff;
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
  transition: all 0.3s ease;
}
.open-popup .rule {
  transform: translate(-50%, -50%) scale(1);
}
/* scale -> class */
.rule h3 {
  margin-bottom: 10px;
}
.first .confirm {
  cursor: pointer;
  margin-top: 20px;
  padding: 8px 15px;
  border: 2px solid #333;
  background-color: #fff;
  transition: all 0.3s ease;
}
.first .confirm:hover {
  color: #fff;
  background-color: #333;
}
.game_one {
  border: 1px solid #333;
  text-align: center;
  float: left;
  width: 250px;
  height: 500px;
  padding: 5px;
}
.clear {
  clear: both;
}
.btn{
	padding: 20px 40px;
	background: none;
	border: none;
	position: relative;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 3px;
	cursor: pointer;
}
	.btn:after, .btn:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		border: 2px solid #000;
		transition: transform .2 ;
    }
	.btn:after {
		transform: translate(3px, 3px)	;
    }
	.btn:before{
		transform: translate(-3px, -3px);
    }
	.btn:hover:after, .btn:hover:after{		
			transform: translate(0)
    }
.note{
    height: 150px;
}

</style>
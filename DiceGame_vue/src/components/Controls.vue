<template>
    <div class="wrapper-controls">
        <button 
            @click="Menu"
            class="control btn-back"><i class="ion-ios-undo-outline"></i>Back to Menu</button>
        <button 
            @click="newGame"
            class="control btn-new"><i class="ion-ios-plus-outline"></i>New game</button>
        <button 
            @click="rule" 
            class="control btn-rule"><i class="ion-ios-help-outline"></i>Rule</button>
        <button 
            v-bind:style="blockPlay()"
            @click="rollDice"
            class="control btn-roll"><i class="ion-ios-loop"></i>{{autoplay()}}Roll dice</button>
        <button 
            v-bind:style="blockPlay()"           
            @click="hold"
            class="control btn-hold"><i class="ion-ios-download-outline"></i>Hold</button>
        <input 
            v-bind:disabled="this.$store.state.dataOne.isPlaying"
            v-bind:value="this.$store.state.dataOne.finalScore"
            v-on:input="changeFscore($event)"
            type="number" placeholder="Final score" class="final-score">
        <button 
            
            
          
            class="control btn-change">Final Score</button>
        
        
        
    </div>
</template>

<script>
export default {
    name: 'controls',
    
    data() {
        return {
            
        }
    },
    methods: {
       
        newGame() {
            
            // Kích hoạt sự kiện handleNewGame của App truyền vào
            this.$store.commit('NEW_GAME');
        },
        rule() {
            
            // Kích hoạt sự kiện handleNewGame của App truyền vào
            this.$store.commit('IS_RULE');
           
        },
        hold(){
            this.$store.commit('HOLD_SCORE');
        },
        rollDice() {
            this.$store.commit('ROLL_DICE');
        },
        Menu(){
            var result = confirm("Do you want to back to Menu?");
            if (result){
            this.$store.commit("CHANGE_MAIN");
            this.$store.commit('NEW_GAME');
            this.$store.commit("RESTART_MAIN"); 
            } 
        },
        autoplay(){
            if (this.$store.state.iscomputer)
            setTimeout(
             () => {
                     this.$store.commit('ROLL_DICE');
             var hold =Math.floor(Math.random() * 2) + 1;
             if (this.$store.state.iscomputer && this.$store.state.dataOne.isWinner==false)
             setTimeout(()=>{if (hold==1) this.$store.commit('HOLD_SCORE');
             else this.autoplay(); },1*1000);
                         
                }, 1 * 1000 );
             
        },
        blockPlay(){
             if (this.$store.state.iscomputer)
             return "display:none";
        },
        
        changeFscore(e){
            var number = parseInt(e.target.value);
            this.$store.commit('CHANGE_FSCORE',number)
        }
    }
}
</script>

<style>
.control {
    position: absolute;
    width: 200px;
    left: 50%;
    transform: translateX(-50%);
    color: #555;
    background: none;
    border: none;
    font-family: Lato;
    font-size: 20px;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 300;
    transition: background-color 0.3s, color 0.3s;
}
.control.disable {
    pointer-events: none;
}

.control:hover { font-weight: 600; }
.control:hover i { margin-right: 20px; }

.control:focus {
    outline: none;
}

.control i {
    color: #42b983;
    display: inline-block;
    margin-right: 15px;
    font-size: 32px;
    line-height: 1;
    vertical-align: text-top;
    margin-top: -4px;
    transition: margin 0.3s;
}
.btn-back { top: 40px;}
.btn-new { top: 90px;}
.btn-rule { top: 140px;}
.btn-roll { top: 510px;}
.btn-hold { top: 550px;}
.btn-change { top: 650px; font-size: 15px;}

.final-score {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 600px;
    color: #555;
    font-size: 18px;
    font-family: 'Lato';
    text-align: center;
    padding: 10px;
    width: 160px;
    text-transform: uppercase;
}

.final-score:focus { outline: none; }
</style>

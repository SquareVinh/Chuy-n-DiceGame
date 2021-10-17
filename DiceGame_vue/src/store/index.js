import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storeData = {
    state: {
        data: {
            iMenu: true,
            iRule:false,
            iop:true,
            /*isPlaying: false,
            isOpenPopup: false,
            activePlayer: 0, //Ai là người chơi hiện tại? 
            scoresPlayer: [0, 0],
            dices: [2, 6],
            currentScore: 0,
            finalScore: 30   */
        },
        dataOne:{
            isOne:false,
            isPlaying: false,
            isRule: false,
            isWinner: false,
            activePlayer: 0, //Ai là người chơi hiện tại? 
            scoresPlayer: [0, 0],
            dices: [2, 6],
            currentScore: 0,
            finalScore: 30

        },
        dataTwo:{


        },
        datathree:{
            one:1,
        },
        introduce: [
            { id: 1, status: 1, title: 'Dice game one', color: ' background:#99FFFF', ima: '/public/assets/dice-1.png', note: 'Unlimited dice, get the first pre-determined total to win! ' },
            { id: 2, status: 0, title: 'Dice game two', color: ' background:#CCFFCC', ima: '/public/assets/dice-2.png', note: 'Roll the dice, after the specified number of rolls and compare the scores to decide the winner! ' },
            { id: 3, status: 0, title: 'Dice game three', color: ' background:#FFFF99', ima: '/public/assets/dice-3.png', note: 'Dice in half, compare the results right at each turn and the winning and losing score will be the final result! ' }
        ],
        
        rulegame: [
            {id: 1, content: "<p><b>Rotate the dice </b><br> <ul> <li>The turn of the dice starts with player 1 (if playing with 2 players) and starts with you (if playing ainst the machine)</li>               <li>During their turn, each player will be able oroll multiple times until at least 1 die lands on a 1-point face, then the spin will end nd go to their opponent's turn</li>           </ul> <br>           <b>Score</b><br>           <ul>               <li>Starting each turn, the player's turn-based total will be calculated from 0 points</li>                <li>After each roll of the dice without losing a turn (1 point roll), the total score on the 2 dice will be added to the turn total, shown at Current</li>                <li>Players on a spin can tap the Hold button, to transfer points from Current to their total, and end the turn immediately afterwards.</li>                <li>However, if a player loses a turn (spin to face 1 point), then they lose their turn and do not add points to their total. </li>            </ul> <br>            <b>Winning Conditions</b><br>            <ul>                <li>Before you start, you need to set a target score, which is the number of points where whoever gets it first wins .</li>                <li>When a player takes a point(Hold), their total score will be compared with the target score, and if the individual total is greater than or equal to the target score, that player wins.</li></ul>          </p> "},

            {id:2, content:"<b>Rotating the dice</b> <ul> <li>Before the game begins, a fixed number of turns is determined.</li> <li>Each player will end his turn after the number of turns. predetermined spin</li> </ul><br><b>Score</b><ul><li>After each spin, the score of the spin will be equal to the product of 2 dice</li><li>The number of points for each rotation will be added to the total score of each person. </li></ul><br><b>Winning Conditions</b><ul><li>After both players have completed a predetermined number of spins, compare the total points to decide who is the winner.</li></ul> "},

            {id:3, content:"<b>Rotating the dice</b> <ul> <li>Before the game begins, a fixed number of turns is determined.</li> <li>Each player will end his turn after the number of turns. predetermined spin</li> </ul><br><b>Score</b><ul><li>After each spin, the score of the spin will be equal to the product of 2 dice< /li><li>The number of points per spin will be added to the total score of each person. </li></ul><br><b>Winning Conditions</b><ul><li>After both players have completed a predetermined number of spins, compare the total points to decide who is the winner.</li></ul> "}
            ],

            iscomputer: false,
    },
    mutations:{
                CHANGE_MAIN(state){
                state.data.iMenu = !state.data.iMenu
                },

                IS_RULE(state){
                    state.data.iRule = !state.data.iRule
                },

                CHOOSE_GAME(state,index){
                   
                    if (index<=3)
                        {    for (var i=0;i<3;i++)
                                 state.introduce[i].status=0;
                           
                            state.introduce[index-1].status = 1;  }

                    else 
                       {  for (var i=0;i<3;i++)
                                state.introduce[i].status=0;
                     
                           state.introduce[index-4].status = 2; }
                    
                },

                RESTART_MAIN(state){
                    for (var i=0;i<3;i++)
                     state.introduce[i].status=0;
                     state.introduce[0].status=1;
                    state.dataOne.isPlaying=false;
                   
                },
                NEW_GAME(state) {
                    state.dataOne.isPlaying = true;
                    state.dataOne.isWinner=false;
                    state.dataOne.activePlayer = 0;
                    state.dataOne.dices = [1, 1];
                    state.dataOne.scoresPlayer = [0, 0];
                    state.dataOne.currentScore = 0;
                    this.commit("ISNOT_COMPUTER");
                },

                IS_COMPUTER(state){
                   
                   state.iscomputer=true;
                },

                ISNOT_COMPUTER(state){
                    
                    state.iscomputer=false;
                 },
                 IS_WINER(state) {
                    
                    if(state.dataOne.scoresPlayer[0] >= state.dataOne.finalScore || state.dataOne.scoresPlayer[1] >= state.dataOne.finalScore) {
                        // Dung cuoc choi
                        state.dataOne.isPlaying = false;
                        state.dataOne.isWinner=true;
                    }
                    else state.dataOne.isWinner=false;
                },
                CHANGE_FSCORE(state,number) {
                    if(isNaN(number)) {
                        state.dataOne.finalScore = '';
                    } else {
                        state.dataOne.finalScore = number;
                    }
                    
                },

                HOLD_SCORE(state) {
                    if(state.dataOne.isPlaying) {
                        
                        let { scoresPlayer, activePlayer, currentScore } = state.dataOne;
                        let scoreOld = scoresPlayer[activePlayer];
                        
                        
                        state.dataOne.scoresPlayer[activePlayer] = scoreOld + currentScore;
                        // this.scoresPlayer = cloneScorePLayer;
                        this.commit('IS_WINER');
                        if(!state.dataOne.isWinner) {
                            this.commit('NEXT_PLAYER');
                        }
                        
                    } else {
                        alert('Start with NewGame button');
                    }
                },

                NEXT_PLAYER(state) {
                    // activePlayer = 0 -> 1  ===== 1 -> 0
                    state.dataOne.activePlayer = state.dataOne.activePlayer === 0 ? 1 : 0;
                    state.dataOne.currentScore = 0;
                    
                    if (state.introduce[0].status==1 && state.dataOne.activePlayer==1){
                      this.commit("IS_COMPUTER");}
                    else this.commit("ISNOT_COMPUTER");
                    
                },

                 ROLL_DICE(state) {
            
                    if(state.dataOne.isPlaying) {
                       
                        var dice1 = Math.floor(Math.random() * 6) + 1;
                        var dice2 = Math.floor(Math.random() * 6) + 1;
        
                        state.dataOne.dices = [dice1, dice2];
                       
        
                        if(dice1 === 1 || dice2 === 1) {
                            let activePlayer = state.dataOne.activePlayer;
                            if (state.iscomputer )
                            {setTimeout(function() {
                                alert(`Coputer spined at 1 point`);
                            }, 5); this.commit("ISNOT_COMPUTER");
                            }
                            else {setTimeout(function() {
                                alert(`Player ${activePlayer + 1} spined at 1 point`);
                            }, 5)}
                           
                            this.commit('NEXT_PLAYER');
                        } else {
                            // Cộng dồn vào điểm tạm thời cho người đang chơi
                            state.dataOne.currentScore = state.dataOne.currentScore + dice1 + dice2;
                        }
                    } else {
                        alert('Start with NewGame button');
                    }
                },
               
            
    }
}

            const store = new Vuex.Store(storeData)

            export default store


<template>
    <div>
        <TheChessboard: fen="fen" @move="move" />

        <div>
            <p>Game ID: {{ gameID }}</p>
            <p>material Advantage: {{ materialAdvantage }}</p>
        </div>

        <!-- Tabla movimientos -->
        <table>
            <thead>
                <tr>
                    <th>Move</th>
                    <th>White</th>
                    <th>Black</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(move, index) in moves" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ move.white }}</td>
                    <td>{{ move.black }}</td>
                </tr>
            </tbody>
        </table>
    </div>



</template>


<script>
import { TheChessboard } from 'vue3-chessboard';
import { reactive } from 'vue';
import 'vue3-chessboard/style.css';

const boardConfig = {
        coordinates: false,
        orientation: 'white',
        autoCastle: false,
    };
    
export default {
    components: {
        TheChessboard,
    },



    data() {
        return {
            fen: 'start',
            gameID: null,
            materialAdvantage: 0,
            moves: [],
        };
    },
    methods: {
        move(move) {
            this.fen = move.fen;

            this.moves.push(move);
        },
        
    },
};


</script>



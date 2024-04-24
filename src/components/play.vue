<template>
    <div>
        <TheChessboard
            :board-config="boardConfig"
            :player-color="playerColor"
            @board-created="(api) => (boardAPI = api)"
            @checkmate="handleCheckmate"
            @move="handleMove"
            @stalemate="handleStalemate"
            @draw="handleDraw"
            @promotion="handlePromotion"
        >
        </TheChessboard>

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
                    <td>{{ move.player }}</td>
                    <td>{{ move.move_from }} - {{ move.move_to }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
    import { TheChessboard } from 'vue3-chessboard';
    import { ref, onMounted, watch } from 'vue';
    import { useCounterStore } from '../stores/counter.js';
    import 'vue3-chessboard/style.css';

    const boardConfig = {
        coordinates: false,
        orientation: 'white',
        autoCastle: false,
    };

    let boardAPI = 'white';

    export default {
        components: {
            TheChessboard,
        },
        setup() {
            const store = useCounterStore();
            const fen = ref('start');
            const gameID = ref(store.gameId);
            const materialAdvantage = ref(0);
            const moves = ref([]);

            const handleMove = (move) => {
                fen.value = move.fen;
                const newMove = {
                    player: move.color === 'w' ? 'White' : 'Black',
                    move_from: move.from,
                    move_to: move.to,
                };
                moves.value.push(newMove);
                console.log(store.gameId)
            }; 

            onMounted(() => {
                watch(moves, () => {
                    const movesTableContainer = document.querySelector('.moves-table-container');
                    if (movesTableContainer) {
                        movesTableContainer.scrollTop = movesTableContainer.scrollHeight;
                    }
                });
            });

            return {
                fen,
                gameID,
                materialAdvantage,
                moves,
                handleMove,
            }
        }
    }
</script>


<style>
.moves-table-container {
    max-height: 200px;
    overflow-y: auto;
}

</style>
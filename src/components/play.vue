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
        <table data-cy="moveTable">
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
    import { ref, onMounted, watch, computed, reactive } from 'vue';
    import { useCounterStore } from '../stores/counter.js';
    import 'vue3-chessboard/style.css';


    let boardAPI = 'white';

    export default {
        components: {
            TheChessboard,
        },
        setup() {

            const boardConfig = reactive({
                coordinates: false,
                orientation: 'white',
                autoCastle: false,
                trustAllEvents: true, 
            });

            const playerColor = computed(() => {
                return boardAPI.value;
            });
        
            const store = useCounterStore();
            const fen = ref('start');

            const gameID = computed(() => store.getGameId());
            const token = computed(() => store.getToken());

            const materialAdvantage = ref(0);
            const moves = ref([]);

            const socket = ref(null);

            const handleMove = (move) => {
                fen.value = move.fen;
                const newMove = {
                    player: move.color === 'w' ? 'White' : 'Black',
                    move_from: move.from,
                    move_to: move.to,
                };
                moves.value.push(newMove);

            }; 

            onMounted(async () => {
                watch([gameID, token], ([newGameId, newToken]) => {
                    if (newGameId && newToken) {
                        initializeSocket();
                    }
                });

                const initializeSocket = () => {
                    alert('initializeSocket');
                    const url = `ws://localhost:8000/ws/play/${gameID.value}/?token=${token.value}`;
                    socket.value = new WebSocket(url);

                    socket.value.onmessage = (event) => {
                        const data = JSON.parse(event.data);
                        if (data.type === 'move') {
                            boardAPI.value?.move(data.move);
                        }
                    };
                    socket.value.onopen = () => {
                        console.log('Connected to the server');
                    };
                    socket.value.onerror = (error) => {
                        console.error('Error:', error);
                    };
                    socket.value.onclose = () => {
                        console.log('Connection closed');
                    };
                };

                
                watch(moves, () => {
                    const movesTableContainer = document.querySelector('.moves-table-container');
                    if (movesTableContainer) {
                        movesTableContainer.scrollTop = movesTableContainer.scrollHeight;
                    }
                });

            });

            const handleCheckmate = (isMated) => { 
            alert(`${isMated} is mated`);
            };

            const handlePromotion = (promotion) => {
                alert(`Promotion to ${promotion}`);
            };

            const handleStalemate = () => {
                alert('Stalemate');
            };

            const handleDraw = () => {
                alert('Draw');
            };


            return {
                fen,
                gameID,
                materialAdvantage,
                moves,
                handleMove,
                handleCheckmate,
                handlePromotion,
                handleStalemate,
                handleDraw,
                boardConfig,
                playerColor,
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
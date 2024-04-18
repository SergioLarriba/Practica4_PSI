import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const token = ref('')
  const playerId = ref('')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function setToken(value) {
    token.value = value
  }
  function setPlayerId(value) {
    playerId.value = value
  }

  return { count, doubleCount, increment , setToken, setPlayerId, token, playerId}
})

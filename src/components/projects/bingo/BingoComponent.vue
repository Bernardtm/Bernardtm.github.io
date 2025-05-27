<template>
    <div>
        <p style="font-size: 24px; font-weight: bold;">Bingo</p>
        <fieldset>
            <legend>Configurações</legend>
            <p>Número de células: 
                <input type="number" v-model="maxCells" @update:modelValue="updateMaxCells" style="width: 50px;" min="1" max="100" />
            </p>
            <p>Tamanho da célula: 
                <input type="number" v-model="cellSize" style="width: 50px;" min="1" max="100" />
            </p>
        </fieldset>
        <div style="display: flex; flex-wrap: wrap; gap: 30px; margin-top: 20px;">
            <div class="bingo-cell" v-for="i in list" :key="i" :style="{ width: cellSize + 'px', height: cellSize + 'px', fontSize: cellSize / 2 + 'px' }">
                {{ i }}
            </div>
        </div>            
    </div>          
</template>
<script setup>
import { ref, computed } from 'vue'

const maxCells = ref(60)
const cellSize = ref(30)
const list = computed(() =>
  Array.from({ length: maxCells.value }, (_, i) => i + 1)
)

</script>
<style scoped>
.bingo-cell {
    background-color: #f0f0f0; 
    border-radius: 50%; 
    color: #000; 
    font-size: 12px; 
    font-weight: bold; 
    display: flex; 
    align-items: center; 
    justify-content: center;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}
</style>
<script setup lang="ts">
import {ref, watch, onMounted} from 'vue';

const props = defineProps({
  id: Number,
  question: String,
  initialScore: Number, // Ajout d'un prop pour le score initial
  updateScore: {
    type: Function,
    default() {
    },
  },
});

const score = ref(props.initialScore); // Utilisation du score initial comme valeur par défaut

// Mettre à jour le score lorsque le score change
watch(score, (newScore) => {
  props.updateScore(props.id, newScore);
});

// Si le prop `initialScore` change, on met à jour la valeur du score local
watch(() => props.initialScore, (newInitialScore) => {
  score.value = newInitialScore;
});
</script>

<template>
  <div class="question-block">
    <div class="question-header">
      <span class="question-id">Question N°{{ id }}</span>
      <p class="question-text">{{ question }}</p>
    </div>

    <div class="score-select">
      <label for="score-0" class="radio-label">
        <input type="radio" id="score-0" :name="'question-' + id" v-model="score" :value="0" class="radio-input">
        <span class="custom-radio"></span>
        0
      </label>

      <label for="score-1" class="radio-label">
        <input type="radio" id="score-1" :name="'question-' + id" v-model="score" :value="1" class="radio-input">
        <span class="custom-radio"></span>
        1
      </label>

      <label for="score-2" class="radio-label">
        <input type="radio" id="score-2" :name="'question-' + id" v-model="score" :value="2" class="radio-input">
        <span class="custom-radio"></span>
        2
      </label>

      <label for="score-3" class="radio-label">
        <input type="radio" id="score-3" :name="'question-' + id" v-model="score" :value="3" class="radio-input">
        <span class="custom-radio"></span>
        3
      </label>
    </div>
  </div>
</template>

<style scoped>
.question-block {
  background-color: #ecf0f1;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 25px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  min-height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.question-block:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.question-id {
  font-weight: bold;
  color: #2c3e50;
  display: block;
  margin-bottom: 12px;
  font-size: 18px;
}

.question-text {
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 15px;
  color: #34495e;
}

.score-select {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
}

.radio-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
}

.radio-input {
  display: none;
}

.custom-radio {
  width: 24px;
  height: 24px;
  border: 2px solid #3498db;
  border-radius: 50%;
  margin-right: 8px;
  position: relative;
  transition: background-color 0.3s, transform 0.3s;
}

.radio-input:checked + .custom-radio {
  background-color: #3498db;
  transform: scale(1.1);
}

.radio-input:checked + .custom-radio::after {
  content: '';
  width: 12px;
  height: 12px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.radio-label:hover .custom-radio {
  border-color: #2980b9;
}
</style>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  id: Number,
  question: String,
  updateScore: {type: Function,
  default() {

  }},
});



const score = ref(0);

watch(score, (newScore) => {
  updateScore(id, newScore);
});
</script>

<template>
  <div class="question-block">
    <span class="question-id">N°{{ id }}</span>
    <p class="question-text">{{ question }}</p>
    <div class="score-select">
      <label>
        Note:
        <div>
          <input type="radio" id="score-0" v-model="score" :value="0">
          <label for="score-0">0</label>

          <input type="radio" id="score-1" v-model="score" :value="1">
          <label for="score-1">1</label>

          <input type="radio" id="score-2" v-model="score" :value="2">
          <label for="score-2">2</label>

          <input type="radio" id="score-3" v-model="score" :value="3">
          <label for="score-3">3</label>
        </div>
      </label>
    </div>
  </div>
</template>

<style scoped>
.question-block {
  background-color: #ecf0f1;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.question-id {
  font-weight: bold;
  color: #2c3e50;
  display: block;
  margin-bottom: 10px;
}

.question-text {
  font-size: 18px;
  line-height: 1.6;
}

.score-select {
  margin-top: 10px;
}

label {
  font-size: 16px;
}

input[type="radio"] {
  margin-right: 5px;
}
</style>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import questionsData from '../data/questions.json';

const questions = ref()

onMounted(() => {
  questions.value = questionsData;
});
</script>

<template>
  <div>
    <h2>Questions :</h2>
    <ul>
      <li v-for="question in questions" :key="question.id">
        <span>N°{{question.id}}</span>
        {{ question.question }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  color: #2c3e50;
  font-size: 24px;
  margin-bottom: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 10px;
}
</style>

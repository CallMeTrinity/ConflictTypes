<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import questionsData from '../data/questions.json';
import QuestionBlock from './QuestionBlock.vue';

interface Question {
  id: number;
  question: string;
}

interface Scores {
  [key: number]: number;
}

const questions = ref<Question[]>([]);
const scores = ref<Scores>({});

onMounted(() => {
  questions.value = questionsData;
  questions.value.forEach(question => {
    scores.value[question.id] = 0;
  });
});

const updateScore = (id: number, score: number) => {
  scores.value[id] = score;
};

const totalScore = computed(() => {
  return Object.values(scores.value).reduce((total, score) => total + score, 0);
});
</script>

<template>
  <div>
    <h2>Questions :</h2>
    <p>Répondez en accordant des notes de 0 à 3 étalonnées comme suit :</p>
    <ul>
      <li>
        0 = non ce n’est pas du tout moi/ jamais ;
        1 = c’est vrai ça peut m’arriver / parfois ;
        2 = oui ça me ressemble / souvent ;
        3 = oui c’est tout à fait moi / toujours
      </li>
    </ul>
    <ul v-if="questions.length">
      <li v-for="question in questions" :key="question.id">
        <QuestionBlock :id="question.id" :question="question.question" :updateScore="updateScore" />
      </li>
    </ul>
    <div v-else>
      <p>Chargement des questions...</p>
    </div>
    <div>
      <p>Total Score: {{ totalScore }}</p>
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: #2c3e50;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
}

li {
  margin-bottom: 10px;
  font-size: 16px;
}

div {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}
</style>

<script lang="ts" setup>
import {ref, onMounted, computed} from 'vue';
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
const currentQuestionIndex = ref(0);

onMounted(() => {
  questions.value = questionsData;
  questions.value.forEach(question => {
    scores.value[question.id] = 0;
  });
});

const updateScore = (id: number, score: number) => {
  scores.value[id] = score;
};

// Aller à la prochaine question
const nextQuestion = () => {
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++;
  }
};

// Revenir à la question précédente
const prevQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--;
  }
};

// Calculer la progression
const progress = computed(() => {
  return ((currentQuestionIndex.value + 1) / questions.value.length) * 100;
});

const totalScore = computed(() => {
  return Object.values(scores.value).reduce((total, score) => total + score, 0);
});
</script>

<template>
  <div class="test-container">
    <h2>Questions :</h2>
    <p>Répondez en accordant des notes de 0 à 3 étalonnées comme suit :</p>
    <ul>
      <li> 0 = non ce n’est pas du tout moi/ jamais ;</li>
      <li> 1 = c’est vrai ça peut m’arriver / parfois ;</li>
      <li> 2 = oui ça me ressemble / souvent ;</li>
      <li> 3 = oui c’est tout à fait moi / toujours</li>
    </ul>

    <!-- Barre de progression -->
    <div class="progress-bar">
      <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>

    <!-- Affichage de la question actuelle -->
    <div v-if="questions.length">
      <QuestionBlock
          :id="questions[currentQuestionIndex].id"
          :question="questions[currentQuestionIndex].question"
          :updateScore="updateScore"
      />
    </div>
    <div v-else>
      <p>Chargement des questions...</p>
    </div>

    <!-- Navigation entre les questions -->
    <div class="navigation-buttons">
      <button @click="prevQuestion" :disabled="currentQuestionIndex === 0">Précédent</button>
      <button @click="nextQuestion" :disabled="currentQuestionIndex === questions.length - 1">Suivant</button>
    </div>

    <!-- Affichage du score total -->
    <div>
      <p>Total Score: {{ totalScore }}</p>
    </div>
  </div>
</template>

<style scoped>
.test-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

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

.progress-bar {
  background-color: #ecf0f1;
  border-radius: 5px;
  height: 10px;
  margin-bottom: 20px;
}

.progress {
  background-color: #3498db;
  height: 100%;
  border-radius: 5px;
  transition: width 0.3s;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

button {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:disabled {
  background-color: #95a5a6;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #2980b9;
}

div {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}
</style>

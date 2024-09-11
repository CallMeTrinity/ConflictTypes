<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import questionsData from '../data/questions.json';
import QuestionBlock from './QuestionBlock.vue';

// Classe pour les catégories (déjà définie plus haut)
class Categorie {
  questionIds: number[];

  constructor(questionIds: number[]) {
    this.questionIds = questionIds;
  }

  calculScore(scores: { [key: number]: number }) {
    return this.questionIds.reduce((total, id) => total + (scores[id] || 0), 0);
  }
}

// Définir les catégories
const categories = {
  passive: new Categorie([1, 8, 18, 19, 21, 30, 31, 42, 43, 44, 61, 62, 64, 73, 75]),
  aggressive: new Categorie([4, 7, 11, 13, 25, 26, 34, 35, 36, 46, 48, 59, 60, 68, 70]),
  manipulative: new Categorie([3, 5, 10, 14, 16, 23, 27, 37, 38, 49, 51, 55, 57, 67, 71]),
  compromise: new Categorie([6, 12, 15, 20, 24, 33, 39, 47, 50, 56, 58, 63, 66, 69, 74]),
  assertive: new Categorie([2, 9, 17, 22, 28, 29, 32, 40, 41, 45, 52, 53, 54, 65, 72])
};

interface Scores {
  [key: number]: number;
}

const questions = ref(questionsData);  // Les questions du JSON
const scores = ref<Scores>({});
const currentQuestionIndex = ref(0);

onMounted(() => {
  questions.value.forEach(question => {
    scores.value[question.id] = 0;  // Initialisation des scores
  });
});

const updateScore = (id: number, score: number) => {
  scores.value[id] = score;
};

// Calcul de la progression
const progress = computed(() => {
  return ((currentQuestionIndex.value + 1) / questions.value.length) * 100;
});

// Calcul des scores pour chaque catégorie
const totalScorePassive = computed(() => categories.passive.calculScore(scores.value));
const totalScoreAggressive = computed(() => categories.aggressive.calculScore(scores.value));
const totalScoreManipulative = computed(() => categories.manipulative.calculScore(scores.value));
const totalScoreCompromise = computed(() => categories.compromise.calculScore(scores.value));
const totalScoreAssertive = computed(() => categories.assertive.calculScore(scores.value));

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

    <!-- Affichage des scores totaux -->
    <div class="scores">
      <p>Score pour la catégorie 1 : {{ totalScorePassive }}</p>
      <p>Score pour la catégorie 2 : {{ totalScoreAggressive }}</p>
      <p>Score pour la catégorie 3 : {{ totalScoreManipulative }}</p>
      <p>Score pour la catégorie 4 : {{ totalScoreCompromise }}</p>
      <p>Score pour la catégorie 5 : {{ totalScoreAssertive }}</p>
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

.scores {
  margin-top: 20px;
  text-align: left;
  font-size: 18px;
}
</style>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import BarChart from "./BarChart.vue";
import router from "../router";
import personnalityData from '../data/personnality.json'; // Chemin vers le fichier JSON

// Utilisation du store Vuex
const store = useStore();

// Récupérer les scores des catégories via les getters du store
const totalScorePassive = computed(() => store.getters.totalScorePassive);
const totalScoreAggressive = computed(() => store.getters.totalScoreAggressive);
const totalScoreManipulative = computed(() => store.getters.totalScoreManipulative);
const totalScoreCompromise = computed(() => store.getters.totalScoreCompromise);
const totalScoreAssertive = computed(() => store.getters.totalScoreAssertive);

// Associer les scores aux traits de personnalité
const traits = [
  { name: 'Passif', score: totalScorePassive, details: personnalityData.traits.passif },
  { name: 'Agressif', score: totalScoreAggressive, details: personnalityData.traits.agressif },
  { name: 'Manipulateur', score: totalScoreManipulative, details: personnalityData.traits.manipulateur },
  { name: 'Compromis', score: totalScoreCompromise, details: personnalityData.traits.compromis },
  { name: 'Assertif', score: totalScoreAssertive, details: personnalityData.traits.assertif }
];

// Trier les traits en fonction des scores décroissants
const orderedTraits = computed(() => {
  return traits.sort((a, b) => b.score.value - a.score.value);
});

// Construire les données du graphique
const chartData = computed(() => ({
  labels: ['Passive', 'Agressive', 'Manipulatrice', 'Compromis', 'Assertive'],
  datasets: [
    {
      label: 'Score',
      backgroundColor: ['#3498db', '#e74c3c', '#f39c12', '#2ecc71', '#9b59b6'],
      data: [
        totalScorePassive.value,
        totalScoreAggressive.value,
        totalScoreManipulative.value,
        totalScoreCompromise.value,
        totalScoreAssertive.value
      ]
    }
  ]
}));

// Fonction pour recommencer le test
const restartTest = () => {
  router.push('/');
};
</script>

<template>
  <div class="results-container">
    <h2>Résultats du test</h2>
    <p class="intro-text">Voici vos résultats par catégorie, classés du plus élevé au plus bas :</p>

    <!-- Graphique des scores par catégorie -->
    <div class="chart-container">
      <BarChart :chart-data="chartData" />
    </div>

    <!-- Affichage des traits de personnalité en cards -->
    <div class="cards-container">
      <div v-for="trait in orderedTraits" :key="trait.name" class="trait-card" :class="trait.name.toLowerCase()">
        <h3 class="trait-name">{{ trait.name }}</h3>
        <p><strong>Points positifs :</strong></p>
        <ul class="positive-points">
          <li v-for="positif in trait.details.positif" :key="positif">{{ positif }}</li>
        </ul>
        <p v-if="trait.details.negatif.length"><strong>Points négatifs :</strong></p>
        <ul v-if="trait.details.negatif.length" class="negative-points">
          <li v-for="negatif in trait.details.negatif" :key="negatif">{{ negatif }}</li>
        </ul>
      </div>
    </div>

    <button @click="restartTest" class="restart-button">Recommencer le test</button>
  </div>
</template>

<style scoped>
.results-container {
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  font-size: 28px;
  color: #2c3e50;
}

.intro-text {
  font-size: 18px;
  margin-bottom: 20px;
  color: #34495e;
}

.chart-container {
  max-width: 600px;
  margin: 0 auto 30px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.trait-card {
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  color: white;
}

.trait-card h3 {
  margin-bottom: 15px;
  font-size: 22px;
}

.positive-points, .negative-points {
  text-align: left;
  margin-bottom: 10px;
}

.passif {
  background-color: #3498db; /* Bleu pour Passif */
}

.agressif {
  background-color: #e74c3c; /* Rouge pour Agressif */
}

.manipulateur {
  background-color: #f39c12; /* Orange pour Manipulateur */
}

.compromis {
  background-color: #2ecc71; /* Vert pour Compromis */
}

.assertif {
  background-color: #9b59b6; /* Violet pour Assertif */
}

.restart-button {
  display: block;
  margin: 30px auto;
  padding: 12px 25px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
}

.restart-button:hover {
  background-color: #2980b9;
}
</style>

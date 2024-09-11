<template>
  <div>
    <h2>Résultats du test</h2>
    <p>Voici vos résultats par catégorie :</p>

    <!-- Graphique des scores par catégorie -->
    <div style="max-width: 600px; margin: 0 auto;">
      <BarChart :chart-data="chartData" />
    </div>

    <button @click="restartTest">Recommencer le test</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import BarChart from "./BarChart.vue";
import router from "../router";


// Utilisation du store Vuex
const store = useStore();

// Récupérer les scores des catégories via les getters du store
const totalScorePassive = computed(() => store.getters.totalScorePassive);
const totalScoreAggressive = computed(() => store.getters.totalScoreAggressive);
const totalScoreManipulative = computed(() => store.getters.totalScoreManipulative);
const totalScoreCompromise = computed(() => store.getters.totalScoreCompromise);
const totalScoreAssertive = computed(() => store.getters.totalScoreAssertive);

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

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 20px;
}

button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #2980b9;
}
</style>

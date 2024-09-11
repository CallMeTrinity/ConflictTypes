<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Enregistrement des composants de Chart.js
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const props = defineProps<{
  chartData: {
    labels: string[];
    datasets: Array<{
      label: string;
      backgroundColor: string[];
      data: number[];
    }>;
  };
}>();


const canvas = ref(null);

// Création du graphique lors de la montée du composant
onMounted(() => {
  if (canvas.value) {
    new Chart(canvas.value, {
      type: 'bar',
      data: props.chartData,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
});
</script>

<style scoped>
canvas {
  max-width: 100%;
}
</style>

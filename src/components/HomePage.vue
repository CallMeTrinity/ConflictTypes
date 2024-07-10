<script setup lang="ts">
</script>

<template>
  <h1>AUTODIAGNOSTIC : MON COMPORTEMENT FACE À L’AGRESSIVITÉ</h1>
  <div>
    <p>Bienvenue sur notre site de test de personnalité dédié à l’analyse de votre comportement face aux situations conflictuelles. Grâce à ce test, vous pourrez découvrir si votre réaction naturelle est plutôt passive, agressive, manipulatrice, orientée vers le compromis ou assertive.</p>
    <p>Chaque question du test représente un exemple d'attitude face à l'agressivité. À la fin du test, vos réponses seront classées dans cinq colonnes correspondant à ces cinq types d’attitudes. Voici comment se déroule le dépouillement :</p>
    <ul>
      <li><strong>Attitude Passive :</strong> Tendance à éviter les conflits et à céder.</li>
      <li><strong>Attitude Agressive :</strong> Tendance à confronter les conflits de manière hostile.</li>
      <li><strong>Attitude de Manipulation :</strong> Tendance à influencer les autres de manière indirecte.</li>
      <li><strong>Attitude de Compromis :</strong> Tendance à chercher des solutions où chacun fait des concessions.</li>
      <li><strong>Attitude Assertive :</strong> Tendance à gérer les conflits de manière directe et respectueuse.</li>
    </ul>
    <p>Le total des points dans chaque colonne vous donnera une indication sur la prévalence de chaque attitude dans votre comportement. Prêt à découvrir votre profil ? Cliquez sur le bouton ci-dessous pour commencer le test.</p>
    <button>Commencer le Test</button>
  </div>
</template>

<style scoped>
h1 {
  color: #2c3e50;
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
}

div {
  background-color: #ecf0f1;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
}

p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 15px;
  text-align: justify;
}

ul {
  list-style-type: disc;
  padding-left: 40px;
  margin-bottom: 20px;
}

li {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 10px;
}

button {
  display: block;
  background-color: #3498db;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  margin: 20px auto;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2980b9;
}
</style>

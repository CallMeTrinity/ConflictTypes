<script setup lang="ts">
</script>

<template>
  <h1>AUTODIAGNOSTIC : MON COMPORTEMENT FACE À L’AGRESSIVITÉ</h1>
  <div>
    <p>Bienvenue sur notre plateforme d’analyse de votre comportement face aux situations de conflit. Grâce à ce test, découvrez si vos réactions sont plutôt passives, agressives, manipulatrices, orientées vers le compromis ou assertives.</p>

    <h2>Comment fonctionne le test ?</h2>
    <p>Chaque question représente un exemple d'attitude face à l'agressivité. Vos réponses seront classées dans cinq catégories correspondant aux types d’attitudes suivantes :</p>
    <ul>
      <li><strong>Attitude Passive :</strong> Vous évitez les conflits et cédez facilement.</li>
      <li><strong>Attitude Agressive :</strong> Vous confrontez les conflits de manière hostile.</li>
      <li><strong>Attitude Manipulatrice :</strong> Vous influencez indirectement les autres.</li>
      <li><strong>Attitude de Compromis :</strong> Vous cherchez des solutions où chacun fait des concessions.</li>
      <li><strong>Attitude Assertive :</strong> Vous gérez les conflits de manière directe et respectueuse.</li>
    </ul>

    <p>Le total des points dans chaque catégorie vous donnera une indication sur votre tendance comportementale. Prêt à découvrir votre profil ?</p>

    <router-link to="/questions">
      <button>Commencer le Test</button>
    </router-link>
  </div>
</template>

<style scoped>
h1 {
  color: #2c3e50;
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
}

h2 {
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
}

div {
  background-color: #ecf0f1;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 20px auto;
  animation: fadeIn 0.8s ease-in-out;
}

p {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 20px;
  text-align: justify;
}

ul {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 30px;
}

li {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

li::before {
  content: "✔";
  color: #3498db;
  margin-right: 10px;
  font-size: 18px;
}

button {
  background-color: #3498db;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  margin: 30px auto;
  display: block;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

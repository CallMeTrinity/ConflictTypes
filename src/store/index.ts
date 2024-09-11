// store.js

import { createStore } from 'vuex';
import questionsData from '../data/questions.json';

// Fonction pour calculer le score d'une catégorie
function calculScore(questionIds, scores) {
    // Vérifie que questionIds est un tableau et que scores est un tableau
    if (!Array.isArray(questionIds) || !Array.isArray(scores)) {
        return 0;
    }

    // Utiliser reduce pour calculer le score total des questions
    return questionIds.reduce((total, id) => {
        const score = scores[id - 1];
        return total + (typeof score === 'number' ? score : 0); // Si le score est un nombre, sinon 0
    }, 0);
}

export default createStore({
    state: {
        questions: [],  // Stocke les questions
        scores: [],     // Stocke les scores pour chaque question
        categories: {}  // Stocke les catégories
    },
    mutations: {
        // Initialisation des questions, des scores et des catégories
        initQuestions(state) {
            state.questions = questionsData;
            state.scores = Array(questionsData.length).fill(0); // Initialise les scores à 0

            // Définition des catégories avec les IDs des questions
            state.categories = {
                passive: [1, 8, 18, 19, 21, 30, 31, 42, 43, 44, 61, 62, 64, 73, 75],
                aggressive: [4, 7, 11, 13, 25, 26, 34, 35, 36, 46, 48, 59, 60, 68, 70],
                manipulative: [3, 5, 10, 14, 16, 23, 27, 37, 38, 49, 51, 55, 57, 67, 71],
                compromise: [6, 12, 15, 20, 24, 33, 39, 47, 50, 56, 58, 63, 66, 69, 74],
                assertive: [2, 9, 17, 22, 28, 29, 32, 40, 41, 45, 52, 53, 54, 65, 72]
            };
        },
        // Mettre à jour le score d'une question
        updateScore(state, { index, score }) {
            state.scores[index] = score;
        }
    },
    actions: {
        initQuestions({ commit }) {
            commit('initQuestions');
        },
        updateScore({ commit }, payload) {
            commit('updateScore', payload);
        }
    },
    getters: {
        // Obtenir toutes les questions
        questions: state => state.questions,
        // Obtenir tous les scores
        scores: state => state.scores,
        // Calculer le score total d'une catégorie
        totalScorePassive: state => calculScore(state.categories.passive, state.scores),
        totalScoreAggressive: state => calculScore(state.categories.aggressive, state.scores),
        totalScoreManipulative: state => calculScore(state.categories.manipulative, state.scores),
        totalScoreCompromise: state => calculScore(state.categories.compromise, state.scores),
        totalScoreAssertive: state => calculScore(state.categories.assertive, state.scores),
    }
});

const questions = [
  {
  category: "Animaux",
  question: "Quel race de chat provient de l'ancienne Thaïlande ?",
  choices: ["Siamois", "Tigré", "Persan"],
  answer: "Siamois"
  }, 
  {
  category: "Histoire",
  question: "En quelle année a démarrée la première guerre mondiale ?",
  choices: ["1900", "2000", "1914"],
  answer: "1914"
  }, {
  category: "Sport",
  question: "Quelle course trouve son nom dans une bataille de la Grèce antique et se déroule sur une distance d'environ 40 km ?",
  choices: ["Sprint", "Marathon", "110m haie"],
  answer: "Marathon" 
  }, {
  category: "Musique",
  question: "Quel groupe mythique des années 1960 a composé l'album 'The Wall' ?",
  choices: ["Nirvana", "The Beatles", "Pink Floyd"],
  answer: "Pink Floyd"
  }, {
  category: "Politique",
  question: "Quelle président Français a fait campagne sur le slogan de 'mangez des pommes' ?",
  choices: ["Mittérand", "Sarkozy", "Chirac"],
  answer: "Chirac"
  }, 
];

const getRandomQuestion = (questionsArray) => {
  return questions[Math.floor(Math.random() * questionsArray.length)];
};

const getRandomComputerChoice = (availableChoicesArray) => {
  return availableChoicesArray[Math.floor(Math.random() * availableChoicesArray.length)];
};

const getResults = (questionObject, computerChoice) => {
  if(questionObject.answer === computerChoice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`
  };
};

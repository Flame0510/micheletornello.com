export const ENTERPRISE_SECTORS = [
  'Smart Home / IoT',
  'Healthcare IT',
  'Cloud Networking',
  'Food-Tech',
  'Energia & Infrastrutture',
];

export const ENTERPRISE_CASE_STUDIES = [
  {
    category: 'Smart Home · IoT',
    scale: '130+ paesi',
    title: 'Piattaforma IoT su scala globale',
    description:
      'App mobile per la gestione di dispositivi smart home su scala globale. La codebase multi-team era densa di chiamate concorrenti verso AWS: il dev environment richiedeva script custom per filtrare i device a 1–2, altrimenti la home impiegava minuti. Dal network inspector emergevano fetch duplicate: componenti che leggevano lo stesso stato senza coordination nel layer Redux. Ho contribuito all\'analisi di queste ridondanze in una codebase distribuita multi-team.',
    stack: ['React Native', 'Redux', 'AWS'],
  },
  {
    category: 'Healthcare IT',
    scale: 'Multi-country',
    title: 'Gestionale farmaceutico enterprise',
    description:
      'Software medicale distribuito in farmacia su architettura a microservizi: repository multipli, librerie interne versionate su registro privato (JFrog Artifactory), pipeline CI/CD su GitLab self-hosted. Ho sviluppato moduli per la gestione dei flussi di preparazione galenica e l\'integrazione con stampanti di etichette farmaceutiche. Il dominio medicale impone zero-tolerance su errori: ogni modifica attraversa cicli di review, testing formale e validazione prima del rilascio.',
    stack: ['Angular', 'Java', 'Microservizi', 'JFrog Artifactory', 'GitLab CI/CD'],
  },
  {
    category: 'Cloud Networking',
    scale: '130+ paesi',
    title: 'App mobile per infrastruttura Wi-Fi',
    description:
      'Unico sviluppatore mobile per una piattaforma cloud di gestione reti Wi-Fi operativa in oltre 130 paesi. Ho costruito l\'app React Native da zero: struttura della navigazione, state management, integrazione con le API del backend e scelte di UX. Ho collaborato direttamente con il cliente — che era anche il designer — su ogni decisione di interfaccia. Un contesto raro: responsabilità tecnica completa su un prodotto enterprise, senza un team di sviluppo di supporto.',
    stack: ['React Native', 'REST API'],
  },
];

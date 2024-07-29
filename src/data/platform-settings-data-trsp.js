export const platformSettingsDataTrsp = [
  {
    title: "Compte",
    options: [
      {
        checked: true,
        label: "Envoyer un e-mail lors d'une nouvelle demande de transport",
      },
      {
        checked: true,
        label: "Envoyer un e-mail en cas de problème",
      },
      {
        checked: false,
        label: "Envoyez-moi un e-mail lorsque quelqu'un me mentionne",
      },
    ],
  },
  {
    title: "Notifications",
    options: [
      {
        checked: true,
        label: "Recevoir des notifications pour les nouvelles demandes de transport",
      },
      {
        checked: true,
        label: "Recevoir des mises à jour de statut des demandes",
      },
    ],
  },
  {
    title: "Préférences",
    options: [
      {
        checked: true,
        label: "Afficher les détails de la demande avant confirmation",
      },
      {
        checked: false,
        label: "Recevoir des rappels pour les demandes non confirmées",
      },
    ],
  },
];

export default platformSettingsDataTrsp;

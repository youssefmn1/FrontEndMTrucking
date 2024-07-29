// Example data in @/data
export const expediteursTableData = [
  {
    nom: "Pierre Dupont",
    nomEntreprise: "Dupont Logistics",
    numeroContact: "0123456789",
    demandes: [
      { id: 1, details: "Transport de marchandises", date: "2024-07-01" },
      { id: 2, details: "Livraison urgente", date: "2024-07-15" },
    ],
    voyages: 15, // Nombre de voyages réalisés
  },
  {
    nom: "Sophie Martin",
    nomEntreprise: "Martin Shipping",
    numeroContact: "0987654321",
    demandes: [
      { id: 3, details: "Transport de produits chimiques", date: "2024-07-10" },
    ],
    voyages: 8, // Nombre de voyages réalisés
  },
  {
    nom: "Claire Durand",
    nomEntreprise: "Durand Freight",
    numeroContact: "1122334455",
    demandes: [],
    voyages: 20, // Nombre de voyages réalisés
  },
  {
    nom: "Jacques Bernard",
    nomEntreprise: "Bernard Transport",
    numeroContact: "5566778899",
    demandes: [
      { id: 4, details: "Transport de matériel de construction", date: "2024-07-20" },
      { id: 5, details: "Envoi international", date: "2024-07-25" },
    ],
    voyages: 10, // Nombre de voyages réalisés
  },
];

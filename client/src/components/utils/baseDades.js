const baseDades = [
  {
    id: 1,
    puesto: "Director IT",
    lugar: "Manresa",
    publicación: "2020-06-28",
    finalización: "2020-09-31",
    contrato: "Indefinido",
    sector: "Automoción",
    descripción:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum. Proin malesuada ante eget tristique bibendum.",
  },
  {
    id: 2,
    puesto: "Director IT",
    lugar: "Barcelona",
    publicación: "2020-07-20",
    finalización: "2020-10-31",
    contrato: "Indefinido",
    sector: "Naval",
    descripción:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum. Proin malesuada ante eget tristique bibendum.",
  },
  {
    id: 3,
    puesto: "Director IT",
    lugar: "Sabadell",
    publicación: "2020-09-01",
    finalización: "2020-11-31",
    contrato: "Prácticas",
    sector: "Ferroviario",
    descripción:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum. Proin malesuada ante eget tristique bibendum.",
  },
  {
    id: 4,
    puesto: "Director IT",
    lugar: "Terrassa",
    publicación: "2020-08-20",
    finalización: "2020-12-31",
    contrato: "Autónomo",
    sector: "Nuclear",
    descripción:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum. Proin malesuada ante eget tristique bibendum.",
  },
  {
    id: 5,
    puesto: "Director IT",
    lugar: "Sabadell",
    publicación: "2020-09-23",
    finalización: "2020-12-30",
    contrato: "Autónomo",
    sector: "Construcción - Edificación",
    descripción:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum. Proin malesuada ante eget tristique bibendum.",
  },
  {
    id: 6,
    puesto: "Director IT",
    lugar: "Manresa",
    publicación: "2020-09-25",
    finalización: "2020-12-30",
    contrato: "Prácticas",
    sector: "Informática - Computación",
    descripción:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum. Proin malesuada ante eget tristique bibendum.",
  },
  {
    id: 7,
    puesto: "Director IT",
    lugar: "Igualada",
    publicación: "2020-07-25",
    finalización: "2020-11-30",
    contrato: "Indefinido",
    sector: "Téxtil - Papel",
    descripción:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum. Proin malesuada ante eget tristique bibendum.",
  },
  {
    id: 8,
    puesto: "Director IT",
    lugar: "Igualada",
    publicación: "2020-06-25",
    finalización: "2020-09-30",
    contrato: "Indefinido",
    sector: "Geotecnia - Minero",
    descripción:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum. Proin malesuada ante eget tristique bibendum.",
  },
  {
    id: 9,
    puesto: "Director IT",
    lugar: "Terrassa",
    publicación: "2020-07-06",
    finalización: "2020-09-03",
    contrato: "Indefinido",
    sector: "Eléctrico - Electrónico",
    descripción:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum. Proin malesuada ante eget tristique bibendum.",
  },

  {
    id: 10,
    puesto: "Director IT",
    lugar: "Barcelona",
    publicación: "2020-06-17",
    finalización: "2020-09-13",
    contrato: "Prácticas",
    sector: "Aeroespacial - Aeronáutica",
    descripción:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum. Proin malesuada ante eget tristique bibendum.",
  },
  {
    id: 11,
    puesto: "Director IT",
    lugar: "Manresa",
    publicación: "2020-06-28",
    finalización: "2020-09-31",
    contrato: "Indefinido",
    sector: "Automoción",
    descripción:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum. Proin malesuada ante eget tristique bibendum.",
  },
  {
    id: 12,
    puesto: "Director IT",
    lugar: "Barcelona",
    publicación: "2020-07-20",
    finalización: "2020-10-31",
    contrato: "Indefinido",
    sector: "Naval",
    descripción:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum. Proin malesuada ante eget tristique bibendum.",
  },
  {
    id: 13,
    puesto: "Director IT",
    lugar: "Sabadell",
    publicación: "2020-09-01",
    finalización: "2020-11-31",
    contrato: "Prácticas",
    sector: "Ferroviario",
    descripción:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum. Proin malesuada ante eget tristique bibendum.",
  },
  {
    id: 14,
    puesto: "Director IT",
    lugar: "Terrassa",
    publicación: "2020-08-20",
    finalización: "2020-12-31",
    contrato: "Jornada completa",
    sector: "Nuclear",
    descripción:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum. Proin malesuada ante eget tristique bibendum.",
  },
  {
    id: 15,
    puesto: "Director IT",
    lugar: "Sabadell",
    publicación: "2020-09-23",
    finalización: "2020-12-30",
    contrato: "Autónomo",
    sector: "Construcción - Edificación",
    descripción:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum. Proin malesuada ante eget tristique bibendum.",
  },
  {
    id: 16,
    puesto: "Director IT",
    lugar: "Manresa",
    publicación: "2020-09-25",
    finalización: "2020-12-30",
    contrato: "Prácticas",
    sector: "Informática - Computación",
    descripción:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum. Proin malesuada ante eget tristique bibendum.",
  },
  {
    id: 17,
    puesto: "Director IT",
    lugar: "Igualada",
    publicación: "2020-07-25",
    finalización: "2020-11-30",
    contrato: "Indefinido",
    sector: "Téxtil - Papel",
    descripción:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum. Proin malesuada ante eget tristique bibendum.",
  },
  {
    id: 18,
    puesto: "Director IT",
    lugar: "Igualada",
    publicación: "2020-06-25",
    finalización: "2020-09-30",
    contrato: "Jornada Parcial",
    sector: "Geotecnia - Minero",
    descripción:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum. Proin malesuada ante eget tristique bibendum.",
  },
  {
    id: 19,
    puesto: "Director IT",
    lugar: "Terrassa",
    publicación: "2020-07-06",
    finalización: "2020-09-03",
    contrato: "Indefinido",
    sector: "Eléctrico - Electrónico",
    descripción:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum. Proin malesuada ante eget tristique bibendum.",
  },

  {
    id: 20,
    puesto: "Director IT",
    lugar: "Barcelona",
    publicación: "2020-06-17",
    finalización: "2020-09-13",
    contrato: "Prácticas",
    sector: "Aeroespacial - Aeronáutica",
    descripción:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum. Proin malesuada ante eget tristique bibendum.",
  },
];

export default baseDades;

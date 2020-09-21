require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "ingenierowork",

  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = `DROP TABLE IF EXISTS ofertas;
    
    CREATE TABLE ofertas (
      id int NOT NULL primary key AUTO_INCREMENT,
      puesto varchar(255) NOT NULL,
      lugar varchar(255) NOT NULL,
      publicación varchar(255) NOT NULL,
      finalización varchar(255) NOT NULL,
      contrato varchar(255) NOT NULL,
      sector varchar(255) NOT NULL,
      descripción varchar(255) NOT NULL
    );

    INSERT INTO ofertas (puesto, lugar, publicación, finalización, contrato, sector, descripción) 
    VALUES ("Design Engineer", "Manresa", "2020-06-28", "2020-09-31", "Indefinido", "Automoción", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum.");
    
    INSERT INTO ofertas (puesto, lugar, publicación, finalización, contrato, sector, descripción) 
    VALUES ("General Engineer", "Barcelona", "2020-07-20", "2020-10-31", "Indefinido", "Naval", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum.");
    
    INSERT INTO ofertas (puesto, lugar, publicación, finalización, contrato, sector, descripción) 
    VALUES ("Engineer-in-Training", "Sabadell", "2020-09-01", "2020-11-31", "Prácticas", "Ferroviario", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum.");
      
    INSERT INTO ofertas (puesto, lugar, publicación, finalización, contrato, sector, descripción) 
    VALUES ("Nuclear Safety Engineer", "Terrassa", "2020-08-20", "2020-12-31", "Autónomo", "Nuclear", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum.");
    
    INSERT INTO ofertas (puesto, lugar, publicación, finalización, contrato, sector, descripción) 
    VALUES ("Director IT", "Sabadell", "2020-09-23", "2020-12-30", "Autónomo", "Construcción - Edificación", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum.");
    
    INSERT INTO ofertas (puesto, lugar, publicación, finalización, contrato, sector, descripción) 
    VALUES ("Front-End Developer", "Manresa", "2020-09-25", "2020-12-30", "Prácticas", "Informática - Computación", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum.");
    
    INSERT INTO ofertas (puesto, lugar, publicación, finalización, contrato, sector, descripción) 
    VALUES ("Textil engineer", "Igualada", "2020-07-25", "2020-11-30", "Indefinido", "Téxtil - Papel", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum.");
    
    INSERT INTO ofertas (puesto, lugar, publicación, finalización, contrato, sector, descripción) 
    VALUES ("Engineer Mine", "Igualada", "2020-06-25", "2020-09-30", "Indefinido", "Geotecnia - Minero", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum.");
    
    INSERT INTO ofertas (puesto, lugar, publicación, finalización, contrato, sector, descripción) 
    VALUES ("Mechanical Design Engineer", "Terrassa", "2020-07-06", "2020-09-03", "Indefinido", "Eléctrico - Electrónico", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum.");
    
    INSERT INTO ofertas (puesto, lugar, publicación, finalización, contrato, sector, descripción) 
    VALUES ("Aerospace Engineer, Junior", "Barcelona", "2020-06-17", "2020-09-13", "Prácticas", "Aeroespacial - Aeronáutica", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum.");
    
    INSERT INTO ofertas (puesto, lugar, publicación, finalización, contrato, sector, descripción) 
    VALUES ("Mechanical Engineer", "Manresa", "2020-06-28", "2020-09-31", "Indefinido", "Automoción", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum.");
    
    INSERT INTO ofertas (puesto, lugar, publicación, finalización, contrato, sector, descripción) 
    VALUES ("Machine Design Engineer", "Barcelona", "2020-07-20", "2020-10-31", "Indefinido", "Naval", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum.");
    
    INSERT INTO ofertas (puesto, lugar, publicación, finalización, contrato, sector, descripción) 
    VALUES ("Roadway Maintenance Technician", "Sabadell", "2020-09-01", "2020-11-31", "Prácticas", "Ferroviario", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum.");
      
    INSERT INTO ofertas (puesto, lugar, publicación, finalización, contrato, sector, descripción) 
    VALUES ("Nuclear Engineer", "Terrassa", "2020-08-20", "2020-12-31", "Jornada completa", "Nuclear", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum.");
    
    INSERT INTO ofertas (puesto, lugar, publicación, finalización, contrato, sector, descripción) 
    VALUES ("Design / Manufacturing Engineer", "Sabadell", "2020-09-23", "2020-12-30", "Autónomo", "Construcción - Edificación", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum.");
    
    INSERT INTO ofertas (puesto, lugar, publicación, finalización, contrato, sector, descripción) 
    VALUES ("Back-End Developer", "Manresa", "2020-09-25", "2020-12-30", "Prácticas", "Informática - Computación", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum.");
    
    INSERT INTO ofertas (puesto, lugar, publicación, finalización, contrato, sector, descripción) 
    VALUES ("Product Design Engineer", "Igualada", "2020-07-25", "2020-11-30", "Indefinido", "Téxtil - Papel", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum.");
    
    INSERT INTO ofertas (puesto, lugar, publicación, finalización, contrato, sector, descripción) 
    VALUES ("Project Geologist", "Igualada", "2020-06-25", "2020-09-30", "Jornada Parcial", "Geotecnia - Minero", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum.");
    INSERT INTO ofertas (puesto, lugar, publicación, finalización, contrato, sector, descripción) 
    VALUES ("Solar Product Engineer", "Terrassa", "2020-07-06", "2020-09-03", "Indefinido", "Eléctrico - Electrónico", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum.");
    
    INSERT INTO ofertas (puesto, lugar, publicación, finalización, contrato, sector, descripción) 
    VALUES ("Aerospace Design/Detail Engineer", "Barcelona", "2020-06-17", "2020-09-13", "Prácticas", "Aeroespacial - Aeronáutica", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat sapien, ultrices nec dolor ac, cursus semper lacus. Nunc sit amet volutpat libero, at semper tellus. Proin non lectus erat. Curabitur vulputate tellus et sollicitudin fermentum.");`;

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation ofertas was successful!");

    console.log("Closing...");
  });

  con.end();
});

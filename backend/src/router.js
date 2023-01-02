const express = require("express");

// Ajout de multer
const multer = require("multer");

// Ajouter fs
const fs = require("fs");

// Ajouter uuid
const { v4: uuidv4 } = require("uuid");

// Définir la destination des fichiers upload
const upload = multer({ dest: "uploads/" });

const router = express.Router();

// Les routes de base du template
// const itemControllers = require("./controllers/itemControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);
// Fin des routes de base du template

// Nos routes!
router.post("/api/avatar", upload.single("avatar"), (req, res) => {
  // on récupère le nom original
  const { originalname } = req.file;

  // on récupère le nom du fichier
  const { filename } = req.file;

  // on utilise la fonction fs rename
  fs.rename(
    `uploads/${filename}`,
    `uploads/${uuidv4()}-${originalname}`,
    (err) => {
      if (err) throw err;
      res.send("File uploaded");
    }
  );
});

module.exports = router;

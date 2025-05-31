const express = require('express');
const app = express();
const PORT = 8100;

// Servir les fichiers HTML/CSS/JS statiques dans "public"
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

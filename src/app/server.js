const express = require('express');
const path = require('path');

const app = express();

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'dist', 'Curso-Angular-REST')));

// Rota para tratar todas as requisições GET
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'Curso-Angular-REST', 'index.html'));
});

// Inicia o servidor na porta especificada pelo ambiente ou na porta 8080
app.listen(process.env.PORT || 8080, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 8080}`);
});

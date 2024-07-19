const express = require('express');
const path = require('path');

const app = express();

// Definindo o diretório onde os arquivos estáticos estão localizados
app.use(express.static(path.join(__dirname, 'dist', 'Curso-Angular-REST')));

// Configurando o roteamento para servir o index.html para todas as rotas
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'Curso-Angular-REST', 'index.html'));
});

// Iniciando o servidor na porta definida pelo ambiente ou na porta 8080
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

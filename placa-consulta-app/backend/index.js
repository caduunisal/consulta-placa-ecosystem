const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
app.use(cors());

app.get('/api/consulta', (req, res) => {
    const placa = (req.query.placa || '').toUpperCase();
    if (placa === 'AAA0000') {
        return res.json({
            placa: 'AAA0000',
            modelo: 'Toyota Corolla',
            ano: '2020',
            cor: 'Prata',
            municipio: 'São Paulo / SP',
            chassi: '9BWZZZ377VT004251'
        });

    } else {
        return res.status(404).json({ erro: 'Placa não encontrada' });
    }
});

app.listen(PORT, () => console.log(`Backend rodando em http://localhost:${PORT}`));
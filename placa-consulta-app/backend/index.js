require('dotenv').config(); // se estiver usando .env para o token
const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');

const PORT = 5000;
const API_TOKEN = process.env.API_TOKEN;

app.use(cors());

/* Consultando uma placa Fake para simples teste

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

app.listen(PORT, '0.0.0.0', () =>
  console.log(`Backend acessível em http://localhost:${PORT}`)
);
*/

app.get('/api/consulta', async (req, res) => {
  const { placa } = req.query;

  try {
    const response = await axios.get(`https://api.consultarplaca.com.br/v2/consultarPlaca`, {
        params: { placa },
        headers: {
            Authorization: `Basic ${Buffer.from(`${API_TOKEN}:`).toString('base64')}`
        }
    });

    return res.json(response.data);

  } catch (error) {
    // console.error("Erro na consulta:", error?.response?.data || error.message);
    console.error("Erro na consulta:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        headers: error.response?.headers,
    });

    return res.status(500).json({ erro: "Erro ao consultar a API externa" });
  }
});


app.listen(PORT, () => console.log(`Backend rodando em http://localhost:${PORT}`));
app.listen(API_TOKEN, () => console.log(`API Token: ${API_TOKEN}`));
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const API_TOKEN = process.env.PLACA_TOKEN;

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

if (!placa) {
    return res.status(400).json({ erro: "Parâmetro 'placa' é obrigatório" });
  }

  try {
    const response = await axios.get(`https://api.consultarplaca.com.br/v2/consultarPlaca`, {
      params: { placa },
      auth: {
        username: API_TOKEN,
        password: '' // a senha deve ficar em branco
      }
    });

    return res.json(response.data);
  } catch (error) {
    console.error("Erro ao consultar API externa:", error.response?.data || error.message);
    return res.status(500).json({ erro: 'Erro ao consultar a API externa' });
  }
});

app.listen(PORT, () => console.log(`Backend rodando em http://localhost:${PORT}`));
import React, { useState } from 'react';
import axios from 'axios';
function App() {
const [placa, setPlaca] = useState('');
const [dados, setDados] = useState(null);
const [erro, setErro] = useState(null);
const consultarPlaca = async () => {
try {
const res = await axios.get(`http://localhost:5000/api/consulta?placa=${placa}`);
setDados(res.data);
setErro(null);
} catch (e) {
setErro('Placa não encontrada ou erro na API');
setDados(null);
}
};

return (
<div>
<h1>Consulta de Placa</h1>
<input value={placa} onChange={e => setPlaca(e.target.value.toUpperCase())} />
<button onClick={consultarPlaca}>Consultar</button>
{dados && (
<ul>
<li>Placa: {dados.placa}</li>
<li>Modelo: {dados.modelo}</li>
<li>Ano: {dados.ano}</li>
<li>Cor: {dados.cor}</li>
<li>Município: {dados.municipio}</li>
<li>Chassi: {dados.chassi}</li>
</ul>
)}
{erro && <p style={{ color: 'red' }}>{erro}</p>}
</div>
);
}

export default App;

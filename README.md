# consulta-placa-ecosystem

Projeto Full Stack: Consulta de Placa com Node.js, React e PM2

Visão Geral
---------------------------------------------------------------------------------------
Este projeto simula uma consulta de placa veicular utilizando as seguintes tecnologias:

- Node.js: Backend que responde com dados fictícios para a placa "AAA0000".
- React: Frontend para o usuário informar a placa e visualizar os dados.
- PM2: Orquestrador que mantém o backend em execução


Iniciar
---------------------------------------------------------------------------------------
pm2 start ecosystem.config.js
pm2 status


Acessos
---------------------------------------------------------------------------------------
- Ir para a pasta frontend e rodar:
    npm start
- Backend: http://localhost:5000/api/consulta?placa=AAA0000
- Frontend: http://localhost:3001


Observações
---------------------------------------------------------------------------------------
- O backend está preparado apenas para responder pela placa "AAA0000".
- O React faz requisições via axios ao backend.
- PM2 mantém o backend rodando em background.
- É importante entender que o PM2 está orquestrando apenas o backend Node.js (conforme o ecosystem.config.js). O React (frontend), ao rodar com npm start, não está rodando via PM2, mas sim por um servidor de desenvolvimento do próprio React (usando react-scripts)


Encerramento
---------------------------------------------------------------------------------------
Para parar a aplicação backend:
pm2 stop placa-backend

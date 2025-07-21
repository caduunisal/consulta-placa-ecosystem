module.exports = {
    apps: [
        {
            name: 'placa-backend',
            script: './backend/index.js',
            watch: true,
            env: {
                API_TOKEN: '7d5ddd28f133289b8e5dc1b354589006'
            }            
        }
    ]
};
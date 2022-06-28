// const app = require('./src/app')
import app from "./src/app.js"

// const PORT = 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port)
})
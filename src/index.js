const express =  require('express');
const cors =  require('cors');
const dotenv =  require('dotenv');

const routes = require('./routes')

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use(routes);

app.use((error, request, response, next) => {
    response.status(error.status || 500);
    response.json({ error: error.message });
})

app.listen(process.env.PORT || 3333);
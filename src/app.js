const express = require('express');
const app = express();
const port = 8000;
const database = require('./utils/connection');
const initModels = require('./models/init.model');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const productRoutes = require('./routes/product.routes');
const errorHandlerRoutes = require('./routes/error.routes');

app.use( express.json(), userRoutes, authRoutes, productRoutes );
errorHandlerRoutes(app);

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})




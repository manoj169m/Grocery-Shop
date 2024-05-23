const express = require('express');
const mongoose = require('mongoose');
const routerProducts= require('./routers/Products')
const routerSignup =require('./routers/Signup')
const app = express();
const cors =require('cors')
const router = express.Router();
app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/grocery');

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
});

router.get('/', (req, res) => {
    res.send('home page');
});

app.use('/products',routerProducts)
app.use('/signup',routerSignup)
app.use('/', router);

app.listen(3005, () => {
    console.log('Server running on port 3005');
});

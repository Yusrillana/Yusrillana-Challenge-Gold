const express = require('express');
const itemRoutes = require('./routes/itemroutes.js');
const { clear } = require('./database/migrations/db.js');
const app = express();

app.use(express.json());
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

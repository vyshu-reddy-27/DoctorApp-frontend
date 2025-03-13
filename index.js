require('dotenv').config();
const express = require('express');
const app = express();
const connectdb = require('./db/db');
const doctorRoutes = require('./routes/doctorRoutes');

connectdb();
app.use(express.json());
app.use('/api/doctor', doctorRoutes);

app.get('/', (req, res) => {
  res.send('Server is Running on PORT 3001');
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

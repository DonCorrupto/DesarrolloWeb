const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();
const userRoutes = require("./routes/user");
const destinoRoutes = require("./routes/destinos");
const hotelRoutes = require("./routes/hoteles");
const actividadRoutes = require("./routes/actividades");
const paisesRoutes = require("./routes/paises");
const reservasRoutes = require("./routes/reservas");

const app = express()
const port = process.env.PORT || 3001;
app.use(cors())

//middleware
app.use(express.json())
app.use('/api', userRoutes);
app.use('/api', destinoRoutes);
app.use('/api', hotelRoutes);
app.use('/api', actividadRoutes);
app.use('/api', paisesRoutes);
app.use('/api', reservasRoutes);

app.use((req, res)=>{
    res.status(404).send({
        ok: false,
        message: "Endpoint no encontrado.",
        info:null
    })
})

//moongodb connection
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected to MongoDB Atlas")).catch((error) => console.log(error));

app.listen(port, () => console.log("server listening on port", port));
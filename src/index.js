const express = require('express');
const cors = require('cors');
const v1WorkoutRouter = require("./v1/routes/workoutroutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Habilita CORS para todas las rutas

app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
    console.log(`🚀🚀api/ Servidor escuchando en el puerto ${PORT}`);
});

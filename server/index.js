import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import tripRoutes from "./routes/TripRoutes";
import "dotenv/config";

const app = express()

const port = process.env.PORT || 3002;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cookieParser());

app.use('/api/v1/trips', tripRoutes);

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})

export default app;

import express from "express";
import conn from "../Database";

const router = express.Router();

router.get('/');

router.post('/available_trips');

export default router;
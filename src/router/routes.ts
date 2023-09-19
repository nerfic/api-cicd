import express from "express";
import food from '../api/food/router/food.routes';

const router = express.Router();

router.use('/food', food);

export default router;

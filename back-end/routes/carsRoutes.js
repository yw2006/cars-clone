import { getcars } from '../utils/database.js';
import { Router } from "express";
const router = Router();

router.get('/cars', async (req, res) => {
    try {
        const cars = await getcars();
        res.json(cars);
    } catch (err) {
        console.error('Error fetching cars data:', err);
        res.status(500).json({ err: 'Internal Server Error' });
    }
});


export default router;

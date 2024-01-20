import { getcars, getspecificcar, makeorder } from '../utils/database.js';
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

router.post('/checkout/:id',async(req,res) => {
    try {
        const alldata = req.body
        const order = await makeorder(alldata);
        console.log(order)
        console.log('order booked')
    } catch (err) {
        console.log('error in order',err)
    }
})
export default router;
router.get('/cars/:id',async(req,res)=>{
    try {
        const carid = req.params.id
        const specificcar = await getspecificcar(carid)
        res.json(specificcar)
    } catch (err) {
        console.log('error in getting specific car',err)
    }
})
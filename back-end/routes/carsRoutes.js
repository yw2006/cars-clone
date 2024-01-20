import { getcars, getDetails,searchCars,getspecificcar, makeorder } from "../utils/database.js";

import { Router } from "express";
const router = Router();

router.get("/cars", async (req, res) => {
  try {
    const cars = await getcars();
    res.json(cars);
  } catch (err) {
    console.error("Error fetching cars data:", err);
    res.status(500).json({ err: "Internal Server Error" });
  }
});
router.get("/carsDetails/:id", async (req, res) => {
  try {
    const car_id = req.params.id;
    const details = await getDetails(car_id);
    res.json(details);
  } catch (error) {
    console.error("Error fetching cars data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get('/search/:model/:price', async (req, res) => {
  try {
    // const type = req.query.type;
    const model = req.params.model;
    const price = req.params.price;
    const searched_cars = await searchCars(model, price);
    res.json(searched_cars);
  } catch (error) {
    console.error("Error fetching cars data:", error);
    res.status(500).json({ error: "Internal Server Error" });
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
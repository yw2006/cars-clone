import { Router, json } from 'express'
const router = Router()
import bcrypt from 'bcrypt'
import {addCustomer} from '../utils/database.js'
import { check , validationResult } from 'express-validator'


// validate inputs
const validate=[check('email','email error').isEmail().isLength({min:10,max:30}),
check('password',' passowrd length 8-20').isStrongPassword().isLength({min:8,max:20}),
check('phone', 'phone error').isMobilePhone(["ar-EG"]),
check("name",'not valid name').isString(),
check('gender','not valied gender').isString(),
check('age','invalied age').isNumeric().isLength({min:1,max:2})
]
router.post('/signin',
validate
,async (req,res)=>{
  try {
    const { name, age, password, email, phone, address_1, address_2, gender } = req.body;
    const validationText=  validationResult(req)
    console.log(validationText)
    if (!validationText.isEmpty()) {
      res.status(400).json({ message: validationText['errors'] });
      return;
    }
    const passwordHashing = await bcrypt.hash(password, 10);
    const created = await addCustomer({
      name,
      age,
      passwordHashing,
      email,
      phone,
      address_1,
      address_2,
      gender,
    });  
    console.log(created)
    if (created.affectedRows != 0) {
      res.status(201).json({ messsage: "created  sussefly" });
      return;
    }
   res.status(400).json({ messsage: "has a problem when you create user" });
}catch (err) {
    res.status(400).json({ message: err.message });
  }

});

 
 
   
export default router
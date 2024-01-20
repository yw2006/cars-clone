import { Router, json } from 'express'
const router = Router()
import bcrypt from 'bcrypt'
import {addCustomer,find} from '../utils/database.js'
import { check , validationResult } from 'express-validator'
import generateJwt from '../utils/generateJwt.js'
// validate inputs
const validate=[check('email','email error').isEmail().isLength({min:10,max:30}),
check('password',' passowrd length 8-20').isStrongPassword().isLength({min:8,max:20}),
check('phone', 'phone error').isMobilePhone(["ar-EG"]),
check("name",'not valid name').isString(),
check('gender','not valied gender').isString(),
check('age','invalied age').isNumeric().isLength({min:1,max:2})
]
router.post('/signup',
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
      res.status(201).json({  token:generateJwt({email}),messsage: "created  sussefly" });
      return;
    }
   res.status(400).json({ messsage: "has a problem when you create user" });
}catch (err) {
    res.status(400).json({ message: err.message });
  }

});


router.post(
  "/signin",
  check("email", "email error").isEmail().isLength({ min: 10, max: 30 }),
  check("password", " passowrd error")
    .isStrongPassword()
    .isLength({ min: 8, max: 20 })
,async (req,res)=>{
  const {email,password}=req.body
  try{
    const validationText = validationResult(req);
    if (!validationText.isEmpty()) {
      res.status(400).json({ message: validationText["errors"] });
      return;
    }
    const { email, password } = req.body;
    const user= await find(email)
    const validate = await bcrypt.compare(password, user[0].password);
    if(validate){
      res.json({
        message: "login succefly",
        token: generateJwt({ email }),
        data: {
          id: user[0].customer_id,
          address_1: user[0].address_1,
          address_2: user[0].address_2,
        },
      });
      return
    }
    res.status(200).json({message:'you have an error in your data'})
  }catch(err){
    res.status(500).json({message:err.message});
  }
});
   
export default router
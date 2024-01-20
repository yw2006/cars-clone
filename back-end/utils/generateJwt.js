import jwt from 'jsonwebtoken'
import {configDotenv} from 'dotenv'
configDotenv()
const generateJwt=  (paylod)=> {
    return jwt.sign(paylod, process.env.JWT_PRIVATE_KEY, {
      expiresIn: "24h",
    });
}
export default generateJwt;
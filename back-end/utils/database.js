import mysql2 from "mysql2";
import { configDotenv } from "dotenv";
configDotenv();
const createDBConnection = async () => {
  try {
    const connection = await mysql2
      .createConnection({
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
      })
      .promise();

    console.log("Connected to the database!");

    return connection;
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    return;
  }
};

const DBConnection = await createDBConnection();
// add customer to my database
export const addCustomer = async ({
  name,
  age,
  passwordHashing,
  email,
  phone,
  address_1 = null,
  address_2 = null,
  gender,
}) => {
  const res = await DBConnection.query(
    "INSERT INTO `customer`( `name`, `age`, `password`, `email`, `phone`, `address_1`, `address_2`, `gender`,`created_at`	) VALUES (?,?,?,?,?,?,?,?,null)",
    [name, age, passwordHashing, email, phone, address_1, address_2, gender]
  );
  return res;
};
export const getcars = async () => {
  const res = await DBConnection.query("SELECT * FROM `cars` ");
  return res[0];
};

export const getDetails = async (id) => {
  const query = "SELECT * FROM `cars` WHERE car_id=?";
  try {
    const response = await DBConnection.query(query, [id]);
    return response[0];
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  }
};
export async function searchCars(selectedModel, selectedPrice) {
  const query = `
    SELECT *
    FROM cars
    WHERE category = ? AND price <= ?
  `;
  const results = await DBConnection.query(query, [
    selectedModel,
    selectedPrice,
  ]);
  console.log(results);
  return results[0];
}
// searchCars("sedan",400000 )

// getDetails(3)

export const find= async (email)=>{
const res= await DBConnection.query('SELECT `customer_id`, `password`, `email`, `address_1`, `address_2` FROM `customer` WHERE email=?',[email])
return res[0];
}

export const makeorder = async (alldata) => {
  const res = await DBConnection.query(
    "INSERT INTO `order`(`order_price`, `quantity`, `customer_id`, `car_id`,`created_at`) VALUES (?,?,?,?,?)",
    [alldata.price,1,alldata.customer_id,alldata.id,null]
  );
  return res;
}
export const updateaddress = async (address_1,address_2,id)=>{
  const res = await DBConnection.query(
    "UPDATE `customer` SET `address_1`=?,`address_2`=? WHERE customer_id = ?",
    [address_1,address_2,id]
  );
  return res;
}
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
    "INSERT INTO `customer`( `name`, `age`, `password`, `email`, `phone`, `address_1`, `address_2`, `gender`) VALUES (?,?,?,?,?,?,?,?)",
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

import { pool } from "./../db.js";

export const getPromociones = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM promociones');
    res.send(rows);
  } catch (error) {
    console.error(error);
  }
}
import { pool } from "./../db.js";

export const getPromociones = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM promociones')
  console.log(rows);
  res.send(rows)
}
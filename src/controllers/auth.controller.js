import { pool } from "../db.js";
import { passwordHashed, compareHash } from "./../utils/auth.utils.js";


export const registerHandler = async (req, res) => {
  const { email, password } = req.body
  const hash = passwordHashed(password)
  const [rows] = await pool.query('INSERT INTO clientes (email, password) VALUES (?, ?)', [email, hash])
  res.send({
    id: rows.insertId,
    email,
    hash
  });
}

export const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.params

    const [rows] = await pool.query('SELECT *  FROM clientes WHERE email=?', [email]);
    if (compareHash(password, rows[0].password)) {
      return res.send(rows[0])
    } else {
      return false
    }
  } catch (error) {
    console.error(error)
  }
}
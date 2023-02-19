import bcrypt from "bcryptjs";

export function passwordHashed(password) {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)

  return hash;
}

export function compareHash(password, hash) {

  if (bcrypt.compareSync(password, hash)) {
    return true
  }
  else {
    return false
  }
}
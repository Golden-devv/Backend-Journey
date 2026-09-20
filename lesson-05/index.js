require("dotenv").config()
const crypto = require("node:crypto")

const secretKey = process.env.SECRECT_KEY
const key = Buffer.from(secretKey, "hex")
const iv = crypto.randomBytes(16)

const cipher = crypto.createCipheriv("aes-128-cbc",key,iv)
let encripted = cipher.update("example123@gmail.com","utf-8",'hex')
encripted += cipher.final("hex")
console.log(encripted)

const decripter = crypto.createDecipheriv("aes-128-cbc",key,iv)
let decripted = decripter.update(encripted,"hex","utf-8")
decripted += decripter.final("utf-8")
console.log(decripted)

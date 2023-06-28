const request = require("supertest")
const app = require("../app")

const BASE_URL = "/api/v1/users"
let TOKEN
let userId

beforeAll(async () => {
  const user = {
    email: "marcelyepesqf@gmail.com",
    password: "marcel1234",
  }

  const res = await request(app).post(`${BASE_URL}/login`).send(user)

  TOKEN = res.body.token
})

test("GET -> 'URL_BASE', should return status code 200 and res.body to have length 1", async () => {
  const res = await request(app)
    .get(BASE_URL)
    .set("Authorization", `Bearer ${TOKEN}`)

  expect(res.status).toBe(200)
  expect(res.body).toHaveLength(1)
})

test("POST -> 'URL_BASE, should return status code 201", async () => {
  const userCreate = {
    firstName: "Silvia",
    lastName: "Martinez",
    email: "silvia@gmail.com",
    password: "silvial1234",
    phone: "3208217926",
  }

  const res = await request(app).post(BASE_URL).send(userCreate)

  userId = res.body.id

  expect(res.status).toBe(201)
  expect(res.body.firstName).toBe(userCreate.firstName)
})

test("PUT -> 'BASE_URL/:id', should return status code 200 and res.body.firstName = body.firstName", async () => {
  const userUpdate = {
    firstName: "Silvia",
  }

  const res = await request(app)
    .put(`${BASE_URL}/${userId}`)
    .send(userUpdate)
    .set("Authorization", `Bearer ${TOKEN}`)

  expect(res.status).toBe(200)
  expect(res.body.firstName).toBe(userUpdate.firstName)
})

test("POST -> 'URL_BASE/login' should return status code 200, res.body.email ==== body.email and token failed", async () => {
  const userLogin = {
    email: "silvia@gmail.com",
    password: "silvial1234",
  }

  const res = await request(app).post(`${BASE_URL}/login`).send(userLogin)

  expect(res.status).toBe(200)
  expect(res.body.user.email).toBe(userLogin.email)
  expect(res.body.token).toBeDefined()
})

test("POST 'BASE_URL/login', should return status code 401", async () => {
  const userLogin = {
    email: "daniela@gmail.com",
    password: "invalid password",
  }

  const res = await request(app).post(`${BASE_URL}/login`).send(userLogin)

  expect(res.status).toBe(401)
})

test("DELTE -> 'BASE_URL/:id', should return status code 204", async () => {
  const res = await request(app)
    .delete(`${BASE_URL}/${userId}`)
    .set("Authorization", `Bearer ${TOKEN}`)

  expect(res.status).toBe(204)
})

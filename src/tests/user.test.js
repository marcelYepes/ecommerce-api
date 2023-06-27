const request = require("supertest")
const app = require("../app")

const URL_BASE = "/api/v1/users"

test("GET -> 'URL_BASE', should return status code 200 and res.body to have length 1", async () => {
  const res = await request(app).get(URL_BASE)

  expect(res.status).toBe(200)
  expect(res.body).toHaveLength(1)
})

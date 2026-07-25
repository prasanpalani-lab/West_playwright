// API.spec.ts
const { test, expect, request } = require("@playwright/test");

test("GET - Request", async () => {
  const apiRequestContext = await request.newContext();

  const response = await apiRequestContext.get(
    "https://dummyjson.com/users"
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);

  expect(body.users).toBeDefined();
  expect(body.users.length).toBeGreaterThan(0);

  await apiRequestContext.dispose();
});




let token

test.describe.serial("Authentication API", () => {
  test("POST - Request LOGIN", async () => {
    const apiRequest = await request.newContext();

    const response = await apiRequest.post(
      `${process.env.BASE_URL}/user/login`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          username: process.env.USER_NAME,
          password: process.env.PASSWORD,
        },
      }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();
    token = body.accessToken;

    expect(token).toBeTruthy();
    await apiRequest.dispose();
  });

  test("GET - Request Auth-User", async () => {
    const apiRequest = await request.newContext();

    const response = await apiRequest.get(
      `${process.env.BASE_URL}/user/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const body = await response.json();
    console.log(body);

    expect(response.status()).toBe(200);
    expect(body.username).toBe(process.env.USER_NAME);

    await apiRequest.dispose();
  });
});
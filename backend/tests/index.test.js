const request = require("supertest");
const routes = require("../src/routes");
const mockData = require("./mockData");
const http = require("http");

// import app from "../index";
// import request from "supertest";
// import http from "http";
// import { mockData } from "./mockData";

jest.mock("http");

describe("API Endpoints", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock state between tests
  });

  it('GET "/api/balance" should return mock data', async () => {
    const res = await request(routes).get("/api/balance").send(mockData);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("Status", "OK");
    expect(res.body).toHaveProperty("Reports");
  });

  it('GET "/api/balance" should return status code 500 when request failed', async () => {
    http.get.mockImplementation((url, callback) => {
      return {
        on: (event, callback) => {
          if (event === "error") {
            callback(new Error("Request failed"));
          }
        },
      };
    });

    const res = await request(routes).get("/api/balance");

    expect(res.statusCode).toEqual(500);
    expect(res.body).toHaveProperty("message", "Fetching data failed");
  });
});

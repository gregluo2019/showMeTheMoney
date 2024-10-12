import request from "supertest";
import app from "../src/app";
import mockData from "./mockData";
import { jest } from "@jest/globals";
import axios from "axios";
import { balanceSheetUrl } from "./../src/controllers/balanceSheetController";

jest.mock("axios");

describe("API Endpoints of Show-Me-The-Money", () => {
  it('GET "/api/balanceSheet" should return mock data', async () => {
    (axios.get as any).mockResolvedValue({ data: mockData });

    const res = await request(app).get("/api/balanceSheet");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("Status", "OK");
    expect(res.body).toHaveProperty("Reports");
    expect(res.body).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith(balanceSheetUrl);
  });

  it('GET "/api/balanceSheet" should return status code 500 when request failed', async () => {
    (axios.get as any).mockRejectedValue(new Error("Async error message"));

    const res = await request(app).get("/api/balanceSheet");

    expect(res.statusCode).toEqual(500);
    expect(res.body).toHaveProperty("message", "Fetching data failed");
  });

  it("should handle non-existent routes", async () => {
    await request(app).get("/non-existent-route").expect(404);
  });
});

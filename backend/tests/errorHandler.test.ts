import request from "supertest";
import app from "../src/app";

describe("Global Error Handler", () => {
  it("should handle errors thrown in routes", async () => {
    const res = await request(app).get("/api/error");

    expect(res.status).toBe(500);

    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual(
      expect.stringContaining("Internal Server Error")
    );
  });

  it("should handle async errors", async () => {
    const res = await request(app).get("/api/async-error");

    expect(res.status).toBe(500);

    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toEqual(
      expect.stringContaining("Internal Server Error")
    );
  });
});

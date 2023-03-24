import * as user from "../../user";
import prisma from "../../../db";
import { hashPassword } from "../../../modules/auth";

describe("user handler", () => {
  it("should sign in a user", async () => {
    const req = {
      body: {
        username: "testuser",
        password: "testpassword",
      },
    };
    const res = {
      json({ token }) {
        expect(token).toBeTruthy();
      },
    };
    await user.signin(req, res);
  });
});

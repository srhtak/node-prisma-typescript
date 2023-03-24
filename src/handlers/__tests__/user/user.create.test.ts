import * as user from "../../user";
import prisma from "../../../db";

describe("user handler", () => {
  beforeAll(async () => {
    await prisma.user.delete({
      where: {
        username: "testuser",
      },
    });

    })
  it("should create a new user", async () => {
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
    await user.createNewUser(req, res);
  });

});

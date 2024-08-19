import { it, expect } from "vitest";
import { generateToken } from "./async-example";

it("should generate a token value", (done) => {
  const userEmail = "test@test.com";

  generateToken(userEmail, (err, token) => {
    // ! This Tests will fail because the function is async and the test is not waiting for the result
    // ! The test will finish before the callback is called
    // expect(token).toBeDefined();
    // expect(token).toBe(2);

    // ! The solution is to use the done callback
    expect(token).toBeDefined();
    // ! expect(token).toBe(2); //  This will fail with a timeout error - Jest will wait for the done callback to be called
    //    to Have a timeout error, we need to use try catch block
    // try {
    //   expect(token).toBe(2);
    // } catch (error) {
    //   done(error);
    // }

    done();
  });

  it("should generate a token value using promise", async (done) => {
    const userEmail = "test@test.com";

    const token = await generateTokenPromise(userEmail);
    // console.log(token);

    expect(token).resolves.toBeDefined();

    done();
  });
});

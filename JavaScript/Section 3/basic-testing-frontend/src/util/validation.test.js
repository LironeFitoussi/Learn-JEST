describe("validateStringNotEmpty", () => {
  it("should throw an error if an empty string is passed", () => {
    const value = "";
    const stringFn = () => {
      validateStringNotEmpty(value);
    };
    expect(stringFn).toThrow(/Invalid input - must not be empty./);
  });

  it("should not throw an error if a non-empty string is passed", () => {
    const value = "Hello, World!";
    const stringFn = () => {
      validateStringNotEmpty(value);
    };
    expect(stringFn).not.toThrow();
  });

  it("should throw an error if a boolean value is provided", () => {
    const boolInput = true;
    const boolFn = () => {
      validateStringNotEmpty(boolInput);
    };
    expect(boolFn).toThrow();
  });

  it("should throw an error if a number value is provided", () => {
    const numInput = 1;
    const numFn = () => {
      validateStringNotEmpty(numInput);
    };
    expect(numFn).toThrow();
  });

  it("should throw an error if an object value is provided", () => {
    const objInput = {};
    const objFn = () => {
      validateStringNotEmpty(objInput);
    };
    expect(objFn).toThrow();
  });

  it("should throw an error if an array value is provided", () => {
    const arrInput = [];
    const arrFn = () => {
      validateStringNotEmpty(arrInput);
    };
    expect(arrFn).toThrow();
  });

  it("should throw an error if a null value is provided", () => {
    const nullInput = null;
    const nullFn = () => {
      validateStringNotEmpty(nullInput);
    };
    expect(nullFn).toThrow();
  });
});

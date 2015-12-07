describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
  it("contains spec with another expectation", () => {
    expect(true).toBe(true);
  })
});

context("Headless browser", () => {
  it("Must visit the site and take a screenshot", () => {
    cy.visit("https://www.educative.io/");
    cy.screenshot();
  });
});

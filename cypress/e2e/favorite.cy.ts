describe("Favorites flow", () => {

  it("should open the site correctly", () => {
    cy.visit("/");
  });

  it("should render the list correctly", () => {
    cy.visit("/");
    cy.get("[id='list']").should("be.visible");
  });

  it("should render list items correctly", () => {
    cy.visit("/");
    cy.get("[id='list-item-1']").should("be.visible");
    cy.get("[id='list-item-20']").should("be.visible");
  });

  it("should add item to favorite correctly", () => {
    cy.visit("/");
    // Item 1
    cy.get("[id='heart-1']").click();
    cy.get("[id='heart-1']").should("have.class", "heart-selected");

    // Item 2
    cy.get("[id='heart-2']").click();
    cy.get("[id='heart-2']").should("have.class", "heart-selected");

    // Item 3
    cy.get("[id='heart-3']").click();
    cy.get("[id='heart-3']").should("have.class", "heart-selected");
  });

  it("should remove item to favorite correctly", () => {
    cy.visit("/");

    // Item 1
    cy.get("[id='heart-1']").click();
    cy.get("[id='heart-1']").should("have.class", "heart-selected");

    // Item 2
    cy.get("[id='heart-2']").click();
    cy.get("[id='heart-2']").should("have.class", "heart-selected");
    cy.get("[id='heart-2']").click();
    cy.get("[id='heart-2']").should("not.have.class", "heart-selected");

    // Item 3
    cy.get("[id='heart-3']").click();
    cy.get("[id='heart-3']").should("have.class", "heart-selected");
    cy.get("[id='heart-3']").click();
    cy.get("[id='heart-3']").should("not.have.class", "heart-selected");
  });
});

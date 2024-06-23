// import {ItemListComponent} from "./item-list.component";
// import {Store} from "@ngrx/store";
// import {StoreService} from "../../services/store.service";
//
// class StoreServiceMock {}
//
//


import {ListComponent} from "./list.component";

describe("<ListItem>", () => {
  it("should render correctly", () => {
    cy.mount(ListComponent);
    cy.get("[id='list']").should("be.visible");
  });
});

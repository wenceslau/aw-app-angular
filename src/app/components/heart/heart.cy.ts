import {HeartComponent} from './heart.component';

describe('<Heart>', () => {
  it('should render correctly', () => {
    cy.mount('<app-heart [testId]="\'heart-1\'"></app-heart>', {
      declarations: [HeartComponent],
    });
    cy.get('[id=\'heart-1\']').should('be.visible');
  });

  it('should render correctly when selected', () => {
    cy.mount('<app-heart [testId]="\'heart-1\'" [selected]="true"></app-heart>', {
      declarations: [HeartComponent],
    });
    cy.get('[id=\'heart-1\']').should('be.visible');
    cy.get('[id=\'heart-1\']').should('have.class', 'heart-selected');
  });
});

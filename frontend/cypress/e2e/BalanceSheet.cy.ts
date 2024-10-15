describe('Balance sheet report', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3002/');
  });

  it('should display balance sheet data in tables', () => {
    cy.get('h2').contains('Balance Sheet');

    cy.get('table tr').should('have.length.at.least', 1);
    cy.get('table div[class="text-lg font-extrabold"]').contains('Assets');
    cy.get('table div[class="text-lg font-extrabold"]').contains('Liabilities');

    cy.get('table th[class="text-left text-lg"]').contains('Bank');
    cy.get('table th[class="text-left text-lg"]').contains('Current Assets');
    cy.get('table th[class="text-left text-lg"]').contains('Fixed Assets');
    cy.get('table th[class="text-left text-lg"]').contains('Non-current Assets');
    cy.get('table th[class="text-left text-lg"]').contains('Current Liabilities');
    cy.get('table th[class="text-left text-lg"]').contains('Non-Current Liabilities');
    cy.get('table th[class="text-left text-lg"]').contains('Equity');

    cy.get('table td[class="w-1/2"]').contains('My Bank Account');
    cy.get('table td[class="w-1/2"]').contains('Accounts Receivable');
    cy.get('table td[class="w-1/2"]').contains('Office Equipment');
    cy.get('table td[class="w-1/2"]').contains('Long Term Director Loan');
    cy.get('table td[class="w-1/2"]').contains('Accounts Payable');
    cy.get('table td[class="w-1/2"]').contains('Loan');
    cy.get('table td[class="w-1/2"]').contains('Current Year Earnings');

    cy.get('table td[class="w-1/2"]').contains('Total Bank');
    cy.get('table td[class="w-1/2"]').contains('Total Current Assets');
    cy.get('table td[class="w-1/2"]').contains('Total Fixed Assets');
    cy.get('table td[class="w-1/2"]').contains('Total Non-current Assets');
    cy.get('table td[class="w-1/2"]').contains('Total Assets');
    cy.get('table td[class="w-1/2"]').contains('Total Non-Current Liabilities');
    cy.get('table td[class="w-1/2"]').contains('Total Liabilities');
    cy.get('table td[class="w-1/2"]').contains('Net Assets');
    cy.get('table td[class="w-1/2"]').contains('Total Equity');
  });

  it('should hide/show details after checking/unchecking the "Hide All Details" checkbox', () => {
    cy.get('table td[class="w-1/2"]').contains('My Bank Account');
    cy.get('table td[class="w-1/2"]').contains('Accounts Receivable');
    cy.get('table td[class="w-1/2"]').contains('Office Equipment');
    cy.get('table td[class="w-1/2"]').contains('Long Term Director Loan');
    cy.get('table td[class="w-1/2"]').contains('Accounts Payable');
    cy.get('table td[class="w-1/2"]').contains('Loan');
    cy.get('table td[class="w-1/2"]').contains('Current Year Earnings');

    cy.get('input[type="checkbox"').first().click();

    cy.get('table td[class="w-1/2"]').should('not.include.text', 'My Bank Account');
    cy.get('table td[class="w-1/2"]').should('not.include.text', 'Accounts Receivable');
    cy.get('table td[class="w-1/2"]').should('not.include.text', 'Office Equipment');
    cy.get('table td[class="w-1/2"]').should('not.include.text', 'Long Term Director Loan');
    cy.get('table td[class="w-1/2"]').should('not.include.text', 'Accounts Payable');
    cy.get('table td[class="w-1/2"]').should('not.include.text', 'Loan');
    cy.get('table td[class="w-1/2"]').should('not.include.text', 'Current Year Earnings');

    cy.get('input[type="checkbox"').first().click();

    cy.get('table td[class="w-1/2"]').contains('My Bank Account');
    cy.get('table td[class="w-1/2"]').contains('Accounts Receivable');
    cy.get('table td[class="w-1/2"]').contains('Office Equipment');
    cy.get('table td[class="w-1/2"]').contains('Long Term Director Loan');
    cy.get('table td[class="w-1/2"]').contains('Accounts Payable');
    cy.get('table td[class="w-1/2"]').contains('Loan');
    cy.get('table td[class="w-1/2"]').contains('Current Year Earnings');
  });

  it('should hide/show details after clicking the "⯅ Hide Details" and "⯆ Show Details" text', () => {
    cy.get('table td[class="w-1/2"]').contains('My Bank Account');
    cy.get('table td[class="w-1/2"]').contains('Sample Business');
    cy.get('table td[class="w-1/2"]').contains('Sample Business 1');

    cy.get('span').contains('⯅ Hide Details').first().click();

    cy.get('table td[class="w-1/2"]').should('not.include.text', 'My Bank Account');
    cy.get('table td[class="w-1/2"]').should('not.include.text', 'Sample Business');
    cy.get('table td[class="w-1/2"]').should('not.include.text', 'Sample Business 1');

    cy.get('span').contains('⯆ Show Details').first().click();

    cy.get('table td[class="w-1/2"]').contains('My Bank Account');
    cy.get('table td[class="w-1/2"]').contains('Sample Business');
    cy.get('table td[class="w-1/2"]').contains('Sample Business 1');
  });
});

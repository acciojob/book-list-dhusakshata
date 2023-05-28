//your JS code here. If required.
cy.get('#book-list').find('tr').eq(1).find('td').eq(2).should('contain', '2');

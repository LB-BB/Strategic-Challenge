const JSDOM = require('jsdom')

describe('Customer Table', function () {
  beforeEach(() => {
    return new JSDOM('index.html')
      .then((dom) => {
        global.window = dom.window;
        global.document = window.document;
      });
  });
  
  describe('Table Render', () => {
    test('render a table to the document', () => {
      const table = page.getElementsByTagName('table');
      expect(table).not.toBeNull();
    });
    test('append 5 headings to the table', () => {
      const headers = document.getElementsByTagName('th')
      expect(headers.length).toEqual(5)
    })
    test('append 10 rows of data to the table', () => {})
    test('totals row contains the sum of all balances', () => {})
    test('add row button adds a new row to the table', () => {})
    test('delete row button removes a row from the table', () => {})
    test('a checkbox exists for every row in the table', () => {})
    test('total row count displays the number of rows in the table', () => {})
    test('checked row count displays the number of rows that are checked', () => {})
  })
  
  describe('Add and remove debt functionality', () => {
    test('addDebt adds a row to the table', () => {})
    test('removeDebt removes a row from the table', () => {})
  })
  
  describe('Checkboxes and totals', () => {
    test('there are the same number of check boxes as table rows after clicking one of the buttons', () => {})
    test('total row count displays 10 rows to start', () => {})
    test('total row count updates when a new row is added', () => {})
    test('checked row count displays 10 rows to start', () => {})
    test('checked row count updates when a box is unchecked', () => {})
    test('total balance is displayed with the sum of the original 10 rows', () => {})
    test('total balance updates when a row is added', () => {})
  })
})

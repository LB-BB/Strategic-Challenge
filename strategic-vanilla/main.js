const headers = [
  'Creditor',
  'First Name',
  'Last Name',
  'Min Pay %',
  'Balance'
]

const sampleRow =  {
  creditorName: 'TestCreditor',
  firstName: 'Test',
  lastName: 'Tester100',
  minPaymentPercentage: 1.00,
  balance: 1000.00
}

const loadIntoTable = async (url, domElement) => {
  const tableHead = domElement.querySelector('thead')
  const tableBody = domElement.querySelector('tbody')

  const response = await fetch(url)
  console.log('The code is working...')
  const data = await response.json()

  tableHead.innerHTML = '<tr></tr>'
  tableBody.innerHTML = ''

  headers.map(header => {
    const headerElement = document.createElement('th')
    headerElement.textContent = header
    tableHead.querySelector('tr').appendChild(headerElement)
  })

  data.map(customerItem => {
    const rowElement = document.createElement('tr')
    rowElement.id = customerItem.id
    const creditor = document.createElement('td')
    creditor.className = 'creditor'
    creditor.innerText = customerItem.creditorName
    rowElement.appendChild(creditor)
    const firstName = document.createElement('td')
    firstName.className = 'first-name'
    firstName.innerText = customerItem.firstName
    rowElement.appendChild(firstName)
    const lastName = document.createElement('td')
    lastName.className = 'last-name'
    lastName.innerText = customerItem.lastName
    rowElement.appendChild(lastName)
    const minPaymentPercentage = document.createElement('td')
    minPaymentPercentage.className = 'min-payment-percentage'
    minPaymentPercentage.innerText = customerItem.minPaymentPercentage
    rowElement.appendChild(minPaymentPercentage)
    const balance = document.createElement('td')
    balance.className = 'balance'
    balance.innerText = customerItem.balance
    rowElement.appendChild(balance)
    tableBody.appendChild(rowElement)
  })
}

loadIntoTable('https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json', document.querySelector('table'))

const clickToAdd = () => {
  const tableBody = document.querySelector('tbody')
  const rowElement = document.createElement('tr')
  for (let property in sampleRow) {
    const cellElement = document.createElement('td')
    cellElement.textContent = sampleRow[property]
    rowElement.appendChild(cellElement)
  }
  tableBody.appendChild(rowElement)
}

const clickToDelete = () => {
  const tableBody = document.querySelector('tbody')
  const lastRow = tableBody.childNodes[tableBody.childNodes.length - 1]
  tableBody.removeChild(lastRow)
}

const getAllBalance = () => {
  const balances = document.querySelector('balance')
}
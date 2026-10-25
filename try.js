import { getAllRegistrations, addRegistration } from './data.js'

const before = await getAllRegistrations()
console.log('Before:', before)

await addRegistration({ name: 'Kia Ora', contact: '022 111 2222', email: 'kia@example.com' })

const after = await getAllRegistrations()
console.log('After:', after)

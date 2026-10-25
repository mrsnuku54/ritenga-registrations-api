import fs from 'node:fs/promises'
import path from 'node:path'

const filePath = path.join(import.meta.dirname, 'registrations.json')

export async function getAllRegistrations() {
  const text = await fs.readFile(filePath, 'utf-8')
  const registrations = JSON.parse(text)
  return registrations
}

export async function addRegistration(newPerson) {
  const registrations = await getAllRegistrations()
  newPerson.id = registrations.length + 1
  registrations.push(newPerson)
  const text = JSON.stringify(registrations, null, 2)
  await fs.writeFile(filePath, text, 'utf-8')
  return newPerson
}

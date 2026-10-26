import express from 'express'
import { getAllRegistrations, addRegistration, deleteRegistration } from './data.js'

const server = express()
server.use(express.json())

// GET: return all registrations as JSON
server.get('/api/v1/registrations', async (req, res) => {
  const registrations = await getAllRegistrations()
  res.json(registrations)
})

// POST: add a new registration
server.post('/api/v1/registrations', async (req, res) => {
  const newPerson = await addRegistration(req.body)
  res.status(201).json(newPerson)
})

// DELETE: remove a registration by id
server.delete('/api/v1/registrations/:id', async (req, res) => {
  const id = Number(req.params.id)
  await deleteRegistration(id)
  res.json({ message: 'Registration deleted' })
})

export default server

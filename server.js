const express = require('express')
const fs = require('fs')
const cors = require('cors')

const app = express()

const DB = require('./db.json')

app.use(express.json())
app.use(cors())

const PORT = 3001

app.get('/api/v1/todos', (_, res) => {
  res.status(200).json(DB)
})

app.post('/api/v1/todos', (req, res) => {
  const { title, text = '' } = req.body

  if (!title.trim().length) {
    return res.status(400).json({ status: 400, message: 'Поле title пустое' })
  }

  const todoId = `${Math.round(Date.now() + Math.random() * 100000)}`
  const todo = {
    id: todoId,
    title,
    text,
    status: 'to_do',
    isAttach: false,
  }

  fs.readFile('./db.json', 'utf-8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла: ', err)
      return res.status(500).json({ status: 500 })
    }

    const todos = JSON.parse(data)

    todos.push(todo)

    fs.writeFile('./db.json', JSON.stringify(todos), (err) => {
      if (err) {
        console.error('Ошибка записи файла: ', err)
        return res.status(500).json({ status: 500 })
      }
      console.log('Добавлена todo с id = ', todoId)
      res
        .status(201)
        .json({ status: 201, message: 'Добавлена todo', data: todo })
    })
  })
})

app.delete('/api/v1/todos/:todo_id', (req, res) => {
  const { todo_id } = req.params

  fs.readFile('./db.json', 'utf-8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла: ', err)
      return res.status(500).json({ status: 500 })
    }

    const todos = JSON.parse(data)

    todos.filter(({ id }) => id !== todo_id)

    const todo = todos.find(({ id }) => id === todo_id)

    fs.writeFile('./db.json', JSON.stringify(todos), (err) => {
      if (err) {
        console.error('Ошибка записи файла: ', err)
        return res.status(500).json({ status: 500 })
      }
      console.log('Изменена todo с id = ', todo_id)
      res.status(201).json({ status: true, data: todo })
    })
  })
})

app.listen(PORT, () => {
  console.log(`Server listen ${PORT} port`)
})

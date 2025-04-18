const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://juan19617:${password}@cluster0.krp0krd.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is easy',
  important: true,
})

Note.find({}).then(result => {
    result.forEach(puntero => {
      console.log(puntero)
    })
    mongoose.connection.close()
  })

/* note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
}) */
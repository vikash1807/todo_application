const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vikash2024:Vikash2024@cluster0.dib0h.mongodb.net/todo-app');

//schema
const TodosSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const Todos = mongoose.model('Todos', TodosSchema);

module.exports = {
    Todos
}

//model
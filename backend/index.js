const express = require('express')
const cors = require('cors')
const {createTodo, updateTodo} = require('./type');
const { ParseStatus } = require('zod');
const { Todos } = require('./db/index');

const app = express();

app.use(cors())
app.use(express.json());

app.post('/todo', async (req,res) => {
    const payload = req.body;
    const parsedpayload = createTodo.safeParse(payload);
    if(!parsedpayload.success) { 
        res.status(403).json({
            message : 'wrong inputs'
        })
    } 
    await Todos.create({
        title : payload.title,
        description : payload.description,
        completed : false
    });
    res.json({msg : 'Added a todo'});
});

app.put('/completed', async (req,res) =>{
    const parsedpayload = updateTodo.safeParse(req.body);
    if(!parsedpayload.success) {
        res.status(403).json('wrong input');
    }
    await Todos.updateOne({
        _id : req.body.id
    }, {
        completed : true
    });
    res.json('Todo marked as done')
});

app.get('/todos', async (req,res) => {
    const allTodos = await Todos.find();
    res.json({allTodos : allTodos});
});


app.listen(3000, () => {
    console.log('server running at port 3000');
})
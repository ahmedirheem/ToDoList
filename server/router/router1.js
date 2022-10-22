const {home, completed, notCompleted, add} = require('../controllers')

app.get('/', home)

app.get('/add', add)

app.get('/completed', completed)

app.get('/notcompleted', notCompleted)

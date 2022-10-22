const {home, completed, notCompleted} = require('../controllers')

app.get('/', home)

app.get('/completed', completed)

app.get('/notcompleted', notCompleted)

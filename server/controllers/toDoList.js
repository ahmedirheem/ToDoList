let home = (req, res)=>{

}

let completed = (req, res)=>{
    let tasks = []
    let task = {
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        checked: false
    }
}

let notCompleted = (req, res)=>{
    
}

module.exports = {home, completed, notCompleted}

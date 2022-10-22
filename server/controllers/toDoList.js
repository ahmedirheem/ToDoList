let home = (req, res)=>{

}

let add = (req, res)=>{
    const {title,description,date,checked} = req.body;
    let task = {
        title: title,
        description: description,
        date: date,
        checked:checked
    }
}

let completed = (req, res)=>{

}

let notCompleted = (req, res)=>{
    
}

module.exports = {home, completed, notCompleted, add}

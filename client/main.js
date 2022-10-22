const outerAddButton=document.querySelector('.container .add');
const AddContainer=document.querySelector('.add-task');
const innerAddButton=document.querySelector('.add-task .Add-task-inner');
const titleInput=document.querySelector('.add-task .title');
const descInput=document.querySelector('.add-task .desc');
const dateInput=document.querySelector('.add-task .date');

outerAddButton.addEventListener('click',()=>{
    AddContainer.classList.add('active');
});
innerAddButton.addEventListener('click',()=>{
    AddContainer.classList.remove('active');
    let data={
        title:titleInput.value,
        description:descInput.value,
        date:dateInput.value,
        checked:false
    }
    fetch(`http://localhost:5000/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
});

let form=document.querySelector('#my-form');
let ul=document.querySelector('#expenses');

form.addEventListener('submit',add);
ul.addEventListener('click',removelist);
showall();

function showall(){
    axios.get("http://localhost:4000/expense")
    .then((response)=>{console.log(response) 
     
        for(let i=0;i<response.data.length;i++){
        let obj=response.data[i];
        shownew(obj);
}
})
    .catch((err)=>{console.log(err)})
}

function shownew(obj){
  
    let str=obj.amount+'-'+obj.description+'-'+obj.type;
    
let ul=document.querySelector('#expenses');
let li=document.createElement('li');
li.id=obj.id;
let button1=document.createElement('button');
li.appendChild(document.createTextNode(str));
let btn=document.createElement('button');
btn.style.backgroundColor='red';
btn.appendChild(document.createTextNode('Delete'));
btn.className='delete';

let btn2=document.createElement('button');
btn2.style.backgroundColor='gray';
btn2.appendChild(document.createTextNode('Edit'));
btn2.className='edit';

li.appendChild(btn2);   
li.appendChild(btn);
ul.appendChild(li); 
}





function add(e){
    e.preventDefault();
    
    let amt=document.querySelector('#expense_amount');
    let desc=document.querySelector('#expense_desc');
    let typ=document.querySelector('#type');
    let obj={
        amount:amt.value,
        description:desc.value,
        type:typ.value,
    }
    axios.post("http://localhost:4000/expense",obj)
    .then((response)=>{console.log(response) 
    shownewuser(obj)})
    .catch((err)=>{console.log(err)})

shownew(obj);


}

function removelist(e){
    e.preventDefault();
    let ul=document.querySelector('#expenses');
    if(e.target.classList.contains('delete')|| e.target.classList.contains('edit')){
        console.log(e.target.parentElement);
        

        

        axios.get("http://localhost:4000/expense/"+e.target.parentElement.id)
        .then((response)=>{console.log(response) 
         
            for(let i=0;i<response.data.length;i++){
            let obj=response.data[i];
           
    }
    })
        .catch((err)=>{console.log(err)})

        
    }
}
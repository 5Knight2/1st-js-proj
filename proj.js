let form=document.querySelector('#my-form');
let ul=document.querySelector('#expenses');
for(let i=0;i<localStorage.length;i++){
    let obj=JSON.parse(localStorage.getItem(localStorage.key(i)));
            let str=obj.amount+'-'+obj.description+'-'+obj.type;
            
let ul=document.querySelector('#expenses');
let li=document.createElement('li');
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


form.addEventListener('submit',add);
ul.addEventListener('click',removelist);

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
    let serialized=JSON.stringify(obj);
localStorage.setItem(localStorage.length+1,serialized);

let ul=document.querySelector('#expenses');
let li=document.createElement('li');
let button1=document.createElement('button');
li.appendChild(document.createTextNode(amt.value+'-'+desc.value+'-'+typ.value));
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

function removelist(e){
    e.preventDefault();
    let ul=document.querySelector('#expenses');
    if(e.target.classList.contains('delete')|| e.target.classList.contains('edit')){
        console.log(e.target.parentElement);
        

        for(let i=0;i<localStorage.length;i++){
            let obj=JSON.parse(localStorage.getItem(localStorage.key(i)));
            let str=obj.amount+'-'+obj.description+'-'+obj.type;
            
            let str2=e.target.parentElement.textContent;
            str2=str2.substring(0,str2.length-10);
           
            if(str==str2){
                localStorage.removeItem(localStorage.key(i));
                ul.removeChild(e.target.parentElement);

                console.log(e.target.textContent);
                if(e.target.textContent=='Edit'){
                    let amt=document.querySelector('#expense_amount');
                    let desc=document.querySelector('#expense_desc');
                    let typ=document.querySelector('#type');
              
                amt.value=obj.amount;
                
                desc.value=obj.description;
                
                typ.value=obj.type;
                }
                
            }
        }

        
    }
}
update=()=>{
    if(localStorage.getItem("Listitem")==null || JSON.parse(localStorage.getItem('Listitem')).length == 0){
        document.getElementById('tbody').innerHTML= "<h2>List is empty</h2>";
    }
    else{
        parseobject=JSON.parse(localStorage.getItem("Listitem"))
        mystr=""
        parseobject.forEach((element,index) => {
            mystr+=`
            <tr>
            <th scope="row">${index+1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            
            <td><button type="submit" class="btn btn-primary" onclick="deleted(${index})">Delete</button></td>
            </tr>`    
        });
        document.getElementById('tbody').innerHTML=mystr;
    } }  
    update()
    deleted = (index)=>{
        jsonobj = JSON.parse(localStorage.getItem('Listitem'));
        jsonobj.splice(index,1);
        localStorage.setItem('Listitem',JSON.stringify(jsonobj))
        update()
    }
    tobeclear = document.getElementById('cleared');
    tobeclear.addEventListener('click',()=>{
        localStorage.clear();
        update()
    })
list=document.getElementById("add-list");
list.addEventListener('click',()=>{
let tit=document.getElementById("title").value;
let des=document.getElementById("Description").value;
document.getElementById("title").value=""
document.getElementById("Description").value=""
if(localStorage.getItem("Listitem") == null){
iteamjsonarray=[];
iteamjsonarray.push([tit,des]);
localStorage.setItem("Listitem",JSON.stringify(iteamjsonarray));
}
else{
parseobject=JSON.parse(localStorage.getItem("Listitem"))
parseobject.push([tit,des])
localStorage.setItem("Listitem",JSON.stringify(parseobject))
}
myarr=JSON.parse(localStorage.getItem("Listitem"))
let str=""
myarr.forEach((element,index) => {
    str+=`
    <tr>
    <th scope="row">${index+1}</th>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td><button type="submit" class="btn btn-primary" onclick="deleted(${index})">Delete</button></td>
</tr>`;    
});
document.getElementById("tbody").innerHTML=str;
})
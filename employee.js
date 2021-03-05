function EmployeeData(){

    fetch("http://localhost:8043/employee/")
    .then(response =>{
    return response.json();
    })
    .then(data =>{
        console.log(data);
       let emd = data.map(user =>{
       
           let x =`
           <tr>
           <td> ${user.id}</td>
           <td>${user.firstName}</td>
           <td>${user.lastName}</td>
           <td> ${user.age}</td>
           <td>${user.workM}</td>
           <td>${user.basicSalary}</td>
           <td>${user.netSalary}</td>
           <td> <button class="button1">Edit</button></td>
           <td><button class="button2" >Delete</button> </td>
           </tr>`
           return x
       })
    
        document.querySelector("#employeeTable")
        .insertAdjacentHTML("afterend",
        emd);
        
    
     })
    .catch(error =>{
        console.log(error);
    })  
}

EmployeeData();
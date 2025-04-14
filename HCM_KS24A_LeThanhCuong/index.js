let studentList=[
    {
        name:"Lê thanh cường",
        id:"SV001",
        email:"cuong@gmail.com",
        class:"HCM_KS24A"
    },
    {
        name:"Bùi thị chè",
        id:"SV002",
        email:"che@gmail.com",
        class:"HCM_KS24A"
    },
]
let check=-1;
let checkSearch=-1;
function render(){
    let list=document.getElementById("list")
    if(checkSearch===-1 && !isNaN(checkSearch)){
        let data=``
    for(let i=0;i<studentList.length;i++){
        data+=` <tr>
                            <th>${studentList[i].name}</th>
                            <td>${studentList[i].id}</td>
                            <td>${studentList[i].email}</td>
                            <td>${studentList[i].class}</td>
                            <td>
                                <button onclick="change(${i})" type="button" class="btn btn-success">Sửa</button>
                                <button onclick="dele(${i})" type="button" class="btn btn-danger">Xóa</button>
                            </td>
                        </tr>`
    }
    list.innerHTML=data
    }else{
        let data=``
        for(let i=0;i<studentList.length;i++){
            if(studentList[i].name.toUpperCase().includes(checkSearch.toUpperCase())){
                data+=` <tr>
                                <th>${studentList[i].name}</th>
                                <td>${studentList[i].id}</td>
                                <td>${studentList[i].email}</td>
                                <td>${studentList[i].class}</td>
                                <td>
                                    <button onclick="change(${i})" type="button" class="btn btn-success">Sửa</button>
                                    <button onclick="dele(${i})" type="button" class="btn btn-danger">Xóa</button>
                                </td>
                            </tr>`
            }
        }
        list.innerHTML=data
        render()
     checkSearch=-1
    }
}
render()
function add(e){
    e.preventDefault()
    checkSearch=-1
    let temp={
        name: e.target.name.value,
        id: e.target.id.value,
        email: e.target.email.value,
        class: e.target.class.value,
    }
    if(check===-1){
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let warningName=document.getElementById("warningName")
        let warningId=document.getElementById("warningId")
        let warningEmail=document.getElementById("warningEmail")
        let warningClass=document.getElementById("warningClass")
        if(!temp.name){
            warningName.innerText="Họ tên không được để trống"
            warningName.style.color="red"
           
            return
        }else if(!temp.id){
            warningId.innerText="Mã số sinh viên không được để trống"
            warningId.style.color="red"
           
            return 
        }else if(!temp.email){
            warningEmail.innerText="Email sinh viên không được để trống"
            warningEmail.style.color="red"
            return
        }else if(!emailRegex.test(temp.email)){
            warningEmail.innerText="Email không hợp lệ"
            warningEmail.style.color="red"
            return
        }else if(!temp.class){
            warningClass.innerText="Lớp không được để trống"
            warningClass.style.color="red"
            return 
        }
         warningName.innerText=""
         warningId.innerText=""
         warningEmail.innerText=""
         warningClass.innerText=""
        e.target.reset()
        alert("thêm thành công")
        studentList.push(temp)
    }else{
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let warningName=document.getElementById("warningName")
        let warningId=document.getElementById("warningId")
        let warningEmail=document.getElementById("warningEmail")
        let warningClass=document.getElementById("warningClass")
        if(!temp.name){
            warningName.innerText="Họ tên không được để trống"
            warningName.style.color="red"
           
            return
        }else if(!temp.id){
            warningId.innerText="Mã số sinh viên không được để trống"
            warningId.style.color="red"
           
            return 
        }else if(!temp.email){
            warningEmail.innerText="Email sinh viên không được để trống"
            warningEmail.style.color="red"
            return
        }else if(!emailRegex.test(temp.email)){
            warningEmail.innerText="Email không hợp lệ"
            warningEmail.style.color="red"
            return
        }else if(!temp.class){
            warningClass.innerText="Lớp không được để trống"
            warningClass.style.color="red"
            return 
        }
         warningName.innerText=""
         warningId.innerText=""
         warningEmail.innerText=""
         warningClass.innerText=""
        studentList[check].name = document.getElementById("name").value
        studentList[check].id = document.getElementById("id").value
        studentList[check].email = document.getElementById("email").value
        studentList[check].class = document.getElementById("class").value
        alert("sửa thành công")
        e.target.reset();
        check = -1
    }
    render()
}
function dele(index){
    if(!(confirm("bạn có chắc chắn xóa không?"))){
        return
    }
    alert("xóa thành công")
    studentList.splice(index,1);
    render()
}
function change(index){
    document.getElementById("name").value = studentList[index].name
    document.getElementById("id").value = studentList[index].id
    document.getElementById("email").value = studentList[index].email
    document.getElementById("class").value = studentList[index].class
    check = index;
}
function searchStudents(e){
    e.preventDefault()
    checkSearch=e.target.search.value
    render()  
}

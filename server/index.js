const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const e = require('express');

const port = 8000;

app.use(bodyParser.json());

let users = [];
let counter = 1 

// path = GET /users สำหรับ get user ทั้งหมดที่บันทีกไว้
app.get('/users', (req, res) => {
    res.json(users);
});

// path = POST /user ใช้สำหรับการสร้างข้อมูล user ใหม่บันทึกเข้าไป
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter //เพิ่ม id ให้ user
    counter += 1
    users.push(user);//เพิ่ม user ใหม่เข้าไปใน array
    res.json({
        message: 'Create new user successfully',
        user : user
    });
})
// path:PUT /user/:id ใช้สำหรับเเก้ไขข้อมูล user โดยใช้ id เป็นตัวระบุ
// get post put ใช้ได้หมด
app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    // หา user ทีจาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id );
    // เเก้ไขข้อมูล user ที่หาเจอ
    if(updateUser.firstname){
        users[selectedIndex].firstname = updateUser.firstname;
    }
    if(updateUser.lastname){
        users[selectedIndex].lastname = updateUser.lastname;
    }
    res.json({
        message: 'Update user successfully',
        data:{
            user: updateUser,
            indexUpdated : selectedIndex
        }
    })  
})
//path: DELETE /user/:id ใช้สำหรับลบข้อมูล user โดยใช้ id เป็นตัวระบุ
app.delete('/user/:id', (req, res) => {
    let id = req.params.id;
    //หา index ของ user ที่ต้องการลบ
    let selectedIndex = users.findIndex(user => user.id == id);

    //ลบ user ที่เจอ
    users.splice(selectedIndex, 1);
    res.json({
        message: 'Delete user successfully',
        indexDeleted: selectedIndex
    })
 })
app.listen(port, (req,res) => {
    console.log('Http Server is running on port' +port);
});

//cd change directory
//ls list
//pwd print working directory
// cd.. กลับไปที่ directory ก่อนหน้า go back 
// exit ออกจาก terminal
//docker stop <container id> หยุด container
//docker system prune -a ลบ container ทั้งหมด
//docker -compose up รัน container
//docker-compose down หยุด container
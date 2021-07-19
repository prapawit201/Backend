const db = require('monk')('localhost:27017/ToturialDB'); //! connect port DB in MongoDB

exports.getRegister = (req, res, next) => {

    res.render('addblog');

}

exports.postRegister = (req, res, next) => {

    const result = validationResult(req);//!เช็คว่าถ้ามีสิ่งปกติผิดพลาดจะขึ้นerror
    var errors = result.errors;
    if (!result.isEmpty()) {
        res.render('addblog', { errors: errors }) //!ถ้าerrorให้ไปเเสดงข้อความที่หน้า addblog ด้วยตัว errors
    } else {
        //! Insert to DB
        var ct = db.get('blogs');
        ct.insert({
            name: req.body.name,
            description: req.body.description,
            author: req.body.author
        }, function (err, blog) { //!เช็คค่า insert ถ้าเกิด error ให้ทำอะไร
            if (err) {//!ถ้า error ให้ส่ง ค่า error เเสดงผล
                res.send(err);
            } else { //!ถ้าไม่ error ให้กลับมาที่หน้าเดิม
                req.flash("error", "บันทึกบทความเรียบร้อยเเล้ว");//!มีการ alert ถ้าบันทึกเสร็จเเล้ว โดยะไปเสดงใน addblog.ejs
                res.location('/blog/add');
                res.redirect('/blog/add');
            }
        })

    }
}
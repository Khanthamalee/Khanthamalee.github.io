"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finddepartment = void 0;
function Finddepartment(name, alldata) {
    console.log(name);
    var Departmentdata = new Array();
    var Department = {};
    var Departmenttype = new Object();
    var listdata = alldata.filter(function (e) {
        return e["company"]["department"] == name;
    });
    Departmentdata.push(listdata);
    //จัดเรียง gender and ageRange
    var malearray = new Array();
    var femalearray = new Array();
    var agearray = new Array();
    var colorhairSet = new Set();
    for (var a in Departmentdata[0]) {
        //จัดเรียง gender
        var gender = Departmentdata[0][a]["gender"];
        if (gender == "male") {
            malearray.push(gender);
        }
        else if (gender == "female") {
            femalearray.push(gender);
        }
        //จัดเรียง ageRange
        var age = Departmentdata[0][a]["age"];
        agearray.push(age);
        //หาว่ามีสีผมกี่แบบแล้วบันทึกใน set
        colorhairSet.add(Departmentdata[0][a]["hair"]["color"]);
    }
    console.log(colorhairSet);
    var malenum = malearray.length;
    var femalenum = femalearray.length;
    var ageRange = "".concat(Math.min.apply(null, agearray), "-").concat(Math.max.apply(null, agearray));
    //จัดเรียง hair color
    var colorhairarray = Array.from(colorhairSet);
    var colorhairobj = {};
    for (var c in colorhairarray) {
        console.log(countcolor(colorhairarray[c]));
    }
    function countcolor(color) {
        var count = 0;
        for (var e in Departmentdata[0]) {
            var colorhair = Departmentdata[0][e]["hair"]["color"];
            if (colorhair == color) {
                colorhairobj["".concat(colorhair)] = count + 1;
                count = count + 1;
            }
        }
        return colorhairobj;
    }
    //จัดเรียง AddressUser
    var AddressUser = new Object();
    for (var b in Departmentdata[0]) {
        AddressUser["".concat(Departmentdata[0][b]["firstName"]).concat(Departmentdata[0][b]["lastName"])] = Departmentdata[0][b]["address"]["postalCode"];
    }
    Departmenttype["".concat(name)] = Department;
    Department.male = malenum;
    Department.female = femalenum;
    Department.ageRange = ageRange;
    Department.hair = colorhairobj;
    Department.AddressUser = AddressUser;
    // console.log(`Department`)
    // console.log(Department)
    // console.log(Departmenttype)
    return Departmenttype;
}
exports.Finddepartment = Finddepartment;

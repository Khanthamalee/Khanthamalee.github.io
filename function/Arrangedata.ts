function Finddepartment(name:string,alldata:[]) {
    console.log(name)
    const Departmentdata = new Array();
    const Department:any = {};
    const Departmenttype:any = new Object();
    let listdata =  alldata.filter((e)=>
        e["company"]["department"]==name     
    );
    Departmentdata.push(listdata)

    //จัดเรียง gender and ageRange
    let  malearray   = new Array();
    let  femalearray  = new Array();
    let  agearray  = new Array();
    let  colorhairSet  = new Set();
    for(let a in Departmentdata[0]){
        //จัดเรียง gender
        let gender = Departmentdata[0][a]["gender"]
        if(gender == "male"){
            malearray.push(gender) 
        }else if (gender == "female"){
            femalearray.push(gender)
        }
        //จัดเรียง ageRange
        let age = Departmentdata[0][a]["age"]
        agearray.push(age)

        //หาว่ามีสีผมกี่แบบแล้วบันทึกใน set
        colorhairSet.add(Departmentdata[0][a]["hair"]["color"])
    }

    console.log(colorhairSet);
    const malenum = malearray.length
    const femalenum = femalearray.length
    const ageRange = `${Math.min.apply(null,agearray)}-${Math.max.apply(null,agearray)}`

    //จัดเรียง hair color
    const colorhairarray:any  =  Array.from(colorhairSet);
    let colorhairobj : any  = {};
    for (var c in colorhairarray){
        console.log(countcolor(colorhairarray[c]))
    }
    function countcolor( color:string ){
        let count = 0
        for(var e in Departmentdata[0]){
            let colorhair = Departmentdata[0][e]["hair"]["color"]
            if(colorhair==color){
                colorhairobj[`${colorhair}`] = count+1
                count=count+1
            }  
        }
        return colorhairobj;  
    }

    //จัดเรียง AddressUser
    const AddressUser:any = new Object();
    for (var b in Departmentdata[0]){
        AddressUser[`${Departmentdata[0][b]["firstName"]}${Departmentdata[0][b]["lastName"]}`] = Departmentdata[0][b]["address"]["postalCode"]        
    }
    Departmenttype[`${name}`] = Department
    Department.male = malenum
    Department.female = femalenum
    Department.ageRange = ageRange
    Department.hair = colorhairobj
    Department.AddressUser = AddressUser
    
    // console.log(`Department`)
    // console.log(Department)
    // console.log(Departmenttype)
    return Departmenttype;
}

export {Finddepartment};
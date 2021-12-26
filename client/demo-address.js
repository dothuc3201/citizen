var khaibao2Btn = document.getElementById("khaibaothongtincongdan");
var danhsach2Btn = document.getElementById("danhsachnguoidan");
var themtaikhoan2Btn = document.getElementById("themtaikhoan");
var khaibaocapma2Btn = document.getElementById("khaibaocapma");
var phantichdanso2Btn = document.getElementById("phantichdanso");
khaibao2Btn.style.display = "none";
themtaikhoan2Btn.style.display = "none";
danhsach2Btn.style.display = "none";
khaibaocapma2Btn.style.display = "none";
phantichdanso2Btn.style.display = "block";


function dashboard() {
    var khaibaoBtn = document.getElementById("khaibaothongtincongdan");
    var danhsachBtn = document.getElementById("danhsachnguoidan");
    var themtaikhoanBtn = document.getElementById("themtaikhoan");
    var khaibaocapmaBtn = document.getElementById("khaibaocapma");
    var phantichdansoBtn = document.getElementById("phantichdanso");
    khaibaoBtn.style.display = "none";
    themtaikhoanBtn.style.display = "none";
    danhsachBtn.style.display = "none";
    khaibaocapmaBtn.style.display = "none";
    phantichdansoBtn.style.display = "block";
    bieudodanso();

}

function thongkedanso() {
    var khaibaoBtn = document.getElementById("khaibaothongtincongdan");
    var danhsachBtn = document.getElementById("danhsachnguoidan");
    var themtaikhoanBtn = document.getElementById("themtaikhoan");
    var khaibaocapmaBtn = document.getElementById("khaibaocapma");
    var phantichdansoBtn = document.getElementById("phantichdanso");
    var main = document.getElementsByTagName("main");
    // document.getElementById("danhsachnguoidan").style.visibility = "visible";
    // document.getElementById("khaibaothongtincongdan").style.visibility = "hidden";
    // document.getElementById("themtaikhoan").style.visibility = "hidden";

    khaibaoBtn.style.display = "none";
    themtaikhoanBtn.style.display = "none";
    khaibaocapmaBtn.style.display = "none";
    phantichdansoBtn.style.display = "none";
    danhsachBtn.style.display = "block";
    
    // khaibaoBtn.remove();
    // themtaikhoanBtn.remove();
    // danhsachBtn.remove();

}

function khaibao() {
    var khaibaoBtn = document.getElementById("khaibaothongtincongdan");
    var danhsachBtn = document.getElementById("danhsachnguoidan");
    var themtaikhoanBtn = document.getElementById("themtaikhoan");
    var khaibaocapmaBtn = document.getElementById("khaibaocapma");
    var phantichdansoBtn = document.getElementById("phantichdanso");
    danhsachBtn.style.display = "none";
    themtaikhoanBtn.style.display = "none";
    khaibaocapmaBtn.style.display = "none";
    phantichdansoBtn.style.display = "none";
    khaibaoBtn.style.display = "block";
}

function quanlycapduoi() {
    var khaibaoBtn = document.getElementById("khaibaothongtincongdan");
    var danhsachBtn = document.getElementById("danhsachnguoidan");
    var themtaikhoanBtn = document.getElementById("themtaikhoan");
    var khaibaocapmaBtn = document.getElementById("khaibaocapma");
    var phantichdansoBtn = document.getElementById("phantichdanso");
    danhsachBtn.style.display = "none";
    khaibaoBtn.style.display = "none";
    khaibaocapmaBtn.style.display = "none";
    phantichdansoBtn.style.display = "none";
    themtaikhoanBtn.style.display = "block";

}

function khaibaovacapma() {
    var khaibaoBtn = document.getElementById("khaibaothongtincongdan");
    var danhsachBtn = document.getElementById("danhsachnguoidan");
    var themtaikhoanBtn = document.getElementById("themtaikhoan");
    var khaibaocapmaBtn = document.getElementById("khaibaocapma");
    var phantichdansoBtn = document.getElementById("phantichdanso");
    danhsachBtn.style.display = "none";
    khaibaoBtn.style.display = "none";
    themtaikhoanBtn.style.display = "none";
    phantichdansoBtn.style.display = "none";
    khaibaocapmaBtn.style.display = "block";

    getData('http://localhost:3001/api/address/get-address', {})
        .then(data => {
            console.log(data);
            console.log(123);
            // console.log(data);
            // var code = data.addressDetail[0].code;
            if(data.role_id != 1) {
                var code = data.addressDetail.code;
                
            }else{
                var code = data.addressDetail
            }
            
            console.log(code);
            getData(`http://localhost:3001/api/address/get-list-address/${code}`, {})
                .then(data => {
                    
                    var nhaptenvungBtn = document.getElementById('nhaptenvung');
                    
                    if (data.hasOwnProperty('listWard')) {
                        // var htmls = "";
                        
                        // for(var i = 0; i < data.listWard.length; i++) {

                        //     // console.log(data.listWard[i].name);
                        //     // nhaptenvungBtn.innerHTML = '<option>${data.listWard[i].name}</option>';
                        //     htmls = htmls + "<option>${data.listWard[i].name}</option>";
                        // }
                        var i = -1;
                        var htmls = data.listWard.map(function (listward) {
                            i++;
                            if(i == 0) {
                                return `
                                    <option>--Xem các vùng đã được khai báo</option>
                                    <option>${listward.name}</option>
                                `
                            }
                            else {
                                return `
                                    <option>${listward.name}</option>
                                `
                            }
                        })

                        var html = htmls.join('');
                        nhaptenvungBtn.innerHTML = html;
                    }
                    if(data.hasOwnProperty('listProvince')) {
                        var i = -1;
                        var htmls = data.listProvince.map(function (listprovince) {
                            i++;
                            if(i == 0) {
                                return `
                                    <option>--Xem các vùng đã được khai báo</option>
                                    <option>${listprovince.name}</option>
                                `
                            }
                            else {
                                return `
                                    <option>${listprovince.name}</option>
                                `
                            }
                        })

                        var html = htmls.join('');
                        nhaptenvungBtn.innerHTML = html;
                    }
                    if(data.hasOwnProperty('listDistrict')) {
                        var i = -1;
                        var htmls = data.listDistrict.map(function (listdistrict) {
                            i++;
                            if(i == 0) {
                                return `
                                    <option>--Xem các vùng đã được khai báo</option>
                                    <option>${listdistrict.name}</option>
                                `
                            }
                            else {
                                return `
                                    <option>${listdistrict.name}</option>
                                `
                            }
                        })

                        var html = htmls.join('');
                        nhaptenvungBtn.innerHTML = html;
                    }
                    if(data.hasOwnProperty('listVillage')) {
                        var i = -1;
                        var htmls = data.listVillage.map(function (listvillage) {
                            i++;
                            if(i == 0) {
                                return `
                                    <option>--Xem các vùng đã được khai báo</option>
                                    <option>${listvillage.name}</option>
                                `
                            }
                            else {
                                return `
                                    <option>${listvillage.name}</option>
                                `
                            }
                        })

                        var html = htmls.join('');
                        nhaptenvungBtn.innerHTML = html;
                    }


                    console.log(data)
                })
        })

 
}


function submitMaVung() {
    var name = document.querySelector('input[name ="name"]').value;
    var code = document.querySelector('input[name ="code"]').value;

    postData('http://localhost:3001/api/address/create-address', { name, code})
    .then(data => {
        console.log(123)
      console.log(data)
    //   alert("Khai báo và cấp mã thành công")
      if(data.messsage == "thành công"){
        alert("Khai báo và cấp mã thành công")
      }

      console.log(code);
      console.log(name);
    
    });

    getData('http://localhost:3001/api/address/get-address', {})
        .then(data => {
            console.log(data);
            // var code = data.addressDetail[0].code;
            if(data.role_id != 1) {
                var code = data.addressDetail.code;
                
            }else{
                var code = data.addressDetail
            }
            getData(`http://localhost:3001/api/address/get-list-address/${code}`, {})
                .then(data => {
                    var nhaptenvungBtn = document.getElementById('nhaptenvung');
                    
                    if (data.hasOwnProperty('listWard')) {
                        // var htmls = "";
                        
                        // for(var i = 0; i < data.listWard.length; i++) {

                        //     // console.log(data.listWard[i].name);
                        //     // nhaptenvungBtn.innerHTML = '<option>${data.listWard[i].name}</option>';
                        //     htmls = htmls + "<option>${data.listWard[i].name}</option>";
                        // }
                        var i = -1;
                        var htmls = data.listWard.map(function (listward) {
                            i++;
                            if(i == 0) {
                                return `
                                    <option>--Xem các vùng đã được khai báo</option>
                                    <option>${listward.name}</option>
                                `
                            }
                            else {
                                return `
                                    <option>${listward.name}</option>
                                `
                            }
                        })

                        var html = htmls.join('');
                        nhaptenvungBtn.innerHTML = html;
                    }
                    if(data.hasOwnProperty('listProvince')) {
                        var i = -1;
                        var htmls = data.listProvince.map(function (listprovince) {
                            i++;
                            if(i == 0) {
                                return `
                                    <option>--Xem các vùng đã được khai báo</option>
                                    <option>${listprovince.name}</option>
                                `
                            }
                            else {
                                return `
                                    <option>${listprovince.name}</option>
                                `
                            }
                        })

                        var html = htmls.join('');
                        nhaptenvungBtn.innerHTML = html;
                    }
                    if(data.hasOwnProperty('listDistrict')) {
                        var i = -1;
                        var htmls = data.listDistrict.map(function (listdistrict) {
                            i++;
                            if(i == 0) {
                                return `
                                    <option>--Xem các vùng đã được khai báo</option>
                                    <option>${listdistrict.name}</option>
                                `
                            }
                            else {
                                return `
                                    <option>${listdistrict.name}</option>
                                `
                            }
                        })

                        var html = htmls.join('');
                        nhaptenvungBtn.innerHTML = html;
                    }
                    if(data.hasOwnProperty('listVillage')) {
                        var i = -1;
                        var htmls = data.listVillage.map(function (listvillage) {
                            i++;
                            if(i == 0) {
                                return `
                                    <option>--Xem các vùng đã được khai báo</option>
                                    <option>${listvillage.name}</option>
                                `
                            }
                            else {
                                return `
                                    <option>${listvillage.name}</option>
                                `
                            }
                        })

                        var html = htmls.join('');
                        nhaptenvungBtn.innerHTML = html;
                    }


                    console.log(data)
                })
        })
}

function hienthidanhsachcactaikhoandioiquyen() {
    getData('http://localhost:3001/api/account/account-cap-duoi', {})
        .then(data => {
            var hienthicapduoiBtn = document.getElementById('hienthicapduoiquyen');
            console.log(data)
            var htmls = data.listAccount.map(function (listcccount) {              
                return `
                    <tr>
                        <td>${listcccount.username}</td>
                        <td>${listcccount.status}</td>
                        <td>${listcccount.createdAt}</td>
                        <td>${listcccount.updatedAt}</td>                                                   
                    </tr>
                `                
            })
            var html = htmls.join('');
            hienthicapduoiBtn.innerHTML = html;
        })
}

function themtaikhoancapduoi() {
    // var code = document.querySelector('input[class ="taikhoancapduoi"]').value;
    // console.log(code)
    var username = document.querySelector('input[name ="username2"]').value;
    var password = document.querySelector('input[name ="password2"]').value;

    postData('http://localhost:3001/api/account/create', { username, password})
    .then(data => {
        console.log(data)
        getData('http://localhost:3001/api/account/account-cap-duoi', {})
            .then(data => {
                var hienthicapduoiBtn = document.getElementById('hienthicapduoiquyen');
                console.log(data)
                var htmls = data.listAccount.map(function (listcccount) {              
                    return `
                        <tr>
                            <td>${listcccount.username}</td>
                            <td>${listcccount.status}</td>
                            <td>${listcccount.createdAt}</td>
                            <td>${listcccount.updatedAt}</td>                                                   
                        </tr>
                    `                
                })
                var html = htmls.join('');
                hienthicapduoiBtn.innerHTML = html;
            })
        alert("Tạo tài khoản cấp dưới thành công!")

        console.log(username);
        console.log(password);
    
    });  
}


getData('http://localhost:3001/api/address/get-list-address/0', {})
    .then(data => {
        console.log(data)
        // var chonTinhBtn = document.getElementById('chontinh');
        // var i = -2;
        // var htmls = data.listProvince.map(function (listprovince) {
        //     i++;  
        //     if(i == -1) {
        //         return `
        //             <option>--Chọn tỉnh/thành phố:</option>
        //             <option>${listprovince.name}</option>
        //         `                
        //     }   
        //     else {
        //         return `
        //             <option>${listprovince.name}</option>
        //         `       
        //     }    
        // })
        // var html = htmls.join('');
        // chonTinhBtn.innerHTML = html;
        // var c = document.getElementById("chontinh").children;
        // console.log(c)
        


        // console.log(data.listProvince[0].code)
        
        // for(var i = 0; i < data.listProvince.length; i++) {
        //     // var codetinh = data.listProvince[i].code;
        //     // console.log(data.listProvince[0].code)
        //     var j = i + 1;
        //     c[j].style.value = data.listProvince[i].code;
        //     // console.log(codetinh)
        //     // console.log(c[i].style)
        //     // var ngu = "red"
        //     // c[i].style.color = ngu;
        // }
        // console.log(c[2].style.value)

        for(var i = 0; i < data.listProvince.length; i++) {
            var node = document.createElement("OPTION");
            var textnode = document.createTextNode(data.listProvince[i].name);

            node.appendChild(textnode);
            node.setAttribute('value', data.listProvince[i].code);
            document.getElementById("chontinh").appendChild(node);
        }

        

       
    })

function chontinhthanhcong(c) {
    console.log(c.value)
    var code = c.value
    // http://localhost:3001/api/address/get-list-address/(mã tỉnh)
    var api = 'http://localhost:3001/api/address/get-list-address/' + code;
    console.log(api)
    getData(api, {})
    .then(data => {
        console.log(data)

        for(var i = 0; i < data.listDistrict.length; i++) {
            var node = document.createElement("OPTION");
            var textnode = document.createTextNode(data.listDistrict[i].name);

            node.appendChild(textnode);
            node.setAttribute('value', data.listDistrict[i].code);
            document.getElementById("chonhuyen").appendChild(node);
        }

       
    })

}

function chonhuyenthanhcong(c) {
    console.log(c.value)
    var code = c.value
    
    var api = 'http://localhost:3001/api/address/get-list-address/' + code;
    console.log(api)
    getData(api, {})
    .then(data => {
        console.log(data)

        for(var i = 0; i < data.listWard.length; i++) {
            var node = document.createElement("OPTION");
            var textnode = document.createTextNode(data.listWard[i].name);

            node.appendChild(textnode);
            node.setAttribute('value', data.listWard[i].code);
            document.getElementById("chonxa").appendChild(node);
        }
    })
}

function chonxathanhcong(c) {
    console.log(c.value)
    var code = c.value
    
    var api = 'http://localhost:3001/api/address/get-list-address/' + code;
    console.log(api)
    getData(api, {})
    .then(data => {
        console.log(data)

        for(var i = 0; i < data.listVillage.length; i++) {
            var node = document.createElement("OPTION");
            var textnode = document.createTextNode(data.listVillage[i].name);

            node.appendChild(textnode);
            node.setAttribute('value', data.listVillage[i].code);
            document.getElementById("chonthon").appendChild(node);
        }
    })
}

function chonthonthanhcong(c) {
    console.log(c.value)
}






function submitkhaibaodanso() {
    var cccd = document.querySelector('input[name ="cccd"]').value;
    var hoten = document.querySelector('input[name ="fullname"]').value;
    var ngaysinh = document.querySelector('input[name ="birthday"]').value;
    var gioitinh = document.querySelector('select[name ="gender"]').value;
    var tongiao = document.querySelector('input[name ="religion"]').value;
    var trinhdo = document.querySelector('input[name ="academic"]').value;
    var nghenghiep = document.querySelector('input[name ="job"]').value;
    var province_code_quequan = document.querySelector('select[name ="tinh"]').value;
    var district_code_quequan = document.querySelector('select[name ="huyen"]').value;
    var ward_code_quequan = document.querySelector('select[name ="xa"]').value;
    var village_code_quequan = document.querySelector('select[name ="thon"]').value;

    var province_code_thuongtru = document.querySelector('select[name ="tinh"]').value;
    var district_code_thuongtru = document.querySelector('select[name ="huyen"]').value;
    var ward_code_thuongtru = document.querySelector('select[name ="xa"]').value;
    var village_code_thuongtru = document.querySelector('select[name ="thon"]').value;

    var province_code_tamtru = document.querySelector('select[name ="tinh"]').value;
    var district_code_tamtru = document.querySelector('select[name ="huyen"]').value;
    var ward_code_tamtru = document.querySelector('select[name ="xa"]').value;
    var village_code_tamtru = document.querySelector('select[name ="thon"]').value;
    
    // console.log(cccd);
    // console.log(hoten);
    // console.log(ngaysinh);
    // console.log(gioitinh);
    // console.log(province_code_quequan)



    postData('http://localhost:3001/api/people/them-dan-so', { cccd, hoten, ngaysinh, gioitinh, tongiao, trinhdo, nghenghiep, province_code_quequan, district_code_quequan, ward_code_quequan,
    village_code_quequan, province_code_thuongtru, district_code_thuongtru, ward_code_thuongtru, village_code_thuongtru, province_code_tamtru, district_code_tamtru, ward_code_tamtru, village_code_tamtru})
    .then(data => {
        // console.log(123)
        // console.log(data)
        if(data.message == "thêm thành công"){
            alert("Khai báo công dân thành công")
            getData('http://localhost:3001/api/address/get-address', {})
    .then(data => {
        if(data.role_id != 1) {
            var temp = data.addressDetail.code;
            
        }else{
            var temp = data.addressDetail
        }
        console.log(temp);
        var congdanApi = 'http://localhost:3001/api/people/danh-sach-dan-so?type=2&address=' + temp;
        getData(congdanApi, {})
            .then(data => {
                console.log(data)
                var hienthidanhsachcongdanBtn = document.getElementById('hienthicongdandakhaibao');

                var htmls = data.listPeople.map(function (listpeople) {              
                    return `
                        <tr>
                            <td>${listpeople.cccd}</td>
                            <td>${listpeople.hoten}</td>
                            <td>${listpeople.ngaysinh}</td>
                            <td>${listpeople.gioitinh}</td> 
                            <td>${listpeople.tongiao}</td>
                            <td>${listpeople.nghenghiep}</td>
                            <td>${listpeople.Province.name}</td>
                            <td>${listpeople.District.name}</td>
                            <td>${listpeople.Ward.name}</td>
                            <td>${listpeople.Village.name}</td>                                              
                        </tr>
                    `                
                })
                var html = htmls.join('');
                hienthidanhsachcongdanBtn.innerHTML = html;
            })

    })

        }
    
    });

}


getData('http://localhost:3001/api/address/get-address', {})
    .then(data => {
        if(data.role_id != 1) {
            var temp = data.addressDetail.code;
            
        }else{
            var temp = data.addressDetail
        }
        console.log(temp);
        var congdanApi = 'http://localhost:3001/api/people/danh-sach-dan-so?type=2&address=' + temp;
        getData(congdanApi, {})
            .then(data => {
                console.log(data)
                var hienthidanhsachcongdanBtn = document.getElementById('hienthicongdandakhaibao');

                var htmls = data.listPeople.map(function (listpeople) {              
                    return `
                        <tr>
                            <td>${listpeople.cccd}</td>
                            <td>${listpeople.hoten}</td>
                            <td>${listpeople.ngaysinh}</td>
                            <td>${listpeople.gioitinh}</td> 
                            <td>${listpeople.tongiao}</td>
                            <td>${listpeople.nghenghiep}</td>
                            <td>${listpeople.Province.name}</td>
                            <td>${listpeople.District.name}</td>
                            <td>${listpeople.Ward.name}</td>
                            <td>${listpeople.Village.name}</td>                                              
                        </tr>
                    `                
                })
                var html = htmls.join('');
                hienthidanhsachcongdanBtn.innerHTML = html;
            })

    })



function thongkegioitinh() {
    getData('http://localhost:3001/api/address/get-address', {})
    .then(data => {
        if(data.role_id != 1) {
            var x = data.addressDetail.code;
            
        }else{
            var x = data.addressDetail
        }
        var gioitinh2 = document.querySelector('select[name ="gender2"]').value;
        var gioitinhApi = 'http://localhost:3001/api/people/danh-sach-dan-so?type=2&address=' + x;
        getData(gioitinhApi, {})
            .then(data => {
                console.log(data)
                var thongkegioitinhBtn = document.getElementById('thongkegioitinh');

                var htmls = data.listPeople.map(function (listpeople) { 
                    if(listpeople.gioitinh == gioitinh2) {
                        return `
                            <tr>
                                <td>${listpeople.cccd}</td>
                                <td>${listpeople.hoten}</td>
                                <td>${listpeople.ngaysinh}</td>
                                <td>${listpeople.gioitinh}</td> 
                                <td>${listpeople.tongiao}</td>
                                <td>${listpeople.nghenghiep}</td>
                                <td>${listpeople.Province.name}</td>
                                <td>${listpeople.District.name}</td>
                                <td>${listpeople.Ward.name}</td>
                                <td>${listpeople.Village.name}</td>                                              
                            </tr>
                        `               
                    }             
                     
                })
                var html = htmls.join('');
                thongkegioitinhBtn.innerHTML = html;
            })

    })
}

function thongketongiao() {
    getData('http://localhost:3001/api/address/get-address', {})
    .then(data => {
        if(data.role_id != 1) {
            var y = data.addressDetail.code;
            
        }else{
            var y = data.addressDetail
        }
        var tongiao2 = document.querySelector('select[name ="tongiao"]').value;
        console.log(tongiao2)
        var tongiaoApi = 'http://localhost:3001/api/people/danh-sach-dan-so?type=2&address=' + y;
        getData(tongiaoApi, {})
            .then(data => {
                console.log(data)
                var thongketongiaoBtn = document.getElementById('thongketongiao');

                var htmls = data.listPeople.map(function (listpeople) { 
                    if(listpeople.tongiao == tongiao2) {
                        return `
                            <tr>
                                <td>${listpeople.cccd}</td>
                                <td>${listpeople.hoten}</td>
                                <td>${listpeople.ngaysinh}</td>
                                <td>${listpeople.gioitinh}</td> 
                                <td>${listpeople.tongiao}</td>
                                <td>${listpeople.nghenghiep}</td>
                                <td>${listpeople.Province.name}</td>
                                <td>${listpeople.District.name}</td>
                                <td>${listpeople.Ward.name}</td>
                                <td>${listpeople.Village.name}</td>                                              
                            </tr>
                        `               
                    }             
                     
                })
                var html = htmls.join('');
                thongketongiaoBtn.innerHTML = html;
            })

    })
}

function bieudodanso(){
    getData('http://localhost:3001/api/people/phan-tich-dan-so', {})
    .then(data =>{
        var bieudodanso = document.getElementById('bieudodanso');
        console.log(data);
        var length = data.totalPeople.count.length;
        var htmls ='';
        let a = data.totalPeople.count[0].count;
        console.log(a);
        if (data.role_id == 1){
            for (let i=0; i<length; i++){                
                htmls += `<div class="row">
                            <div class="col-sm-1">
                            <span>${data.totalPeople.rows[i].Province.name}</span>
                            </div>
                            <div class="col-sm-10">
                                <div class="progress">
                                <div class="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: ${data.totalPeople.count[i].count/a*66}%;">
                                <span class="sr-only">60% Complete</span>
                            </div>
                            </div>
                            </div>
                            <div class="col-sm-1">
                            <span>${data.totalPeople.count[i].count}</span>
                            </div>
                            <div class="clearfix"></div>
                        </div>` 
            }
            var html = `<div class="x_content" style="display: block;">
                        <br>
                        <h3>Biểu đồ dân số</h3>
                        <br>
                        ${htmls}
                        </div>`
            bieudodanso.innerHTML = html;
        }
        if (data.role_id == 2){
            for (let i=0; i<length; i++){                
                htmls += `<div class="widget_summary">
                            <div class="col-sm-1">
                            <span>${data.totalPeople.rows[i].District.name}</span>
                            </div>
                            <div class="col-sm-10">
                                <div class="progress">
                                <div class="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: ${data.totalPeople.count[i].count/a*66}%;">
                                <span class="sr-only">60% Complete</span>
                            </div>
                            </div>
                            </div>
                            <div class="col-sm-1">
                            <span>${data.totalPeople.count[i].count}</span>
                            </div>
                            <div class="clearfix"></div>
                        </div>` 
            }
            var html = `<div class="x_content" style="display: block;">
            <br>
                        <h3>Biểu đồ dân số</h3>
                        <br>
                        ${htmls}
                        </div>`
            bieudodanso.innerHTML = html;
        }
        if (data.role_id == 3){
            for (let i=0; i<length; i++){                
                htmls += `<div class="row">
                            <div class="col-sm-1">
                            <span>${data.totalPeople.rows[i].Ward.name}</span>
                            </div>
                            <div class="col-sm-10">
                                <div class="progress">
                                <div class="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: ${data.totalPeople.count[i].count/a*66}%;">
                                <span class="sr-only">60% Complete</span>
                            </div>
                            </div>
                            </div>
                            <div class="col-sm-1">
                            <span>${data.totalPeople.count[i].count}</span>
                            </div>
                            <div class="clearfix"></div>
                        </div>` 
            }
            var html = `<div class="x_content" style="display: block;">
            <br>
                        <h3>Biểu đồ dân số</h3>
                        <br>
                        ${htmls}
                        </div>`
            bieudodanso.innerHTML = html;
        }
        if (data.role_id == 4){
            for (let i=0; i<length; i++){                
                htmls += `<div class="row">
                            <div class="col-sm-1">
                            <span>${data.totalPeople.rows[i].Village.name}</span>
                            </div>
                            <div class="col-sm-10">
                                <div class="progress">
                                <div class="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: ${data.totalPeople.count[i].count/a*66}%;">
                                <span class="sr-only">60% Complete</span>
                            </div>
                            </div>
                            </div>
                            <div class="col-sm-1">
                            <span>${data.totalPeople.count[i].count}</span>
                            </div>
                            <div class="clearfix"></div>
                        </div>` 
            }
            var html = `<div class="x_content" style="display: block;">
            <br>
                        <h3>Biểu đồ dân số</h3>
                        <br>
                        ${htmls}
                        </div>`
            bieudodanso.innerHTML = html;
        }
    })
}
bieudodanso();




async function getData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },})
    return response.json();
}

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
})
    return response.json();
}

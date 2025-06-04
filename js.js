function them() {
    let content = document.querySelector(".khungin").innerHTML
    content += "<br>"
    let soluong = document.querySelector(".soluong").value;
    let loai = document.querySelector("#sellect").value;
    let cssloai = ""
    console.log(loai)
    if (loai == "1") {
        cssloai = "loai300"
    }
    else if (loai == "2") {
        cssloai = "loai250"
    }
    else if (loai == "3") {
        cssloai = "loai200"
    }
    else if (loai == "5") {
        cssloai = "loai150"
    }
    let dai = Number(document.querySelector(".dai").value);
    let rong = Number(document.querySelector(".rong").value);

    let csslable2 = `
    text-align: center;
    border: 1px dashed black;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    `
    if (dai != "" && rong != "") {
        csslable2 += `
            width: ${dai}mm;
            height: ${rong}mm; `
    }
    let ma = document.querySelector(".ma").value
    let kichthuoc = document.querySelector(".kichthuoc").value
    if (loai != 4) {
        for (i = 0; i < Number(soluong); i++) {
            content += `
            <div style="${csslable2}" onclick="xoa(${i})" class="${cssloai} tem">
            <h3>${kichthuoc}</h3>
            <p>${ma}</p>
             </div>`
        }
    }
    else {
        document.querySelector(".khungin").classList.add("center")
        let datelable = new Date()
        let stringdate = `${datelable.getDate() - 2}/${datelable.getMonth() + 1}/${datelable.getFullYear()}`
        console.log(datelable)
        for (i = 0; i < Number(soluong); i++) {
            content += `  <div style=" margin-top:3px;border: 2px solid black; padding: 8px;" class="temt37">
            <table style="width: 115mm; ">
                <tr style="text-align: center">
                    <td colspan="4"> <img style="width: 85mm; height: 13.5mm;"
                            src="./Screenshot_2023-02-14_155916-removebg-preview.png" alt=""></td>
                </tr>
                <tr style="text-align: center;">
                    <td colspan="4">
                        <p>Thông số kĩ thuật: <b><u>T37-400x55 SA30 TB2</b><u></p>
                    </td>
                </tr>
                <tr style="margin-top:2px">
                    <td style="width: 25%;">Loại hạt:</td>
                    <td style="width: 25%;text-align: center;"><b><u>SA</u></b></td>
                    <td style="width: 25%;">Cỡ hạt:</td>
                    <td style="width: 25%;text-align: center;"><b><u>F30</i></b></td>
                </tr style="margin-top:2px">
                <td style="width: 25%;">Loại kết dính:</td>
                <td style="width: 25%;text-align: center;"><b><u>B<u></b></td>
                <td style="width: 25%;">Độ cứng:</td>
                <td style="width: 25%;text-align: center;"><b> <u>TB2<u></b></td>
                </tr>
                </tr style="margin-top:2px">
                <td style="width: 25%;">Ngày sản xuất:</td>
                <td style="width: 25%;text-align: center;"><b>${stringdate}</b></td>
                <td style="width: 25%;">Tốc độ quay:</td>
                <td style="width: 25%;text-align: center;"><b> <u>35m/s</u></b></td>
                </tr>
            </table>
        </div>`
        }
    }
    document.querySelector(".khungin").innerHTML = content
}
function check() {
    document.querySelector(".container").classList.add("up")
    document.querySelector(".sign").style.opacity = "1"
    window.print()
}
function out() {
    document.querySelector(".container").classList.remove("up")
    document.querySelector(".sign").style.opacity = "0"

}
function xoa(i) {
    console.log(i)
    document.querySelectorAll(".tem")[i].remove()
}
function clear1() {
    console.log(111)
    document.querySelector(".khungin").innerHTML = ""
}


function view() {
    let loai = document.querySelector("#sellect").value;
    let cssloai = ""
    if (loai == "1") {
        cssloai = "loai300"
    }
    else if (loai == "2") {
        cssloai = "loai250"
    }
    else if (loai == "3") {
        cssloai = "loai200"
    }
    else if (loai == "5") {
        cssloai = "loai150"
    }
    let dai = Number(document.querySelector(".dai").value);
    let rong = Number(document.querySelector(".rong").value);

    let csslable2 = `
    text-align: center;
    border: 1px dashed black;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
    if (dai != "" && rong != "") {
        csslable2 += `
            width: ${dai}mm;
            height: ${rong}mm; `
    }
    let content = "";
    if (loai != 4) {

        let ma = document.querySelector(".ma").value
        let kichthuoc = document.querySelector(".kichthuoc").value
        content = ` 
    <div style="${csslable2}" class="${cssloai} tem">
     <h3>${kichthuoc}</h3>
     <p>${ma}</p>
    </div>`
    }
    else {
        document.querySelector(".khungin").classList.add("center")
        let datelable = new Date()
        let stringdate = `${datelable.getDate() - 2}/${datelable.getMonth() + 1}/${datelable.getFullYear()}`
        console.log(datelable)
        content += `  <div style="transform: scale(0.9); margin-top:3px; margin-left:-18px;border: 2px solid black; padding: 8px;" class="temt37">
        <table  style="width: 105mm ">
            <tr style="text-align: center">
                <td colspan="4"> <img style="width: 85mm; height: 13.5mm;"
                        src="./Screenshot_2023-02-14_155916-removebg-preview.png" alt=""></td>
            </tr>
            <tr style="text-align: center;">
                <td colspan="4">
                    <p>Thông số kĩ thuật: <b><u>T37-400x55 SA30 TB2</b=u></p>
                </td>
            </tr>
            <tr style="margin-top:2px">
                <td style="width: 25%;">Loại hạt:</td>
                <td style="width: 25%;text-align: center;"><b><u>SA</u></b></td>
                <td style="width: 25%;">Cỡ hạt:</td>
                <td style="width: 25%;text-align: center;"><b><u>F30</i></b></td>
            </tr style="margin-top:2px">
            <td style="width: 25%;">Loại kết dính:</td>
            <td style="width: 25%;text-align: center;"><b><u>B<u></b></td>
            <td style="width: 25%;">Độ cứng:</td>
            <td style="width: 25%;text-align: center;"><b> <u>TB2<u></b></td>
            </tr>
            </tr style="margin-top:2px">
            <td style="width: 25%;">Ngày sản xuất:</td>
            <td style="width: 25%;text-align: center;"><b>${stringdate}</b></td>
            <td style="width: 25%;">Tốc độ quay:</td>
            <td style="width: 25%;text-align: center;"><b> <u>35m/s</u></b></td>
            </tr>
        </table>
    </div>`
    }
    document.querySelector(".viewLable").innerHTML = content
}

function changeValue() {
    let loai = document.querySelector("#sellect").value;
    if (loai == "1") {
        document.querySelector("#dai").value = '32'
        document.querySelector("#rong").value = '12'
    }
    else if (loai == "2") {
        document.querySelector("#dai").value = '28'
        document.querySelector("#rong").value = '10'
    }
    else if (loai == "3") {
        document.querySelector("#dai").value = '24'
        document.querySelector("#rong").value = '9.5'
    }
    else if (loai == "5") {
        document.querySelector("#dai").value = '15'
        document.querySelector("#rong").value = '6'
    }

}

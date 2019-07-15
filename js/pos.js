var rIndex,
    table = document.getElementById("table");

function addDataToTable() {
    if (!checkEmptyDetails()) {
        var newRow = table.insertRow(table.length),
            // cells are depend on your table
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            cell5 = newRow.insertCell(4),
            cell6 = newRow.insertCell(5),
            cell7 = newRow.insertCell(6),

            //here , use id to the input
            ///=============================
            //get values from input fields
            cname = document.getElementById("cname").value,
            email = document.getElementById("email").value,
            id = document.getElementById("id").value,
            address = document.getElementById("address").value,
            tel = document.getElementById("tel").value,
            city = document.getElementById("city").value,
            zip = document.getElementById("inputZip").value;
//set values to the table
        cell1.innerHTML = cname;
        cell2.innerHTML = email;
        cell3.innerHTML = id;
        cell4.innerHTML = address;
        cell5.innerHTML = tel;
        cell6.innerHTML = city;
        cell7.innerHTML = zip;

        selectedRow();
    }
}


function selectedRow() {
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            document.getElementById("cname").value = this.cells[0].innerHTML;
            document.getElementById("email").value = this.cells[1].innerHTML;
            document.getElementById("id").value = this.cells[2].innerHTML;
            document.getElementById("address").value = this.cells[3].innerHTML;
            document.getElementById("address2").value = this.cells[4].innerHTML;
            document.getElementById("city").value = this.cells[5].innerHTML;
            document.getElementById("inputZip").value = this.cells[6].innerHTML;
        };
    }
}

selectedRow();

function removeRow() {
    table.deleteRow(rIndex);
    document.getElementById("cname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("id").value = "";
    document.getElementById("address").value = "";
    document.getElementById("address2").value = "";
    document.getElementById("city").value = "";
    document.getElementById("inputZip").value = "";
}

function checkEmptyDetails() {
    var isEmpty = false;
    cname = document.getElementById("cname").value,
        email = document.getElementById("email").value,
        id = document.getElementById("id").value,
        address = document.getElementById("address").value,
        tel = document.getElementById("tel").value,
        city = document.getElementById("city").value,
        zip = document.getElementById("inputZip").value;

    if (cname == "") {
        alert("! Customer Name Cannot Be Empty ")
        isEmpty = true;
    }
    if (id == "") {
        alert("! ID Cannot Be Empty")
        isEmpty = true;
    }
    if (address == "") {
        alert("! Address Cannot Be Empty")
        isEmpty = true;
    }
    if (
        $("#btn-validation").click(function () {
            var value = $("#tel").val();
            var regEx = /\d{3}-\d{7}/;
            var result = regEx.test(value);
            if (!result) {
                alert("Number is Invalid");
            }
        })) ;
    if (city == "") {
        alert("! city Cannot Be Em+pty")
        isEmpty = true;
    }

    if (zip == "") {
        alert("! ZIP Cannot Be Empty")
        isEmpty = true;
    }
    return isEmpty;
}

function updatedetails() {
    var cname = document.getElementById("cname").value,
        email = document.getElementById("email").value,
        id = document.getElementById("id").value,
        address = document.getElementById("address").value,
        tel = document.getElementById("tel").value,
        city = document.getElementById("city").value,
        zip = document.getElementById("inputZip").value;
    if (!checkEmptyDetails()) {
        table.rows[rIndex].cells[0].innerHTML = cname;
        table.rows[rIndex].cells[1].innerHTML = email;
        table.rows[rIndex].cells[2].innerHTML = id;
        table.rows[rIndex].cells[3].innerHTML = address;
        table.rows[rIndex].cells[4].innerHTML = tel;
        table.rows[rIndex].cells[5].innerHTML = city;
        table.rows[rIndex].cells[6].innerHTML = zip;
    }
}
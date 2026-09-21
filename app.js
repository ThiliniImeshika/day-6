let customerList = [];

function btnAddCustomerOnAction() {
    // Fixed "txtNmae" to "txtName"
    let txtName = document.getElementById("txtName").value;
    let txtAge = document.getElementById("txtAge").value;
    let txtAddress = document.getElementById("txtAddress").value;
    let txtEmail = document.getElementById("txtEmail").value;
    let txtSalary = document.getElementById("txtSalary").value; // (Optional: fixed spelling of txtSalay too)

    let customer = {
        name: txtName,
        age: txtAge,
        address: txtAddress,
        email: txtEmail,
        salary: txtSalary
    };

    customerList.push(customer);
    console.log(customerList);
}

function loadTable(){
    let tblCustomers = document.getElementById("btnCustomers");

    let body ="";

    for(let i=0;i<customerList.length; i++)
    {
        body+= `<tr>
            <td>SAMAN</td>
            <td>23</td>
            <td>moragahahena</td>
            <td>saman@gmail.com</td>
            <td>78000</td>
        </tr> `;

        
    }

    tblCustomers.innerHTML=body;
 

    console.log(tblCustomers);
}
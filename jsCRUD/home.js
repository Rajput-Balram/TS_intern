function onFormSubmit(event) {
    event.preventDefault();
    var formData = new Object(); // or "var formData = {};" both same to create object
    formData.fullName = event.target.fullName.value; //or "formData["fullname"]" both same.
    formData.empCode = event.target.empCode.value;
    formData.salary = event.target.salary.value;
    formData.city = event.target.city.value;
    //console.log(formData);
    sessionStorage.setItem("data",JSON.stringify(formData));
    window.location.href = "index.html";
     
}
 

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

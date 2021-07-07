function onFormSubmit( ) {
    var formData = readFormData();
     
    resetForm();

}

function readFormData() {
    var formData = new Object(); // or "var formData = {};" both same to create object
    formData.fullName = document.getElementById("fullName").value; //or "formData["fullname"]" both same.
    formData.empCode = document.getElementById("empCode").value;
    formData.salary = document.getElementById("salary").value;
    formData.city = document.getElementById("city").value;
    return formData;
}

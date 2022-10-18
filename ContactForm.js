
function submitForm(){

    const formName = document.getElementById('formName').value
    const formMail = document.getElementById('formMail').value
    const formPhone = document.getElementById("formPhone").value
    const formMessage = document.getElementById('formMessage').value
    

    const submitButton = document.getElementById('submit')
    if (formName.length && formMail.length && formPhone.length > 0) 
    {
        alert("Gracias, " + formName + "Su mensaje se ha enviado correctamente")
    }

}
function Validate() {

    var contact_name = document.forms['myform']['contact_name'].value;
    if (contact_name == "" || contact_name == null) {
        alert("contact name field can't be Empty");
        return false;
    }

    var contact_email = document.forms['myform']['contact_email'].value;
    if (contact_email == "" || contact_email == null) {
        alert("contact email field can't be Empty");
        return false;
    }

    var contact_message = document.forms['myform']['contact_message'].value;
    if (contact_message == "" || contact_message == null) {
        alert("contact message field can't be Empty");
        return false;
    }


}
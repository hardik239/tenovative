import swal from "sweetalert"

function ValidateEmail(mail) {
  //eslint-disable-next-line
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (regex.test(mail)) return true
  else if (mail.length <= 0) {
    swal({
      title:"warning",
      text: "Enter Your Email",
      icon: "warning"
    })
  } else {
    swal({
      title:"warning",
      text: "You have entered an invalid email address!",
      icon: "warning"
    })
  }
  return false
}

function notEmpty(input) {
  if (input.length > 0) return true
  else {
    swal({
      title: "warning",
      text:  "Enter Your Query",
      icon:  "warning"
    })
    return false
  }
}

function ValidatePhone(phone){
  const regx = /^[6-9]\d{9}$/
  if(regx.test(phone)) return true
  else{
    swal({
      title:"warning",
      text: "Enter Valid Phone Number",
      icon: "warning"
    })
    return false
  }
}


export { notEmpty, ValidatePhone ,ValidateEmail }  

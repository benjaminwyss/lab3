function validate()
{
  let password = document.getElementById("password")
  let confirm = document.getElementById("confirm")
  if (password.value != confirm.value)
  {
    alert("Passwords entered do not match!")
  }
  else if (password.value.length < 8)
  {
    alert("Passwords must be at least 8 characters in length.")
  }
  else
  {
    alert("Password successfully verified.")
  }
}

function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.username.value == "testuser" && form.password.value == "ruDWLeHr9K7ErsUS")
  {
    window.open('movie.html')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Please Enter Valid Password")/*displays error message*/
  }
}
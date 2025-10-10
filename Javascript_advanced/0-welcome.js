function welcome(firstName, lastName){
  const fullName = '' + firstName + '' + lastName;

  function displayFullName(){
    alert(fullName,'Holberton')
  }
  displayFullName();
}
welcome('Welcome','Holberton')
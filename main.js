// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  // Your Code Goes Here

})();

fetch("https://randomuser.me/api/?results=12")
.then (function(response){
return response.json();
})
.then(function(json){
  let Usearray = [];
  json.results.forEach(function(results) {
    FirstName = results.name.first;
    LastName = results.name.last;
    Title = results.name.title;
    State = results.location.state;
    City = results.location.city;
    zip = results.location.postcode;
    Gender = results.gender;
    UserName = results.login.username;
    Pic = results.picture.thumbnail;
    phone = results.phone;
    Registration = results.registered;
    Email = results.email;
    Streetaddress = results.location.street
    console.log(pic,firstName,LastName,Email,Streetaddress,City,State,zip,phone,);
  })
})
})();

//elementObject = (JSObject/elementObject/nodeObject).method(css element selector)
const form = document.querySelector("#searchForm");

//elementObject.method(eventString,anonymousCallbackFunctionExpression(eventObject))
//eventString -"submit"
//eventObject - eg.submitEventObject-propeties/methods
//by default form eventObject sends HTTPRequest with FormData to action attributes location
//by default form eventObject moves onto next page location URL in action attribute
//method - addEventListner(eventString,anonymousCallbackFunctionExpression(parameter))
//when stringEvent happens on elementObject(Target)
//it executes the anonymous callback function expression
//when it executes the fucntion expression it create and passes in the evenObject as argument
//this eventObject is caught as a parameter in the function expression
form.addEventListener("submit", function (e) {
  //submitEventObject.method()
  //prevent deafult eventObject sending HttpRequest Formdata to action attribute location
  //prevent deafult eventObject moving onto next page location URL in action attribute
  e.preventDefault();

  //this keyword - Execution scope - left of dot - refers to formElementObject
  //formElementObject.propery
  //becomes - HTMLFormContorlsCollectionObject.property
  //property is the value of name attribute of element
  //becomes - inputObject.property - returns string
  const searchTerm = this.elements.query.value;
  console.log(searchTerm);
  //clear value property
  this.elements.query.value = "";
});

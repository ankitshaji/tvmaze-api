//global elementObjects
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

//async anon callback function expression
//returns promiseObject - value-undefined/unless returned
form.addEventListener("submit", async function (e) {
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

  //returns promiseObject - pending to resolved(responseObject) - value is responseObject
  //put resolve(responseObject) value in variable
  //returns http stuctured - ResponseObeject - axios json string to object conversion (auto parse)
  const responseObject = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`
  );
  //await makes it synchronous code
  // console.dir(responseObject.data[0]); //array of objects
  const img = document.createElement("img");
  img.src = responseObject.data[0].show.image.medium; //string
  document.body.append(img);
   
  //clear value property
  this.elements.query.value = "";
});

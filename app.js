//global elementObjects
//elementObject = (JSObject/elementObject/nodeObject).method(css element selector)
const form = document.querySelector("#searchForm");

//elementObject.method(eventString,anonymousCallbackFunctionExpression(eventObject))
//eventString -"submit"
//eventObject - eg.submitEventObject-propeties/methods
//by default form eventObject sends HTTPRequest with FormData to action attributes location
//by default form eventObject moves onto next page location URL in action attribute

//method - addEventListner(eventString,anonymousCallbackFunctionExpression(parameter))
//make addEventListener() after defining  required functions
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

  //cleaner way to add multiple queryString parameters
  //can also add headers obejct in config
  //config object - property/key params has value object
  const config = { params: { q: searchTerm } };

  //returns promiseObject - pending to resolved(responseObject) - value is responseObject
  //put resolve(responseObject) ie promisObject value in variable
  //returns http stuctured - ResponseObeject - axios json string to object conversion (auto parse)
  //axios http strucuted request - default(method:GET/{headers:{Accept:text/HTML}}),takes argument - (url,headerObject,paramsObject)
  const responseObject = await axios.get(
    `https://api.tvmaze.com/search/shows`,
    config
  );
  //await makes it synchronous code
  //console.dir(responseObject.data[0]); //array of objects
  //code splitting/refactoring - function executes another function inside it
  makeImages(responseObject.data); //function execution - argument-array of objects

  //clear value property
  this.elements.query.value = "";
});

//arrow function expression stored in variable - takes 1 parameter
const makeImages = (arrayShows) => {
  for (let showObj of arrayShows) {
    //null is a falsy value - so wont run if null - if(false)
    if (showObj.show.image) {
      //creating new img element
      //adding to elementObject.src property
      //then adding it to to parent elementObejct
      const img = document.createElement("img");
      img.src = showObj.show.image.medium; //string
      document.body.append(img); //parentElementObject.append(childElementObject)
    }
    //else ignore
  }
};

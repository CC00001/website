var products = [
 {
   "Product 1:" : "Something 1",
   "Price:" : "$1.99",
   "Category:" : "gorcerys",
   "Area:" : "Unite States"
 },
 {
   "Product 2:" : "Something 2",
   "Price:" : "$2.99",
   "Category:" : "gorcerys",
   "Area:" : "Unite States"
 },
 {
   "Product 3:" : "Something 3",
   "Price:" : "$3.99",
   "Category:" : "gorcerys",
   "Area:" : "Unite States"
 },
 {
   "Product 4:" : "Something 4",
   "Price:" : "$4.99",
   "Category:" : "gorcerys",
   "Area:" : "Unite States"
 },
 {
   "Product 5:" : "Something 5",
   "Price:" : "$5.99",
   "Category:" : "gorcerys",
   "Area:" : "Unite States"
 }
];


function createTable(){
 var lenOfProducts = products.length;
 if(lenOfProducts > 0){
  //create Dyamic tale
  var table = document.createElement("table");
  table.style.width = "50%";
  table.setAttribute("border", "1");
  table.setAttribute("cellspacing", "0");
  table.setAttribute("cellpadding", "5");

// retrive column header
var jsArray = [];
for(var i = 0; i < lenOfProducts; i++){
 for(var p in products[i]){
  if(jsArray.indexOf(p) === -1){
   jsArray.push(p);
  }
 }
}

 // create table head 
  var tHead = document.createElement("tHead");

  // create row for table head
  var headerRow  = document.createElement("tr");

  // add column header to row of table head
  for(var i = 0; i < jsArray.length; i++){
   var th = document.createElement("th");
   th.innerHTML = jsArray[i];
   headerRow.appendChild(th);
  }
  tHead.appendChild(headerRow);
  table.appendChild(tHead);

  // create table body
  var tBody = document.createElement("tbody");
  
  // add column header to row of table head
  for(var i = 0; i < lenOfProducts; i++){
   var bodyRow = document.createElement("tr");
   for(var j = 0; j < jsArray.length; j++){
    var td = document.createElement("td");
    td.innerHTML = products[i][jsArray[j]];
    bodyRow.appendChild(td);
   }
   tBody.appendChild(bodyRow);
  }
  table.appendChild(tBody);
	
  // Finnally add the newly created table with JSON data to a container
  var container = document.getElementById("container");
  container.innerHTML = "";
  container.appendChild(table);
 }
}


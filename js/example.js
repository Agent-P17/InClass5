// ADD NEW ITEM TO END OF LIST
var newitem1 = document.createElement("li");
var endofthelist = document.createTextNode("cream");   //Adding cream to the list 
newitem1.appendChild(endofthelist);
document.getElementsByTagName("ul")[0].appendChild(newitem1); //adding cream at the bottom of the list.

// ADD NEW ITEM START OF LIST
var newitem2 = document.createElement("li"); 
var startofthelist = document.createTextNode("kale");   //adding kale to the list
newitem2.appendChild(startofthelist);
var orderedlist = document.getElementsByTagName("ul")[0];
orderedlist.insertBefore(newitem2, orderedlist.childNodes[0]); // adding kale to the top of the list

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var list = document.getElementsByTagName("li");
for ( var i =0;i <list.length;i++)                  //loop through the list to get numbere of items
{
    var li = list[i];
    li.className = "cool";
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

var hlist2 = document.getElementsByTagName("h2");       // Adds the text to header
var listnumber = list.length
if (hlist2.length > 0)
{
    var h2 = hlist2[0];
    h2.innerHTML += "<span>" + listnumber + "</span>";  //Will put number of items onlist.
}

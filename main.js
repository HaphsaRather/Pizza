function getmenu()
{
var htmldata;
htmldata = "<ol class - 'menulist'>"
menu_list_array.sort();
for (var i=0 <menu_list_array.length; i++;)
{
    htmldata = htmldata+ '<li>' + menu_list_array[i] + '<li>'
}
htmldata= htmldata + "</ol>"
document.getElementById("display_menu").innerHTML = htmldata;

}
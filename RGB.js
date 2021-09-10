
var td;
var tr;
var tableBody;
 
var myTableDiv
function random_rgba() {
   	var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}
function addTable() {
  myTableDiv = document.getElementById("myDynamicTable");

  var table = document.createElement('TABLE');
table.setAttribute('id', 'table')
  table.border = '1';

  tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  for (var i = 0; i < 3; i++) {
    tr = document.createElement('TR');
    tableBody.appendChild(tr);

    for (var j = 0; j < 4; j++) {
      td = document.createElement('TD');
		td.className = 'td';
      td.width = '75';
      td.appendChild(document.createTextNode(random_rgba()));
td.style.backgroundColor= random_rgba()
      tr.appendChild(td);
console.log(random_rgba())
    }
  }
  myTableDiv.appendChild(table);
}

function button() {
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 4; j++) {
 document.getElementById('table').rows[i].cells[j].style.backgroundColor = random_rgba()
 document.getElementById('table').rows[i].cells[j].innerHTML = random_rgba()
}
}
}


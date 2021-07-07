class MyClass {
        constructor(f,t,b,e,t2,b2){
         	this.from = f;
         	this.to1 = t;
            this.to2 = t2;
			this.by1 = b;
			this.by2= b2;
        	this.e = e;}
      
    }

 function convert() {
     var input = document.getElementById("string").value;


 //var  = 'A->aR R->bR|aS S->bT T->R|e';
 
            var array = input.split(" ");
            
                        var gxs = [];
                        
  for (let i = 0;i <array.length; i++) {
 if(array[i].length == 5){
gxs[i] = new MyClass(array[i].charAt(0),array[i].charAt(4),array[i].charAt(3),null,null,null);
 }
 else if(array[i].length == 8){
 gxs[i] = new MyClass(array[i].charAt(0),array[i].charAt(4),array[i].charAt(3),null,array[i].charAt(7),array[i].charAt(6))
 }
 else if(array[i].length == 6){
 gxs[i] = new MyClass(array[i].charAt(0),array[i].charAt(3),array[i].charAt(5),array[i].charAt(5),null,null);
 }
        
       }
       
        let events = [];
    for (let j = 0;j <array.length; j++)    
 for (let i = 0;i <array[j].length; i++) {
 if(array[j].charAt(i) >= 'a' && array[j].charAt(i) <= 'z'){
  events.push(array[j].charAt(i));
 }
 }
       let eventsee = [];
    for (let j = 0;j <array.length; j++)    
 for (let i = 0;i <array[j].length; i++) {
 if((array[j].charAt(i) >= 'a' && array[j].charAt(i) <= 'z')&&(array[j].charAt(i) != 'e' )){
  eventsee.push(array[j].charAt(i));
 }
 }
    let states = [];
    for (let j = 0;j <array.length; j++)    
 for (let i = 0;i <array[j].length; i++) {
 if(array[j].charAt(i) >= 'A' && array[j].charAt(i) <= 'Z'){
  states.push(array[j].charAt(i));
 }
 }
 
   let final = [];
    for (let j = 0;j <array.length; j++)    
 for (let i = 0;i <array[j].length; i++) {
 if(array[j].charAt(i) == 'e'){
  final.push(array[j].charAt(0));
 }
 }
            
      		let state = new Set (states);
            states = [...state];
             
             
             
         	let event1 = new Set (events);
      		events = [...event1];
            
      		let event = new Set (eventsee);
      		eventsee = [...event];

	document.write(events);  
	document.write("<br>"); 
	document.write(states);
    document.write("<br>");
    
    
    document.write("M = (Q,∑,δ,p0,F)");
    document.write("<br>");
    document.write("Q = {"+states+"}");
    document.write("<br>");
    document.write("∑ = {"+eventsee+"}");
    document.write("<br>");
    document.write("δ = Q x ∑e-> Pow(Q)");
    document.write("<br>");
    document.write("P0 = {"+states[0]+"}");
    document.write("<br>");
    document.write("F = {"+final+"}");
    
    
    const maxSize = Math.max(events.length, states.length);
	var table = new Array(maxSize); 
 
  
// Loop to create 2D array using 1D array 

for (var i = 0; i <= states.length ;i++) { 
    table[i] = []; 
} 


for (var i = 0; i < table.length; i++) { 
    for (var j = 0; j < states.length; j++) 
    {table[i][j]="\xa0"; }}
    
    
    
for (var i = 1; i <= events.length; i++) { 
table[0][i]=events[i-1];
 }
 
for (var i = 1; i <= maxSize; i++) { 
table[i][0]=states[i-1];
 }
 
 

var index;

for (var i = 0 ; i < states.length; i++) {
 for (var j = 0; j < table.length; j++) {
    if (gxs[i].from ==table[j][0]){
    if (gxs[i].to2==null){
    	index = events.indexOf(gxs[i].by1);
        table[j][index+1]=gxs[i].to1;
    }
    else {
    index = events.indexOf(gxs[i].by1);
        table[j][index+1]=gxs[i].to1;
    index = events.indexOf(gxs[i].by2);
        table[j][index+1]=gxs[i].to2;
    }
    
    }
}}

    var array = table;
    var table = document.getElementById("table");
        
           for(var i = 0; i < array.length; i++)
           {
               // create a new row
               var newRow = table.insertRow(table.length);
               for(var j = 0; j < array[i].length; j++)
               {
                   // create a new cell
                   var cell = newRow.insertCell(j);
                   
                   // add value to the cell
                   cell.innerHTML = array[i][j];
               }
           }

//const maxSize = Math.max(events.length, states.length);
    }


var str = "abe";
function wo(c){

for (var i = 0 ; i < gxs.length ; i++){
if( c == gxs[i].by1 )
return i;}
}


function wheretogo(c){

for (var i = 0 ; i < gxs.length ; i++){
if( c == gxs[i].from )
return i;
else
return gxs.length-1;
}
}

function check(){
var i = 0;
var j = 0 ;
var current = gxs[0].by1;

if(str[i] == current){

	if(gxs[j].t2==null&&gxs[j].e==null){

	j =wheretogo(gxs[j].t1);
	current= gxs[j].by1;
	i++;
	}


	else if(gxs[j].t2!=null&&gxs[j].e==null){
		if(gxs[j].t2==gxs[j].from ||gxs[j].t1==gxs[j].from){
		i++;
		}
		else{
		j=wheretogo(gxs[j].t1);
		current= gxs[j].by1;
		i++;
		}
	}
	else if(gxs[j].e !=null||current=='e'){
document.getElementById("demo").innerHTML = "true"}
	else {
document.getElementById("demo").innerHTML = "false"}
}
else {
document.getElementById("demo").innerHTML = "false"}
}

</script>

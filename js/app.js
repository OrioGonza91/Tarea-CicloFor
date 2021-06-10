// Array (matriz, vector) de number
// var numbers = [5, 7, 1,4, 8, 2, 6, 9];
// var numbers = [5, 7];

// for (que hace apenas se ejecuta el for, hasta cuando va a iterar, que debe hacer al finalizar cada iteracion)
// Mientras que i sea menor a la cantidad de elementos de la lista

// Recorremos de principio a fin
// for (var i = 0; i < numbers.length; i++)
// {


// 	console.log(numbers[i]);
// }

// Si tiene 5 elementos el ultimo indice es 4
// Si tiene 10 elementos el ultimo indice es 9
// Si tiene 15 elementos el ultimo indice es 14

// Recorremos de fin a principio
/*for (var j = numbers.length - 1; j >= 0; j--)
{
	console.log(numbers[j]);
}*/


//for (var i=0 ; i < numbers.length; i++) 
//{
//	console.log(numbers[i]);
//}


var numbers = [18,24,35,420,2,150,24,2,10,18]
var max = null; 
var min = numbers[0];
var repe = null;

for (var i = 0; i < numbers.length ; i++) 
{  
	if (numbers[i] > max) 
	{
		max = numbers[i];
	} 
}
console.log(max);

for (var i = 0; i < numbers.length ; i++) 
{  
	if (numbers[i] < min) 
	{
		min = numbers[i];
	} 
}
console.log(min);

for (var i =0; i < numbers.length; i++) 
{
	for (var j = i + 1; j < numbers.length; j++) 
	{
		if (numbers[i] === numbers[j]) 
		{
			aux = numbers[i];
		}
	}
		console.log(aux);
}

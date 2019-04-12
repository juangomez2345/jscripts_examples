
function sumArrayItems()
{
	const list = [1,3,8,2,9,0,5];
	console.log(list);
	
	let finalSumary=0;
	for(var index=0; index < list.length; index++)
	{
		finalSumary = finalSumary + list[index];
	}
	console.log(finalSumary);
}
//sumArrayItems();



function regExpValidation()
{
	/** (1 o 2 letras), un espacio en blanco, numeración (4 digitos), 
	un espacio en blanco y 3 letras (de la B a la Z, sin las vocales) */
	
	const validString = 'MX 1234 DBB';
	const invalidString = 'MXX 1234 BBB';
	
	//usando una cadena como expresion regular
	//var expreg = /^[A-Z]{1,2}\s\d{4}\s([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$/;

	//usando un objeto como expresion regular
	var expreg = new RegExp("^[A-Z]{1,2}\\s\\d{4}\\s([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$");


	if(expreg.test(validString))
	  console.log('valid'); 
    else 
      console.log('invalid');
	
}
//regExpValidation();



function elementParam(elemento)
{
	console.log(elemento);
	elemento.value = "newStirng";
}











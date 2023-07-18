function enviar(){
	
    var hoje=new Date();
	var dia1=hoje.getDate();
	var mes1=hoje.getMonth()+1;
	var ano1=hoje.getFullYear();
	var email=document.formulario.email.value;
	var estadocivil = document.formulario.estadocivil.value;
 	var nome = document.formulario.nome.value;
 	var dia=document.formulario.dia.value;
 	var mes=document.formulario.mes.value;
 	var ano=document.formulario.ano.value;
 	var sexo=document.formulario.sexo.value;
 	var frase1 = "";
 	 for( i = 0; i < 10; i++ ){
		i++;
		var c = document.getElementById("c" + i );
		var texto = document.getElementById("c" + i).value;
		var frase = ", " + texto;
		if (c.checked == true){
		if(frase1.length < 1){
		var frase1 = texto;
		}else{
		var frase1 = frase1 + frase;
      }
}
  
  }

	if(frase1.length < 1){
	var frase1 = "SEM INTERESSE NAS ÁREAS DISPONÍVEIS";
  }
 	
	var validaemail=false;
 	var validanome=false;
 	var validanascimento=false;
 	var validaidade=false;

	if(nome == "") {
	alert("Insira seu Nome Completo!");
	document.formulario.nome.focus();
	return false;
 }
	if(nome.length < 15) {
	alert("Nome Completo Por Favor...");
	document.formulario.nome.focus();
	return false;
 }

	if(isNaN(nome)== true) {
	validanome= true;

}

	if(email.indexOf("@")>0 && email.indexOf(".")>0 && email.length>9){
		
	document.formulario.dia.focus();
	validaemail=true;

}else {
	alert("Insira um Email Válido!");
	document.formulario.email.focus();
	return false;
 }

	if(isNaN(dia)==true || isNaN(mes)==true || isNaN(ano)== true) {
	alert("Apenas Números nos Campos de Data!");
	document.formulario.dia.focus();
	return false;
 }
	if(isNaN(dia)==false && isNaN(mes)==false && isNaN(ano)==false) {
 	if (dia < 1 || dia > 31 ) { 
 		alert("Dia Inválido!");
		document.formulario.dia.focus();
		return false;
		}
		if(dia.length == 1){
			var dia = "0" + dia;
		}
		if (mes < 1 || mes > 12 || mes.length > 2) {
			alert("Mês Inválido!");
			document.formulario.mes.focus();
			return false;
		}
		if(mes.length == 1){
			var mes = "0" + mes;
		}
		
		if (mes == "04" || mes == "06" || mes == "09" || mes == "11") {
			if( dia > 30){
			alert("Esse Mês Só Vai até o Dia 30 !");
			document.formulario.mes.focus();
			return false;
		}

			}
		if (mes == "02") {
			if( dia > 29){
			alert("Esse Mês Só Vai Até o Dia 29*. Verifique !\n *Ano Bissexto");
			document.formulario.mes.focus();
			return false;

			}

			
		}
		if ( ano < 1900 || ano > 2009) {
			alert("O ano tem que ser igual ou maior que 1900 e menos que 2009!");
			document.formulario.ano.focus();
			return false;
		}

		

 	}
 	//alert("A Data OK!");
 	validanascimento=true;
 	var datanascimento=dia.toString() + "/" + mes.toString() + "/" + ano.toString();

 	if (estadocivil == "") {
		 	alert("Escolha um Estado Civil");
		 	document.formulario.estadocivil.focus();
			return false;
		}
 	
 	var idade = ano1 - ano;
	var datahj = mes1.toString() + dia1.toString(); 
	var datansc = mes.toString() + dia.toString(); 
	var concluido = parseInt(datahj-datansc);

	//alert(ano1 + " - " + ano + " - " + idade + " - " + datahj + " - " + datansc + " - " + concluido );

	if(concluido < 0){
		idade--
		alert("Você Tem hoje " + idade + " Anos");
		
	}else{

		alert("Mensagem Enviada ! \n\nMeus Parabéns \nVocê Fez " + idade + " Anos.");
		
	}
	if(idade < 16 && estadocivil == "CASADO"){
			alert("Por ter Apenas " + idade + " Anos, Você deverá mudar seu Estado Civill ! \nPara Casados, Somente maiores de 15 anos...");
			document.formulario.estadocivil.focus();
			return false;

	}else{
		//alert("Idade OK!");
		validaidade=true;
	}
	
 if(validanome==true  && validaemail==true && validanascimento==true && validaidade==true) { 
 	
alert("Abaixo o Resumo dos Seus Dados: \n\n NOME: " + nome + "\n EMAIL: " + email + "\n DATA NASCIMENTO: " + datanascimento  + "\n IDADE: " +  idade + "\n ESTADO CIVIL: " + estadocivil + "\n SEXO: " + sexo + "\n ÁREAS DE INTERESSE: " + frase1 + "\n\n Dados Enviados com Sucesso!");

return true;
 }


}
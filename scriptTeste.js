/* 
  Via CEP:  https://viacep.com.br/
  Via CEP é uma APi ou serviço onde você passa um valor pela URL 
  e ele retorna um JSON. 
  Exemplo para acessar os dados JSON
  https://viacep.com.br/ws/30870200/json/  
 */

 // REQUISIÇÂO AJAX

  /* Execução de uma requisição para pegar os dados */


  function buscarCEP(){
    let campoCep = document.getElementById('cep').value;
   
    const ajaxRequisicao = new XMLHttpRequest();

    // Concatena a variável CEP a string para realizar a requisição.
    ajaxRequisicao.open('GET', 'https://viacep.com.br/ws/'+campoCep+'/json/');

    ajaxRequisicao.send();
 
    ajaxRequisicao.onload = function(){
      //Inseri no html a resposta de texto vindo do site via CEP
      //document.getElementById('texto').innerHTML= this.responseText;

      //Transformei texto em objeto:
      let obj = JSON.parse(this.responseText);
      let logradouro = obj.logradouro;
      let bairro = obj.bairro;
      let localidade = obj.localidade;
      let regiao =obj.regiao;
      let ibge = obj.ibge;
      let siafi = obj.siafi;
      document.getElementById('dados').innerHTML= 
      "Rua: " + logradouro +
      "<BR> Cidade: " + localidade + 
      "<BR> Bairro: "+ bairro +
      "<BR> Região: " + regiao +
      "<BR> IBGE: " + ibge +
      "<BR> SIAFI: " + siafi;

        }

   

  }





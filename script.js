
    const url = 'https://hp-api.herokuapp.com/api/characters'; //url da API para buscar personagens

//função que obtém uma casa    
async function obterCasa(){
    try {
        //faz uma requisição para a API
        const resposta = await fetch(url);

        //verifica se a requisição foi bem sucedida
        if(!resposta.ok) {
            throw new Error(`Erro: ${resposta.status} ${resposta.statusText}`);
        }

        //convertendo a resposta para JSON
        const dados = await resposta.json();


        //faz uma busca por hermione granger nos personagens da API 
        const hermione = dados.find(personagem => personagem.name ==='Hermione Granger')
   
        //implementar retorno da api ao clicar no botão
        //exibe a casa da Hermione 
        const elementoHouse = document.getElementById('house');
        if (hermione) {
            elementoHouse.textContent = `Hermione Granger pertence à casa: ${hermione.house}`;
        } else { 
            elementoHouse.textContent = `Personagem não não encontrada`;
        }
      } catch (erro) {
        //exibindo erros no elemento HTML
        const elementoHouse = document.getElementById('house');
        elementoHouse.textContent = `Erro ao obter dados:  ${erro.message}`;
      }
        
}

obterCasa();

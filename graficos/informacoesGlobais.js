const url=`https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-dados-globais.json`

async function visualizarInformacoesGlobais() {

    const resposta = await fetch(url);
    const dados = await resposta.json();
    
    //console.log(dados);
    let total_pessoas_mundo = parseFloat(dados.total_pessoas_mundo/1e9);
    let tempo_medio_deslocamento_para_trabalho = dados.tempo_medio_deslocamento_para_trabalho*60;
    let total_pessoas_que_necessitam_transporte_para_trabalho = parseFloat(dados.total_pessoas_que_necessitam_transporte_para_trabalho/1e9)


    const paragrafo = document.createElement("p");
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = `O trabalho agrega valor e propósito à vida das pessoas. Atualmente existem cerca de <span>${total_pessoas_mundo.toFixed(2)}</span> bilhões de pessoas no mundo, destes, cerca de 2 bilhões de pessoas precisam de um meio de transporte para chegar ao seu trabalho levando em média <span>${tempo_medio_deslocamento_para_trabalho} </span> minutos. <br> <br> 
    
    Isso significa que aproximadamente <span>${total_pessoas_que_necessitam_transporte_para_trabalho.toFixed(2)}</span> das pessoas dependem de algum meio de transporte para trabalhar. Considerando a média de tempo para chegar ao trabalho, cerca de 13% do tempo diário é passado em um meio de transporte. <br> <br> 
    
    Isso reflete não apenas a importância da infraestrutura de mobilidade, mas também o impacto que o transporte tem na qualidade de vida e na eficiência laboral. <br> <br> 
    
    Esse dado também pode ser útil para embasar discussões sobre sustentabilidade, urbanização e políticas públicas voltadas para melhorar os meios de transporte, como o incentivo a opções mais sustentáveis ou a criação de alternativas para reduzir o tempo gasto em deslocamentos.`;
    
    const container = document.getElementById("graficos-container");
    container.appendChild(paragrafo);
    
}

visualizarInformacoesGlobais();
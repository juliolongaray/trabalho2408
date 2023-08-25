
/**
 * Recebe um array com os nomes de pessoas e retorna um array invertido
 *
 * @param {*} people : Um array contendo um conjunto de nomes
 * @returns Um array com os nomes invertidos
 */
function invert(people){

    var  v = [];
    var j=0;    
    for (var i=people.length-1; i>=0; i--){
        v[j]=people[i]; 
        j++;      
    }
    
    return v;
}

/**
 * Essa função recebe um array de notas e retorna uma média
 *
 * @param {*} grades : Um array de notas
 * @returns Uma média a partir do array de notas
 */
function mean(grades){
    var media;
    if(grades.length>1){
    media=(grades[0]+grades[1]+grades[2])/3;
    }
    return media;
}

/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {*} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */
function isApproved(mean){

var situacao;
if(mean >=7){
    situacao="aprovado";
}else{
    situacao="reprovado";
}    

    return situacao;
}

/**
 * Recebe uma data no formato de string e transforma em um formato textual
 *
 * @param {*} strDate : Uma string no formato de data
 * @returns Uma descrição da data informada
 */
function wide(strDate){

    var dia, mes, ano;
    dia = strDate.slice(0,2);
    mes = strDate.slice(3,5);
    ano = strDate.slice(6,10);
    
    if(strDate.slice(2,3)!="/"){
        data="";
    }else{
    switch(mes){
    
        case "01":
            data = dia+" de janeiro de "+ano;
            break;
        case "02":
            data = dia+" de fevereiro de "+ano;
            break;        
        case "03":
            data = dia+ " de março de "+ ano;
            break;
        case "04":
            data = dia+" de abril de "+ano;
            break; 
        case "05":
            data = dia+" de maio de "+ano;
            break;
        case "06":
            data = dia+" de Junho de "+ano;
            break;
        case "07":
            data = dia+" de julho de "+ano;
            break;
        case "08":
            data = dia+" de agosto de "+ano;
            break;case "01":
        case "09":
            data = dia+" de setembro de "+ano;
            break;
        case "10":
            data = dia+" de outubro de "+ano;
            break;
        case "11":
            data = dia+" de novembro de "+ano;
            break; 
        case "12":
            data = dia+" de dezembro de "+ano;
            break;
        case "":
            data = "";
            break; 
 
                 
    }    }
    
    return data;
}

// Trecho utilizado pelos testes
exports._test = {
    invert: invert,
    mean: mean,
    isApproved: isApproved,
    wide: wide
}
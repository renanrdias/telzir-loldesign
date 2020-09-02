let info = [
    {
        key: 1,
        origem: "11",
        destino: "16",
        preco: 1.90
    },
    {
        key: 2,
        origem: "16",
        destino: "11",
        preco: 2.90
    },
    {
        key: 3,
        origem: "11",
        destino: "17",
        preco: 1.70 
    },
    {
        key: 4,
        origem: "17",
        destino: "11",
        preco: 2.70
    },
    {
        key: 5,
        origem: "11",
        destino: "18",
        preco: 0.90
    },
    {
        key: 6,
        origem: "18",
        destino: "11",
        preco: 1.90
    }
    
];

let planos = [{
    key: 1,
    nome: "Fale mais 30",
    fanquia: 30
},
{
    key: 2,
    nome: "Fale mais 60",
    fanquia: 60
},
{
    key: 3,
    nome: "Fale mais 120",
    fanquia: 120
}
];

let origens = [];
let destinos = [];

for (var i = 0; i<info.length; i++) {
    let value = info[i].origem;
    if(!origens.includes(value)){
        origens.push(value);
    }
}

let percentage = 0.1;

export {info, percentage, origens, planos};
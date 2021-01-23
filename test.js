function binaryConverter(decimalNumber){
    return;
}
function decimalConverter(binaryNumber){
    return;
}

const converters = [
    {
        name  : 'binary to decimal',
        converterfunction : decimalConverter
    },
    {
        name  : 'decimal to binary',
        converterfunction : binaryConverter
    }
]

for(let i=0;i<converters.length;i++){
    console.log(`${i+1},${converters[i].name}`);
}

const userOption;
// const converter = converters[userOption-1];

const converterfunc = converters[userinput-1].converterfunction;

const userinput;
console.log(converterfunc(userinput));
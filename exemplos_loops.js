//EXEMPLOS

import rl, { promptLoop } from 'readline-sync';
//1
let num = 0//rl.questionInt("Informe um número: ")

while(num <= 10){
    num ++;
    if (num % 2 == 0){
        continue;
    }
    else{
        console.log(num)
    }
}

//2
let idade = 0;
do {
    idade = rl.questionInt("Informe sua idade: ")
} while (num <= 18);
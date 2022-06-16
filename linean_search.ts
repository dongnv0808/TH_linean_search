let arr:number[] = [1, 2, 5, 6, 7, 10];

function findItemMiss(arr: number[]): number[]{
    let arrOutput: number[] = [];
    for(let i = 1; i <= 10; i++){
        if(arr.indexOf(i) == -1){
            arrOutput.push(i);
        }
    }
    return arrOutput;
}

console.log(findItemMiss(arr));
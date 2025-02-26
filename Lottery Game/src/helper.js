function genNum (n){
    let arr = new Array(n)
    for (let i =0 ;n>i;i++)
    {
        arr[i] = Math.floor(Math.random() * 10)
    }
    return arr
}

function sumTicket(arr)
{
    return arr.reduce((sum,curr)=>sum+curr ,0)
}

export {genNum, sumTicket}
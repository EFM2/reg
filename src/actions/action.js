export const Incrementer=(step)=>{
    return {type:'Incrementer',payLoad:step}
}
export const Decrementer=()=>{
    return {type:'Decrementer'}
}
export const Reset=()=>{
    return {type:'Reset'}
}
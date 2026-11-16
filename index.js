import adam from "./other.js"
const innerDiv=document.getElementById('inner')
const replyDiv=document.getElementById('reply')
const responseEl=document.getElementById('response')
const input=document.getElementById('inp')
const addBtn=document.getElementById('add')
const generateBtn=document.getElementById('generate')
const tickers=document.getElementById('ticks')
const symbols=[]


addBtn.addEventListener('click',()=>{
    if(symbols.length<3){
        console.log('p')
        tickers.textContent=''
        symbols.push(input.value)
        symbols.forEach(e=>tickers.textContent+=' '+e)
    }
})


async function stockData(){
    try{
const key='d11cfd1641c94bbfb669ef872bbfd1e6'
const symbolsJoined=symbols.join(',')
const url = `https://api.twelvedata.com/time_series?symbol=${symbolsJoined}&interval=1day&outputsize=3&apikey=${key}`;
const fetched= await fetch(url)
const result=await fetched.json()
return result}
catch(e){
    console.log('something went wrong')
}
}


generateBtn.addEventListener('click',()=>{
    async function dataa(){
        const response=await adam(await stockData())
        innerDiv.style.display='none'
        replyDiv.style.display='block'
        responseEl.textContent=response

        
    }
dataa()
})


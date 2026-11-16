import Groq from "https://esm.sh/groq-sdk"

const groq=new Groq({
    apiKey:'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',
    dangerouslyAllowBrowser: true
})


const key='d11cfd1641c94bbfb669ef872bbfd1e6 '
const symbols = "AAPL,MSFT,GOOGL,TSLA";
const url = `https://api.twelvedata.com/time_series?symbol=${symbols}&interval=1day&outputsize=3&apikey=${key}`;
const fetched= await fetch(url)
const result=await fetched.json()
export default async function adam(){
    const response= await groq.chat.completions.create({
    model:'qwen/qwen3.8-27b',
        messages:[{role:'system',content:`You are a stock broker who gives stock advice based on  the data you receive from the user. And your advice should be no less than 150 words. If its just one company you get data on just give advice on that data only, dont say anything elseBut if you recieve an error just say something went wrong`},
            {role:'user',content:JSON.stringify(result)}

        ]
    })
    console.log(response.choices[0].message.content)
}

adam()
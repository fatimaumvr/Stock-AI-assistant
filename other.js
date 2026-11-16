import Groq from "https://esm.sh/groq-sdk"

const groq=new Groq({
    apiKey:import.meta.env.Vite_GROQ_API_KEY,
    dangerouslyAllowBrowser: true
})




export default async function adam(data){
    try{
    const response= await groq.chat.completions.create({
    model:'qwen/qwen3.8-27b',
        messages:[{role:'system',content:`You are a stock broker who gives stock advice based on  the data you receive from the user. And your advice should be no less than 150 words. If its just one company you get data on just give advice on that data only, dont say anything elseBut if you recieve an error just say something went wrong`},
            {role:'user',content:JSON.stringify(data)}

        ]
    })
    console.log(response.choices[0].message.content)}catch(e){
        
    }
    
}


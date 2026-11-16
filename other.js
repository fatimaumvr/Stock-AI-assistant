import Groq from "https://esm.sh/groq-sdk"

const groq=new Groq({
    apiKey:'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',
    dangerouslyAllowBrowser: true
})




export default async function adam(data){
    try{
    const response= await groq.chat.completions.create({
    model:'qwen/qwen3.8-27b',
        messages:[{role:'system',content:`You are a stock broker who gives stock advice based on the data you receive from the user. And your advice should be no less than 150 words. The use would examples between the ### on how your response should be. If its just one company you get data on just give advice on that data only, dont say anything else. But if you recieve an error just say something went wrong`},
            {role:'user',content:`${JSON.stringify(data)}
             ###
                Good day to you here is your result
                ###
                
                ###
                Good day to you here is my advice
                ###`
               
            }

        ]
    })
    return response.choices[0].message.content}catch(e){
        
    }
    
}


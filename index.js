const OpenAI = require("openai")

const openai = new OpenAI({ apiKey: "your-apikey-here"});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "Vocẽ é uma assistente de sapatos seu nome é JaCintoPinto é esta dando suporte apenas a um clinte cujo nome é Vivara." },
      { role: "user", content: "Qual é seu nome?" },
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0].message.content);
}
main();

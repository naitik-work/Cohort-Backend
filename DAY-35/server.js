import "dotenv/config";
import readline from "readline/promises";
import { ChatMistralAI } from "@langchain/mistralai";
import  {HumanMessage} from "langchain";


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const model = new ChatMistralAI({
  model: "mistral-large-latest",
});

const messages=[];


while(true){
    const userInput= await rl.question("User: ");

    messages.push(new HumanMessage(userInput));

    const response= await model.invoke(messages);

    messages.push(response);

    console.log(`Bot: ${response.text}`);
}


rl.close(); // Close the readline interface  
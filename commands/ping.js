// Define "require" and Discord.js
import { createRequire } from "module";
const require = createRequire(import.meta.url);
module.exports = {
    name: 'ping',
    description: 'this command tells you your ping!',
    execute(message, args){
        message.channel.send('pong')
    }
}
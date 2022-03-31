import {spawn} from "child_process"

// const add = spawn('git', ['add','.'])
// add.stdout.on('data', data => console.log(`stdout: ${data}`));

// add.stderr.on('data', data => console.log(data)); 
// add.on('close', code => console.log(`child process exited with code ${code}`))

const commit = spawn('git', ['commit','-m',m])
commit.stdout.on('data', data => console.log(data))
commit.stderr.on('data', data => console.log(data)); 
commit.on('close', code => console.log(`child process exited with code ${code}`))


// const push = spawn('git', ['push','origin','main'])
// push.stdout.on('data', data => console.log(data))
// push.stderr.on('data', data => console.log(data)); 
// push.on('close', code => console.log(`child process exited with code ${code}`))



// import {spawn} from "child_process"


// const argv = process.argv.slice(2);


// const spawns = {
//     add : spawn("git", ['add','.']),
//     commit : spawn("git", ['commit','-m',"m"]),
//     push : spawn("git", ['push','origin','main']),
// }

// const rdr = readline.createInterface({input,output});
// rdr.question("Kill ?", out => {
//     for (const s in spawns){
//         spawns[s].kill()
//         console.log(spawns[s])
//     }
// })





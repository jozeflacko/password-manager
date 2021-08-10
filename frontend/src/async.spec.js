


test('async example', async (done)=> {

    console.log('1 Hello Daria');

    await new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('2 Hello Jozef');
            resolve();
        }, 2000);
    })

    console.log('3');








});
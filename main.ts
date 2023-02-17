async function ping() {
    const f = async (param: any) => console.log(`ping ${param}`);

    console.log('starting ping')
    await f(1);
    await f(2);
}

ping().then(()=>console.log('done'));

export {}

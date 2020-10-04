const url = 'https://reqres.in/api/users';

const getUser =  async (id) =>{
    let urlMod = `${url}/${id}`;
    console.log(urlMod)
    const resp = await fetch (urlMod);
    const {data } = resp.json();

    return data;
}

const crearUser = (usuario) => {
    const resp = await fetch (url, {
        method:'POST'
    });
}

export {
    getUser
}
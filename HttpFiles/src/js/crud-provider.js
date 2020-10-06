const url = 'https://reqres.in/api/users';

const getUser =  async (id) =>{

    try {
        let urlMod = `${url}/${id}`;

        console.log(urlMod)
        const resp = await fetch (urlMod);
        const data = resp.json();
    
        return data;
    } catch (ex) {
        console.log(ex)
    }

}

const crearUser = async (usuario) => {
    const resp = await fetch (url, {
        method:'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type':'aplication/json'
        }
    });

    return await resp.json()
}

const deleteUser =  async (id) =>{

    try {
        let urlMod = `${url}/${id}`;

        const resp = await fetch (urlMod, {
            method: 'DELETE'
        });
        // const data = resp.json();
        console.log(resp)
    
        return (resp.ok)?'Borrado': 'No se pudo eliminar';
    } catch (ex) {
        console.log(ex)
    }

}


export {
    getUser, 
    crearUser,
    deleteUser
}
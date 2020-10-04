const url = 'https://api.chucknorris.io/jokes/random';
const urlUsers = 'https://reqres.in/api/users?page=2';

const obtenerChiste = async ()=> {
    
    try {

        const resp = await fetch (url);
        if (!resp.ok) throw 'No se pudo obtener data';
    
        return await resp.json()

    } catch (err) {
        throw err;
    }
}

const obtenerUsuarios = async ()=>{
    try{

        const resp = await fetch(urlUsers);
        console.log('usuarios ', resp);
        const { data: usuarios } = await resp.json();
        if (usuarios) {
            return usuarios;
        } else {
            console.log('no existen datos ');
        }

    } catch (err) {
        console.log(err);
        throw err;
    }
}

export { obtenerChiste, obtenerUsuarios }
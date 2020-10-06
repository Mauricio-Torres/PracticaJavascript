const url = 'https://api.chucknorris.io/jokes/random';
const urlUsers = 'https://reqres.in/api/users?page=2';
const keyUpLoadData = 'y0ug8lv8';

const obtenerChiste = async ()=> {
    
    try {

        const resp = await fetch (url);
        if (!resp.ok) throw 'No se pudo obtener data';
    
        return await resp.json()

    } catch (err) {
        throw err;
    }
}

const subirFile = async (file, url) => {
    const formData = new FormData();
    formData.append('upload_preset', keyUpLoadData);
    formData.append('file', file);

    try {

        const resp = await fetch (url, {
            method: 'POST',
            body: formData
        });

        if (resp.ok) {
            return await resp.json()
        } else {
            throw await resp.json();
        }

    } catch (err) {
        throw err
    }
}

const obtenerUsuarios = async ()=>{
    try{

        const resp = await fetch(urlUsers);
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

export { obtenerChiste, obtenerUsuarios, subirFile }
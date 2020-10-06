import { subirFile } from "./http.provider";

const uploadImg = 'https://api.cloudinary.com/v1_1/maurox/image/upload';
const urlUpload = 'https://api.cloudinary.com/v1_1/maurox/upload';

const body = document.body;
let inputFile, imgFoto; 

const crearInputImg = () => {
    const html = `
    <h1 class="mt-5"> Subir Archivo </h1>
    <hr>
    <label> Selecciona una fotografia: </label>
    <input type="file" accept="image/png, image/jpeg">
    <br>
    <img id="foto" class="img-thumbnail" src="">
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div)

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');
}

const eventos = () => {
    inputFile.addEventListener('change', (event) => {
        console.log(event);
        const file = event.target.files[0];
        console.log(file)

        subirFile(file, urlUpload).then(( { secure_url: resp }) => { 
            imgFoto.src = resp
            // console.log(resp)

         });
    });
}

export const initUploadImg = () => {

    crearInputImg();
    eventos();
}
import { obtenerChiste } from "./http.provider";

const body = document.body;
let btnOtroChiste, olList;

const crearHtml = () => {
    const html1 = `
    <h1 class="mt-5"> Chistes </h1>

    <hr>

    <button class="btn btn-primary"> otro chiste  </button>

    <ol class="mt-2 list-group">
      <li class="list-group-item">.pp..</li>
    </ol>
  </body>`;

  const divChistes = document.createElement('div');
  divChistes.innerHTML = html1;

  body.append(divChistes);

}

const eventos = () => {
    olList = document.querySelector('ol');
    btnOtroChiste = document.querySelector('button');

    btnOtroChiste.addEventListener('click', async () => {
        btnOtroChiste.disabled = true;
        llamarChiste(await obtenerChiste());
        btnOtroChiste.disabled = false;
    });
}

const llamarChiste = (chiste) => {
    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${chiste.id}: </b> ${chiste.value}`;
    olItem.classList.add('list-group-item');

    olList.append(olItem);
}

export const initChistes = () => {
    crearHtml();
    eventos();
}
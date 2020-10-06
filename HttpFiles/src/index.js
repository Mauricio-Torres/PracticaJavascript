
import { initChistes } from './js/chistes-page';
import { initUsuarios } from './js/usuarios-page';

import * as CRUD from './js/crud-provider';
import { initUploadImg } from './js/file';


initChistes()
initUsuarios()
initUploadImg()

// obtenerChiste().then(console.log)
//obtenerUsuarios().then(console.log)

// CRUD.getUser(2).then(console.log)
// CRUD.deleteUser(1).then(console.log)
// CRUD.crearUser({name:'mauro', job: 'ccc' }).then(console.log )
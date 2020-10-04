
import { initChistes } from './js/chistes-page';
import { initUsuarios } from './js/usuarios-page';

import * as CRUD from './js/crud-provider';


initChistes()
initUsuarios()

// obtenerChiste().then(console.log)
//obtenerUsuarios().then(console.log)

CRUD.getUser(1).then(console.log)
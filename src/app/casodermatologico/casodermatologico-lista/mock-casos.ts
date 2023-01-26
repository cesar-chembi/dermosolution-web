import { Caso } from './caso';

export const CASOS: Caso[] = [
  { id: 1, fecharegistro: '20/12/2022', descripcion: 'prueba ',
  paciente:{ nombre:'Pedro Perez', documento: '1111111', edad:20, id:1,  nacionalidad:'colombia', sexo:'Masculino',
  tipodocumento:'Cedula'}
  ,estado:'1'},
  { id: 2, fecharegistro: '13/11/2022', descripcion: 'prueba ',
  paciente:{ nombre:'Maria Castroz', documento: '1111111', edad:30, id:1,  nacionalidad:'peru', sexo:'Femenino', tipodocumento:'Cedula'}
  ,estado:'2'},
  { id: 3, fecharegistro: '10/01/2023', descripcion: 'prueba ',
  paciente:{ nombre:'Pedro Perez', documento: '1111111', edad:20, id:1,  nacionalidad:'colombia', sexo:'Masculino', tipodocumento:'Cedula'}
  ,estado:'1'},
  { id: 4, fecharegistro: '18/12/2022', descripcion: 'prueba ',
  paciente:{ nombre:'Pedro Perez', documento: '1111111', edad:20, id:1,  nacionalidad:'colombia', sexo:'Masculino', tipodocumento:'Cedula'}
  ,estado:'2'},
  { id: 5, fecharegistro: '15/11/2022', descripcion: 'prueba ',
  paciente:{ nombre:'Pedro Perez', documento: '1111111', edad:20, id:1,  nacionalidad:'colombia', sexo:'Masculino', tipodocumento:'Cedula'}
  ,estado:'1'}

];


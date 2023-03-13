
const host = 'http://localhost:8000/';
//const host = 'https://dermosbkend.onrender.com/';

export const environment = {
  production: false,
  urlCasosMedicos: `${host}api/v1/casos-medicos/`,
  urlMedico: `${host}api/v1/medicos/`,
  urlPaciente: `${host}api/v1/pacientes/`,
  urlEspecialidad: `${host}api/v1/especialiades/`,
  urlEspecialidadMedico: `${host}api/v1/medicosespecialidad/`,
  urlSoportesMedico: `${host}api/v1/soportes/`,
  urlSeguimientosMedico: `${host}api/v1/seguimientomedico/`,
  urlSeguimientosImagenes: `${host}api/v1/imagenesdiagnostica/`,
  urlSeguimientos: `${host}api/v1/seguimientos/`,
  urlLogin: `${host}api-user-login/`,
  urlLogout: `${host}logout/`
}



const host = 'https://dermosbkend.onrender.com/';

export const environment = {
  production: true,
  urlMedico: `${host}api/v1/medicos/`,
  urlPaciente: `${host}api/v1/pacientes/`,
  urlEspecialidad: `${host}api/v1/especialiades/`,
  urlEspecialidadMedico: `${host}api/v1/medicosespecialidad/`,
  urlSoportesMedico: `${host}api/v1/soportes/`,
  urlLogin: `${host}login/`,
  urlInfoUsuario: `${host}user-from-token/`,
  urlLogout: `${host}logout/`
}

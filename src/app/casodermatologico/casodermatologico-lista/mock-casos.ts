import { Caso } from './caso';

export const CASOS: Caso[] = [
  { id: 1, fecharegistro: '20/12/2011',
    paciente:{ nombre:'Pedro Perez', documento: '1111111', edad:20, id:1,
  nacionalidad:'colombia', sexo:'Masculino',
  tipodocumento:'Cedula', lugarresidencia:'Bogota'},
  perfildermatologico: { formalesion: "formalesion", tipolesion: "tipolesion", numerolesion: "numerolesion",
  colorlesion: "colorlesion", localizacionlesion: "localizacion"},
  diagnostico:"diagnostico",
  fotografias:

  [
    {
      "identificador": "1",
      "url": "www.google.com",
    },

    {
      "identificador": "2",
      "url": "www.google.com",
    },
    {
      "identificador": "3",
      "url": "www.google.com",
    }

  ],
  descripcion:"descripcion",
  estado: "2"
  },

  { id: 2, fecharegistro: '20/12/2012',
    paciente:{ nombre:'Diana Rojas', documento: '1111111', edad:40, id:2, nacionalidad:'Brazil', sexo:'Masculino',  tipodocumento:'Cedula', lugarresidencia:'Bogota'},
    perfildermatologico: { formalesion: "formalesion", tipolesion: "tipolesion", numerolesion: "numerolesion", colorlesion: "colorlesion", localizacionlesion: "localizacion"},
    diagnostico:"valores listo en 1 diagnostico",
    fotografias:

  [
    {
      "identificador": "1",
      "url": "www.google.com",
    },

    {
      "identificador": "2",
      "url": "www.google.com",
    },
    {
      "identificador": "3",
      "url": "www.google.com",
    }

  ],
  descripcion:"descripcion para la segunda parte",
  estado: "2"
  },
  { id: 3, fecharegistro: '20/12/2013',
    paciente:{ nombre:'Jose Sanchez', documento: '1111111', edad:35, id:3, nacionalidad:' France', sexo:'Masculino', tipodocumento:'Cedula', lugarresidencia:'Bogota'},
    perfildermatologico: { formalesion: "formalesion", tipolesion: "tipolesion", numerolesion: "numerolesion", colorlesion: "colorlesion", localizacionlesion: "localizacion"},
    diagnostico:"diagnostico1",
    fotografias:

  [
    {
      "identificador": "1",
      "url": "www.google.com",
    },

    {
      "identificador": "2",
      "url": "www.google.com",
    },
    {
      "identificador": "3",
      "url": "www.google.com",
    }

  ],
  descripcion:"descripcion para la tercera parte",
  estado: "2"
  },
  { id: 4, fecharegistro: '20/12/2014',
    paciente:{ nombre:'Martha Rojas', documento: '1111111', edad:50, id:4, nacionalidad:'China', sexo:'Femenino',tipodocumento:'Cedula', lugarresidencia:'Bogota'},
    perfildermatologico: { formalesion: "formalesion", tipolesion: "tipolesion", numerolesion: "numerolesion",  colorlesion: "colorlesion", localizacionlesion: "localizacion"},
    diagnostico:"diagnostico2",
  fotografias:

  [
    {
      "identificador": "1",
      "url": "www.google.com",
    },

    {
      "identificador": "2",
      "url": "www.google.com",
    },
    {
      "identificador": "3",
      "url": "www.google.com",
    }

  ],
  descripcion:"descripcion para la cuarta parte",
  estado: "2"
  },
  { id: 5, fecharegistro: '20/12/2015',
    paciente:{ nombre:'Johan Uribe', documento: '1111111', edad:42, id:5,nacionalidad:'Japan', sexo:'Masculino',  tipodocumento:'Cedula', lugarresidencia:'Bogota'},
    perfildermatologico: { formalesion: "formalesion", tipolesion: "tipolesion", numerolesion: "numerolesion", colorlesion: "colorlesion", localizacionlesion: "localizacion"},
    diagnostico:"diagnostico",
  fotografias:

  [
    {
      "identificador": "1",
      "url": "www.google.com",
    },

    {
      "identificador": "2",
      "url": "www.google.com",
    },
    {
      "identificador": "3",
      "url": "www.google.com",
    }

  ],
  descripcion:"descripcion para la quinta parte",
  estado: "2"
  },

  { id: 6, fecharegistro: '20/12/2016',
    paciente:{ nombre:'Lina Gomez', documento: '1111111', edad: 31, id:1, nacionalidad:'Spain', sexo:'Femenino',  tipodocumento:'Cedula', lugarresidencia:'Bogota'},
    perfildermatologico: { formalesion: "formalesion", tipolesion: "tipolesion", numerolesion: "numerolesion",  colorlesion: "colorlesion", localizacionlesion: "localizacion"},
    diagnostico:"diagnostico",
  fotografias:

  [
    {
      "identificador": "1",
      "url": "www.google.com",
    },

    {
      "identificador": "2",
      "url": "www.google.com",
    },
    {
      "identificador": "3",
      "url": "www.google.com",
    }

  ],
  descripcion:"descripcion para la sexta parte",
  estado: "2"
  }

];


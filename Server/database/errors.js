export const handleErrors = (code) => {
  if (!code) {
    return {
      status: 500,
      message: "Error de servidor: Error desconocido",
    };
  }
  switch (code) {
    case "404":
      return {
        status: 404,
        message: "Error: Solicitud no encontrada",
      };

    case "400":
      return {
        status: 400,
        message: "Error en la solicitud: Uno o mas campos esta en blanco",
      };

    case "405":
      return {
        status: 405,
        message: "Error en la solicitud: parametro invalido o no existente",
      };

    case "413":
      return {
        status: 413,
        message:
          "Error en la solicitud: Uno o mas campos excede el limite de caracteres (Titulo: 25 max. Img: 1000 max. Descripcion: 255 max.)",
      };
  }
};

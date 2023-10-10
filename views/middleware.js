const { buscarEmpresaPorId } = require('../app');

const agregarVariablesComunes = (req, res, next) => {
  const empresaId = req.params.id;
  const empresaInfo = buscarEmpresaPorId(empresaId);

  if (empresaInfo) {
    res.locals.nombre_empresa = empresaInfo.nombre;
    res.locals.id = empresaId;
    res.locals.lema_empresa = empresaInfo.contacto.lema;
    res.locals.direccion_empresa = empresaInfo.contacto.direccion;
    res.locals.telefono_empresa = empresaInfo.contacto.telefono;
    res.locals.correo_empresa = empresaInfo.contacto.sitio_web;
    res.locals.red_facebook = empresaInfo.contacto.redes.facebook;
    res.locals.red_twitter = empresaInfo.contacto.redes.twitter;
    res.locals.red_linkedin = empresaInfo.contacto.redes.linkedin;
  }

  next();
};

module.exports = { agregarVariablesComunes };

const express = require('express');
const app = express();

app.engine('ejs', require('ejs').renderFile);

const empresas = [
  {
    id: 1,
    nombre: 'InnovateTech Solutions',
    descripcion:
      'InnovateTech Solutions es una empresa ficticia dedicada a la innovación tecnológica y la creación de soluciones tecnológicas de vanguardia para empresas y particulares. Nuestro compromiso es impulsar el progreso mediante la tecnología, brindando servicios de desarrollo de software, consultoría en TI y diseño de soluciones personalizadas.',
    inicio:
      'InnovateTech Solutions fue fundada en el año 2010 por un grupo de jóvenes emprendedores apasionados por la tecnología. Comenzaron como una pequeña startup en un garaje, desarrollando aplicaciones móviles y sitios web para clientes locales. A medida que ganaron experiencia y reputación, la empresa comenzó a expandirse rápidamente.',
    inicioValores:
      'En InnovateTech Solutions, nos enorgullece nuestra pasión por la innovación y la calidad. Nuestro equipo está formado por ingenieros, desarrolladores y consultores altamente calificados que se esfuerzan por superar los límites de la tecnología. Nos enfocamos en los siguientes valores fundamentales:',
    valores: {
      innovacion:
        'Estamos constantemente buscando nuevas formas de abordar desafíos tecnológicos y encontrar soluciones creativas.',
      calidad:
        'Nos comprometemos a ofrecer productos y servicios de la más alta calidad para satisfacer las necesidades de nuestros clientes.',
      colaboracion:
        'Trabajamos en estrecha colaboración con nuestros clientes para comprender sus objetivos y desafíos, y juntos creamos soluciones personalizadas.',
      responsabilidad:
        'Somos conscientes de nuestro impacto en la sociedad y el medio ambiente, y actuamos de manera responsable en todo lo que hacemos.',
    },
    imagenInicio:
      'https://www.varadero.es/wp-content/uploads/2020/03/servcios-it-desarrollo-software.png',
    servicios: {
      imagen:
        'https://w7.pngwing.com/pngs/881/744/png-transparent-business-software-development-marketing-service-business-web-design-text-service.png',
      s1: {
        titulo: 'Desarrollo de Software Mucho Mas Personalizado',
        descripcion:
          'Creamos aplicaciones y software a medida para tu negocio, adaptados a tus necesidades',
      },
      s2: {
        titulo: 'Consultoría en Tecnología de la Información',
        descripcion:
          'Ofrecemos asesoramiento en TI para optimizar tus operaciones y mantener tu tecnología actualizada',
      },
      s3: {
        titulo: 'Investigación y Desarrollo de Tecnología Avanzada',
        descripcion:
          'Exploramos tecnologías innovadoras como la inteligencia artificial y creamos soluciones de vanguardia',
      },
    },
    evolucion:
      'A lo largo de los años, InnovateTech Solutions ha experimentado un crecimiento constante. En 2015, abrimos nuestra primera oficina regional en una ciudad importante y ampliamos nuestra cartera de servicios para incluir consultoría en TI. En 2018, nos convertimos en una empresa reconocida a nivel nacional y expandimos nuestras operaciones a nivel internacional, abriendo sucursales en varios países. En 2020, lanzamos nuestra división de investigación y desarrollo, dedicada a la creación de tecnologías de vanguardia.',
    acerca_nosotros:
      'En un mundo en constante evolución, impulsado por avances tecnológicos y cambios sin precedentes, la necesidad de innovación y progreso nunca ha sido tan crucial. En este panorama en constante cambio, nace InnovateTech Solutions, una empresa ficticia que surge de la pasión y el compromiso de un grupo de visionarios tecnológicos.',
    detalle: {
      mision:
        'En InnovateTech Solutions, nuestra misión es impulsar la innovación tecnológica para transformar y mejorar la vida de las personas y las empresas. Estamos comprometidos en proporcionar soluciones tecnológicas de vanguardia que resuelvan problemas complejos y aumenten la eficiencia en diversos sectores.',
      vision:
        'Queremos ser líderes globales en la creación de tecnología de vanguardia, ser reconocidos por nuestro compromiso con la calidad y la innovación, y contribuir de manera significativa al avance de la sociedad a través de la tecnología.',
      imagen: 'https://csemvit.github.io/assets/img/vision-mission.jpeg',
    },
    contacto: {
      lema: 'Estamos aquí para ayudarte a impulsar la innovación y la tecnología en tu negocio. ¡Esperamos trabajar contigo en futuros proyectos emocionantes!',
      direccion: '123 Avenida Tecnológica Ciudad Innovación, País Ficticio',
      telefono: '+1 (123) 456-7890',
      correo: 'info@innovatetechsolutions.com',
      sitio_web: 'http://www.innovatetechsolutions.com/',
      redes: {
        facebook: 'Facebook InnovateTech Solutions',
        twitter: 'Twitter InnovateTech Solutions',
        linkedin: 'Linkedin InnovateTech Solutions',
      },
    },
  },
  {
    id: 2,
    nombre: 'GreenEco Solutions',
    descripcion:
      'GreenEco Solutions es una empresa ficticia dedicada a ofrecer soluciones sostenibles para empresas y comunidades. Nuestro enfoque principal es desarrollar tecnologías y estrategias innovadoras que ayuden a proteger el medio ambiente y promover la responsabilidad social corporativa.',
    inicio:
      'GreenEco Solutions fue fundada en el año 2012 por un grupo de expertos en medio ambiente y energía. Comenzaron como una pequeña firma de consultoría en sostenibilidad, asesorando a empresas locales sobre prácticas ecoamigables. A medida que la conciencia ambiental creció, la empresa también lo hizo.',
    valores: {
      innovacion:
        'Buscamos continuamente formas innovadoras de abordar los desafíos ambientales y desarrollar tecnologías ecológicas',
      calidad:
        'Trabajamos en estrecha colaboración con nuestros clientes para ayudarlos a implementar prácticas sostenibles y alcanzar sus objetivos de responsabilidad social',
      colaboracion:
        'Creemos en la importancia de educar a las empresas y comunidades sobre la sostenibilidad y cómo pueden contribuir al bienestar del planeta',
      responsabilidad:
        'Estamos comprometidos con la búsqueda de soluciones sostenibles que minimicen el impacto ambiental y fomenten la responsabilidad social corporativa',
    },
    imagenInicio:
      'https://www.isdi.education/uploads/media/open-graph/01/4311-tecnolog%C3%ADas%20innovadoras.jpg?v=1-0',
    servicios: {
      imagen:
        'https://icapmaestriagerenciaproyectos.files.wordpress.com/2016/03/gestion_integral_residuos.jpg',
      s1: {
        titulo: 'Servicio de Consultoría en Sostenibilidad Empresarial',
        descripcion:
          'Evaluamos sus prácticas actuales, identificamos áreas de mejora y desarrollamos estrategias sostenibles para maximizar la responsabilidad social corporativa y reducir el impacto ambiental',
      },
      s2: {
        titulo: 'Desarrollo de Tecnologías de Energía Renovable',
        descripcion:
          'Ofrecemos soluciones personalizadas de energía solar y eólica para empresas y comunidades, ayudando a reducir la dependencia de combustibles fósiles y promoviendo la transición hacia fuentes de energía más limpias y sostenibles',
      },
      s3: {
        titulo: 'Gestión Integral de Residuos',
        descripcion:
          'Ayudamos a las organizaciones a implementar estrategias eficaces de gestión de residuos que reduzcan los costos y promuevan un ciclo de vida más sostenible para los materiales',
      },
    },
    evolucion:
      'A lo largo de los años, GreenEco Solutions ha crecido significativamente. En 2015, lanzamos nuestra división de desarrollo de tecnologías sostenibles, enfocándonos en energía renovable y gestión de residuos. En 2018, abrimos oficinas en varias ciudades y expandimos nuestro alcance a nivel internacional. En 2020, inauguramos nuestro laboratorio de investigación dedicado a la innovación sostenible.',
    acerca_nosotros:
      'En GreenEco Solutions, nos apasiona la protección del planeta y la promoción de prácticas empresariales responsables. Nuestro equipo está formado por científicos, ingenieros y consultores comprometidos con la sostenibilidad. Nuestros valores fundamentales incluyen:',
    detalle: {
      mision:
        'Nuestra Misión en GreenEco Solutions es liderar el camino hacia un mundo más sostenible y responsable. Nos esforzamos por desarrollar soluciones innovadoras que minimicen el impacto ambiental y promuevan la responsabilidad social corporativa. Trabajamos en estrecha colaboración con nuestros clientes para ayudarlos a adoptar prácticas ecoamigables y contribuir al bienestar del planeta.',
      vision:
        'Nuestra Visión es ser reconocidos como líderes en el campo de la sostenibilidad y la innovación ecológica a nivel mundial. Buscamos un futuro en el que las empresas y las comunidades abracen activamente la sostenibilidad como un pilar fundamental de sus operaciones, y GreenEco Solutions estará en la vanguardia de este movimiento global hacia un mundo más verde y responsable.',
      imagen: 'https://csemvit.github.io/assets/img/vision-mission.jpeg',
    },
    contacto: {
      lema: 'En GreenEco Solutions, estamos comprometidos con un futuro más sostenible y esperamos colaborar contigo en proyectos que beneficien al medio ambiente y a la sociedad. ¡Contáctanos para comenzar a trabajar juntos en soluciones sostenibles!',
      direccion: '456 Calle Verde Ciudad Sostenible, País Ficticio',
      telefono: '+1 (234) 567-8901',
      correo: 'info@greenecosolutions.com',
      sitio_web: 'http://www.greenecosolutions.com/',
      redes: {
        facebook: 'Facebook GreenEco Solutions',
        twitter: 'Twitter GreenEco Solutions',
        linkedin: 'Linkedin GreenEco Solutions',
      },
    },
  },
];

// Funcion para buscar en ID de la empresa
function buscarEmpresaPorId(id) {
  return empresas.find((empresa) => empresa.id === parseInt(id));
}

module.exports = {
  buscarEmpresaPorId,
};

const { agregarVariablesComunes } = require('./views/middleware');

app.get('/empresa/:id', agregarVariablesComunes, (req, res) => {
  const empresaId = req.params.id;
  const empresaInfo = buscarEmpresaPorId(empresaId);

  if (empresaInfo) {
    res.render('plantilla.ejs', {
      presentacion_empresa: empresaInfo.descripcion,
      servicio1_titulo: empresaInfo.servicios.s1.titulo,
      servicio1_descripcion: empresaInfo.servicios.s1.descripcion,
      servicio2_titulo: empresaInfo.servicios.s2.titulo,
      servicio2_descripcion: empresaInfo.servicios.s2.descripcion,
      servicio3_titulo: empresaInfo.servicios.s3.titulo,
      servicio3_descripcion: empresaInfo.servicios.s3.descripcion,
      imagen_servicio: empresaInfo.servicios.imagen,
    });
  } else {
    res.status(404).send('Empresa no encontrada');
  }
});

// RUTA INICIO
app.get('/empresa/:id/inicio', agregarVariablesComunes, (req, res) => {
  const empresaId = req.params.id; // Obtener el valor de id desde la URL
  const empresaInfo = buscarEmpresaPorId(empresaId);

  if (empresaInfo) {
    res.render('inicio.ejs', {
      inicio: empresaInfo.inicio,
      inicio_valores: empresaInfo.inicioValores,
      evolucion: empresaInfo.evolucion,
      valor_innovacion: empresaInfo.valores.innovacion,
      valor_calidad: empresaInfo.valores.calidad,
      valor_colaboracion: empresaInfo.valores.colaboracion,
      valor_responsabilidad: empresaInfo.valores.responsabilidad,
      imagen_inicio: empresaInfo.imagenInicio,
    });
  }
});

// RUTA ACERCA DE NOSOTROS
app.get('/empresa/:id/acerca', agregarVariablesComunes, (req, res) => {
  const empresaId = req.params.id; // Obtener el valor de id desde la URL
  const empresaInfo = buscarEmpresaPorId(empresaId);

  if (empresaInfo) {
    res.render('acerca.ejs', {
      acerca_nosotros: empresaInfo.acerca_nosotros,
      mision_empresa: empresaInfo.detalle.mision,
      vision_empresa: empresaInfo.detalle.vision,
      imagen: empresaInfo.detalle.imagen,
    });
  }
});

// RUTA CONTACTO
app.get('/empresa/:id/contacto', agregarVariablesComunes, (req, res) => {
  const empresaId = req.params.id; // Obtener el valor de id desde la URL
  const empresaInfo = buscarEmpresaPorId(empresaId);

  if (empresaInfo) {
    res.render('contacto.ejs');
  }
});

app.listen(3000, () => {
  console.log('Ejecutándose en el puerto 3000');
});

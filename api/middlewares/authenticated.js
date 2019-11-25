//AUTHENTICATED
'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta_curso';

exports.ensureAuth = function(req, res, next){
  if (!req.headers.authorization) {
    return res.status(403).send({message: 'La petición no tiene la cabecera de autenticación'});

  }

  var token = req.headers.authorization.replace(/['"]+/g, '');

  try {
    var payload = jwt.decode(token, secret);
    if (payload.exp <= moment().unix()) {
      return res.status(401).send({message: 'EL TOKEN HA EXPIRADO'});
    }
  } catch(ex) {
    //console.log(ex);
    return res.status(404).send({message: 'EL TOKEN NO ES VÁLIDO'});
  }

  req.user = payload;

  next();
};

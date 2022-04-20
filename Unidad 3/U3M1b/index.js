var moment = require('moment');
moment.locale('es');

console.log('Naci '+ moment('16/05/1998', 'DD/MM/YYYY').fromNow());
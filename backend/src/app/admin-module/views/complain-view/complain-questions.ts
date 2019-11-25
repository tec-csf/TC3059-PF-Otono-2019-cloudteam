import {
  InfoViewQuestion,
} from '../../../app-modules/form-module';
/* uId:  {type: ObjectId, ref: ‘User’},
	placeEvent: {type: ObjectId, ref: ‘Place/Event’},
	description: String,
	manager:  {type: ObjectId, ref: Admin},
	status: ‘open’ | ’assigned’ | ‘viewed’ | ‘in-process’ | ’rejected’ |  ‘closed’
	userRate: number,
	answers: number[],
	finalComment: String,
*/

export const COMPLAIN_QUESTIONS = [
  new InfoViewQuestion({
    key: 'uId',
    label: 'Usuario',
    isLink: true,
    route: ['/admin', 'user'],
    required: true,
    order: 1,
  }),
  new InfoViewQuestion({
    key: 'placeEvent',
    label: 'Espacio / Evento',
    isLink: true,
    route: ['/admin', 'space'],
    required: true,
    order: 1,
  }),
  new InfoViewQuestion({
    key: 'manager',
    label: 'Administrador',
    isLink: true,
    route: ['/admin', 'admin'],
    required: true,
    order: 1,
  }),
  new InfoViewQuestion({
    key: 'description',
    label: 'Descripción',
    required: true,
    order: 1,
  }),
  new InfoViewQuestion({
    key: 'userRate',
    label: 'Calificación de usuario',
    required: true,
    order: 1,
  }),
  new InfoViewQuestion({
    key: 'finalComment',
    label: 'Comentario final',
    required: true,
    order: 1,
  })
];

export const PARTIAL_COMPLAIN_QUESTIONS = COMPLAIN_QUESTIONS;

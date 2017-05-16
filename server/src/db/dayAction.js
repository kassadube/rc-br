import {thinky} from './thinky';

const type = thinky.type;
export const DayAction = thinky.createModel('DayAction', {
  change: type.number().required(),
  numOfAction: type.number().required(),
  buyingDate: type.date().default(thinky.r.now()),
});

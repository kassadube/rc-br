import {thinky} from './thinky';

const type = thinky.type;
export const Question = thinky.createModel('Question', {
  text: type.string().required(),
  creationDate: type.date().default(thinky.r.now()),
  expirationDate: type.date().required(),
  answers: type.array().schema(
    type.object().schema({
      user: type.string().required(),
      answer: type.string().required(),
    }),
  ).default([]),
  owner: type.string().required(),
});

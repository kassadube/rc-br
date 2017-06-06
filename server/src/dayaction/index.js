
import get from './get';
import add from './add';
import deleteAction from './delete';


export default (app) => {
  get(app);
  add(app);
  deleteAction(app);
};

import {createRealmContext} from '@realm/react';
import {UsersSchema} from './Users';
const config = {
  schema: [UsersSchema],
};

const RealmContext = createRealmContext(config);

export default RealmContext;

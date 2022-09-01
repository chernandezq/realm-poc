export const UsersSchema = {
  name: 'User',
  primaryKey: '_id',
  properties: {
    _id: 'int',
    name: 'string',
    isActive: {type: 'bool', default: false},
  },
};

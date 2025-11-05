import { UserrSchema } from './userr.schema';
import { Schema } from 'mongoose';

describe('UserSchema', () => {
  it('should be defined', () => {
    expect(UserrSchema).toBeDefined();
  });

  it('should be a Mongoose Schema', () => {
    expect(UserrSchema).toBeInstanceOf(Schema);
  });
});

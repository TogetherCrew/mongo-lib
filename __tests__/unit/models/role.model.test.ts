import { Role } from '../../../src/models';
import { IRole } from '../../../src/interfaces';

describe('Role model', () => {
    describe('role validation', () => {
        let role: IRole;
        beforeEach(() => {
            role = {
                id: '123',
                name: 'role1',
                color: 1234,
            };
        });
        test('should correctly validate a valid Role data', async () => {
            await expect(new Role(role).validate()).resolves.toBeUndefined();
        });
    });
});

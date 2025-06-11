import { IThread } from '../../../src/interfaces';
import { Thread } from '../../../src/models';

describe('Thread model', () => {
  describe('thread validation', () => {
    let thread: IThread;
    beforeEach(() => {
      thread = {
        id: '123456789012345678',
        type: 11,
        guild_id: '987654321098765432',
        parent_id: '111111111111111111',
        owner_id: '222222222222222222',
        name: 'Test Thread',
        last_message_id: '333333333333333333',
        message_count: 5,
        member_count: 3,
        rate_limit_per_user: 0,
        thread_metadata: {
          archived: false,
          auto_archive_duration: 1440,
          archive_timestamp: '2024-01-01T00:00:00.000Z',
          locked: false,
          invitable: true,
        },
        total_message_sent: 5,
        flags: 0,
        applied_tags: ['444444444444444444'],
        nsfw: false,
      };
    });

    test('should correctly validate a valid Thread data', async () => {
      await expect(new Thread(thread).validate()).resolves.toBeUndefined();
    });

    test('should fail validation with invalid thread type', async () => {
      thread.type = 5 as any;
      await expect(new Thread(thread).validate()).rejects.toThrow();
    });

    test('should fail validation with invalid auto_archive_duration', async () => {
      thread.thread_metadata!.auto_archive_duration = 999;
      await expect(new Thread(thread).validate()).rejects.toThrow();
    });

    test('should fail validation with name too long', async () => {
      thread.name = 'x'.repeat(101);
      await expect(new Thread(thread).validate()).rejects.toThrow();
    });

    test('should fail validation with negative message_count', async () => {
      thread.message_count = -1;
      await expect(new Thread(thread).validate()).rejects.toThrow();
    });

    test('should fail validation with member_count over limit', async () => {
      thread.member_count = 51;
      await expect(new Thread(thread).validate()).rejects.toThrow();
    });

    test('should fail validation with rate_limit_per_user over limit', async () => {
      thread.rate_limit_per_user = 21601;
      await expect(new Thread(thread).validate()).rejects.toThrow();
    });

    test('should handle ANNOUNCEMENT_THREAD type', async () => {
      thread.type = 10;
      await expect(new Thread(thread).validate()).resolves.toBeUndefined();
    });

    test('should handle PRIVATE_THREAD type', async () => {
      thread.type = 12;
      thread.thread_metadata.invitable = false;
      await expect(new Thread(thread).validate()).resolves.toBeUndefined();
    });

    test('should handle minimal required data', async () => {
      const minimalThread = {
        id: '123456789012345678',
        type: 11,
        guild_id: '987654321098765432',
        parent_id: '111111111111111111',
        owner_id: '222222222222222222',
        name: 'Minimal Thread',
        thread_metadata: {
          archived: false,
          auto_archive_duration: 1440,
          archive_timestamp: '2024-01-01T00:00:00.000Z',
          locked: false,
        },
      };
      await expect(new Thread(minimalThread).validate()).resolves.toBeUndefined();
    });
  });
});

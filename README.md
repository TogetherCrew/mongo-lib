# mongo-lib

Interactions with mongo database.

[![Maintainability](https://api.codeclimate.com/v1/badges/19418cb220f07e7b9292/maintainability)](https://codeclimate.com/github/TogetherCrew/mongo-lib/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/19418cb220f07e7b9292/test_coverage)](https://codeclimate.com/github/TogetherCrew/mongo-lib/test_coverage)

## Features

### Linter

The CI Pipeline uses [super-linter](https://github.com/super-linter/super-linter). You can run it locally with the following command:

```bash
docker run -e RUN_LOCAL=true -e TYPESCRIPT_DEFAULT_STYLE=prettier -e VALIDATE_DOCKERFILE_HADOLINT=false -v $(pwd):/tmp/lint github/super-linter:slim-latest
```

```bash
Windows: docker run -e RUN_LOCAL=true -e TYPESCRIPT_DEFAULT_STYLE=prettier -e VALIDATE_DOCKERFILE_HADOLINT=false -v "$(Resolve-Path .):/tmp/lint" github/super-linter:slim-latest
```

Note: We have disabled HADOLINT for now as we are getting an error: `qemu: uncaught target signal 11 (Segmentation fault) - core dumped`.

[![Maintainability](https://api.codeclimate.com/v1/badges/52d516c2ad7c262adb37/maintainability)](https://codeclimate.com/github/RnDAO/tc-dbComm/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/52d516c2ad7c262adb37/test_coverage)](https://codeclimate.com/github/RnDAO/tc-dbComm/test_coverage)


### Tests

The CI Pipeline uses the `test` target from the Dockerfile to run the tests. You can run it locally with the following command:

```bash
docker compose -f docker-compose.test.yml up --exit-code-from app --build
```

Note: This will create a /coverage folder where you can review the coverage details.


### User interface

```ts
User {
  discordId: Snowflake,
  email?: string,
  communities?: [Types.ObjectId]
  tcaAt?: Date;
  unverifiedTelegramUsername?:string;
}
```

### Community interface

```ts
Community {
    name: string,
    avatarURL?: string,
    users?: [Types.ObjectId],
    platforms?: [Types.ObjectId],
    tcaAt?: Date;
    roles?: ICommunityRoles[];
}
```

### Platform interface

```ts
Platform {
    name: string,
    community: Types.ObjectId,
    metadata?: Record<string, any>, // dynamic object since structure can change
    disconnectedAt?: Date | null,
    connectedAt?: Date | null;
}
```

### Module interface

```ts
Module {
  name: 'hivemind';
    community: Types.ObjectId;
    options?: {
        platforms: Array<{
            platform: Types.ObjectId;
            metadata?: Record<string, any>; // dynamic object since structure can change
        }>;
    }
}
```
### Heatmap interface

```ts
HeatMap {
    date?: string,(format: "YYYY-MM-DD")
    thr_messages: Array<number>,
    lone_messages: Array<number>,
    replier: Array<number>,
    replied_per_acc: Array<objects> [{account: "account name", count: "count of reply"}],
    replied: Array<number>,
    mentioner: Array<number>,
    mentioner_per_acc: Array<objects> [{account: "account name", count: "count of mention"}],
    mentioned: Array<number>,
    reacter: Array<number>,
    reacted_per_acc: Array<objects> [{account: "account name", count: "count of reaction"}],
    reacted: Array<number>,
    channelId: string,
    account_name: string
}
```

### GuildMembers interface

```ts
GuildMember {
  discordId: Snowflake,
  username: string,
  avatar?: string | null,
  roles: Snowflake[],
  joinedAt: Date | null,
  isBot?: boolean,
  discriminator?: string,
  permissions?: string,
  deletedAt?: Date | null,
  globalName?: string | null;
  nickname?: string | null;
}

```

### Channel interface

```ts
Channel {
    id: Snowflake,
    name?: string | null,
    parent_id?: string | null,
    permissionOverwrites?: IOverwrite[],
    deletedAt?: Date | null,
    type: number
}
```


### Role interface

```ts
Role {
    id: Snowflake,
    name: string,
    color: number,
    deletedAt?: Date | null
}
```

### Rawinfo interface

```ts
rawinfo {
  type: number,
  author: Snowflake,
  content: string,
  createdDate: Date,
  user_mentions: Array<Snowflake>,
  role_mentions: Array<Snowflake>,
  reactions: Array<Snowflake>,
  replied_user: Snowflake | null | undefined,
  messageId: Snowflake,
  channelId: Snowflake,
  channelName: string | null,
  threadId: Snowflake | null,
  threadName: string | null,
  isGeneratedByWebhook: boolean
}
```

### Memberactivities interface

```ts
memberactivities {
    date: Date,
    all_active: Array<string>,
    all_consistent: Array<string>,
    all_vital: Array<string>,
    all_connected: Array<string>,
    all_paused: Array<string>,
    all_new_disengaged: Array<string>,
    all_disengaged: Array<string>,
    all_unpaused: Array<string>,
    all_returned: Array<string>,
    all_new_active: Array<string>,
    all_still_active: Array<string>,
    all_dropped: Array<string>,
    all_joined: Array<string>,
    all_disengaged_were_newly_active: Array<string>,
    all_disengaged_were_consistently_active: Array<string>,
    all_disengaged_were_vital: Array<string>,
    all_lurker: Array<string>,
    all_about_to_disengage: Array<string>,
    all_disengaged_in_past: Array<string>,
    all_joined_day: Array<string>,

}
```

### Token interface

```ts
Token {
    token: string,
    user: Types.ObjectId,
    type: string,
    expires: Date,
    blacklisted?: boolean
}
```
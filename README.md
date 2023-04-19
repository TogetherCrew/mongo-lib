# dbComm

All interactions with DB

## Schema for rawinfo

```
rawinfo {
    type?: string,
    author: string,
    content: string,
    user_mentions?: Array<string>,
    role_mentions?: Array<string>,
    reactions?: Array<string>,
    replied_user?: string,
    channelId: Snowflake,
    messageId: Snowflake,(unique)
    threadId: Snowflake,
    thread: string,
    datetime: string (format: "YYYY-MM-DD")
}
```

### Schema for user

```
User {
    discordId: Snowflake,
    username?: string,
    discriminator?: string,
    avatar?: string,
    bot?: boolean,
    system?: boolean,
    mfa_enabled?: boolean,
    banner?: string,
    accent_color?: number
    locale?: string,
    verified?: boolean
    email?: string,
    flags?: number,
    premium_type?: number,
    public_flags?: number,
}
```

### Schema for heatmap

```

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

### Schema for accounts

```
Accounts {
    accountId: Snowflake,
    account: string,
    roles: Array<string>,
    joinDate: Datetime,
    joinedChannel: Snowflake
}
```

### Schema for memberactivities

```

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
    all_disengaged_were_consistenly_active: Array<string>,
    all_disengaged_were_vital: Array<string>,
}
```

### Schema for channels

```

Channels {
    channel: string,
    channelId: Snowflake,
    last_update: Date
}
```


### Schema for token

```
Token {
    token: string,
    user: Snowflake,
    type: string,
    expires: Date,
    blacklisted?: boolean
}
```

### Schema for guild

```
Guild {
    guildId: Snowflake,
    user: Snowflake,
    name?: string,
    connectedAt?: Date,
    isInProgress?: Boolean,
    isDisconnected?: Boolean,
    icon?: string,
    selectedChannels?: Array<objects> [
        {
            channelId: Snowflake,
            channelName?: string
        }
    ],
    period?: Date,
    aciton: [int],
    window: [int]
}
```

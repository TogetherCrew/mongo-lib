# dbComm

All interactions with DB

## Schema for rawinfo

```
rawinfo {
    messageId: Snowflake,(unique)
    type?: string,
    author: string,
    content: string,
    user_mentions?: Array<string>,
    role_mentions?: Array<string>,
    reactions?: Array<string>,
    replied_user?: string,
    channelId: Snowflake,
    thread: bool,
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
    channelId?: Snowflake,
    thr_messages: Array<number>,
    lone_messages: Array<number>,
    replier: Array<number>,
    replied: Array<number>,
    mentioner: Array<number>,
    mentioned: Array<number>,
    reacter: Array<number>,
    reacted: Array<number>,
    account_name: string
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
    selectedChannels?: [
        {
            channelId: Snowflake,
            channelName?: string
        }
    ],
    period?: Date,
    connectedAt?: Date,
    isInProgress?: Boolean
    isDisconnected?: Boolean
}
```

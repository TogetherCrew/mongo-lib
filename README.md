# dbComm

All interactions with DB

## Schema for rawinfo

```
rawinfo {
    messageId: Snowflake,(unique)
    type?: string,
    channel: string,
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
    channel?: string,
    thr_messages: Array<Array<number> >,
    lone_messages: Array<Array<number> >,
    replier: Array<Array<number> >,
    replied: Array<Array<number> >,
    mentioner: Array<Array<number> >,
    mentioned: Array<Array<number> >,
    reacter: Array<Array<number> >,
    reacted: Array<Array<number> >,
    account_names: Array<string>
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

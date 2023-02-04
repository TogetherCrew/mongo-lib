# dbComm

All interactions with DB

## Schema for rawinfo

```
rawinfo {
    datetime: string,
    channel: string,
    type?: string,
    author?: string,
    content?: string,
    user_mentions?: Array<string>,
    role_mentions?: Array<string>,
    reactions?: Array<string>,
    replied_user?: string,
    channelId?: Snowflake,
    messageId?: Snowflake
    thread?: bool
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
    date?: Date,
    channel?: string,
    messages?: Array<number>,
    interactions?: Array<number>,
    emojis?: Array<number>,
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

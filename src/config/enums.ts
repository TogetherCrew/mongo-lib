export enum PlatformNames {
  Discord = 'discord',
  Google = 'google',
  GitHub = 'github',
  Notion = 'notion',
  MediaWiki = 'mediaWiki',
  Twitter = 'twitter',
  Discourse = 'discourse',
}

export enum ModuleNames {
  Hivemind = 'hivemind',
  ViolationDetection = 'violationDetection',
  DynamicNft = 'dynamicNft',
}

export enum HivemindPlatformNames {
  Discord = PlatformNames.Discord,
  Google = PlatformNames.Google,
  GitHub = PlatformNames.GitHub,
  Notion = PlatformNames.Notion,
  MediaWiki = PlatformNames.MediaWiki,
}
export enum ViolationDetectionPlatformNames {
  Discourse = PlatformNames.Discourse,
}

export enum TokenTypeNames {
  ACCESS = 'access',
  REFRESH = 'refresh',
  DISCORD_ACCESS = 'discord_access',
  DISCORD_REFRESH = 'discord_refresh',
  TWITTER_ACCESS = 'twitter_access',
  TWITTER_REFRESH = 'twitter_refresh',
  GOOGLE_ACCESS = 'google_access',
  GOOGLE_REFRESH = 'google_refresh',
  NOTION_ACCESS = 'notion_access',
}

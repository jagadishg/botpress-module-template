declare namespace NodeJS {
  export interface ExtraRequire {
    addToNodePath(path: string): void
    getPaths(): string[]
    overwritePaths(paths: string[])
  }

  export interface Global {
    printErrorDefault(err: Error): void
    DEBUG: IDebug
    require: ExtraRequire
  }

  export interface Process {
    VERBOSITY_LEVEL: number
    IS_PRODUCTION: boolean
    APP_SECRET: string
    HOST: string
    PORT: number
    PROXY?: string
    EXTERNAL_URL: string
    LOCAL_URL: string
    PROJECT_LOCATION: string
    LOADED_MODULES: { [module: string]: string }
    pkg: any
    IS_LICENSED: boolean
    IS_PRO_ENABLED: boolean
    CLUSTER_ENABLED: boolean
    ASSERT_LICENSED: Function
    BOTPRESS_VERSION: string
    core_env: BotpressEnvironementVariables
    distro: OSDistribution
    BOTPRESS_EVENTS: EventEmitter
  }
}

declare var process: NodeJS.Process
declare var global: NodeJS.Global
declare type PRO_FEATURES = 'seats'

/**
 * This is a copy of process.env to add typing and documentation to variables
 */
declare type BotpressEnvironementVariables = {
  /** Replace the path of the NodeJS Native Extensions for external OS-specific libraries such as fastText and CRFSuite */
  readonly NATIVE_EXTENSIONS_DIR?: string

  /**
   * Set this to true if you're exposing Botpress through a reverse proxy such as Nginx
   * Read more: https://expressjs.com/en/guide/behind-proxies.html
   */
  readonly REVERSE_PROXY?: string

  /** Use this proxy connexion string to access external services, like Duckling and Licensing
   *  This values overwrites the value defined in the global Botpress configuration
   * @example http://username:password@hostname:port
   */
  readonly BP_PROXY?: string

  /**
   * Use to set default debug namespaces
   * @example bp:dialog:*,bp:nlu:intents:*
   */
  readonly DEBUG?: string
}

interface IDebug {
  (module: string, botId?: string): IDebugInstance
}

interface IDebugInstance {
  readonly enabled: boolean

  (msg: string, extra?: any): void
  /**
   * Use to print a debug message prefixed with the botId
   * @param botId The bot Id
   * @param message The debug message
   */
  forBot(botId: string, message: string, extra?: any): void
  sub(namespace: string): IDebugInstance
}

declare var DEBUG: IDebug

declare interface OSDistribution {
  os: NodeJS.Platform
  /** The distribution, e.g. "centos", "ubuntu" */
  dist: string
  /** If a codename is available, for example "final" or "alpine" */
  codename: string
  /** The release number, for example 18.04 */
  release: string
}

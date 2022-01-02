declare namespace NodeJS{
    export interface ProcessEnv {
        MODE: ENVIRONMENT
    }
}
export type ENVIRONMENT = 'DEVELOPMENT' | 'PRODUCTION' | 'TEST';
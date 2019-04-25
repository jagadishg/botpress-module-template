import 'bluebird-global'
import * as sdk from 'botpress/sdk'

const onServerStarted = async (bp: typeof sdk) => {
}

const onServerReady = async (bp: typeof sdk) => {
}

const onBotMount = async (bp: typeof sdk, botId: string) => {
}

const onBotUnmount = async (bp: typeof sdk, botId: string) => {
}

const onModuleUnmount = async (bp: typeof sdk) => {
}

const entryPoint: sdk.ModuleEntryPoint = {
    onServerStarted,
    onServerReady,
    onBotMount,
    onBotUnmount,
    onModuleUnmount,
    // skills,
    // botTemplates,
    definition: {
        name: 'wit-ai-module',
        menuIcon: 'some-icon',
        menuText: '',
        fullName: 'Wit.ai Module',
        homepage: 'https://wit.ai',
        noInterface: false,
        plugins: []
    }
}

export default entryPoint

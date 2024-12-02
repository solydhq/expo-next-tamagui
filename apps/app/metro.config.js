// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')
// const path = require('node:path')

// const projectRoot = __dirname
// const workspaceRoot = path.resolve(projectRoot, '../..')

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
})

// const tamaguiConfigPath = path.resolve(workspaceRoot, 'packages/ui/tamagui.config.ts')

// console.log('=== tamaguiConfigPath: ', tamaguiConfigPath)

// add nice web support with optimizing compiler + CSS extraction
const { withTamagui } = require('@tamagui/metro-plugin')
module.exports = withTamagui(config, {
  components: ['tamagui'],
  // config: '../../packages/ui/tamagui.config.ts',
  config: './tamagui.config.ts',
  outputCSS: './tamagui-web.css',
})

<template>

    <naive-config :theme-config="themeConfig">
        <n-notification-provider placement="bottom" :container-style="{}">
          <n-loading-bar-provider>
            <n-dialog-provider>
                <n-message-provider>
                  <!-- wallet -->
                  <Wallet/>
                    <LazyNavbar/>
                    <Lazynuxt-page />
                    <LazyFooter/>
                  <!-- </> wallet -->
                </n-message-provider>

            </n-dialog-provider>
          </n-loading-bar-provider>
        </n-notification-provider>
      </naive-config>
</template>

<script setup lang="ts">

const { colorModePreference } = useNaiveColorMode();
import { themeConfig } from '~/theme.config'
</script>

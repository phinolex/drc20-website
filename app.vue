<template>

    <naive-config :theme-config="themeConfig">
        <n-notification-provider placement="bottom" :container-style="{}">
          <n-loading-bar-provider>
            <n-dialog-provider>
                <n-message-provider>

                <LazyNavbar/>    
                <Lazynuxt-page />
                <LazyFooter/> 
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
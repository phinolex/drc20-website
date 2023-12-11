<template>
<footer>
    <div class="container">
        <n-divider />
        <n-row>

            <n-col :span="8">
                <div class="footerstart">
                  <img src="@/assets/img/logo.svg" alt="logo"/><span class="titlefooter">DRC20-BOT</span>
                </div>
            </n-col>
            <n-col :span="8">
                <n-space align="center" justify="center">Made with love by phinolex <naive-icon name="ph-heart-fill"></naive-icon> {{ currentYear }}</n-space>
            </n-col>
            <n-col :span="8">
                <n-space align="center" justify="end">

                    <n-button text ><n-space align="center" justify="center"><naive-icon name="ph-twitter-logo-fill"></naive-icon> @phinolex</n-space></n-button>
                </n-space>
              </n-col>
            </n-row>
    </div>
</footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

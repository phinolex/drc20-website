<template>
<div class="container container-createfund">
    <CreatefundsTitle /> <!-- Composant -->

    <div class="container-stepinside">
        <div class="container-stepinside-body">

            <div class="stepper-background">
                <n-scrollbar x-scrollable>

                    <div class="stepper-container">
                        <n-steps :current="currentStep">
                            <n-step title="Choose Category"></n-step>
                            <n-step title="Details Setup"></n-step>
                            <n-step title="Amount Setup"></n-step>
                            <n-step title="Duration & Visibility"></n-step>
                            <n-step title="Publication"></n-step>
                        </n-steps>
                    </div>
                </n-scrollbar>

            </div>
            <n-divider />
            <!-- Les onglets sont maintenant cachés en utilisant du CSS -->
            <div class="tabs-container">
                <n-tabs v-model:value="currentTab" animated>
                    <n-tab-pane name="1">
                        <!-- Contenu de l'Étape 1 -->

                        <div class="containerstep">

                            <n-space vertical>
                                <p style="padding-bottom: 15px">
                                    <n-space align="center">
                                        <n-tag round :bordered="false" color="#cd6caf">
                                            Etape 1
                                            <template #icon>
                                                <naive-icon name="ph-caret-right" size="15px"></naive-icon>
                                            </template>
                                        </n-tag>
                                        Selectionnez une catégorie :
                                    </n-space>
                                </p>
                                <n-scrollbar style="max-height: 450px">

                                    <div class="gridstep">

                                        <div @click="nextStep" class="button-step1">
                                            <n-space align="center" justify="center">
                                                <naive-icon name="ph-cake" size="25px"></naive-icon>
                                            </n-space>
                                            Birthday
                                        </div>

                                        <div @click="nextStep" class="button-step1">
                                            <n-space align="center" justify="center">
                                                <naive-icon name="ph-barbell" size="25px"></naive-icon>
                                            </n-space>
                                            Sport
                                        </div>

                                        <div @click="nextStep" class="button-step1">
                                            <n-space align="center" justify="center">
                                                <naive-icon name="ph-users-three" size="25px"></naive-icon>
                                            </n-space>
                                            Communauté
                                        </div>

                                        <div @click="nextStep" class="button-step1">
                                            <n-space align="center" justify="center">
                                                <naive-icon name="ph-graduation-cap" size="25px"></naive-icon>
                                            </n-space>
                                            Education
                                        </div>

                                        <div @click="nextStep" class="button-step1">
                                            <n-space align="center" justify="center">
                                                <naive-icon name="ph-handshake" size="25px"></naive-icon>
                                            </n-space>
                                            Buisness
                                        </div>

                                        <div @click="nextStep" class="button-step1">
                                            <n-space align="center" justify="center">
                                                <naive-icon name="ph-leaf" size="25px"></naive-icon>
                                            </n-space>
                                            Environnement
                                        </div>

                                        <div @click="nextStep" class="button-step1">
                                            <n-space align="center" justify="center">
                                                <naive-icon name="ph-confetti" size="25px"></naive-icon>
                                            </n-space>
                                            Evenement
                                        </div>

                                        <div @click="nextStep" class="button-step1">
                                            <n-space align="center" justify="center">
                                                <naive-icon name="ph-users-four" size="25px"></naive-icon>
                                            </n-space>
                                            Famille
                                        </div>

                                        <div @click="nextStep" class="button-step1">
                                            <n-space align="center" justify="center">
                                                <naive-icon name="ph-heart" size="25px"></naive-icon>
                                            </n-space>
                                            Mariage
                                        </div>

                                        <div @click="nextStep" class="button-step1">
                                            <n-space align="center" justify="center">
                                                <naive-icon name="ph-heartbeat" size="25px"></naive-icon>
                                            </n-space>
                                            Santé
                                        </div>

                                        <div @click="nextStep" class="button-step1">
                                            <n-space align="center" justify="center">
                                                <naive-icon name="ph-hand-heart" size="25px"></naive-icon>
                                            </n-space>
                                            Bénévolat
                                        </div>

                                        <div @click="nextStep" class="button-step1">
                                            <n-space align="center" justify="center">
                                                <naive-icon name="ph-airplane-takeoff" size="25px"></naive-icon>
                                            </n-space>
                                            Voyages
                                        </div>

                                        <div @click="nextStep" class="button-step1">
                                            <n-space align="center" justify="center">
                                                <naive-icon name="ph-dots-three-outline" size="25px"></naive-icon>
                                            </n-space>
                                            Other
                                        </div>

                                    </div>
                                </n-scrollbar>

                            </n-space>
                        </div>

                    </n-tab-pane>

                    <n-tab-pane name="2">
                        <div class="container-step-2">

                            <n-space vertical style="width:800px">
                                <n-button round color="#0000002e" text-color="white" class="button-back-info" @click="prevStep">
                                    <n-space align="center" justify="center">
                                        <naive-icon name="ph-arrow-left" size="15px"></naive-icon>
                                    </n-space>
                                </n-button>

                                <p class="titlesubstep">
                                    <n-space align="center">
                                        <n-tag round :bordered="false" color="#cd6caf">
                                            Etape 2.1
                                            <template #icon>
                                                <naive-icon name="ph-caret-right" size="15px"></naive-icon>
                                            </template>
                                        </n-tag>
                                        Definissez un titre pour votre cagnotte :
                                    </n-space>
                                </p>
                                <n-input type="text" :allow-input="onlyAllowNumber" placeholder="Titre de votre cagnotte" />

                                <p class="titlesubstep">
                                    <n-space align="center">
                                        <n-tag round :bordered="false" color="#cd6caf">
                                            Etape 2.2
                                            <template #icon>
                                                <naive-icon name="ph-caret-right" size="15px"></naive-icon>
                                            </template>
                                        </n-tag>
                                        Rédigez une description pour votre cagnotte :
                                    </n-space>
                                </p>
                                <div class="editor-container">

                                    <hb-admin-tip-tap v-model="content" to="pop-body" />

                                    <n-divider />
                                    <div class="editor-footer">
                                        <p>Character left : <span>{{ maxCharacters - content.length }}</span></p>
                                    </div>

                                </div>

                                <p class="titlesubstep">
                                    <n-space align="center">
                                        <n-tag round :bordered="false" color="#cd6caf">
                                            Etape 2.3
                                            <template #icon>
                                                <naive-icon name="ph-caret-right" size="15px"></naive-icon>
                                            </template>
                                        </n-tag>
                                        Importez une image pour votre cagnotte :
                                    </n-space>
                                </p>
                                <n-upload multiple directory-dnd action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" :max="5">
                                    <n-upload-dragger>
                                        <div style="margin-bottom: 12px">
                                            <naive-icon name="ph-images" size="50px"></naive-icon>
                                        </div>
                                        <n-text style="font-size: 16px">
                                            Click or drag a file to this area to upload
                                        </n-text><br>
                                        <n-p depth="1" style="margin: 8px 0 0 0">
                                            Strictly prohibit from uploading sensitive information. For example,
                                            your bank card PIN or your credit card expiry date.
                                        </n-p>
                                    </n-upload-dragger>
                                </n-upload>

                            </n-space>

                        </div>
                        <n-space class="button-next-step2" align="center" justify="center">
                            <n-button round color="white" class="button-back-info" @click="nextStep">
                                <n-space align="center" justify="center">Continuer<naive-icon name="ph-arrow-right"></naive-icon>
                                </n-space>
                            </n-button>
                        </n-space>
                    </n-tab-pane>

                    <n-tab-pane name="3">

                        <div class="containerstep">

                            <n-space vertical>
                                <n-button round color="#0000002e" text-color="white" class="button-back-info" @click="prevStep">
                                    <n-space align="center" justify="center">
                                        <naive-icon name="ph-arrow-left" size="15px"></naive-icon>
                                    </n-space>
                                </n-button>

                                <p style="padding-bottom: 0px">
                                    <n-space align="center">
                                        <n-tag round :bordered="false" color="#cd6caf">
                                            Etape 3.1
                                            <template #icon>
                                                <naive-icon name="ph-caret-right" size="15px"></naive-icon>
                                            </template>
                                        </n-tag>
                                        Selectionnez une blockchain :
                                    </n-space>
                                </p>

                                <div class="radio-inputs">
                                    <label>
                                        <input checked="" class="radio-input" type="radio" name="engine">
                                        <span class="radio-tile">
                                            <span class="radio-icon">
                                            </span>
                                            <span class="radio-label">

                                                <n-space vertical align="center" justify="center" style="height: 100%;">
                                                    <n-space align="center" justify="center">
                                                        <naive-icon name="ri:bnb-fill" size="25px"></naive-icon>
                                                    </n-space>
                                                    BNB Smart Chain
                                                </n-space>

                                            </span>
                                        </span>
                                    </label>
                                    <label>
                                        <input class="radio-input" type="radio" name="engine" disabled>
                                        <span class="radio-tile stepdisable">
                                            <span class="radio-icon">
                                            </span>

                                            <n-space vertical align="center" justify="center" style="height: 100%;">
                                                <n-space align="center" justify="center">
                                                    <naive-icon name="mdi:ethereum" size="25px"></naive-icon>
                                                </n-space>

                                                ETHEREUM
                                                <n-tag round size="small" :bordered="false" type="warning">
                                                    SOON
                                                    <template #icon>
                                                        <naive-icon name="ph-hourglass-medium"></naive-icon>
                                                    </template>
                                                </n-tag>
                                            </n-space>

                                        </span>
                                    </label>
                                    <label>
                                        <input class="radio-input" type="radio" name="engine" disabled>
                                        <span class="radio-tile stepdisable">
                                            <span class="radio-icon">
                                            </span>

                                            <n-space vertical align="center" justify="center" style="height: 100%;">

                                                <n-space align="center" justify="center">
                                                    <naive-icon name="formkit:solana" size="25px"></naive-icon>
                                                </n-space>

                                                SOLANA
                                                <n-tag round size="small" :bordered="false" type="warning">
                                                    SOON
                                                    <template #icon>
                                                        <naive-icon name="ph-hourglass-medium"></naive-icon>
                                                    </template>
                                                </n-tag>
                                            </n-space>

                                        </span>
                                    </label>
                                </div>

                                <p class="titlesubstep">
                                    <n-space align="center">
                                        <n-tag round :bordered="false" color="#cd6caf">
                                            Etape 3.2
                                            <template #icon>
                                                <naive-icon name="ph-caret-right" size="15px"></naive-icon>
                                            </template>
                                        </n-tag>
                                        Selectionnez la crypto que vous souhaitez recevoir :
                                    </n-space>
                                </p>
                                <n-radio-group v-model:value="valuedevise" name="radiobuttongroup1">
                                    <n-radio-button :checked="(song.label === 'USDC')" v-for="song in songs" :key="song.valuedevise" :value="song.valuedevise" :label="song.label" />
                                </n-radio-group>

                                <p class="titlesubstep">
                                    <n-space align="center">
                                        <n-tag round :bordered="false" color="#cd6caf">
                                            Etape 3.2
                                            <template #icon>
                                                <naive-icon name="ph-caret-right" size="15px"></naive-icon>
                                            </template>
                                        </n-tag>
                                        Definissez un objectif de prix à atteindre :
                                    </n-space>
                                </p>

                                <n-input-number size="large" class="label-number" :min="0" :default-value="5" :parse="parseCurrency" :format="formatCurrency" />

                                <p class="titlesubstep">
                                    <n-space align="center">
                                        <n-tag round :bordered="false" color="#cd6caf">
                                            Etape 3.3
                                            <template #icon>
                                                <naive-icon name="ph-caret-right" size="15px"></naive-icon>
                                            </template>
                                        </n-tag>
                                        Definissez une adresse de reception afin de recevoir vos fonds :
                                    </n-space>
                                </p>
                                <n-popover placement="bottom" trigger="hover">
                                    <template #trigger>

                                        <n-input type="text" :allow-input="onlyAllowNumber" placeholder="0x..." />
                                    </template>
                                    <span>Assurez-vous que l'adresse de reception renseignée soit correct</span>

                                </n-popover>

                                <n-space class="button-next-step2" align="center" justify="center">
                                    <n-button round color="white" class="button-back-info" @click="nextStep">
                                        <n-space align="center" justify="center">Continuer<naive-icon name="ph-arrow-right"></naive-icon>
                                        </n-space>
                                    </n-button>
                                </n-space>
                            </n-space>
                        </div>

                    </n-tab-pane>

                    <n-tab-pane name="4">

                        <div class="containerstep">

                            <n-space vertical style="width: 500px;">
                                <n-button round color="#0000002e" text-color="white" class="button-back-info" @click="prevStep">
                                    <n-space align="center" justify="center">
                                        <naive-icon name="ph-arrow-left" size="15px"></naive-icon>
                                    </n-space>
                                </n-button>

                                <p class="titlesubstep">
                                    <n-space align="center">
                                        <n-tag round :bordered="false" color="#cd6caf">
                                            Etape 4.1
                                            <template #icon>
                                                <naive-icon name="ph-caret-right" size="15px"></naive-icon>
                                            </template>
                                        </n-tag>
                                        Choisissez la durée de votre cagnotte :
                                    </n-space>
                                </p>
                                <n-slider color="white" v-model:value="value" :marks="marks" :format-tooltip="formatTooltip" step="mark" />

                                <p class="titlesubstep">
                                    <n-space align="center">
                                        <n-tag round :bordered="false" color="#cd6caf">
                                            Etape 4.2
                                            <template #icon>
                                                <naive-icon name="ph-caret-right" size="15px"></naive-icon>
                                            </template>
                                        </n-tag>
                                        Visibilité de la cagnotte :
                                    </n-space>
                                </p>
                                <n-space align="center">
                                    <n-switch v-model:value="active" />
                                    Privée
                                </n-space>

                                <n-space class="button-next-step2" align="center" justify="center">
                                    <n-button size="large" round color="#6ccda0" class="button-back-info" @click="nextStep">
                                        <n-space align="center" justify="center">Publier</n-space>
                                    </n-button>
                                </n-space>
                            </n-space>
                        </div>

                    </n-tab-pane>

                    <n-tab-pane name="5">

                        <div class="container-step-3">

                            <div class="step3-inside">
                                <n-space vertical>
                                    <n-space justify="center" align="center">
                                        <n-spin :show="show">

                                            <template #description>
                                            </template>
                                        </n-spin>
                                        Chargement en cours

                                    </n-space>

                                    <n-progress color="#cd6caf" type="line" :percentage="60" :indicator-placement="'inside'" processing />
                                </n-space>
                            </div>
                        </div>

                    </n-tab-pane>
                </n-tabs>
            </div>
        </div>

    </div>
</div>
</template>

<script setup>
import HbAdminTipTap from '@/components/tiptap/HbAdminTipTap'

const content = ref('<h2>Ceci est un test</h2><p>Ici la description de votre cagnotte</p>')
const maxCharacters = 3000;

watch(content, (newValue, oldValue) => {
    // Limiter les retours à la ligne consécutifs
    let modifiedValue = newValue.replace(/(\r\n|\r|\n){4,}/g, '$1$1$1');

    // Tronquer le texte si plus de 3000 caractères
    if (modifiedValue.length > maxCharacters) {
        content.value = oldValue;
    } else {
        content.value = modifiedValue;
    }
}, {
    deep: true
});

const currentStep = ref(1);
const currentTab = ref('1');

const nextStep = () => {
    if (currentStep.value < 5) {
        currentStep.value++;
        currentTab.value = String(currentStep.value);
    }
};
const prevStep = () => {
    if (currentStep.value > 1) {
        currentStep.value--;
        currentTab.value = String(currentStep.value);
    }
};

const value = ref(25)

const marks = {
    0: '48h',
    25: '7 jours',
    50: '14 jours',
    75: '30 jours',
    100: '60 jours'
}

const formatTooltip = (value) => {
    return marks[value];
};

const parseCurrency = (input) => {
    const nums = input.replace(/(,|\$|\s)/g, '').trim()
    if (/^\d+(\.(\d+)?)?$/.test(nums)) return Number(nums)
    return nums === '' ? null : Number.NaN
}

const formatCurrency = (value) => {
    if (value === null) return ''
    return `${value.toLocaleString('en-US')} \u{24}`
}

const valuedevise = ref(null);
const songs = [{
        valuedevise: "USDC",
        label: "USDC"
    },
    {
        valuedevise: 'USDT',
        label: 'USDT'
    }
].map((s) => {
    s.valuedevise = s.valuedevise.toLowerCase()
    return s
})
</script>

<style>
/* Cache les onglets tout en gardant leur contenu */
.tabs-container .n-tabs-tab {
    display: none;
}
</style>

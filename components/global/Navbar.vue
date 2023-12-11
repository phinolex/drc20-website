<template>
  <nav :class="['globalnav', classes]">
  <div class="container containermenu">
      <div class="navstart">
        <img src="@/assets/img/logo.svg" alt="logo"/><span class="titlenav">DRC20-BOT</span>
      </div>
      <div class="navcenter">
        <div class="menu">
          <NuxtLink
            v-for="menuItem in menuItems"
            :key="menuItem.id"
            :to="menuItem.href"
            class="menu-item"
            :class="{ 'is-active': activeItem === menuItem.id }"
            @click="handleItemClick(menuItem.id, menuItem.color)"
          >
          <div class="menu-icon" >
          <naive-icon v-if="menuItem.name" :name="menuItem.name"></naive-icon></div> {{ $t(menuItem.label) }}
        </NuxtLink>
          <span class="menu-indicator" :style="{ width: indicatorWidth + 'px', left: indicatorLeft + 'px', backgroundColor: activeColor }"></span>
        </div>
      </div>
      <div class="navend" span="0 400:1 600:2 800:3">
          <!-- MOBILE -->
          <div class="burger" @click="showmenu = true">
            <input type="checkbox" id="checkboxburger" >
            <label for="checkboxburger" class="toggleburger checkboxburgerchecked">
              <div class="barburger bar--topburger"></div>
              <div class="barburger bar--middleburger"></div>
              <div class="barburger bar--bottomburger"></div>
            </label>
          </div>
          <!-- / MOBILE -->

        <div class="contain-navend">
        <n-space>
          <n-button round="true" color="#e0cd81" @click="readData" >
            <div class="menu-icon" >
            <naive-icon name="ph-rocket-launch"></naive-icon></div> {{ $t('nav_create_button') }}
          </n-button>
          <n-button round="true" v-if="!isActivated"  @click="open" color="#e0cd81" ghost >
            <div class="menu-icon" >
            <naive-icon name="ph-wallet"></naive-icon></div> {{ $t('nav_connectwallet_button') }}
          </n-button>
          <n-dropdown :options="optionsprofil" @select="handleSelectprofil" v-if="isActivated" >
            <n-button round="true" class="accountdropdown">
              <div class="menu-icon" ><naive-icon name="ph-user"></naive-icon></div>
               {{ address ? `${address.slice(0, 8)}...` : '' }}
               <div class="menu-icon" ><naive-icon name="ph-caret-down-fill"></naive-icon></div>

              </n-button>
          </n-dropdown>


          <n-dropdown
          round="true"
          placement="bottom-start"
          trigger="hover"
          size="small"
          :options="options"
          @select="handleSelect"
        >
        <n-button round="true" quaternary>
          <div class="menu-icon" ><naive-icon name="ph-globe"></naive-icon></div> {{ $t('nav_lang_text') }}
        </n-button>
        </n-dropdown>
      </n-space>
        </div>
      </div>

    </div>
</nav>

  <div class="padding-nav"></div>


<!--
  <p>Address: {{address}}</p>
<p>Chain: {{chainId}}</p>
 -->


<!-- POPUP MENU MOBILE -->
<n-drawer v-model:show="showmenu" class="menumobile">
  <n-drawer-content closable>
    <div class="menumobilecontainer">

    <NuxtLink v-for="menuItem in menuItems"
    :key="menuItem.id"
    :to="menuItem.href"
    class="menu-item"
    :class="{ 'is-active': activeItem === menuItem.id }"
    @click="handleItemClick(menuItem.id, menuItem.color)"
  >{{ $t(menuItem.label) }} <br><n-divider /></NuxtLink>

  <n-button color="#e0cd81">
    <div class="menu-icon" >
    <naive-icon name="ph-rocket-launch"></naive-icon></div> {{ $t('nav_create_button') }}
  </n-button>
  <n-button  @click="showModal = true" color="#c55ec8" ghost>
    <div class="menu-icon" >
    <naive-icon name="ph-wallet"></naive-icon></div> {{ $t('nav_connectwallet_button') }}
  </n-button>


  <n-dropdown
  placement="bottom-start"
  trigger="click"
  size="small"
  :options="options"
  @select="handleSelect"
>
<n-button >
  <div class="menu-icon" ><naive-icon name="ph-globe"></naive-icon></div> {{ $t('nav_lang_text') }}
</n-button>
</n-dropdown>
</div>
  </n-drawer-content>
</n-drawer>

<!-- POPUP WALLET CONNECT -->
<n-modal v-model:show="showModal" preset="card" style="width: 400px" title="Modal" :bordered="false" size="huge" role="dialog" aria-modal="true">
  <template #header>
    {{ $t('nav_connectwallet_button') }}
  </template>

  <!-- COMPOSANT CONNEXION -->
  <TheLoginWallet :showModal="showModal" @closemodallogin="showModal = !showModal"/>

</n-modal>

<vd-board :connectors="connectors" dark/>

</template>
<script>
import { useMessage } from "naive-ui";
import { h, ref, watch } from 'vue'; // Importations Vue
import { NaiveIcon } from "#components"; // Importation du composant NaiveIcon
import { MetaMaskConnector, WalletConnectConnector, useBoard, useEthers } from 'vue-dapp'; // Importations Vue-Dapp
import { ethers } from 'ethers'

import abi from '~/assets/abi.js';


const { address, chainId, signer, isActivated, account } = useEthers(); // Utilisation des hooks Vue-Dapp

const renderIcon = (iconClass) => {
  return () => h(NaiveIcon, { name: iconClass });
};

const optionsprofil = [
  // Options du profil
  {
    label: 'My Campaign',
    icon: renderIcon('ph-note'),
    link: "/",
    key: "Campaign",
  },
  {
    label: "My Profil",
    icon: renderIcon('ph-user'),
    link: "/",
    key: "Profil",
  },
  {
    label: "Setting",
    icon: renderIcon('ph-gear-six'),
    link: "/",
    key: "Setting",
  },
  {
    label: "Disconnected",
    icon: renderIcon('ph-sign-out'),
    link: "/",
    key: "Disconnected",
  }
];

const options = [
  // Options de langue
  {
    label: "Français",
    key: "fr"
  },
  {
    label: "English",
    key: "en"
  }
];

const infuraId = "3c3b08b825524aff802a5e9fc6e9bbec"; // ID Infura

export default {
  setup() {
    const { open } = useBoard();

    const { signer } = useEthers();
    const contractAddress = '0x416E7121E1Ee49D90887D7AEc5915a70255825e8';
    const contract = ref(null);

    const readData = async () => {
      if (contract.value) {
        const data = await contract.value.someReadFunction();
        console.log(data);
      }
    };

    // Création d'une variable réactive pour la connexion
    const isConnected = ref(false);

    // Surveiller les changements de l'adresse du compte
    watch(account, (newAccount) => {
      isConnected.value = !!newAccount;
    }, { immediate: true });

    watch(signer, (newSigner) => {
      if (newSigner) {
        contract.value = new ethers.Contract(contractAddress, abi, newSigner);
      }
    }, { immediate: true });

    const connectors = [
      // Connecteurs pour MetaMask et WalletConnect
      new MetaMaskConnector({
        appUrl: "http://localhost:3000/",
      }),
      new WalletConnectConnector({
        projectId: '80c55c1a9efb7ba1d32582051978a81d',
        chains: [56],
        showQrModal: true,
        qrModalOptions: {
          themeMode: 'dark',
          themeVariables: undefined,
          chainImages: false,
          desktopWallets: undefined,
          walletImages: undefined,
          mobileWallets: undefined,
          enableExplorer: false,
          explorerAllowList: undefined,
          tokenImages: false,
          privacyPolicyUrl: undefined,
          explorerDenyList: undefined,
          termsOfServiceUrl: undefined,
        },
      }),
    ];

    const { locale } = useI18n();
    const message = useMessage();

    return {
      address, chainId, connectors, open, signer, isConnected, isActivated, readData,
      showmenu: ref(false),
      showModal: ref(false),
      options,
      optionsprofil,
      handleSelectprofil(key) {
        if(key === "Disconnected") {
          console.log("déconnecté")
        }
      },
      handleSelect(key) {
        console.log("langue : " + key)
        locale.value = key;
        if(key) {
          // Actions supplémentaires en cas de sélection de langue
        }
        // message.info(String(key));
      }
    };
  },
  data() {
    return {
      isPalier1: false,
      isPalier2: false,
      isPalier3: false,
      activeItem: 'home',
      activeColor: 'white',
      indicatorWidth: 1,
      indicatorLeft: 1,
      menuItems: [
        { id: 'home', href: '/', label: 'nav_home_text', name: 'ph-house-fill' },
        { id: 'support', href: '/', label: 'nav_search_text', name: 'ph-magnifying-glass' },
      ],
    };
  },
  methods: {
    checkScroll() {
      const scrollY = window.scrollY;
      this.isPalier1 = scrollY > 50;
      this.isPalier2 = scrollY > 80;
      this.isPalier3 = scrollY > 200;
    },
    goToPage() {
      this.$router.push('/ma-nouvelle-page');
    },
    handleItemClick(item, color) {
      this.activeItem = item;
      this.updateIndicator();
    },
    updateIndicator() {
      this.$nextTick(() => {
        const selectedItem = document.querySelector('.menu-item.is-active');
        if (selectedItem) {
          this.indicatorWidth = selectedItem.offsetWidth;
          this.indicatorLeft = selectedItem.offsetLeft;
        }
      });
    },
    handleWindowResize() {
      this.updateIndicator();
    },
  },
  mounted() {
    window.addEventListener('scroll', this.checkScroll);
    this.updateIndicator();
    window.addEventListener('resize', this.handleWindowResize);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkScroll);
    window.removeEventListener('resize', this.handleWindowResize);
  },
  computed: {
    classes() {
      return {
        'navbar-scroll-hide': this.isPalier1,
        'navbar-scroll-before-start': this.isPalier2,
        'navbar-scroll-start': this.isPalier3
      };
    }
  },
};
</script>

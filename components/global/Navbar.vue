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

          <n-dropdown :options="optionsprofil" @select="handleSelectprofil" v-if="web3Store.account">
            <n-button round="true" class="accountdropdown">
              <div class="menu-icon" ><naive-icon name="ph-user"></naive-icon></div>
              {{ web3Store.account.length > 12 ? `${web3Store.account.slice(0, 4)}...${web3Store.account.slice(-6)}` : web3Store.account }}

               <div class="menu-icon" ><naive-icon name="ph-caret-down-fill"></naive-icon></div>

              </n-button>
          </n-dropdown>

          <n-button round="true" v-else @click="WalletConnect.connect()" color="#e0cd81" ghost >
            <div class="menu-icon" >
            <naive-icon name="ph-wallet"></naive-icon></div> {{ $t('nav_connectwallet_button') }}
          </n-button>



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


</template>

<script setup lang="ts">
import { useMessage } from "naive-ui";
import { h, ref, watch } from 'vue'; // Importations Vue
import { NaiveIcon } from "#components";

// Wallet Connect Composable
import WalletConnectComposable from "@/composables/useWeb3Modal"
const WalletConnect = WalletConnectComposable()

// Vanilla Setup
const web3Store = useWeb3Store()
const connectError = ref(null)
const connectErrorMessage = ref(null)

console.log("account" + web3Store.account)

// Vanilla Connect Wallet
async function connectWallet() {
  const accounts = await window.ethereum
    .request({ method: "eth_requestAccounts" })
    .catch((err) => {
      if (err.code === 4001) {
        console.log("Please connect to MetaMask.")
      } else {
        console.error("error", err)
        connectError.value = "Error Connecting Account"
        connectErrorMessage.value = err
      }
    })
  console.log("account connected:", accounts)
  await web3Store.setAccount(accounts[0])
  console.log("set global account as:", web3Store.account)
}


console.log("account: " + web3Store.account)


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


const showmenu = ref(false);
const showModal = ref(false);

const isPalier1 = ref(false);
const isPalier2 = ref(false);
const isPalier3 = ref(false);
const activeItem = ref('home');
const activeColor = ref('white');
const indicatorWidth = ref(1);
const indicatorLeft = ref(1);
const menuItems = ref([
  // Vos éléments de menu
]);

function handleSelectprofil(key) {
  if (key === "Disconnected") {
    console.log("déconnecté");
  }
}

function handleSelect(key) {
  console.log("langue : " + key);
  locale.value = key;
  if (key) {
    // Actions supplémentaires en cas de sélection de langue
  }
  // message.info(String(key));
}


function checkScroll() {
  const scrollY = window.scrollY;
  isPalier1.value = scrollY > 50;
  isPalier2.value = scrollY > 80;
  isPalier3.value = scrollY > 200;
}

function goToPage() {
  this.$router.push('/ma-nouvelle-page');
}

function handleItemClick(item, color) {
  activeItem.value = item;
  updateIndicator();
}

function updateIndicator() {
  nextTick(() => {
    const selectedItem = document.querySelector('.menu-item.is-active');
    if (selectedItem) {
      indicatorWidth.value = selectedItem.offsetWidth;
      indicatorLeft.value = selectedItem.offsetLeft;
    }
  });
}

function handleWindowResize() {
  updateIndicator();
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  updateIndicator();
  window.addEventListener('resize', handleWindowResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', checkScroll);
  window.removeEventListener('resize', handleWindowResize);
});

const classes = computed(() => {
  return {
    'navbar-scroll-hide': isPalier1.value,
    'navbar-scroll-before-start': isPalier2.value,
    'navbar-scroll-start': isPalier3.value
  };
});
</script>

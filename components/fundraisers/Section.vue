<template>
    <section class="section">
        <div class="container" ref="containerRef">

          <div>
            <n-page-header>
           
           
              <template #header>
                <n-button text class="button-back-info"><n-space align="center" justify="center"><naive-icon name="ph-arrow-left"></naive-icon> Retour</n-space></n-button>
                <n-breadcrumb>
                  <n-breadcrumb-item>Home</n-breadcrumb-item>
                  <n-breadcrumb-item>Fundraisers</n-breadcrumb-item>
                  <n-breadcrumb-item>Cagnotte voyage Ibi...</n-breadcrumb-item>
                </n-breadcrumb>
              </template>
        
            </n-page-header>
          </div>
            <n-row>
            
                <n-col class="container-cagnotte-left" id="elementleft" :span="18">
                  
                  <n-row class="header-cagnotte">
                    <img src="https://imgur.com/Lif0pNm.jpeg" alt="Titre de la cagnotte"/>
                  </n-row>

                  <n-row>
                    <h1>Cagnotte pour mon voyage à Ibiza</h1>
                  </n-row>

                  <n-row>
                    <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nunc vel risus commodo, volutpat est at, convallis nulla. Sed quis <strong>lacus</strong> et urna facilisis ullamcorper non quis dolor.</p>
        <h2>Sous-Titre Section 1</h2>
        <p>Ut <strong>placerat</strong> sapien massa, et aliquet magna feugiat ullamcorper. Donec laoreet tincidunt sollicitudin. Proin sagittis turpis sem, sed dictum dolor <strong>posuere</strong> vestibulum.</p>
        <h2>Sous-Titre Section 2</h2>
        <p>Vivamus <strong>accumsan</strong> leo a dolor placerat, non cursus erat consequat. Ut egestas dignissim leo, eget <strong>consectetur</strong> leo facilisis a. Nulla facilisi. Duis at dapibus risus.</p>
        <h3>Sous-Titre Section 2.1</h3>
        <p><strong>Curabitur</strong> at massa id tortor fermentum luctus. Mauris ac urna quis tortor <strong>pellentesque</strong> aliquet non eget ante. Suspendisse potentiat massa id tortor fermentum luctus. Mauris ac urna quis tortor <strong>pellentesque</strong> aliquet non eget ante. Suspendisse potentiat massa id tortor fermentum luctus. Mauris ac urna quis tortor <strong>pellentesque</strong> aliquet non eget ante. Suspendisse potentiat massa id tortor fermentum luctus. Mauris ac urna quis tortor <strong>pellentesque</strong> aliquet non eget ante. Suspendisse potenti.</p>
                  </n-row>
                </n-col>

                <n-col class="container-cagnotte-right" :span="6">
                  
                <n-affix
                :trigger-top="100"
                position="sticky"
              >
                        <div class="container-information-top">
                        <n-space class="countdown-cagnotte" item-style="align-items: center;text-align:center;width: 100%;font-size: 1.5em;padding:5px 0;">
                          <n-statistic label="Cette cagnote se termine dans :" tabular-nums>
                            <n-countdown
                              :render="renderCountdown"
                              :duration="604800000"
                            />
                          </n-statistic>
                        </n-space>

                        <div class="container-progress">
                        <div class="information-progress">
                          <p>10 450$</p>

                          <p style="color: #ffffff52">50 000$</p>
                        </div>
                        
                        <n-progress
                        color="white"
                        type="line"
                        :show-indicator="false"
                        :percentage="20"
                      />

                        <div>
                          <div class="container-inside-progress">
                            <p>
                            <n-space align="center" justify="center"><naive-icon name="ph-users-fill" size="15"></naive-icon> 145 participants</n-space>
                            </p>
                          </div>

                        </div>
                    </div>

                
                    <n-button round center color="white" >
                      <n-space align="center" justify="space-between"><naive-icon name="ph-coins-fill" size="15"></naive-icon> DONATE</n-space>
                    </n-button>

                    <n-button round center ghost color="white" >
                      <n-space align="center" justify="space-between"><naive-icon name="ph-share-fat-fill" size="15"></naive-icon> SHARE</n-space>
                    </n-button>
                  </div>
                  
                  <!--  n-button dashed -->
                   <n-button dashed class="container-information-top-user">
                      <n-space class="container-information-top-user-inside" align="center" justify="space-between">
                          <n-space align="center" justify="space-between">
                            <naive-icon name="ph-user-circle-fill" size="30"></naive-icon>

                            <div class="container-user">

                              <div>
                                <p style="align-items: center;
                                display: flex;">Lukas  
                                  <n-tag size="small" round :bordered="false" type="warning">
                                    Owner
                                    <template #icon>
                                      <naive-icon name="ph-crown-simple-fill" size="20"></naive-icon>
                                    </template>
                                  </n-tag>
                                  
                                  <n-tag size="small" round :bordered="false" type="success">
                                  Verified
                                  <template #icon>
                                    <naive-icon name="ph-check-circle-fill" size="20"></naive-icon>
                                  </template>
                                </n-tag>
                              </p>
                                <p>0x1dE76...D894D</p>
                              </div>
                            </div>
                        </n-space>
                          <naive-icon name="ph-caret-right" size="20"></naive-icon>
                      </n-space>
                    </n-button>

                    <div class="container-tag">
                      <p>Tags :</p>
                      <n-scrollbar x-scrollable>

                        <n-space>
                      <n-tag :bordered="true" round>
                        Voyage
                      </n-tag>
                      <n-tag :bordered="true" round>
                        BSC
                      </n-tag>
                      <n-tag :bordered="true" round>
                        USDT
                      </n-tag>
                      <n-tag :bordered="true" round>
                        🇫🇷
                      </n-tag>  
                    </n-space>   
                    </n-scrollbar>
                  </div>

                  </n-affix>

                </n-col>
              
              </n-row>
        </div>
    </section>
</template>

<script>
export default defineComponent({
  setup() {
    const message = useMessage()

    const containerRef = ref(void 0);

    onMounted(() => {
      console.log(containerRef.value); // Affiche la valeur de containerRef dans la console
    });

    const renderCountdown = ({
      hours,
      minutes,
      seconds
    }) => {
      return [
        h(
      "div", 
      { style: "display: flex; align-items: center; justify-content: center;" }, // Style de la div englobante parente
      [
        
        // Div pour les heures
        h(
          "div", 
          { style: "display: flex; flex-direction: column; align-items: center; margin-right: 5px;" },
          [
            h("span", { style: "display: inline-block;font-size:1.2em" }, [String(hours).padStart(2, "0")]),
            h("div", { style: "font-size: 0.5em;" }, ["Hours"])
          ]
        ),
        
        // Séparateur
        h("div", { style: "margin-right: 5px; margin-left: 5px;    margin-bottom: 15px;" }, [":"]),

        // Div pour les minutes
        h(
          "div", 
          { style: "display: flex; flex-direction: column; align-items: center; margin-right: 5px;" },
          [
            h("span", { style: "display: inline-block;font-size:1.2em" }, [String(minutes).padStart(2, "0")]),
            h("div", { style: "font-size: 0.5em;" }, ["Minutes"])
          ]
        ),

        // Séparateur
        h("div", { style: "margin-right: 5px; margin-left: 5px;    margin-bottom: 15px;" }, [":"]),

        // Div pour les secondes
        h(
          "div", 
          { style: "display: flex; flex-direction: column; align-items: center;" },
          [
            h("span", { style: "display: inline-block;font-size:1.2em" }, [String(seconds).padStart(2, "0")]),
            h("div", { style: "font-size: 0.5em;" }, ["Seconds"])
          ]
        )
      ]
    )
  ];
    };
    return {
      renderCountdown,
      containerRef,
      handleBack () {
        message.info('[onBack]')
      },
      options: [
        {
          label: 'More episodes',
          key: '1'
        },
        {
          label: 'More episodes',
          key: '2'
        },
        {
          label: 'More episodes',
          key: '3'
        }
      ]
    }
  }
});
</script>

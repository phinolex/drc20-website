<template>
    <section class="section">
        <div class="container container-home-stats">
            <n-row>
            
                <n-col :span="4">
                  <n-statistic label="Total Transactions">
                    $1,234,123
                  </n-statistic>
                </n-col>
                <n-col :span="4">
                    <n-statistic label="Active Users">
                      1,234,123
                    </n-statistic>
                  </n-col>
                  <n-col :span="4">
                    <n-statistic label="Projects Funded">
                      1,234
                    </n-statistic>
                  </n-col>
                  <n-col :span="4">
                    <n-statistic label="Monthly Growth Rate">
                      12%
                    </n-statistic>
                  </n-col>
                  <n-col :span="4">
                    <n-statistic label="Supported Cryptocurrencies">
                      7
                    </n-statistic>
                  </n-col>
                  <n-col :span="4">
                    <n-statistic label="Supported Blockchain">
                      3
                    </n-statistic>
                  </n-col>
              </n-row>
        </div>
    </section>
</template>

<script setup>

</script>

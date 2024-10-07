<template>
  <v-container>
    <v-card class="rounded-xxl" outlined style="height: 95vh;">
      <v-row cols="12" style="height: 100%;">
        <v-col cols="7" class="d-flex justfy-center align-center my-16">
          <v-card width="100%" class="mx-12 elevation-0">
            <v-row>
              <v-col cols="">
                <v-card class="elevation-0" width="70%">
                  <h1>Controle</h1>
                  Data completa
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card>
                  Aqui vai pessoas cadastradas pelo dono da conta!
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-card class="my-5 elevation-0" height="80% d-flex justify-center align-center">
                  <v-chart :data="chartData" :options="chartOptions" />
                </v-card>
              </v-col>
              <v-col cols="6" class="d-flex justify-center align-center">
                <v-card :elevation="0" class="d-flex justify-center">
                  <v-card-title>
                    Orçamento
                  </v-card-title>
                  <v-progress-circular
                    :rotate="360"
                    :size="80"
                    :width="5"
                    :value="value"
                    color="#8181F7"
                  >
                    {{ value }}
                  </v-progress-circular>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-card class="elevation-0" width="100%">
                  <v-list subheader two-line>
                    <v-subheader class="black--text"><h2>Hoje</h2></v-subheader>

                    <v-card class="elevation-0 overflow-auto" max-height="200px">
                      <v-list-item v-for="folder in folders" :key="folder.title">
                        <v-list-item-avatar>
                          <v-icon
                            class="grey lighten-1"
                            dark
                          >
                            mdi-folder
                          </v-icon>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title v-text="folder.title"></v-list-item-title>

                          <v-list-item-subtitle v-text="folder.subtitle"></v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-btn icon>
                            <v-icon color="grey lighten-1">mdi-information</v-icon>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-card>

                    <v-divider></v-divider>

                    <v-subheader class="black--text"><h2>Data completa</h2></v-subheader>

                    <v-card class="elevation-0 overflow-auto" max-height="150px ">
                      <v-list-item v-for="file in files" :key="file.title">
                        <v-list-item-avatar>
                          <v-icon :class="file.color" dark v-text="file.icon"></v-icon>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title v-text="file.title"></v-list-item-title>

                          <v-list-item-subtitle v-text="file.subtitle"></v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-btn icon>
                            <v-icon color="grey lighten-1">mdi-information</v-icon>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-card>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="5">
          <v-card width="90%" class="my-13 elevation-0">
            <v-row>
              <v-col cols="12">
                <v-card class="elevation-0" max-height="50%">
                  <v-list subheader two-line>
                    <v-subheader class="black--text"><h2>Gastos totais</h2></v-subheader>

                    <v-card class="elevation-0">
                      <v-list-item v-for="folder in folders" :key="folder.title">

                        <v-list-item-content>
                          <v-col class="d-flex">
                            <v-list-item-title v-text="folder.title"></v-list-item-title>
                            <v-list-item-subtit>price</v-list-item-subtit>
                          </v-col>
                          <v-progress-linear
                            color="#00FF00"
                            rounded
                            value="50"
                          ></v-progress-linear>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-card class="my16">
                  dxfgg
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'vue-chartjs';

Chart.register(...registerables);

export default Vue.extend({
  name: 'Dashboard',

  components: {
    'v-chart': Bar,
  },

  data: () => ({
    monthLabels: [
      'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 
      'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
    ],
    barData: [10, 15, 20, 25, 10, 13, 5, 20, 10, 15, 15, 25],
    files: [
        {
          color: 'blue',
          icon: 'mdi-clipboard-text',
          subtitle: 'Jan 20, 2014',
          title: 'Vacation itinerary',
        },
        {
          color: 'amber',
          icon: 'mdi-gesture-tap-button',
          subtitle: 'Jan 10, 2014',
          title: 'Kitchen remodel',
        },
        {
          color: 'amber',
          icon: 'mdi-gesture-tap-button',
          subtitle: 'Jan 10, 2014',
          title: 'Kitchen remodel',
        },
      ],
      folders: [
        {
          subtitle: 'Jan 9, 2014',
          title: 'Photos',
        },
        {
          subtitle: 'Jan 17, 2014',
          title: 'Recipes',
        },
        {
          subtitle: 'Jan 28, 2014',
          title: 'Work',
        },
        {
          subtitle: 'Jan 28, 2014',
          title: 'Docs',
        },
      ],
      interval: {},
      value: 0,
  }),

  mounted () {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0)
      }
      this.value += 10
    }, 1000)
  },

  computed: {
    chartData() {
      const currentMonth = new Date().getMonth(); // Obtém o mês atual (0-11)

      return {
        labels: this.monthLabels,
        datasets: [
          {
            label: 'Valores',
            data: this.barData,
            backgroundColor: this.barData.map((_, index) =>
              index === currentMonth ? '#0174DF' : '#81F7F3'
            ),
          },
        ],
      };
    },

    chartOptions() {
      return {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
        elements: {
          bar: {
            borderWidth: 0,
            borderRadius: 5,
          },
        },
        datasets: {
          bar: {
            barPercentage: 1.1,
            categoryPercentage: 0.8,
          },
        },
        backgroundColor: 'white',
      };
    },
  },
});
</script>

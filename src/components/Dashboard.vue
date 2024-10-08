<template>
  <v-container>
    <v-card class="rounded-xxl" outlined style="height: 95vh;">
      <v-row cols="12" style="height: 100%;">
        <v-col cols="7" class="d-flex justfy-center align-center my-16">
          <v-card width="100%" class="mx-12 elevation-0">
            <v-row>
              <v-col cols="6">
                <v-card class="elevation-0" width="70%">
                  <h1>Controle</h1>
                  Data completa
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card max-height="10vh" class="d-flex justify-end align-center elevation-0">
                  <v-select
                    v-model="valueSelect"
                    :items="items"
                    label="Cadastrados"
                    multiple
                  >
                    <template v-slot:selection="{ item, index }">
                      <v-chip v-if="index === 0">
                        <span>{{ item }}</span>
                      </v-chip>
                      <span
                        v-if="index === 1"
                        class="grey--text text-caption"
                      >
                        (+{{ valueSelect.length - 1 }} Pessoas)
                      </span>
                    </template>
                  </v-select>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="7">
                <v-card class="mx-0 px-0 elevation-0 d-flex justify-start align-center" max-height="18vh">
                  <v-chart-bar :data="chartData" :options="chartOptions" max-width="100%" />
                </v-card>
              </v-col>
              <v-col cols="5" class="d-flex justify-center align-center" max-height="16vh">
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
                    <v-card-title>
                      Hoje
                    </v-card-title>
                    <v-card class="elevation-0 overflow-auto" max-height="19vh">
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
                    
                    <v-card-title>
                      Data completa aqui!
                    </v-card-title>

                    <v-card class="elevation-0 overflow-auto" max-height="19vh">
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
          <v-card width="90%" class="my-16 elevation-0">
            <v-row>
              <v-col cols="12">
                <v-card class="elevation-0">
                  <v-list subheader two-line>
                    <v-card class="elevation-0 overflow-auto" max-height="40vh">
                      <v-card-title>
                        Para onde vai o dinheiro?
                      </v-card-title>
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
                
                <v-card-title>
                  Distribuição de Gastos
                </v-card-title>
                <v-card :elevation="0">
                  <v-card-text style="height: 270px;">
                    <v-chart-pie
                      :data="pieChartData"
                      :options="pieChartOptions"
                      :height="210"
                      :width="210"
                    />
                  </v-card-text>
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
import { Chart, registerables, ChartOptions } from 'chart.js';
import { Bar, Pie } from 'vue-chartjs';

Chart.register(...registerables);

export default Vue.extend({
  name: 'Dashboard',

  components: {
    'v-chart-bar': Bar,
    'v-chart-pie': Pie,
  },

  data: () => ({
    monthLabels: [
      'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 
      'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
    ],
    barData: [10, 15, 20, 25, 10, 13, 5, 20, 10, 15, 15, 25],
    pieChartData: {
      labels: ['Categoria A', 'Categoria B', 'Categoria C', 'Categoria D'],
      datasets: [
        {
          label: 'Distribuição de Gastos',
          data: [30, 20, 25, 25],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
          ],
        },
      ],
    },
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
      {
        subtitle: 'Jan 28, 2014',
        title: 'Docs',
      },
      {
        subtitle: 'Jan 28, 2014',
        title: 'Docs',
      },
    ],
    interval: {},
    value: 0,
    items: ['Alex', 'Núbia', 'Arimar', 'João', 'Artur', 'Victor'],
    valueSelect: ['Alex'],
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
      const currentMonth = new Date().getMonth();

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

    pieChartOptions(): ChartOptions<'pie'> {
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
          },
          tooltip: {
            enabled: true,
          },
        },
      };
    },
  },
});
</script>

<style scoped>
.border-avatar {
  border: 2px solid gray;
}
</style>
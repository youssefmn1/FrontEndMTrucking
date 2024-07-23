import { chartsConfig } from "@/configs";

const websiteViewsChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Vues",
      data: [25, 10, 5, 11, 20, 10, 35],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#388e3c",
    plotOptions: {
      bar: {
        columnWidth: "17%",
        borderRadius: 4,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["L", "M", "M", "J", "V", "S", "D"],
    },
  },
};

const dailySalesChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Voyages",
      data: [50, 40, 30, 70,60, 80, 76, 85, 93],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#388e3c"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};

const completedTaskChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Sales",
      data: [55, 45, 35, 75,65, 85, 80, 90, 100],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#0288d1"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};
const completedTasksChart = {
  ...completedTaskChart,
  series: [
    {
      name: "Demande de Transport",
      data: [55, 45, 35, 75,65, 85, 80, 90, 100],
    },
  ],
};

export const statisticsChartsData = [
  {
    color: "white",
    title: "Vue du site web",
    description: "Performance de la dernière campagne",
    footer: "Campagne envoyée il y a 2 jours",
    chart: websiteViewsChart,
  },
  {
    color: "white",
    title: "Demande de Transport",
    description: "Augmentation de 10 % des Demandes aujourd'hui",
    footer: "just updated",
    chart: completedTasksChart,
  },
  {
    color: "white",
    title: "Voyages quotidiens",
    description: "Augmentation de 10 % des voyages aujourd'hui",
    footer: "updated 4 min ago",
    chart: dailySalesChart,
  },

];

export default statisticsChartsData;

import {  UsersIcon,
  ChartBarIcon,
  TruckIcon,
  MapIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: TruckIcon,
    title: "Transporteur",
    value: "95",
    footer: {
      color: "text-green-500",
      value: "voir tous",
      label: "les transporteurs",
      href: "/transporteurs"
    },
  },
  {
    color: "gray",
    icon: UsersIcon,
    title: "Expéditeur",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "voir tous",
      label: "Les expéditeurs",
      href: "/expediteurs"
    },
  },
  {
    color: "gray",
    icon: MapIcon,
    title: "voyages",
    value: "3,715",
    footer: {
      color: "text-blue-500",
      value: "voir tous",
      label: "Les voyages",
      href: "/voyages"
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "gains",
    value: "103,430 Dhs",
    footer: {
      color: "text-green-500",
      value: "vois tous",
      label: "Les gains",
    },
  },
];

export default statisticsCardsData;

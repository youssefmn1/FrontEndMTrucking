import {
  HomeIcon,
  UserCircleIcon,
  TruckIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Home, Tables, Notifications, ProfileExpediteur, ProfileAdmin, ProfileTransporteur, TransporteursTable, ExpediteursTable } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Admin profile ",
        path: "/ProfileAdmin",
        element: <ProfileAdmin />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Profile Expediteur",
        path: "/expediteur",
        element: <ProfileExpediteur />,
      },
      {
        icon: <TruckIcon {...icon} />,
        name: "Profile Transporteur",
        path: "/transporteur",
        element: <ProfileTransporteur />,
      },     
      {
        icon: <TableCellsIcon {...icon} />,
        name:"Expediteurs",
        path: "/expediteurList",
        element: <ExpediteursTable />,
      },
      {
        icon: <TruckIcon {...icon} />,
        name: "Transporteurs",
        path: "/transporteurList",
        element: <TransporteursTable />,
      },

      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;

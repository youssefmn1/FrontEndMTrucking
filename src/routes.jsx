import {
  HomeIcon,
  UserCircleIcon,
  TruckIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  UserIcon,
  MapIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";
import { Home, Notifications, ProfileExpediteur, ProfileAdmin, ProfileTransporteur, TransporteursTable, ExpediteursTable, Mapp,ActiveRequests} from "@/pages/dashboard";
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
        icon: <TruckIcon {...icon} />,
        name: "Transporteurs",
        path: "/transporteurList",
        element: <TransporteursTable />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name:"Expediteurs",
        path: "/expediteurList",
        element: <ExpediteursTable />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Profile Expediteur",
        path: "/expediteur",
        element: <ProfileExpediteur />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Profile Transporteur",
        path: "/transporteur",
        element: <ProfileTransporteur />,
      },     
      
      {
        icon: <MapIcon {...icon} />,
        name: "Map",
        path: "/map",
        element: <Mapp />,
      },
      {
       icon: <ClipboardDocumentIcon {...icon} />,
        name: "Demandes Active",
        path: "/activerequests",
        element: <ActiveRequests/>,
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

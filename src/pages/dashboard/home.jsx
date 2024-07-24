import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
} from "@/data";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";

export function Home() {
  return (
    <div className="mt-10">
      <div className="mb-10 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div>
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600"
              >
                <ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />
                &nbsp;{props.footer}
              </Typography>
            }
          />
        ))}
      </div>
      <div className="mb-4 w-full">
  <Card className="overflow-hidden w-full border border-blue-gray-100 shadow-sm">
    <CardHeader
      floated={false}
      shadow={false}
      color="transparent"
      className="m-0 flex items-center justify-between p-6"
    >
      <div>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          Demande de Transport
        </Typography>
        <Typography
          variant="small"
          className="flex items-center gap-1 font-normal text-blue-gray-600"
        >
          <CheckCircleIcon strokeWidth={3} className="h-4 w-4 text-blue-gray-200" />
          <strong>4</strong> Demandes en attente de validation
        </Typography>
      </div>
      <Menu placement="left-start">
        <MenuHandler>
          <IconButton size="sm" variant="text" color="blue-gray">
            <EllipsisVerticalIcon
              strokeWidth={3}
              fill="currenColor"
              className="h-6 w-6"
            />
          </IconButton>
        </MenuHandler>
        <MenuList>
          <MenuItem>Action</MenuItem>
          <MenuItem>Another Action</MenuItem>
          <MenuItem>Something else here</MenuItem>
        </MenuList>
      </Menu>
     </CardHeader>
     <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
  <table className="w-full min-w-[640px] table-auto">
    <thead>
      <tr>
        {["depart", "destination", "date", "type de marchandise", "Poids", "type de remorque", "action"].map(
          (el) => (
            <th
              key={el}
              className="border-b border-blue-gray-50 py-3 px-6 text-left"
            >
              <Typography
                variant="small"
                className="text-[11px] font-medium uppercase text-blue-gray-400"
              >
                {el}
              </Typography>
            </th>
          )
        )}
      </tr>
    </thead>
    <tbody>
      {projectsTableData.map(
        ({ depart, destination, date, typeMarchandise, kgs, typeRemorque }, key) => {
          const className = `py-3 px-5 ${
            key === projectsTableData.length - 1
              ? ""
              : "border-b border-blue-gray-50"
          }`;

          return (
            <tr key={depart + destination + date}>
              <td className={className}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold"
                >
                  {depart}
                </Typography>
              </td>
              <td className={className}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold"
                >
                  {destination}
                </Typography>
              </td>
              <td className={className}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold"
                >
                  {date}
                </Typography>
              </td>
              <td className={className}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold"
                >
                  {typeMarchandise}
                </Typography>
              </td>
              <td className={className}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold"
                >
                  {kgs} Kgs
                </Typography>
              </td>
              <td className={className}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold"
                >
                  {typeRemorque}
                </Typography>
              </td>
              <td className={className}>
                <div className="flex gap-2">
                  <button className="bg-green-500 text-white px-2 py-1 rounded">Valider</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded">Rejeter</button>
                </div>
              </td>
            </tr>
          );
        }
      )}
    </tbody>
  </table>
</CardBody>

</Card>
</div>

    </div>
  );
}

export default Home;

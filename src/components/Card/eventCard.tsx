import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

type EventCardProps = {};

export default function EventCard({}: EventCardProps) {
  return (
    <Card className="border dark:bg-gray-800 h-auto w-64 rounded-lg">
      <CardHeader className="h-40 flex items-center justify-center">
        <Image alt="Evento Unity" src={"/images/Hero_Unity.jpg"} priority className="h-full w-full object-cover scale-[1.0.5]" width={200} height={200} />
      </CardHeader>
      <CardBody className="p-4 h-auto overflow-hidden line-clamp-3">
        <Typography variant="h3" className="text-purple-500 flex pb-4">
          Titulo do evento
        </Typography>
        <Typography variant="small" className="text-white flex text-justify text-ellipsis">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit doloremque veniam qui eveniet odio eaque ad facilis nisi praesentium obcaecati labore, quo fugiat, quidem quisquam placeat mollitia, sunt adipisci? Consectetur!
        </Typography>
      </CardBody>
    </Card>
  );
}

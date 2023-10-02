import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import { HiRocketLaunch } from "react-icons/hi2";

export interface CardElementProps {
  title: string;
  description: string;
  route?: string;
}

export const CardElement: React.FC<CardElementProps> = ({
  title,
  description,
  route = "#",
}) => {
  return (
    // <Link to={route} className="hover:scale-50">
    <Card className="cursor-pointer mt-6 w-96 hover:scale-110 rounded-md transition duration-300 border-t">
      <CardBody className="flex flex-col gap-4 ">
        <HiRocketLaunch className="w-12 h-12" />
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      {/* <CardFooter className="pt-0"></CardFooter> */}
    </Card>
    // </Link>
  );
};

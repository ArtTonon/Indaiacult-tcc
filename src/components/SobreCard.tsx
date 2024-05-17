import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function SobreCard() {
  return (
    <Card
      shadow={false}
      className="relative grid h-[30em] w-full max-w-[24rem] items-end justify-center overflow-hidden text-center"
      placeholder={"oi"}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://circuitodasfrutasoficial.sp.gov.br/wp-content/uploads/2021/06/IMG_0283-1360x275.jpg')] bg-cover bg-center"
        placeholder={"oi"}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody placeholder={""} className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
          placeholder={"oi"}
        >
          Casarão do Pau Preto
        </Typography>
        <Typography
          placeholder={""}
          variant="h5"
          className="mb-4 text-gray-400"
        >
          Tania Andrew
        </Typography>
        <Link to="/sobre:id">
          <button className="rounded-full text-white font-bold border-darkblue dark:border-lightblue border-4 py-2 px-4">
            Ver mais
          </button>
        </Link>
      </CardBody>
    </Card>
  );
}

import CardsDetails from "@/components/CardsDetails";
import { IData } from "@/type/data.type";
import { notFound } from "next/navigation";
import React from "react";

interface ICardsDetailsPage {
  params: Promise<IData>;
}

const getData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const CardsDetailsPage = async ({ params }: ICardsDetailsPage) => {
  const allData = await getData();
  const { id } = await params;
  const data = allData.find((data: IData) => data.id === Number(id));
  // console.log(data, "from details page");
    if (!data) {
    notFound();
  }

  return (
    <div>
      <CardsDetails data={data} />
    </div>
  );
};

export default CardsDetailsPage;

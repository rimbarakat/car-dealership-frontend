import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getCar } from "../api/car.details";

function CarDetails() {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery(["getCar", id], getCar);
  console.log(data);
  if (error) {
    return <div>Error!</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
  <div>
    {data._id}
  </div>
  );
}

export default CarDetails;

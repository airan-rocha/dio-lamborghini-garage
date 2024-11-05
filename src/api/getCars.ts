import axios from "axios";
import { CarModel } from "../components/CardView/props";
import { CAR_API_BASE_URL } from "../Constants/car";

interface ApiResponse {
    cars: CarModel[];
}

export const fetchGetCarData = async (id: number) => {
    try{
        const response = await axios.get<ApiResponse>(CAR_API_BASE_URL);
        const carDada = response.data.cars.find((car) => car.id === null ) || null;
        return carDada;
    } catch(error){
        console.log("Erro ao buscar dados da api: ", error);
    }
};
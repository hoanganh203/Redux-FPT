import { ICar } from "@/interfaces/car";
import instance from "./instance"

export const getCar = () => {
    return instance.get("/cars");
}

export const addCar = (car: ICar) => {
    return instance.post("/cars", car);
}




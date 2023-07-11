import { useState } from "react";
import "./App.css";
import { Form, List } from "./components";
import { ICar } from "./interfaces/car";
import Table from "./components/Table";


const dataCar: ICar[] = [
    { id: 1, name: "bwm", price: 100 },
    { id: 2, name: "bwm", price: 200 },
    { id: 3, name: "bwm", price: 300 },
]

const columns = [
    {
        title: "Name", dataIndex: "name", key: "name", render: (item: any) => (
            <a href="" className="bg-red-500 text-white">{item?.name}</a>
        )
    },
    { title: "Price", dataIndex: "price", key: "price" },
]


function App() {
    //State
    const [cars, setCars] = useState<ICar[]>(dataCar);
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [error, setError] = useState<string>("");
    // Action

    const addCar = async (car: ICar) => {
        setCars([...cars, car]);
    };

    const removeCar = (id: number | string) => {
        setCars(cars.filter((item) => item.id !== id))
    };

    return (
        <div className="w-96 mx-auto border border-gray-500 p-2">
            <Form onAdd={addCar} />
            <List dataSource={cars} onRemove={removeCar} />

            <hr />
            <Table dataSource={dataCar} columns={columns} />
        </div>
    );
}

export default App;
import { ICar } from "@/interfaces/car";
import { Item } from "..";

type ListProps = {
    dataSource: ICar[];
    onRemove: (id: number|string) => void;
};

const List = ({dataSource, onRemove} : ListProps) => {
    return (
            <ul>
               {dataSource?.map((car) => (
                <Item key={car.id} car={car} onRemove={onRemove}/>
            ))}
            </ul>
    );
};

export default List;

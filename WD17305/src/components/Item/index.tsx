import { ICar } from "@/interfaces/car";
import { GoTrash } from "react-icons/go"
import { Button } from "..";
import styles from "./Item.module.css";

type itemData = {
    car: ICar,
    onRemove:(id:number |string) => void
}

const Item = ({ car ,onRemove}: itemData) => {
    return <>
        <li className={styles.item}>{car.name}
            <Button onClick={()=>
                    onRemove(car.id!)} type="danger" shape="default"  icon={<GoTrash />} />
        </li>
    </>
};

export default Item;

import { Button, Input } from "..";
import { ICar } from "@/interfaces/car";
import { useState } from "react";
import { AiOutlinePlus ,AiOutlineUser } from "react-icons/ai";

type CarAdd = {
    onAdd: (car: ICar) => void
}

const Form = ({ onAdd }: CarAdd) => {

    const [value, setValue] = useState<string>("")

    const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!value) return

        onAdd({
            id: Math.floor(Math.random() * 1000),
            name: value,
        })

        setValue("");
        const form = e.target as HTMLFormElement
        form.reset()

    }
    const onHandleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }


    return (
        <form onSubmit={onHandleSubmit} className="flex justify-between items-center ">
            <Input onInput={onHandleInput} prefix={<AiOutlineUser />}/>
            <Button type="primary" shape="default" icon={<AiOutlinePlus className="text-2xl" />} />
        </form>
    );
};

export default Form;

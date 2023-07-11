

type inputData = {
    onInput: (e: React.ChangeEvent<HTMLInputElement>) => void
    prefix?: React.ReactNode
}

const Input = ({ onInput, prefix }: inputData) => {
    return <>
        <div className="flex items-center justify-between border-gray-500 w-full mr-2 border rounded-3xl" >
            <span className="ml-2">{prefix && prefix}</span>
            <input onChange={onInput}
                type="text" placeholder="Car" className="outline-none p-2 w-full mr-2 rounded-3xl
" />
        </div>
    </>;
};

export default Input;

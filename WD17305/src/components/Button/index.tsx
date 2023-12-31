
type ButtonProps = {
    type?: "primary" | "danger";
    loading?: boolean;
    shape?: "round" | "circle" | "default";
    icon?: React.ReactNode;
    children?: React.ReactNode;
    onClick?: () => void;
};

const Button = ({ icon, type, loading, shape, children, onClick }: ButtonProps) => {
    return <>
        <button
            className={`border border-gray-500 py-2 px-4 my-2
            ${type === "primary" && "text-white bg-blue-500 hover:bg-white hover:text-blue-500"}
            ${type === "danger" && "text-white bg-red-500 hover:bg-white hover:text-red-500"}
            ${shape === "round" && "rounded-full"}
            ${shape === "circle" && "rounded-full w-10 h-10"}
            ${shape === "default" && "rounded-md"}`}
            onClick={onClick}>
            {icon && icon}
            {children}
        </button>
    </>;
};

export default Button;

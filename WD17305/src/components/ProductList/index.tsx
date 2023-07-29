import { IProduct } from "@/interfaces/product";
import { Dispatch, useEffect } from "react";
import { Button } from "..";
import { useSelector } from 'react-redux'
import { addProductsApi, deleteProductApi, getProductsApi, updateProductApi } from "@/actionApiThunk/product";
import { RootState, useAppDispatch } from "@/Store/store";
import { GrFormAdd } from 'react-icons/gr'
import { AiOutlineMinus, AiFillDelete } from "react-icons/ai"
import { addToCart, deCrement, deleteCarts, inCrement } from "@/slices/product";
const ProductList = () => {
    const dispatch: Dispatch<any> = useAppDispatch()
    // const { state, dispatch } = useContext(ProductContext)
    const { products, isLoading, error } = useSelector((state: RootState) => state.product)
    const { carts, total } = useSelector((state: RootState) => state.carts)

    // const { items, total } = useSelector((state: any) => state.carts)

    useEffect(() => {
        dispatch(getProductsApi())
    }, [dispatch]);


    const addToCarts = (item: any) => {
        const newItem = {
            id: item.id,
            name: item.name,
            price: item.price,
            quanlity: 1,
            intoMoney: item.price,
        }
        dispatch(addToCart(newItem))
    }

    return (
        <div>
            {isLoading ? <>
                <div className="flex items-center justify-center">
                    <div role="status" className="max-w-sm animate-pulse ">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </> : <>

                {
                    products?.map((item: IProduct) => {
                        return <div className="flex items-center justify-center" key={item.id}>
                            <div>{item.name}</div> -
                            <div>{item.price}</div>

                            <Button type="danger" onClick={() => addToCarts(item)}>
                                Add To Cart
                            </Button>

                        </div>
                            ;
                    })
                }
            </>}


            <Button
                type="primary"
                onClick={() => dispatch(addProductsApi({ name: "Product Added", price: 500 }))}
            >
                Add Product
            </Button>

            <Button type="primary" onClick={() => dispatch(updateProductApi({ name: "Product update", id: 3, price: 500 }))}>
                Edit Product
            </Button>

            <Button type="danger" onClick={() => dispatch(deleteProductApi(5))}>
                Delete Product
            </Button>


            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 text-center">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quanlity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            IntoMoney
                        </th>
                        <th>

                        </th>
                    </tr>
                    <tbody>
                        {carts?.map((item: any, index: any) => {
                            return <>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center" >
                                    <td scope="row" className="px-6 py-4 font-medium  text-black whitespace-nowrap dark:text-white">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4 text-black">
                                        {item.price}
                                    </td>

                                    <td className="px-6 py-4 text-black flex items-center justify-center">
                                        <Button type="danger" icon={<AiOutlineMinus />} onClick={() => dispatch(deCrement(item))} />
                                        <p className="px-1"> {item.quanlity}</p>
                                        <Button type="primary" icon={<GrFormAdd />} onClick={() => dispatch(inCrement(item))} />
                                    </td>
                                    <td className="px-6 py-4 text-black">
                                        {item.intoMoney}
                                    </td>
                                    <td className="px-6 py-4 text-black">
                                        <Button type="primary" icon={<AiFillDelete />} onClick={() => dispatch(deleteCarts(item))} />
                                    </td>
                                </tr>
                            </>
                        })}
                    </tbody>
                </table>
                <h1 className="text-center">{total}</h1>
            </div>


        </div>
    );
};

export default ProductList;
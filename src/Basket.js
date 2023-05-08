import { useDispatch, useSelector } from "react-redux"
import { deductionTransactionData, delTransactionData, plusTransactionData } from "./redux/product/product.action";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus, faCirclePlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Basket = () => {
    
    const dispatch = useDispatch();
    const { transactions } = useSelector(state => state.product);

    const transaction = (item, i) => {
        const price = item.price * item.qty;
        const disc = (item.price * (item.disc/100)) * item.qty;
        const total = price - disc;

        return (
            <div className="p-5 border-b-4 border-gray-100 flex" key={i}>
                <div className="rounded-lg w-24 h-20">
                    <img src={item.img}/>
                </div>
                <div className="w-full">
                    <div className="pl-5">
                        <label>{item.title}</label>
                    </div>
                    <div className="pt-2 pl-5 flex">
                        <div className="p-1 pl-2 pr-2 bg-red-600 rounded-md w-fit text-xs font-bold text-white">
                            <label>{item.disc}%</label>
                        </div>
                        <label className="pl-2 line-through text-gray-400 text-sm">Rp. {price}</label>
                        <label className="pl-2 text-md font-bold">Rp. {total}</label>
                    </div>
                    <div className="flex justify-end">
                        <div className="flex flex-row gap-2">
                            <FontAwesomeIcon className="text-xl cursor-pointer text-gray-700 mr-12" onClick={() => dispatch(delTransactionData(item.id))} icon={faTrashCan} />
                            <FontAwesomeIcon className="text-xl cursor-pointer text-gray-700" onClick={() => dispatch(deductionTransactionData(item.id))} icon={faCircleMinus} />
                            <label className="ml-3 mr-3">{item.qty}</label> 
                            <FontAwesomeIcon className="text-xl cursor-pointer text-gray-700" onClick={() => dispatch(plusTransactionData(item.id))} icon={faCirclePlus} /> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="p-5 pr-12 pl-12 flex justify-center">
            <div className="w-7/12 mr-10" >
                {transactions.map(transaction)}
            </div>
            <div className="p-3 w-3/12 border border-gray-300 rounded-lg h-fit">
                <div>
                    <div className="pb-4">
                        <label className="font-bold text-lg text-black-700">Detail Belanja</label>
                        <div className="flex justify-between mt-2">
                            <label className="text-gray-600">Total Harga</label>
                            <label className="text-gray-600">Rp. {}</label>
                        </div>
                        <div className="flex justify-between">
                            <label className="text-gray-600">Total Diskon</label>
                            <label className="text-gray-600">Rp. {}</label>
                        </div>
                    </div>
                    <hr className="border-gray-150 pb-5"/>
                    <div className="pb-4">
                        <div className="flex justify-between">
                            <label className="text-lg font-bold">Total</label>
                            <label className="text-lg font-bold">Rp. {}</label>
                        </div>
                    </div>
                    <div>
                        <button type="button" className="text-white bg-purple-700 hover:bg-purple-900 font-bold rounded-lg text-md px-5 py-2.5 mb-2 w-full">
                            Checkout ({transactions.length})
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket
import { useState } from "react";
import { useSelector } from "react-redux"

const Basket = () => {
    
    const { transactions } = useSelector(state => state.product);
    const [qty, setQty] = useState();

    const handleQty = (e) => {
        setQty(e.target.value);
    }

    const transaction = (item, i) => {
        const total = item.price - (item.price * (item.disc/100));

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
                        <label className="pl-2 line-through text-gray-400 text-sm">Rp. {item.price}</label>
                        <label className="pl-2 text-md font-bold">Rp. {total}</label>
                    </div>
                    <div className="flex justify-end">
                        <input type="text" onChange={handleQty} value={item.qty} id="qty" name="qty" autoComplete="off" className="border border-gray-300 text-md rounded-lg focus:border-gray-500 p-0.5 w-24 focus:outline-none text-center"/>  
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
                    </div>
                    <div>
                        <button type="button" className="text-white bg-purple-700 hover:bg-purple-900 font-bold rounded-lg text-md px-5 py-2.5 mb-2 w-full">
                            Beli
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket
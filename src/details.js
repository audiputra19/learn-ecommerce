import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux";
import { saveTransactionData } from "./redux/product/product.action";


const Detail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState([]);
    const [detail, setDetail] = useState([]);
    const [qty, setQty] = useState(1);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/product/${id}`)
            .then(res => {
                //console.log(res)
                setProduct(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    },[])

    useEffect(() => {
        axios
            .get(`http://localhost:3000/detail-prod/${id}`)
            .then(res => {
                //console.log(res)
                setDetail(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    },[])

    function Disc() {
        if(product.disc !== 0){
            return (
                <div className="pt-2 flex">
                    <div className="p-1 bg-red-200 rounded-md w-fit text-xs font-bold text-red-600">
                        <label>{product.disc}%</label>
                    </div>
                    <label className="pl-2 line-through text-gray-400 font-medium">Rp. {product.price}</label>
                </div>
            );
        }
    }

    function SubDisc() {
        if(product.disc !== 0){
            return (
                <div className="pt-4 flex justify-end">
                    <label className="pl-2 line-through text-gray-400 text-sm font-medium">Rp. {qty*product.price}</label>
                </div>
            );
        }
        else
            return(
                <div className="pt-8 flex justify-end"></div>
            )
    }

    const handleQty = (e) => {
        setQty(e.target.value);
    }

    const total = product.price - (product.price * (product.disc/100));
    const totalFix = total * qty;

    const Basket = () => {
        dispatch(saveTransactionData({
            id: product.id,
            img: product.img,
            title: product.title,
            price: product.price,
            disc: product.disc,
            qty: qty,
            transactionDate: new Date().toLocaleString("id-ID")
        }));
    }

    return(
       
            <div className="p-5 pr-12 pl-12">
                <div className="flex">
                    <div className="rounded-lg p-10 w-4/12">
                        <img src={product.img} width="300" height="300"/>
                    </div>
                    <div className=" pl-10 pr-10 w-5/12">
                        <div className="text-xl font-bold text-black-700">
                            <label>{product.title}</label>
                        </div>
                        <div className="text-sm pt-2">
                            <FontAwesomeIcon className="text-yellow-400" icon={faStar} />
                            <label className="pl-2 font-medium ">{product.rate}</label>
                        </div>
                        <div className="pt-5 font-bold text-3xl text-black-900">
                            <label>Rp.</label>
                            <label className="pl-2">{total}</label>
                        </div>
                        <Disc/>
                        <div className="pt-5">
                            <hr className="border-gray-150"/>
                        </div>
                        <div className="pt-5">
                            <div>
                                <label className="text-gray-500">Kondisi:</label>
                                <label className="pl-2">{detail.condition}</label>
                            </div>
                            <div>
                                <label className="text-gray-500">Kategori:</label>
                                <label className="pl-2">{detail.category}</label>
                            </div>
                            <div>
                                <label className="text-gray-500">Berat:</label>
                                <label className="pl-2">{detail.weight}</label>
                            </div>
                            <div className="pt-2">
                                <label>{detail.desc}</label>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 w-3/12 border border-gray-300 rounded-lg h-fit">
                        <div className="pb-4">
                            <label className="font-bold text-lg text-black-700">Kelengkapan Data</label>
                        </div>
                        <hr className="border-gray-150"/>
                        <div className="pt-4">
                            <input type="text" onChange={handleQty} value={qty} id="qty" name="qty" autoComplete="off" className="border border-gray-300 text-md rounded-lg focus:border-gray-500 p-0.5 w-24 focus:outline-none text-center"/>
                        </div>
                        <SubDisc/>
                        <div className="flex justify-between">
                            <label className="text-gray-600">Subtotal</label>
                            <label className="text-xl font-bold">Rp. {totalFix}</label>
                        </div>
                        <div className="pt-4">
                            <button type="button" onClick={Basket} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-300 font-bold rounded-lg text-md px-5 py-2.5 mb-2 w-full">
                                <FontAwesomeIcon icon={faCartShopping}/> Keranjang
                            </button>
                        </div>
                        <div>
                            <button type="button" className="border border-purple-500 font-bold rounded-lg text-purple-800 text-md px-5 py-2.5 mb-2 w-full">
                                Beli
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Detail;
import { useSelector } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const History = () => {
    const params = useParams();
    const [Prod, setProd] = useState([]);
    const [date, setDate] = useState();
    const {Histransactions} = useSelector(state => state.product);

    useEffect(() => {
        const selectedTransaction = Histransactions.map(item => ({...item.data}));
        setProd(selectedTransaction);
    },[params.data,Histransactions]) 

    useEffect(() => {
        let dates = "";
        Histransactions.forEach(item => {
            dates = item.date;
        });
        setDate(dates);
    }, [Histransactions]);

    const transaction = (item,i) => {

        const price = item.price;
        const disc = (price * (item.disc/100));
        const finalPrice = price - disc;
        const total = finalPrice * item.qty;      

        return(
            <div className="border border-b-2 rounded-lg bg-white p-5 mt-5 mb-5" key={i}>
                <div className="pb-5">
                    <label className="font-bold text-sm">Belanja</label> 
                    <label className="text-sm pl-2">{date}</label>
                    <FontAwesomeIcon className="pl-2 text-lg text-green-600" icon={faCircleCheck} />
                </div>
                <div className="flex">
                    <div className="rounded-lg w-24 h-20">
                        <img src={item.img}/>
                    </div>
                    <div className="w-full pl-5">
                        <div className="font-medium">
                            <label>{item.title}</label>
                        </div>  
                        <div className="text-sm flex justify-between">
                            <label>{item.qty} barang x {finalPrice}</label>
                            <div className="border-l-2 p-5 pt-3 pb-3">
                                <div>Total Belanja</div>
                                <div className="text-base font-bold">Rp. {total.toLocaleString('id-ID')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="mr-52 ml-52">
            <div className="mb-5">
                <label className="font-medium text-2xl">Riwayat Pembelian</label>
            </div>
            <div className="border rounded-lg">
                <div className="pr-5 pl-5">
                    {Prod.map(transaction)}
                </div>
            </div>
        </div>
    )
}

export default History
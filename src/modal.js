import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { historyTransaction } from './redux/product/product.action';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const Modal = ({ visible, onClose }) => {

    const dispatch = useDispatch();
    const { transactions } = useSelector(state => state.product)

    const handleOnClose = (e) => {
        if (e.target.id === "container")
            onClose();
    }

    if (!visible) { return null; }

    const saveHistory = () => {
        dispatch(historyTransaction({
            id: uuidv4(),
            data: transactions,
            date: moment().format("DD MMMM YY")
        }));
    }

    return (
        <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="w-96 bg-white rounded-lg">
                <div className="m-5">
                    <div className='text-center text-purple-700 text-4xl mb-2'>
                        <FontAwesomeIcon icon={faMoneyCheckDollar} />
                    </div>
                    <div className="text-center font-bold text-xl">Checkout</div>
                    <div className="text-center font-medium text-base">Are You Sure You Want to Checkout This Product?</div>
                </div>
                <hr className="border-gray-150" />
                <div className="flex m-3 justify-center m-5 gap-4">
                    <div><button onClick={onClose} className="border border-purple-700 text-purple-700 rounded-md p-1 pl-5 pr-5 hover:bg-purple-700 hover:text-white">Cancel</button></div>
                    <div><button onClick={saveHistory} className="border border-purple-700 text-purple-700 rounded-md p-1 pl-7 pr-7 hover:bg-purple-700 hover:text-white">OK</button></div>
                </div>
            </div>
        </div>
    )
}

export default Modal
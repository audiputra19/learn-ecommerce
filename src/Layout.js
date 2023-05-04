import { Outlet, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";

const Layout = () => {
  const navigate = useNavigate();
  const {transactions} = useSelector(state => state.product);

  return (

    <>
        <nav className="p-5 pr-10 pl-10 border-b border-gray-200 bg-white sticky top-0">
            <div className="flex justify-between">
                <div className="text-2xl font-medium text-purple-900">
                    <FontAwesomeIcon icon={faBagShopping} />
                    <label className="pl-3">Shopping</label>
                </div>
                <div className="cursor-pointer text-xl text-gray-600" onClick={() => { navigate('/basket') }}>
                  <FontAwesomeIcon icon={faCartShopping}/><label className="pl-1">({transactions.length})</label>
                </div>
            </div>
        </nav>
        <div className="p-8 w-full">
        <Outlet />
        </div>
    </>    
  )
}

export default Layout;
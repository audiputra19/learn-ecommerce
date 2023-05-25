import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faCartShopping, faFileLines } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {transactions} = useSelector(state => state.product);

  function BasketShow(){
    if(transactions.length !== 0){
      return(
        <div slot="icon" className="relative cursor-pointer" onClick={() => { navigate('/basket', {replace: location.pathname.includes('basket')}) }}>
          <div className="absolute border-2 border-white text-xs rounded-full -mt-1 -mr-3 px-1 font-bold top-0 right-0 bg-red-600 text-white">
            {transactions.length}
          </div>
          <div className="text-xl text-gray-600">
            <FontAwesomeIcon icon={faCartShopping}/>
          </div>
        </div>
      )
    }
    return(
      <div className="relative cursor-pointer" onClick={() => { navigate('/basket', {replace: location.pathname.includes('basket')}) }}>
        <div className="text-xl text-gray-600">
          <FontAwesomeIcon icon={faCartShopping}/>
        </div>
      </div>
    )
  }

  return (

    <>
        <nav className="p-5 pr-10 pl-10 border-b border-gray-200 bg-white sticky top-0 left-0 right-0">
            <div className="flex justify-between">
                <div className="text-2xl font-medium text-purple-900 cursor-pointer" onClick={() => { navigate('/', {replace: location.pathname.includes('')}) }}>
                    <FontAwesomeIcon icon={faBagShopping} />
                    <label className="pl-3 cursor-pointer">Shopping</label>
                </div>
                <div className="flex">
                  <BasketShow/>
                  <div className="text-xl text-gray-600 pl-8 cursor-pointer" onClick={() => { navigate('/history', {replace: location.pathname.includes('history')}) }}>
                    <FontAwesomeIcon icon={faFileLines}/>
                  </div>
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
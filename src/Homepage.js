import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Homepage() {

    const [post, setPost] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('http://localhost:3000/product')
            .then(res => {
                //console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    return (
        <div className="flex gap-4">
            {
                post.map((info, index) => {
                    return(
                        <div onClick={() => navigate(`/details/${info.id}`)} className="p-5 border border-gray-3 w-52 cursor-pointer rounded-lg hover:opacity-100" width="150" height="200" key={index}>
                            <img src={info.img} alt="Girl in a jacket"/>
                            <div className="text-sm text-black-900 pt-4">
                                <label className="title" value={info.title}>{info.title}</label>
                            </div>
                            <div className="text-base text-black-700 pt-2 font-bold">
                                <label className="price" value={info.price}>Rp. {info.price}</label>
                            </div>
                            <div className="text-sm text-gray-500 pt-2">
                                <FontAwesomeIcon icon={faStar} className="pr-2 text-yellow-400"/>
                                <label className="price" value={info.rate}>{info.rate}</label>
                            </div>
                        </div>
                    )
                })
            }
        </div>    
    );
}

export default Homepage;
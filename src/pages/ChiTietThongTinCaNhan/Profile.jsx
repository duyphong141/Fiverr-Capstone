
import React, { Fragment, useEffect, useState } from 'react'
import Info from './Info/Info';
import '../ChiTietThongTinCaNhan/Profile.css'
import Footer from '../../components/Footer/Footer';
import Gigs from './Gigs/Gigs';
import Header from '../../components/Header/Header';
import { DOMAIN_FIVERR, TOKEN, USERLOGIN } from '../../util/setting';
import { useSelector } from 'react-redux';
import axios from 'axios';


export default function Profile(props) {

    if (!localStorage.getItem(USERLOGIN)) {
        props.history.push("/");
    }

    const { uLogin } = useSelector(state => state.reducerTong);

    let [renderND, setRenderND] = useState(
        {
            // "id": 1,
            // "name": "admin",
            // "email": "admin@gmail.com",
            // "password": "",
            // "phone": "111",
            // "birthday": "0",
            // "avatar": "http://sc04.alicdn.com/kf/Hc3e61591078043e09dba7808a6be5d21n.jpg",
            // "gender": true,
            // "role": "ADMIN",
            // "skill": [],
            // "certification": [],
            // "bookingJob": []
        },

    )

    useEffect(() => {
        let promise = axios({
            method: 'get',
            url: `${DOMAIN_FIVERR}/users/${uLogin.user.id}`,
            headers: {
                "tokenCybersoft": TOKEN,
            }
        });
        promise.then((result) => {
            setRenderND(result.data.content)
        });
        promise.catch(error => {
            console.log(error.response?.data);
        });
    }, [])

    return (
        <Fragment>
            <Header />
            <div className='total'>
                <div className='row carousel' >
                    <div className='col-xl-4'>
                        <Info renderND={renderND}/>
                    </div>

                    <div className='col-xl-7'>
                        <Gigs />
                    </div>
                </div>
            </div>
            <Footer />

        </Fragment>

    )
}

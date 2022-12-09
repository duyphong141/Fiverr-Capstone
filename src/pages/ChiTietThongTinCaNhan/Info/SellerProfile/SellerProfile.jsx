import React, { Fragment, useEffect, useState } from 'react'

import '../SellerProfile/SellerProfile.css'
import { useDispatch, useSelector } from 'react-redux';
import { layChiTietThongTinCaNhanAction } from '../../../../redux/action/actionLayChiTietThongTinCaNhan';
import LinkedAccounts from './LinkedAccounts/LinkedAccounts';
import Skills from './Skills/Skills';
import Education from './Education/Education';

import Share from './SharedActivity/ShareActivity';
import Description from './Description/Description';
import Languages from './Languages/Languages';


export default function SellerProfile(props) {
    // let [renderND, setRendetND] = useState([
    //     {
    //         "id": 1,
    //         "name": "admin",
    //         "email": "admin@gmail.com",
    //         "password": "",
    //         "phone": null,
    //         "birthday": "0",
    //         "avatar": null,
    //         "gender": true,
    //         "role": "ADMIN",
    //         "skill": [],
    //         "certification": [],
    //         "bookingJob": []
    //     },
    // ])

    // let getAPILayChiTietThongTinCN = (id) => {
    //     return () => {
    //         layChiTietThongTinCaNhanAction
    //             .then((result) => {
    //                 setRendetND = result.data.content
    //             })
    //             .catch((error) => {
    //                 console.log(error)
    //             })
    //     }
    // }
    // useEffect(() => {
    //     getAPILayChiTietThongTinCN()
    // }, [])

    let {renderND} = props;

    return (
        <div>
            <section className='form-thin'>
                <article>
                    <Description/>
                    
                    <Languages/>
                 
                    <div>
                        <LinkedAccounts />
                        <Skills renderND={renderND}/>
                        <Education />
                    </div>
                    
                </article>
                <div>
                    <Share />
                </div>
            </section>
        </div>
    )
}

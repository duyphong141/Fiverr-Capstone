import axios from 'axios'
import React, { Fragment, useState } from 'react'
import { DOMAIN_FIVERR, TOKEN } from '../../../util/setting'

import '../PeopleComment/PeopleComment.css'


export default function PeopleComment() {
    const [comment, setComment] = useState("")

    let inputTaoBinhLuanChoCongViec = (e) => {
        setComment(e.target.value)
        console.log("Binh luan", e.target.value)
    }

    let handleTaoBinhLuanChoCongViec = (comment) => {
        comment.preventDefault();
        let promises = axios({
            method: 'post',
            url: `${DOMAIN_FIVERR}/binh-luan`,
            data: comment,
            headers: {
                "TokenCybersoft": TOKEN,
                "Token": localStorage.getItem(),
            }
        });
        promises.then((result) => {
            alert("thêm bình luận thành công")
        })
        promises.catch((error) => {
            console.log(error.response?.data)
        })

    }


    return (
        <Fragment>
            <div className='people-comment-new mt-5 row' onSubmit={handleTaoBinhLuanChoCongViec} >
                <div className='people-comment-avatar col-2'>
                    <img src="https://i.pravatar.cc/?u=-77" className='' alt="" />
                </div>

                <div className='col-10 '>
                    <div>
                        <textarea className='' name="" id="" onChange={inputTaoBinhLuanChoCongViec}></textarea>
                    </div>


                    <div>
                        <button className='btn btn-success'>submit</button>
                    </div>
                </div>


            </div>
        </Fragment>
    )
}

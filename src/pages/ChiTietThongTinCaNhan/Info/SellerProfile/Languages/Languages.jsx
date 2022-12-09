import React, { useEffect, useState } from 'react'


export default function Languages() {

    // Languages
    const [inputLanguages, setInputLanguages] = useState('');
    const [choseOption, setChoseOption] = useState('Basic')
    const [renderLanguages, setRenderLanguages] = useState([]);
    const [invisibleLanguages, setInvisibleLanguages] = useState(false);
    const [invisibleLanguagesA, setInvisibleLanguagesA] = useState(true);


    let handleShowLanguages = (e) => {
        e.preventDefault();
        setInvisibleLanguages(true);
        // setInvisibleA(false)
        setInvisibleLanguagesA(false)
    }

    let handleOffLanguages = (e) => {
        e.preventDefault();
        setInvisibleLanguages(false)
        setInvisibleLanguagesA(true)
    }

    let handleIP = (e) => {
        e.preventDefault();
        setRenderLanguages(preven => {
            return [...preven, [inputLanguages, "- " + choseOption]]
        })
        setInputLanguages('')
        setInvisibleLanguagesA(true)
        setInvisibleLanguages(false)
    }

  return (
    <form className='js-form-overview' >
    <div className='inner-row languages d-flex justify-content-between'>
        <h3>Languages</h3>
        <a href="" className='add' onClick={handleShowLanguages}>
            {invisibleLanguagesA === true ? <div>Add New</div> : " "}

        </a>
    </div>
    <section>
        <div className=" form-wrapper cf">
            {invisibleLanguages === true
                ? <div>
                    <input value={inputLanguages} onChange={(e) => { setInputLanguages(e.target.value) }} type="text" placeholder='Add language' />
                    <select name="" id="" onChange={(e) => { setChoseOption(e.target.value) }} value={choseOption} >
                        <option value="basic">Basic</option>
                        <option value="conversational">Conversational</option>
                        <option value="fluent">Fluent</option>
                        <option value="native_or_bilingual">Native/Bilingual</option>

                    </select>
                    <div className='btn-description d-flex justify-content-between' style={{ width: '100%' }}>
                        <button className='btn cancelBTN' onClick={handleOffLanguages}  >Cancel</button>
                        <button className='btn btn-success updateBTN' onClick={handleIP}  >Update</button>
                    </div>
                </div>
                : ""}

        </div>

        <ul className='items-list'>
            {renderLanguages.map((laguage) => {
                return <li className='d-flex justify-content-between' key={laguage}>

                    <span className='titlle'> {laguage}</span>

                    <div className='animate'>
                        <span className='hint--top'>
                            <button className=''><i className="fa-solid fa-pencil"></i>
                            </button>
                        </span>
                        <span>
                            <button className=''><i className="fa-solid fa-trash"></i></button>
                        </span>
                    </div>
                </li>
            })}




        </ul>
    </section>

</form>
  )
}

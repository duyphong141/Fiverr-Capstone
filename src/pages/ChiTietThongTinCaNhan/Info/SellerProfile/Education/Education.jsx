import React, { useState } from 'react'


export default function Education() {
    const [inputEducation, setInputEducation] = useState('');
    const [choseOption, setChoseOption] = useState('Beginner')
    const [renderEducation, setRenderEducation] = useState([]);
    const [invisibleEducation, setInvisibleEducation] = useState(false);
    const [invisiblehandleOffEducationA, setInvisiblehandleOffEducationA] = useState(true);


    let handleShowEducation = (e) => {
        e.preventDefault();
        setInvisibleEducation(true);
        setInvisiblehandleOffEducationA(false)
    }

    let handleOffEducation = (e) => {
        e.preventDefault();
        setInvisibleEducation(false)
        setInvisiblehandleOffEducationA(true)
    }

    let handleIP = (e) => {
        e.preventDefault();
        setRenderEducation(preven => {
            return [...preven, [inputEducation, "- " + choseOption]]
        })
        setInputEducation('')
        setInvisiblehandleOffEducationA(true)
        setInvisibleEducation(false)
        setChoseOption('Beginner')

    }

    console.log(inputEducation)
    console.log(choseOption)


    return (
        <form className='js-form-skills'>
            <div className="inner-row skills">
                <div className='skills d-flex justify-content-between'>
                    <h3 className='alt hint--top'>Education</h3>
                    <a href="" className='add' onClick={handleShowEducation}>
                        {invisiblehandleOffEducationA === true ? <div>Add New</div> : " "}

                    </a>
                </div>
                <section>
                    <div className=" form-wrapper cf">
                        {invisibleEducation === true
                            ? <div>
                                <input type="text" value={inputEducation} onChange={(e) => { setInputEducation(e.target.value) }} placeholder='Add Skill(e.g Voice Talent)' />
                                <select name="" id="" onChange={(e) => { setChoseOption(e.target.value) }} value={choseOption}>
                                    <option value="beginner">Beginner</option>

                                    <option value="intermediate">Intermediate</option>
                                    <option value="expert">Expert</option>

                                </select>
                                <div className='btn-description d-flex justify-content-between' style={{ width: '100%' }}>
                                    <button className='btn cancelBTN' onClick={handleOffEducation}  >Cancel</button>
                                    <button className='btn btn-success updateBTN' onClick={handleIP}  >Update</button>
                                </div>
                            </div> : ''}

                    </div>

                    <div className='empty-list'>
                        Add your Education.

                    </div>
                    <ul className='items-list'>
                        {renderEducation.map((laguage) => {
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


            </div>
        </form>
    )
}

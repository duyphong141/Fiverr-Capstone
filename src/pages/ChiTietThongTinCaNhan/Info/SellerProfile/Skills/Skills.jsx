import React, { useState } from 'react'
import '../Skills/Skills.css'

// export default function Skills(props) {
//     const [inputSkills, setInputSkills] = useState('');
//     const [choseOption, setChoseOption] = useState('Beginner')
//     const [renderSkills, setRenderSkills] = useState([]);
//     const [invisibleSkills, setInvisibleSkills] = useState(false);
//     const [invisiblehandleOffSkillsA, setInvisiblehandleOffSkillsA] = useState(true);


//     let handleShowSkills = (e) => {
//         e.preventDefault();
//         setInvisibleSkills(true);
//         // setInvisibleA(false)
//         setInvisiblehandleOffSkillsA(false)
//     }

//     let handleOffSkills = (e) => {
//         e.preventDefault();
//         setInvisibleSkills(false)
//         setInvisiblehandleOffSkillsA(true)
//     }

//     let handleIP = (e) => {
//         e.preventDefault();
//         setRenderSkills(preven => {
//             return [...preven, [inputSkills, "- " + choseOption]]
//         })
//         setInputSkills('')
//         setInvisiblehandleOffSkillsA(true)
//         setInvisibleSkills(false)
//         setChoseOption('Beginner')

//     }

//     console.log(props.renderND)

//     return (
//         <form className='js-form-skills'>
//             <div className="inner-row skills">
//                 <div className='skills d-flex justify-content-between'>
//                     <h3 className='alt hint--top'>Skills</h3>
//                     <a href="" className='add' onClick={handleShowSkills}>
//                         {invisiblehandleOffSkillsA === true ? <div>Add New</div> : " "}

//                     </a>
//                 </div>
//                 <section>
//                     <div className=" form-wrapper cf">
//                         {invisibleSkills === true
//                             ? <div>
//                                 <input type="text" value={inputSkills} onChange={(e) => { setInputSkills(e.target.value) }} placeholder='Add Skill(e.g Voice Talent)' />
//                                 <select name="" id="" onChange={(e) => { setChoseOption(e.target.value) }} value={choseOption}>
//                                     <option value="beginner">Beginner</option>

//                                     <option value="intermediate">Intermediate</option>
//                                     <option value="expert">Expert</option>

//                                 </select>
//                                 <div className='btn-description d-flex justify-content-between' style={{ width: '100%' }}>
//                                     <button className='btn cancelBTN' onClick={handleOffSkills}  >Cancel</button>
//                                     <button className='btn btn-success updateBTN' onClick={handleIP}  >Update</button>
//                                 </div>
//                             </div> : ''}

//                     </div>

//                     <div className='empty-list'>
//                         Add your Skills

//                     </div>
//                     <ul className='items-list'>
//                         {renderSkills.map((laguage) => {
//                             return <li className='d-flex justify-content-between' key={laguage}>

//                                 <span className='titlle'> {laguage}</span>

//                                 <div className='animate'>
//                                     <span className='hint--top'>
//                                         <button className=''><i className="fa-solid fa-pencil"></i>
//                                         </button>
//                                     </span>
//                                     <span>
//                                         <button className=''><i className="fa-solid fa-trash"></i></button>
//                                     </span>
//                                 </div>
//                             </li>
//                         })}

//                     </ul>
//                 </section>


//             </div>
//         </form>
//     )
// }



export default function Skills(props) {
    const [inputSkills, setInputSkills] = useState('');
    const [choseOption, setChoseOption] = useState('Beginner')
    const [renderSkills, setRenderSkills] = useState([]);
    const [invisibleSkills, setInvisibleSkills] = useState(false);
    const [invisiblehandleOffSkillsA, setInvisiblehandleOffSkillsA] = useState(true);


    let handleShowSkills = (e) => {
        e.preventDefault();
        setInvisibleSkills(true);
        // setInvisibleA(false)
        setInvisiblehandleOffSkillsA(false)
    }

    let handleOffSkills = (e) => {
        e.preventDefault();
        setInvisibleSkills(false)
        setInvisiblehandleOffSkillsA(true)
    }

    let handleIP = (e) => {
        e.preventDefault();
        setRenderSkills(preven => {
            return [...preven, [inputSkills, "- " + choseOption]]
        })
        setInputSkills('')
        setInvisiblehandleOffSkillsA(true)
        setInvisibleSkills(false)
        setChoseOption('Beginner')

    }

    
    return (
        <form className='js-form-skills'>
            <div className="inner-row skills">
                <div className='skills d-flex justify-content-between'>
                    <h3 className='alt hint--top'>Skills</h3>
                    <a href="" className='add' onClick={handleShowSkills}>
                        {invisiblehandleOffSkillsA === true ? <div>Add New</div> : " "}

                    </a>
                </div>
                <section>
                    <div className=" form-wrapper cf">
                        {invisibleSkills === true
                            ? <div>
                                <input type="text" value={inputSkills} onChange={(e) => { setInputSkills(e.target.value) }} placeholder='Add Skill(e.g Voice Talent)' />
                                <select name="" id="" onChange={(e) => { setChoseOption(e.target.value) }} value={choseOption}>
                                    <option value="beginner">Beginner</option>

                                    <option value="intermediate">Intermediate</option>
                                    <option value="expert">Expert</option>

                                </select>
                                <div className='btn-description d-flex justify-content-between' style={{ width: '100%' }}>
                                    <button className='btn cancelBTN' onClick={handleOffSkills}  >Cancel</button>
                                    <button className='btn btn-success updateBTN' onClick={handleIP}  >Update</button>
                                </div>
                            </div> : ''}

                    </div>

                    <div className='empty-list'>
                        Add your Skills

                    </div>
                    <ul className='items-list'>
                        {props.renderND.skill?.map((skill, index) => {
                            return <li className='d-flex justify-content-between' key={index}>

                                <span className='titlle'>{skill}</span>

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
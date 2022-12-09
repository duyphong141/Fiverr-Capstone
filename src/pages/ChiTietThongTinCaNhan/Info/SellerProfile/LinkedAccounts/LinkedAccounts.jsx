import React from 'react'

export default function LinkedAccounts() {
  return (
    <div>
        <form className='js-form-social-account'>
                        <div className="inner-row social-account">
                            <aside>
                                <h3 className="alt hint--top">
                                    Linked Accounts
                                </h3>
                            </aside>

                            <section>
                                <ul>
                                    <li className='facebook js-btn-facebook-connect '>
                                        <span>Facebook</span>
                                        <input type="text" />
                                        <button className='btn btn-success'>Add </button>
                                    </li>

                                </ul>
                                <div className='empty-list'>
                                    Add your Linked

                                </div>
                                <ul className='items-list'>
                                    <li>

                                        <span className='titlle'> test</span>
                                        <span className='sub-title'>-basic</span>
                                        {/* <div className='animate'>
                                            <span className='hint--top'>
                                                <button className='btn btn-success'>edit</button>
                                                <button className='btn btn-danger'>delete</button>
                                            </span>
                                        </div> */}
                                    </li>

                                </ul>
                            </section>
                        </div>

                    </form>
    </div>
  )
}

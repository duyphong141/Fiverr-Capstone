import React from 'react'
import './Carousel.css'

export default function Carousel() {
    return (
        <div className='fiverr-carousel'>
            <div className="hero-backgrounds">

                <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-ride="carousel" data-interval="3000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="hero-andrea">
                                <div className="seller-name">
                                    <p>Andrea, <b>Fashion Designer</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="hero-moon">
                                <div className="seller-name">
                                    <p>Moon, <b>Marketing Expert</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="hero-rikita">
                                <div className="seller-name">
                                    <p>Ritika, <b>Shoemaker and Designer</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="hero-zach">
                                <div className="seller-name">
                                    <p>Zach, <b>Bar Owner</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="hero-gabrielle">
                                <div className="seller-name">
                                    <p>Gabrielle, <b>Video Editor</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="hero-andrea">
                    <div className="seller-name">
                        <p>Andrea, <b>Fashion Designer</b></p>
                    </div>
                </div> */}



            </div>
            <div className="content-carousel">
                <h1>
                    <span>
                        Find the perfect <i>freeland</i> services for your business
                    </span>
                </h1>

                <form className='d-flex'>
                    <span><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z"></path></svg></span>
                    <input type="search" autoComplete="off" placeholder='Try "building mobile app"' />
                    <button>Search</button>
                </form>

                <div className="popular d-flex">
                    Popular:
                    <ul className='d-flex'>
                        <li>
                            <a href="">Website Design</a>
                        </li>
                        <li>
                            <a href="">WordPress</a>
                        </li>
                        <li>
                            <a href="">Logo Design</a>
                        </li>
                        <li>
                            <a href="">Video Editing</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}





{/* <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-ride="carousel">
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img className="d-block w-100" src="..." alt="First slide" />
        </div>
        <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Second slide" />
        </div>
        <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Third slide" />
        </div>
    </div>
</div> */}
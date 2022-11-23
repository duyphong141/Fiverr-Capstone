import React from 'react'
import Header from '../../components/Header/Header'
import './ChiTietLoai.css'

export default function ChiTietLoai() {
  return (
    <>
      <Header />
      <div className='banner-chitietloai'>
        <div className="backgroundImg">
          <div className="banner-content">
            <h1 className='title'>Graphics & Design</h1>
            <p className='subtitle'>Designs to make you stand out.</p>
            <div className="banner-video">
              <button>
                <span>
                  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8ZM5.742 11.778 11.655 8.3a.348.348 0 0 0 0-.6L5.742 4.222a.348.348 0 0 0-.525.3v6.956a.348.348 0 0 0 .525.3Z"></path></svg>
                </span>
                How Fiverr Works
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="explore">
        <div className="buckets-container">
          <h2>Explore Graphics & Design</h2>
          <div className="buckets-container-wrapper">
            <article>
              <img className='img-wrapper' src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/431c7d880582a199f5b240dde2694206-1626594004536/Logo%20_%20Brand%20Identity_B_2x.png" alt="" />
              <h3 className='title-wrapper'>Logo & Brand Identity</h3>
              <div className="item-wrapper">
                <a className='item-name' href="">Logo Design</a>
                
                <span className='item-name-arrow'>
                  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M9.923 2.969a.702.702 0 0 0-1.031 0 .801.801 0 0 0 0 1.09l2.804 2.96H1.486c-.403 0-.73.345-.73.77 0 .426.327.77.73.77h10.358l-2.952 3.118a.801.801 0 0 0 0 1.09c.285.3.747.3 1.031 0l4.123-4.355a.801.801 0 0 0 0-1.09l-.069-.072a1.422 1.422 0 0 0-.01-.01L9.923 2.969Z"></path></svg>
                </span>
              </div>

            </article>
          </div>
        </div>
      </div>

    </>
  )
}

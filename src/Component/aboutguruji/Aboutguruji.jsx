import React from 'react'

function Aboutguruji() {
  return (
    <div className=''>
      <h1>Aboutguruji</h1>
       {/* First Row */}
       <div className="row">
        <img
          src="/images/pngegg (6) (2).png"
          alt="Guru Ji"
          className="image"
        />
        <div className="text-box">
          <h2>Guru Ji 1</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            since the 1500s.
          </p>
        </div>
      </div>

       {/* Second Row */}
       <div className="row">
        <div className="text-box">
          <h2>Guru Ji 1</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            since the 1500s.
          </p>
        </div>
        <img
          src="/images/pngegg (6) (2).png"
          alt="Guru Ji"
          className="image"
        />
      </div>
      <div>

      </div>
    </div>
  )
}

export default Aboutguruji
import Head from 'next/head'

var arr2 = []
for (var i=0; i<=100; i++){
  arr2.push(i)
}

export default function Home() {
  return (
    <>
       <div className='page'>
        <div className='top'>
          <div className='top-title'>
            <h2>Members &gt; </h2>
          </div>
            <div className='top-members'>
              {arr2.map((m,i) =>
                <div key={i} className='member-holder'>
                <div className='member-image-holder'>
                  <img className='member-profile-img' src='/images/profile-img.jpg' />
                </div>
                <p className='member-name'>Joe Doe</p>
              </div>
              )}
            </div>
          </div>
          <div className='body'>
          {arr2.map((m,i) =>
          <div key={i} className='product-preview'>
            <div className='product-img-thumb'>
              <img className='product-img-full' src='/images/profile-img.jpg' />
            </div>
            <div className='product-description'>
              <h4>Bottega Veneta</h4>
              <p>Red Leather Sandals</p>
            </div>
            <div className='product-pricing'>
              <div className='product-pricing-left'>
                <h5>675$</h5>
                <h5>Usa</h5>
            </div>
            <div className='img-holder'>
              <img className='product-img' src='/images/profile-img.jpg' />
            </div>
          </div>
        </div>
        )}
        </div>
      </div>
   </>
  )
}

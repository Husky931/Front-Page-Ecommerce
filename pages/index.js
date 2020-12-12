import Head from 'next/head'
import { AiOutlineSearch } from "react-icons/ai";
import { CgMenuRound } from "react-icons/cg";

import React, {useState} from 'react'

var arr2 = []
for (var i=0; i<=100; i++){
  arr2.push(i)
}

function testFunction() {
  console.log('i am clicked')
}

export default function Home() {

  const [color, setColor] = useState('')

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
          <div className='body-top'>
            <div className='body-top-left'>
              <div onClick={() => setColor('sale')} className={color === 'sale' ? 'selected' : ''} >For sale</div>
              <div onClick={() => setColor('tops')} className={color === 'tops' ? 'selected' : ''}>Tops</div>
              <div onClick={() => setColor('bottoms')} className={color === 'bottoms' ? 'selected' : ''}>Bottoms</div>
              <div onClick={() => setColor('dresses')} className={color === 'dresses' ? 'selected' : ''}>Dresses</div>
              <div onClick={() => setColor('jacket')} className={color === 'jacket' ? 'selected' : ''}>Jackets</div>
              <div onClick={() => setColor('shoes')} className={color === 'shoess' ? 'selected' : ''}>Shoes</div>
              <div onClick={() => setColor('bags')} className={color === 'bags' ? 'selected' : ''}>Bags</div>
              <div onClick={() => setColor('jewellery')} className={color === 'jewellery' ? 'selected' : ''}>Jewellery</div>
              <div onClick={() => setColor('other')} className={color === 'other' ? 'selected' : ''}>Other</div>
            </div>
            <div className='body-top-right'>
              <div className='body-top-right-icon-holder'>
                <AiOutlineSearch className='icon' />
              </div>
              <div className='body-top-right-icon-holder'>
                <CgMenuRound className='icon' />
              </div>
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

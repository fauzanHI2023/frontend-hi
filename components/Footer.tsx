import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col bg-hi-darklight mx-auto w-full max-w-8xl px-6 py-12 xs:px-8 sm:px-16">
        <div className="flex flex-row">
            <div></div>
            <div></div>
        </div>
        <div className="flex flex-col">
            <div></div>
            <div className="flex flex-row justify-between">
                <h6 className="font-white"><span>&#64;</span> 2024 Human Initiative. All rights reserved</h6>
                <div className="flex flex-row">
                    <span>WA</span>
                    <span>IG</span>
                    <span>YT</span>
                    <span>TT</span>
                    <span>LD</span>
                    <span>MT</span>
                    <span>FB</span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
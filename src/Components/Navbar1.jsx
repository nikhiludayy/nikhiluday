import React from 'react'

const Navbar1 = () => {
  return (
    <div className='max-w-screen-xl mx-auto fixed z-10'>
        <div><div className="links flex gap-14  ml-20">
          {["Home", "Projects", "", "About Me"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-0.5 h-6 bg-zinc-500"></span>
            ) : (
              <a
                key={index}
                className="text-sm flex items-center gap-1"
                href="#"
              >
                {index === 1 ? (
                  <span
                    style={{ boxShadow: "0 0 .45em #00FF19" }}
                    className="inline-block bg-green-500 w-1 h-1 rounded-full "
                  ></span>
                ) : null}
                {elem}
              </a>
            )
          )}
        </div></div>
    </div>
  )
}

export default Navbar1
import React from 'react'

const FounderCard = ({data}) => {
  return (
    <>
     <div className="justify-center gap-5 max-w-7xl px-4 md:px-10 md:py-10 mt-2 bg-gray-100 rounded-lg md:shadow-lg md:mb-0 mb-2">
        <div className="flex justify-center">
          
        </div>

        {/* Image + Description */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:p-3 bg-gray-100 mt-3">
         {data.image && ( <img
            src={data.image}
            alt="Founder image"
            className="rounded-xl h-63 w-50 shadow-lg object-cover shadow-gray-500 hover:shadow-gray-700 transition-shadow duration-300 cursor-pointer"
          />
            )}
          <div className="flex flex-col">
            <h1 className="group relative text-center md:text-start inline-block text-xl md:text-3xl font-semibold text-gray-800">
            <span className="relative z-10">{data.name}</span>
            <span className="absolute bottom-0 left-1 w-0 h-1 bg-red-500 transition-all duration-500 group-hover:w-full group-hover:left-0 rounded"></span>
          </h1>
            <p className="text-gray-700 italic text-xs text-center md:text-start font-semibold md:text-sm max-w-3xl md:mt-1">
              {data.role}
            </p>
            <p className="text-gray-700 text-xs md:text-sm text-justify max-w-4xl mt-1">
              {data.description}
            </p>
            

          </div>
        </div>
      </div>
    </>
  )
}

export default FounderCard

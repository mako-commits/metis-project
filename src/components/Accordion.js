import React, { useState } from 'react'

const Accordion = ({ title, from, to, value, open,  time }) => {

    const [openTx, setOpenTx] = useState(open)

    const click = () => {
        setOpenTx(!openTx)
    }

    const timeTx = new Date(time * 1000)
    return (
        <div className="flex flex-wrap  border-2 border-dashed bg-gray-200 shadow-lg rounded-lg my-2 p-3">
            <div onClick={click} className="tab w-full ">
                <p className="rounded-t-lg text-lg flex items-center pl-10 py-4 cursor-pointer text-white overflow-hidden border-t shadow-lg p-2 bg-white dark:bg-gray-800">
                <p className='font-bold pr-2 text-lg'>Transaction:</p>
                <p className='text-sm'>{title.slice?.(0,10)}...</p>
                </p>
                {openTx &&
                    <div className=" rounded-b-lg pl-10 py-4 tab-content overflow-hidden border-l-8 bg-gray-100 border-indigo-500 leading-normal">
                       <div className='my-2 flex'><p className='font-bold pr-2'>From:</p>{from}</div>
                       <div className='my-2 flex'><p className='font-bold pr-2'>To:</p>{to}</div>
                       <div className='my-2 flex'><p className='font-bold pr-2'>Amount:</p>{value}</div>
                       <div className='my-2 flex'><p className='font-bold pr-2'>On:</p>{timeTx.toUTCString()}</div>
                    </div> 
                }
            </div>
        </div>
    )
}

export default Accordion

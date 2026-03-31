import React from 'react'

const FailedTask = ({data}) => {
  return (
    // 1. Exact same dark-mode container as the other cards for perfect alignment
    <div className='w-[300px] p-5 bg-zinc-900 border border-zinc-800 rounded-xl shrink-0 flex flex-col justify-between'>
        
        <div>
            <div className='flex justify-between items-center'>
              {/* 2. Glassy Category Tag: I used the Rose theme here to match the failed state */}
              <h3 className='bg-rose-500/10 text-rose-500 px-3 py-1 text-xs font-medium rounded-full'>
                {data.category}
              </h3>
              <h4 className='text-sm text-zinc-400'>{data.date}</h4>
            </div>
            
            <h2 className='mt-5 font-semibold text-xl text-zinc-100'>{data.title}</h2>
            <p className='mt-3 text-sm text-zinc-400'>{data.description}</p>
        </div>

        {/* 3. The Failed Badge: A static, red-tinted box that anchors the card */}
        <div className='mt-6'>
            <button className='w-full bg-rose-500/10 text-rose-500 border border-rose-500/20 py-2 text-sm font-medium rounded cursor-default'>
                Failed
            </button>
        </div>
        
      </div>
  )
}

export default FailedTask
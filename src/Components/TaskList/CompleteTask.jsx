import React from 'react'

const CompleteTask = ({data}) => {
  return (
    // 1. Matches the exact dimensions and dark theme of AcceptTask
    <div className='w-[300px] p-5 bg-zinc-900 border border-zinc-800 rounded-xl shrink-0 flex flex-col justify-between'>
        
        <div>
            <div className='flex justify-between items-center'>
              {/* 2. Category Tag: I used an emerald glow here to match the "success" theme of the card */}
              <h3 className='bg-emerald-500/10 text-emerald-500 px-3 py-1 text-xs font-medium rounded-full'>
                {data.category}
              </h3>
              <h4 className='text-sm text-zinc-400'>{data.date}</h4>
            </div>
            
            <h2 className='mt-5 font-semibold text-xl text-zinc-100'>{data.title}</h2>
            <p className='mt-3 text-sm text-zinc-400'>{data.description}</p>
        </div>

        {/* 3. Status Badge: Replaced the clickable button with a static success badge */}
        <div className='mt-6'>
            <button className='w-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 py-2 text-sm font-medium rounded cursor-default'>
                Completed
            </button>
        </div>
        
      </div>
  )
}

export default CompleteTask
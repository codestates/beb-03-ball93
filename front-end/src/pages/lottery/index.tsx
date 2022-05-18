import PlayLotteryView from 'views/PlayLotteryView'

const lottery = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='text-center text-9xl font-extrabold leading-none tracking-tight'>
        {/* <span className='bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500'>
          Hello world
        </span> */}
      </h1>
      <PlayLotteryView />
    </div>
  )
}
export default lottery

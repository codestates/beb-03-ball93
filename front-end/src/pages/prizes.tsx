import WinningsTable from 'components/WinningsTable'

const prizes = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-1 pt-4'>
      <div className='flex-col justify-center items-center rounded-md pt-4 w-full'>
        <div className='text-3xl pb-6'>Prize Table</div>
        {<WinningsTable />}
      </div>
    </div>
  )
}

export default prizes

const WinningsTable = () => {
  const winningTableData = [
    {
      prizeTier: '1st (6 digits match)',
      winnings: '1 in 95,344,200',
      averagePrize: '34,573,468 TORRI',
    },
    {
      prizeTier: '2nd (5 digits match)',
      winnings: '1 in 5,959,013',
      averagePrize: '470,638 TORRI',
    },
    {
      prizeTier: '3rd (4 digits match)',
      winnings: '1 in 3,405,150',
      averagePrize: '96,134 TORRI',
    },
    {
      prizeTier: '4th (3 digits match)',
      winnings: '1 in 423,752',
      averagePrize: '4,072 TORRI',
    },
    {
      prizeTier: '5th (2 digits match)',
      winnings: '1 in 15,134',
      averagePrize: '103 TORRI',
    },
  ]

  console.log()

  return (
    <div className='text-center'>
      <table className='table-auto border-collapse w-full'>
        <thead>
          <tr>
            <th className='border border-slate-200'>Prize Tier</th>
            <th className='border border-slate-200'>Winnings</th>
            <th className='border border-slate-200'>Average Prize</th>
          </tr>
        </thead>
        <tbody>
          {winningTableData.map((data, index) => (
            <tr key={index}>
              <td className='border border-slate-200'>{data.prizeTier}</td>
              <td className='border border-slate-200'>{data.winnings}</td>
              <td className='border border-slate-200'>{data.averagePrize}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default WinningsTable

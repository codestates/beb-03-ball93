import React from 'react'

// import Table from '@mui/material/Table'
// import TableBody from '@mui/material/TableBody'
// import TableCell from '@mui/material/TableCell'
// import TableContainer from '@mui/material/TableContainer'
// import TableHead from '@mui/material/TableHead'
// import TableRow from '@mui/material/TableRow'
// import Paper from '@mui/material/Paper'

const WinningsTable = () => {
  const data = [
    {
      prizeTier: '1등 (6자리 일치)',
      winnings: '1 in 95,344,200',
      averagePrize: '34,573,468 TORRI',
    },
    {
      prizeTier: '2등 (5자리 일치)',
      winnings: '1 in 5,959,013',
      averagePrize: '470,638 TORRI',
    },
    {
      prizeTier: '3등 (4자리 일치)',
      winnings: '1 in 3,405,150',
      averagePrize: '96,134 TORRI',
    },
    {
      prizeTier: '4등 (3자리 일치)',
      winnings: '1 in 423,752',
      averagePrize: '4,072 TORRI',
    },
    {
      prizeTier: '5등 (2자리 일치)',
      winnings: '1 in 15,134',
      averagePrize: '103 TORRI',
    },
    {
      prizeTier: '보너스 (5자리 + PAIR 일치)',
      winnings: '1 in 15,134',
      averagePrize: '103 TORRI',
    },
  ]

  return (
    <></>
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
    //     <TableHead>
    //       <TableRow
    //         sx={{
    //           ':nth-of-type(1n)': {
    //             backgroundColor: '#f7f9fc',
    //           },
    //         }}
    //       >
    //         <TableCell align='center'>Prize Tier</TableCell>
    //         <TableCell align='center'>Winnings</TableCell>
    //         <TableCell align='center'>Average Prize</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {data.map((row) => (
    //         <TableRow
    //           key={row.winnings}
    //           sx={{
    //             ':nth-of-type(2n)': {
    //               backgroundColor: '#f7f9fc',
    //             },
    //           }}
    //         >
    //           <TableCell align='center'>{row.prizeTier}</TableCell>
    //           <TableCell align='center'>{row.winnings}</TableCell>
    //           <TableCell align='center'>{row.averagePrize}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  )
}

export default WinningsTable

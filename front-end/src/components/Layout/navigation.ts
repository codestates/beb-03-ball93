type TLink = {
  name: string
  href: string
}

type TNavigation = {
  pages: TLink[]
}

export const navigation: TNavigation = {
  pages: [
    // { name: 'Home', href: '/' },
    { name: 'Lottery', href: '/lottery' },
    { name: 'Bonus', href: '/bonus' },
    { name: 'Swap', href: '/swap' },
    { name: 'Prizes', href: '/prizes' },
    { name: 'MyPage', href: '/mypage' },
  ],
}

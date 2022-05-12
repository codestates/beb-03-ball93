import { Language } from '../LangSelector/types';
import { FooterLinkType } from './types';
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from '../Svg';

export const footerLinks: FooterLinkType[] = [
  {
    label: 'About',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.DecentralizedLotto.finance/contact-us',
      },
      {
        label: 'Blog',
        href: 'https://DecentralizedLotto.medium.com/',
      },
      {
        label: 'Community',
        href: 'https://docs.DecentralizedLotto.finance/contact-us/telegram',
      },
      {
        label: 'TOKEN',
        href: 'https://docs.DecentralizedLotto.finance/tokenomics/token',
      },
      {
        label: '—',
      },
      {
        label: 'Online Store',
        href: 'https://DecentralizedLotto.creator-spring.com/',
        isHighlighted: true,
      },
    ],
  },
  {
    label: 'Help',
    items: [
      {
        label: 'Customer',
        href: 'Support https://docs.DecentralizedLotto.finance/contact-us/customer-support',
      },
      {
        label: 'Troubleshooting',
        href: 'https://docs.DecentralizedLotto.finance/help/troubleshooting',
      },
      {
        label: 'Guides',
        href: 'https://docs.DecentralizedLotto.finance/get-started',
      },
    ],
  },
  {
    label: 'Developers',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/DecentralizedLotto',
      },
      {
        label: 'Documentation',
        href: 'https://docs.DecentralizedLotto.finance',
      },
      {
        label: 'Bug Bounty',
        href: 'https://app.gitbook.com/@DecentralizedLotto-1/s/DecentralizedLotto/code/bug-bounty',
      },
      {
        label: 'Audits',
        href:
          'https://docs.DecentralizedLotto.finance/help/faq#is-DecentralizedLotto-safe-has-DecentralizedLotto-been-audited',
      },
      {
        label: 'Careers',
        href: 'https://docs.DecentralizedLotto.finance/hiring/become-a-chef',
      },
    ],
  },
];

export const socials = [
  {
    label: 'Twitter',
    icon: TwitterIcon,
    href: 'https://twitter.com/DecentralizedLotto',
  },
  {
    label: 'Telegram',
    icon: TelegramIcon,
    items: [
      {
        label: 'English',
        href: 'https://t.me/DecentralizedLotto',
      },
      {
        label: 'Bahasa Indonesia',
        href: 'https://t.me/DecentralizedLottoIndonesia',
      },
      {
        label: '中文',
        href: 'https://t.me/DecentralizedLotto_CN',
      },
      {
        label: 'Tiếng Việt',
        href: 'https://t.me/DecentralizedLottoVN',
      },
      {
        label: 'Italiano',
        href: 'https://t.me/DecentralizedLotto_ita',
      },
      {
        label: 'русский',
        href: 'https://t.me/DecentralizedLotto_ru',
      },
      {
        label: 'Türkiye',
        href: 'https://t.me/DecentralizedLottoturkiye',
      },
      {
        label: 'Português',
        href: 'https://t.me/DecentralizedLottoPortuguese',
      },
      {
        label: 'Español',
        href: 'https://t.me/DecentralizedLottoEs',
      },
      {
        label: '日本語',
        href: 'https://t.me/DecentralizedLottojp',
      },
      {
        label: 'Français',
        href: 'https://t.me/DecentralizedLottofr',
      },
      {
        label: 'Deutsch',
        href: 'https://t.me/DecentralizedLotto_DE',
      },
      {
        label: 'Filipino',
        href: 'https://t.me/DecentralizedLotto_Ph',
      },
      {
        label: 'ქართული ენა',
        href: 'https://t.me/DecentralizedLottoGeorgia',
      },
      {
        label: 'Announcements',
        href: 'https://t.me/DecentralizedLottoAnn',
      },
    ],
  },
  {
    label: 'Reddit',
    icon: RedditIcon,
    href: 'https://reddit.com/r/DecentralizedLotto',
  },
  {
    label: 'Instagram',
    icon: InstagramIcon,
    href: 'https://instagram.com/DecentralizedLotto_official',
  },
  {
    label: 'Github',
    icon: GithubIcon,
    href: 'https://github.com/DecentralizedLotto/',
  },
  {
    label: 'Discord',
    icon: DiscordIcon,
    href: 'https://discord.gg/DecentralizedLotto',
  },
  {
    label: 'Medium',
    icon: MediumIcon,
    href: 'https://DecentralizedLotto.medium.com/',
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));

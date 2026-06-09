import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '解决方案',
      href: getPermalink('/#solutions'),
    },
    {
      text: '接入流程',
      href: getPermalink('/#process'),
    },
    {
      text: '适用团队',
      href: getPermalink('/#use-cases'),
    },
    {
      text: '常见问题',
      href: getPermalink('/#faq'),
    },
    {
      text: '联系我们',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: '预约咨询', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: '服务能力',
      links: [
        { text: '终端供给', href: getPermalink('/#solutions') },
        { text: 'SDK/API 集成', href: getPermalink('/#solutions') },
        { text: '本地收单协作', href: getPermalink('/#solutions') },
      ],
    },
    {
      title: '了解 SPC Pay',
      links: [
        { text: '接入流程', href: getPermalink('/#process') },
        { text: '适用团队', href: getPermalink('/#use-cases') },
        { text: '联系我们', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: '服务条款', href: getPermalink('/terms') },
    { text: '隐私政策', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `© ${new Date().getFullYear()} SPC Pay. 为设备、POS、SaaS 与自助系统提供澳洲收款接入支持。`,
};

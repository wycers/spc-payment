import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Solutions',
      href: getPermalink('/#solutions'),
    },
    {
      text: 'Process',
      href: getPermalink('/#process'),
    },
    {
      text: 'Use Cases',
      href: getPermalink('/#use-cases'),
    },
    {
      text: 'FAQ',
      href: getPermalink('/#faq'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Book a consultation', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Capabilities',
      links: [
        { text: 'Terminal supply', href: getPermalink('/#solutions') },
        { text: 'SDK integration', href: getPermalink('/#solutions') },
        { text: 'Acquiring support', href: getPermalink('/#solutions') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Process', href: getPermalink('/#process') },
        { text: 'Use cases', href: getPermalink('/#use-cases') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `© ${new Date().getFullYear()} SPC Pay. Australia payment enablement for devices, POS, SaaS, and self-service systems.`,
};

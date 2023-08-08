import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMail,
  IconPhone,
} from '@tabler/icons';

export const contactList = {
  Phone: IconPhone,
  Email: IconMail,
  LinkedIn: IconBrandLinkedin,
  WhatsApp: IconBrandWhatsapp,
  Github: IconBrandGithub,
};

export interface IContact {
  platform: keyof typeof contactList;
  text: string;
  link: string;
}

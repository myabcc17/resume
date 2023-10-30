import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '전우혁',
    small: '(Jeon Woo-hyeok)',
  },
  contact: [
    {
      title: 'myabcc17@naver.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/myabcc17',
      link: 'https://github.com/myabcc17/resume',
      icon: faGithub,
    },
  ],
  notice: {
    title: "This resume is a sample page of 'https://github.com/uyu423/resume-nextjs'.",
    icon: faBell,
  },
};

export default profile;

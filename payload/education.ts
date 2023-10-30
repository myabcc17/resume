import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '경북대학교',
      subTitle: '컴퓨터학부 학사 졸업',
      startedAt: '2014-03',
      endedAt: '2020-02',
    },
    {
      title: '영남고등학교',
      subTitle: '이공계 졸업 (대구광역시)',
      startedAt: '2011-03',
      endedAt: '2014-02',
    },
  ],
};

export default education;

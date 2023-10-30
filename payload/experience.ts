import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '카카오',
      position: '카카오 오픈빌더 플랫폼 백엔드 개발자',
      startedAt: '2020-07',
      descriptions: [
        '카카오 챗봇 오픈빌더 플랫폼 백엔드 서버 개발',
        '챗봇 데이터 집계 파이프라인 개발 및 분석 데이터 모델링',
        '레거시 제거 및 MSA 전환',
        ''
      ],
      skillKeywords: ['Java', 'Spring Boot', 'MongoDB', 'Kafka', 'Redis', 'k8s'],
    },
    {
      title: '웍스모바일',
      position: '백엔드 개발자 전환형 인턴',
      startedAt: '2020-01',
      endedAt: '2020-02',
      descriptions: ['기독 기능 게시판 프론트 및 서버 개발'],
      skillKeywords: ['HTML/CSS', 'Java', 'MySQL', 'Mybatis'],
    },
  ],
};

export default experience;

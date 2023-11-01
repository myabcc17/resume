import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '분석 인사이트 서비스 개발',
      startedAt: '2022-04',
      endedAt: '2023-05',
      where: '카카오 (Kakao)',
      descriptions: [
        {
          content: '2023년 분석 인사이트 서비스 오픈',
          weight: 'MEDIUM',
          descriptions: [
            { content: '사용자의 성별, 연령대 등 디멘젼에 따라 분석 인사이트 데이터 제공' },
            { content: '데이터 파이프라인 구성 및 기존 데이터 마이그레이션' },
            { content: '개인정보보호 조치 및 민감 필드 클렌징 배치 수행' },
            { content: '차등 백업 일별 파이프라인 구성으로 데이터 안정성 확보' },
            { content: 'API 캐싱하여 데이터베이스 부하 최소화 및 사용자 경험 증대' },
          ],
        },
        {
          content: '2022년 데이터 파이프라인 개선',
          weight: 'MEDIUM',
          descriptions: [
            { content: '하둡에 파일로 관리하고 있던 데이터를 Hive 테이블로 관리하도록 변경' },
            { content: '전체 재집계만 가능했던 구조에서 부분 재집계 가능한 구조로 개선' },
            {
              content:
                '기존 사용자 잔존율 계산 로직을 리팩토링하여 용량은 줄이고, 쿼리 속도를 높임',
            },
          ],
        },
        {
          content: '2022년 Clickhouse PoC 및 파일럿',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '분석의 다양화를 위해 디멘젼과 세그먼트를 제공하여 실시간 분석 가능한 구조로 개선',
            },
            {
              content:
                'Google Analytics, NHN Cloud 에서 제공하는 잔존율을 참고하여 잔존율 개념 재정의',
            },
            { content: 'k8s를 이용하여 클러스터와 HA, 백업 파이프라인 구성' },
          ],
        },
      ],
    },
    {
      title: '국민비서 구삐 챗봇 개발',
      startedAt: '2021-07',
      endedAt: '2021-08',
      where: '카카오 (Kakao)',
      descriptions: [
        { content: '행정안전부 협업 과제: 국민비서 구삐의 카카오 챗봇을 통한 진입점 생성' },
        {
          content:
            '행정안전부에서 요구한 트래픽 제한에 맞춘 구조 개발을 위해 챗봇에 Rate Limit 적용',
        },
        { content: 'burst 상황을 대비한 접수 및 처리 서비스를 비동기로 처리' },
        { content: '가입 현황 파악을 위한 지표 수집 및 시각화 차트 제공' },
      ],
    },
    {
      title: '2021 인턴 영입 챗봇 개발',
      startedAt: '2021-03',
      endedAt: '2021-04',
      where: '카카오 (Kakao)',
      descriptions: [
        {
          content:
            '처음으로 홀로 개발자로 참여해 다른 직군과의 협업을 이끈 경험. 개인적으로 유의미했던 과제',
        },
      ],
    },
    {
      title: '카카오 오픈빌더 플랫폼 개발 운영 및 유지보수',
      startedAt: '2020-07',
      where: '카카오 (Kakao)',
      descriptions: [
        { content: '카카오 챗봇 빌더 플랫폼인 오픈빌더 서버 개발 및 운영, 유지보수' },
        {
          content: '2023년 이지투빌더 (챗봇을 쉽게 생성해주는 도구) 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '챗봇 제작 중 임시 저장 가능한 데이터 구조 설계 및 개발' },
            { content: '이지투빌더 API 개발' },
            { content: '지표 수집을 위한 데이터 스키마 개발' },
            { content: '지표 쿼리 작성 및 대시보드 구성' },
          ],
        },
        {
          content: '2023년 챗봇 말풍선 정합성 개선',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '사용자가 응답으로 사용하는 API 말풍선과 플랫폼에서 지원하는 말풍선 프로토콜 통합 및 코드 개발',
            },
            { content: '정합성 안맞는 말풍선 레거시 정리 및 데이터 마이그레이션' },
            { content: '랜덤형 말풍선 지원을 위한 캐시 데이터 구조 개선' },
          ],
        },
        { content: '2022년 변경에 대한 알림을 위해 API 사용처 정리 및 헤더 추가' },
      ],
    },
  ],
};

export default project;

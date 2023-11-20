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
          content: '2023.03 ~ 2023.05 분석 인사이트 서비스 오픈',
          weight: 'MEDIUM',
          descriptions: [
            { content: '사용자의 성별, 연령대 등 디멘젼별 분석 인사이트 데이터 제공' },
            { content: '개인정보 보호를 위한 조치 및 민감 데이터 클렌징 처리' },
            { content: 'API 캐싱을 통한 데이터베이스 부하 최소화 및 사용자 경험 향상' },
          ],
        },
        {
          content: '2022.07 ~ 2022.09 Clickhouse PoC 및 파일럿',
          weight: 'MEDIUM',
          descriptions: [
            { content: '분석의 다양화를 위해 디멘젼과 세그먼트 별 실시간 분석 가능하도록 개선' },
            { content: '타사 서비스(구글, NHN) 참고 잔존율 개념 재정의' },
            { content: 'k8s 기반 클러스터 및 HA, 백업 파이프라인 구축' },
          ],
        },
        {
          content: '2022.04 ~ 2022.05 데이터 파이프라인 개선',
          weight: 'MEDIUM',
          descriptions: [
            { content: '하둡에서 Hive로 데이터 저장소 변경 및 마이그레이션' },
            {
              content:
                '전체 재집계만 지원하던 것을 부분 재집계도 지원하도록 변경. CS 대응 효율적으로 개선',
            },
            { content: '기존 잔존율 계산 로직 리팩토링을 통해 효율 향상' },
          ],
        },
      ],
    },
    {
      title: '중개봇 과금 기능 개발',
      startedAt: '2021-08',
      endedAt: '2021-10',
      where: '카카오 (Kakao)',
      descriptions: [
        {
          content: '중개봇에 과금하기 위해 신규 BM 기능 추가',
          weight: 'MEDIUM',
        },
        {
          content: '익일 4시 과금을 위한 중개-위임 관계 생성 예약 기능 개발',
          weight: 'MEDIUM',
        },
        {
          content: '기존 중개 관계 데이터 구조 개선 및 일원화',
        },
        {
          content: '중개 관계 API 개발 및 모델 문서화',
        },
      ],
    },
    {
      title: '사내/외 챗봇 개발',
      startedAt: '2021-03',
      endedAt: '2021-08',
      where: '카카오 (Kakao)',
      descriptions: [
        {
          content: '행정안전부 협업 과제: 국민비서 구삐 챗봇 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'burst 트래픽 고려 비동기 메시지 아키텍처로 개발' },
            { content: '통계 데이터 수집 및 시각화 차트 제공' },
          ],
        },
        {
          content: '2021 카카오 인턴 영입 챗봇 개발',
          descriptions: [
            {
              content:
                '처음으로 홀로 개발자로 참여해 다른 직군과의 협업을 이끈 경험. 개인적으로 유의미했던 과제',
            },
          ],
        },
      ],
    },
    {
      title: '카카오 오픈빌더 플랫폼 개발 운영 및 유지보수',
      startedAt: '2020-07',
      where: '카카오 (Kakao)',
      descriptions: [
        { content: '카카오 챗봇 빌더 플랫폼인 오픈빌더 서버 개발 및 운영, 유지보수' },
        { content: '레거시 코드를 도메인 중심 아키텍처로 점진적 개선하며 팀 내 개발 컨벤션 정의' },
        {
          content: '2023년 이지투빌더: 챗봇도우미 개발',
          weight: 'MEDIUM',
        },
        {
          content: '2023년 챗봇 말풍선 정합성 개선',
          weight: 'MEDIUM',
        },
        {
          content: '2022년 API 내/외부 사용처 추적 기능 추가',
        },
        {
          content: '2022년 화재 대응',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '분석/지표 데이터 복구',
            },
            {
              content: '모니터링 파이프라인 복구 (jaeger, fluentd, logstash on k8s)',
            },
            {
              content: '개발존 데이터베이스 자체 백업 일원화',
            },
          ],
        },
      ],
    },
  ],
};

export default project;

import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요. 저는 자바/코틀린 백엔드 개발자 전우혁입니다.',
    '시스템 아키텍처 설계를 좋아하고, 레거시를 개선에 즐거움을 느낍니다. 유지보수 하기 좋은 코드와 구조를 고민하며 개발합니다.',
    '항상 사용자 중심의 서비스 개발을 목표로 두고 있습니다. 팀 내외 커뮤니케이션에 적극 참여하여 동료들의 의견을 경청하고, 서로 협력하며 문제를 해결하는 것을 중요하게 여깁니다. 개선할 수 있는 포인트를 지속적으로 찾아 사용자 경험 향상에 기여하고자 합니다.',
    '동료들로부터 신뢰와 인정을 받는 개발자가 되는 것이 저의 목표입니다. 첫 직장인 카카오에서 그것을 해냈다 생각합니다. 앞으로도 동료들의 신뢰를 얻기 위해 꾸준히 노력하는 개발자가 되겠습니다.',
  ],
  sign: 'woohyeok',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;

import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요. 저는 자바/코틀린 백엔드 개발자로 일하고 있는 전우혁입니다. 시스템 아키텍처 설계 고민하는 것을 좋아하고, 레거시를 개선하는 것에 즐거움을 느낍니다. 유지보수 하기 좋은 코드와 구조가 어떤 것일까 고민하며 개발하고 있습니다.',
    '항상 사용자들이 편리하게 이용할 수 있는 서비스를 제공하는데 중점을 맞추어 개발 생활을 보내고 있습니다. 팀 내외 커뮤니케이션에 적극적으로 참여하여 동료들의 의견을 경청하고, 서로 협력하며 문제를 해결하는 것을 즐깁니다. 개발 중인 서비스에서 더 개선할 수 있거나 사용자에게 더 나은 경험을 제공해줄 수 있는 부분을 찾는 것을 즐겨합니다.',
    '동료들로부터 신뢰와 인정을 받는 개발자가 되고 싶다는 생각을 줄곧 해왔고, 첫 직장인 카카오에서 그것을 해냈다 생각합니다. 앞으로도, 동료들의 신뢰를 받기 위해 꾸준히 노력하고 개발자가 되겠습니다.',
  ],
  sign: 'hyeok',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;

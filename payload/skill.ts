import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'Kubernetes',
      level: 3,
    },
    {
      title: 'Spring Boot',
      level: 3,
    },
    {
      title: 'Kafka',
      level: 3,
    },
    {
      title: 'Jaeger',
      level: 3,
    },
    {
      title: 'Kotlin',
      level: 2,
    },
    {
      title: 'Python',
      level: 2,
    },
    {
      title: 'Spark',
      level: 2,
    },
    {
      title: 'Hadoop',
      level: 2,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MongoDB',
      level: 3,
    },
    {
      title: 'Clickhouse',
      level: 3,
    },
    {
      title: 'Hive',
      level: 3,
    },
    {
      title: 'Redis',
      level: 2,
    },
    {
      title: 'MySQL',
      level: 2,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-End',
  items: [
    {
      title: 'Javascript',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 1,
    },
    {
      title: 'React.js',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'IDEA',
    },
    {
      title: 'Redash',
    },
    {
      title: 'Git / Github',
    },
    {
      title: 'Postman',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;

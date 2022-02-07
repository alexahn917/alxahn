export const PROFILE_INFO = {
    name: 'Alex SangHyeon Ahn',
    profession: 'Software Engineer',
    email: 'alexahn@fb.com',
    phoneNumber: '+1 650 709 7191',
    facebook: 'https://facebook.com/alxahn',
    instagram: 'https://instagram.com/alxahn',
    linkedin: 'https://www.linkedin.com/in/alexsanghyeonahn/',
  }

export const HIGHLIGHTS = [
    'Alex is a Software Engineer from Meta, working on Instagram Ads team.',
    'Alex is a Full Stack Engineer with experiences on Web, Mobile, Server, and API.',
    'Alex is currently leading a team of 6 engineers, overseeing Instagram ads product development and product growth.',    
];


export const WORK_EXPERIENCES = [
    {
      title: 'Meta',
      role: 'Senior Software Engineer',
      begin: 'June 2018',
      end: 'Present',
      logo: 'img/logo/meta.svg',
      link: 'https://www.facebook.com',
      descriptions: [
        'Lead Instagram Ads Advertiser Experiences team of 6 engineers.',
        'Developed next generation ads products including Dynamic Experiences, Ads Creative Optimizations, and Ads Preview.',
        'Generated significant event-based revenue increments by pioneering new ads buying experiences and launching a number of new ads products and features.'
      ],
    },
    {
      title: 'Moloco',
      role: 'Software Engineer',
      begin: 'May 2017',
      end: 'May 2018',
      logo: 'img/logo/moloco.png',
      link: 'https://www.molocoads.com',
      descriptions: [
        'Collaborated in building a mobile DSP infrastructure scaled for 1000 ad campaigns on both frontend (AngularJS) and backend (Go).',
        'Launched an Android, iOS, Unity, and JavaScript SDK for mobile event tracking using RESTful API (Moloco VAN).',
        'Built an internal chat bot for campaign management with ad-hoc features such as summarizing KPIs from cloud database (BigQuery).',
        'Automated and simplified over 35% of the campaign operation work flow by scripting tools such as price model generator.',
      ],
    },
    {
      title: 'Johns Hopkins University',
      role: 'Research Engineer',
      begin: 'Sept 2016',
      end: 'May 2017',
      logo: 'img/logo/jhu.png',
      link: 'https://www.cs.jhu.edu',
      descriptions: [
        'Developed various machine learning based prediction models using raw data scraped from the MLB Gameday website using R and Python.',
        'Designed unique features, automated the model training process, and simplified cross-validation and ROC analysis for evaluations.',
        'Created an API for predicting the next pitch ball type using pre-trained models for MLB team managers.',
      ],
    },
  ]

export default {
    PROFILE_INFO,
    HIGHLIGHTS,
    WORK_EXPERIENCES,
}
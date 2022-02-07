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
      role: 'Software Engineer Intern',
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
      role: 'Research Assistant',
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

export const PROJECTS = [
    {
        title: 'OXOPolitics',
        image_src: 'img/projects/oxopolitics.png',
        description: 'Created an interactive website for social & political community',
        link: 'https://oxopolitics.com/',
    },
    {
        title: 'Bias',
        image_src: 'img/projects/bias.png',
        description: 'Launched an iOS application for the K-pop artists fans community',
        link: 'https://apps.apple.com/us/app/bias-app/id1501987932',
    },
    {
        title: 'MediBlock',
        image_src: 'img/projects/mediblock.png',
        description: 'Built a prototype for blockchain based decentralized medical treatment costs',
        link: 'https://devpost.com/software/mediblock',
    },
    {
        title: 'MAVI',
        image_src: 'img/projects/mavi.png',
        description: 'Created an AI mobile application for visually impaired using CV',
        link: 'https://devpost.com/software/streetsmart-vc6hrf',
    },
    {
        title: 'Semester.ly',
        image_src: 'img/projects/semesterly.png',
        description: 'Contributed in an open source search engine for universities’ course databases',
        link: 'https://semester.ly/',
    },
    {
        title: 'Facebook Sentiment Analysis',
        image_src: 'img/logo/facebook.png',
        description: 'Analyzed and visualized public responses to Facebook page posts using LDA and PCA',
        link: '/files/facebook_sentiment_analysis.pdf'
    },
    {
        title: 'Multi Modal Deep Learning',
        image_src: 'img/projects/mlb.png',
        description: 'Built a binary sports prediction model using multimodal data with a 60.1% accuracy.',
        link: '/files/multimodal_deep_learning_prediction.pdf'
    },
    {
        title: 'Ex Parte',
        image_src: 'img/projects/ex_parte.png',
        description: 'Built data ETL pipelines for constructing a relational database for legal documents.',
    },
    {
        title: 'CafeIt',
        image_src: 'img/projects/cafeit.png',
        description: 'Developed an Android application for local café infrastructure.',
    },

];

export default {
    PROFILE_INFO,
    HIGHLIGHTS,
    WORK_EXPERIENCES,
    PROJECTS
}
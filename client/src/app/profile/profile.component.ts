import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  social: any;
  userData: any;
  awards: any;
  aboutUs: string;
  workInfo: any;
  education: any;
  skills: any;

  constructor() {
  }

  ngOnInit() {
    this.social = {
      linkedin: 'https://www.linkedin.com/in/manishrw',
      twitter: 'https://twitter.com/manishrw',
      skype: 'skype:manishsvnit007',
      github: 'https://github.com/manishrw/',
      email: 'mailto:manishsvnit007@gmail.com'
    };
    this.userData = {
      name: 'Manish Wadhwani',
      title: 'Software Engineer',
      mail: 'manishrw@yahoo.com',
      phone: '+91 8884715911',
      dob: '06-12-1991',
      address: {
        street: 'Whitefield, Bangalore',
        state: 'KA, India'
      },
      blog: {
        url: 'https://manishrw.blogspot.com',
        title: 'Personal blog'
      },
      job: 'Senior Backend Engineer'
    };
    this.awards = [
      'Runner up in IBM Techathon, 2013',
      'AIR 63 in ACM ICPC regionals finals, 2012',
      'AIR 10 in Ethical Hacking contest InCTF, 2012',
      'TOP 6 in IBM Global Entrepeneur program, 2015',
      'Winners of ACM Quest programming, MindBend, 2013 ',
      'IBM Deep Skill Award for Q4, 2014'
    ];
    this.aboutUs = '<p>A senior software engineer with 7+ years of experience in Distributed Systems, Web Applications, Machine Learning, and proficient in  JAVA, Python, Node.JS, NoSQL. Manish graduated from Sardar Vallabhbahi National Institute of Technology, Surat in Computer Engineering. He is currently pursuing Master\'s in Computer science from Georgia Tech with specialization in Computing Systems.<br><br>He has been associated and involved with computers throughout his life. While he is not designing/coding, he likes to play badminton and to ride the bike. He also likes to watch TV series in his spare time.</p>';//<br>Specialties: <ul><li>Distributed systems</li><li>Algorithm design</li><li>Web application development</li><li>Machine Learning</li></ul></p>';
    this.workInfo = [{
      year: 'Nov 2018 - Present',
      company: 'EY Product Engineering',
      role: 'Senior Software Engineer',
      description: '<p><b>Access-mgt service:</b> Designed and developed centralized access-mgt service which supports all the features of XACML 3.0 and modeled upon ABAC.<br><b>Generic Notification service: </b> Designed and developed to be reliable, scalable and multi-tenant platform to send notifications to the clients.</p><br>Technologies used: Java, Spring Boot, Cassandra, SQL Server, Kubernetes, Docker, NodeJS'
    }, {
      year: 'July 2016 - Nov 2018 ',
      company: ' Microsoft R&D India Pvt. Ltd. ',
      role: ' Software Engineer 2',
      description: '<p><b>Bing Answer Experience:</b> Designed and developed the pipeline to auto extract and rank Answers for queries using machine learning for a segment in Bing. It helped the coverage to gain by ~90% for automated answers.<br><b>Help Carousel:</b> ​ Designed and developed the system to generate and auto refresh the help topics in Carousel. The project also required clustering techniques to group similar answers into the same buckets.<br><b>Broken Links detection:</b> ​ Developed a system to catch broken links for the shipped experience. This helped to decrease the negative experience caused by stale links.</p><br>Technologies used: C#, Cosmos, Python, Azure ML'
    }, {
      year: 'April 2015 - June 2016 ',
      company: ' Medibox Technologies LLP ',
      role: ' Software Developer',
      description: '<p>Designed & Developed scalable web application to build digital platform for healthcare industry. Roles also included configuring cloud infrastructure to make application reliable & scalable, to facilitate Demilitarized zone, and proactively enforce security measures.</p><p>Technologies used: Mongo DB, Node.JS, AngularJS, ElasticSearch, Nginx, ELK stack.'
    }, {
      year: 'June 2013 - April 2015 ',
      company: ' IBM India Pvt. Ltd.',
      role: ' Application Developer',
      description: '<p>Developed and maintained business reports for a shipping giant. The reports helped customer gain better insights for demurrage & detention charges, vessel tracking, job booking and vessel filling optimisation. Developed a tool which automates account reset and creation process for client users with PYTHON and UNIX.</p><p>Technologies used: Python, Unix shell scripting, SQL, COGNOS, Qlikview.'
    }, {
      year: 'July 2011 - May 2012 ',
      company: ' ACM chapters, SVNIT ',
      role: ' Executive Committee Member',
      description: '<p>Organized and Conducted various seminars, competitions, hackathons and training sessions. Collaborated with fellow ACM mates to participate in competitive programming and develop various applications.</p>'
    }];

    this.education = [{
      title: 'M.S. in  Computer Science',
      univ: ' Georgia Tech, AL, US',
      year: '2018 - 2020',
      description: '<p>Specialisation in Computing Systems.<br> Courses: Grad Intro to OS, Intro to High Performance computing, Advanced OS, High Performance Computing Architecture, Graduate Algorithms, Reinforcement learning, Information Security, Machine learning for Trading, AI 4 Robotics, AI - ethics, bias and society.</p>'
    }, {
      title: 'Machine Learning Certification',
      univ: ' Stanford Online course - Coursera',
      year: '2016',
      description: '<p>Completed training in machine learning course by Andrew NG from Stanford University and earned a certificate. The course provided a broad introduction to machine learning, datamining, and statistical pattern recognition.</p>'
    }, {
      title: 'B.Tech in Computer Engineering',
      univ: ' SVNIT, Surat, GJ, India ',
      year: '2019 - 2013',
      description: '<p>Courses: Data Structures, Algorithm analysis and design, Theoretical Computer Science, Operating Systems, Systems software, Microprocessors & Interfacing Techniques, Information systems, Network & system security, Security in Embedded systems, Distributed systems, Engineering Mathmematics, and Artificial Intelligence.</p><p> Project on Evaluation of Privacy Homomorphic algoritms in Wireless Sensor Networks. Published a paper in IJCA for same. Seminar on Secure boot</p>'
    }, {
      title: 'Java professional course',
      univ: ' Aptech Edu. Ltd. ',
      year: '2009',
      description: '<p>Completed the course of JAVA Core developer from Aptech in 2009. The course provided an understanding of core OOPS principle, advanced data structures and principles of software design.</p>'
    }];

    this.skills = [{
      title: 'Languanges - C/C++/Java',
      value: '90%'
    }, {
      title: 'Scripting - Node.JS/Python/Shell',
      value: '80%'
    }, {
      title: 'Distributed systems',
      value: '70%'
    }, {
      title: 'NoSQL - Mongo DB/ Redis ',
      value: '75%'
    }, {
      title: 'Algorithms & Data structures',
      value: '85%'
    }, {
      title: 'Machine Learning ',
      value: '50%'
    }, {
      title: 'Web App development ',
      value: '80%'
    }, {
      title: 'DB SQl - MySQL, Oracle PL/SQL',
      value: '65%'
    }];
  }

}

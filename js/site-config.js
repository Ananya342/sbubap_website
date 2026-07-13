/**
 * Site configuration — update these links when ready.
 * No Stony Brook WordPress dependencies.
 */
export const site = {
  name: 'Beta Alpha Psi',
  chapter: 'Omicron Alpha Chapter',
  university: 'Stony Brook University',
  tagline: 'Preparing accounting and finance students for bright futures.',
  email: 'Sbubap@stonybrook.edu',
  logo: '/assets/images/bap-logo.png',

  // Social — replace # with real URLs when ready
  social: {
    instagram: 'https://www.instagram.com/stonybrookbap',
    linkedin: 'https://www.linkedin.com/in/stony-brook-bap',
    groupme: 'https://groupme.com/join_group/103183705/Bmccb6vt',
  },

  // External services — replace # when you have new links
  links: {
    newsletter: '#',
    googleCalendar: '#',
    membershipForm: '#',
    attendanceTracker: '#',
  },

  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about.html' },
    {
      label: 'Resources',
      href: '/resources.html',
      children: [
        { label: 'Membership Requirements', href: '/membership.html' },
        { label: 'Application', href: '/apply.html' },
        { label: 'Events', href: '/events.html' },
        { label: 'Attendance Tracker', href: '/attendance.html' },
        { label: 'Newsletter', href: '/newsletter.html' },
      ],
    },
    {
      label: 'Our Members',
      href: '/members.html',
      children: [
        { label: 'Pledges', href: '/members.html#pledges' },
        { label: 'Members', href: '/members.html#members' },
        { label: 'Alumni', href: '/members.html#alumni' },
      ],
    },
    {
      label: 'Leadership',
      href: '/leadership.html',
      children: [
        { label: 'Executive Board', href: '/leadership.html' },
        { label: 'Faculty Advisors', href: '/leadership.html#advisors' },
      ],
    },
    { label: 'Gallery', href: '/gallery.html' },
    { label: 'Sponsors', href: '/sponsors.html' },
    { label: 'Contact', href: '/contact.html' },
  ],
};

export const stats = [
  { value: '50+', label: 'Active Members' },
  { value: '20+', label: 'Events per Semester' },
  { value: 'Gold', label: 'Chapter Status' },
  { value: '1919', label: 'Founded Nationally' },
];

export const pillars = [
  {
    title: 'Professional Development',
    icon: 'briefcase',
    items: [
      'Workshops and firm presentations',
      'Resume review and interview practice',
      'Networking with Big Four and regional firms',
    ],
  },
  {
    title: 'Community Service',
    icon: 'heart',
    items: [
      'Food and clothing drives',
      'Island Harvest and Toys for Tots',
      'Book Fairies and local outreach',
    ],
  },
  {
    title: 'Social Events',
    icon: 'users',
    items: [
      'Chapter gatherings and induction ceremonies',
      'Build friendships and your professional network',
      'Connect with peers across the College of Business',
    ],
  },
  {
    title: 'Networking With Firms',
    icon: 'building',
    items: [
      'Accounting Advisory Board partnerships',
      'BDO, Cerini & Associates, CohnReznick, KPMG, PwC',
      'Direct access to recruiters and professionals',
    ],
  },
];

export const board = [
  {
    name: 'Ananya Jain',
    role: 'President',
    term: 'Fall 2026 – Present',
    email: 'ananya.jain.1@stonybrook.edu',
    bio: 'Hi everyone! My name is Ananya Jain, and I am the President. I am currently a junior double majoring in Computer Science and Applied Mathematics & Statistics, with a minor in Finance. I wanted this position because Beta Alpha Psi has provided me with an incredible community, professional network, and opportunities for growth. As President, I hope to help expand that community and create impactful opportunities for students at Stony Brook. I aspire to work in the finance industry, particularly in risk, research, or analytical roles, where I can combine my technical and quantitative skills to make an impact. One piece of advice I have for current students is to never be afraid of taking risks or failing as some of the greatest opportunities and lessons lie there.',
    photo: '/assets/images/placeholder-headshot.svg',
  },
  {
    name: 'Abby Azzarone',
    role: 'Vice President',
    term: 'Fall 2026 – Present',
    email: 'abigail.azzarone@stonybrook.edu',
    bio: 'Hi everyone, my name is Abby Azzarone and I am the Vice President. I am currently in my third year at Stony Brook University and majoring in Accounting. I wanted this position because it gives me the chance to help other students in the chapter grow professionally and make the most of the opportunities available to them. After completing my undergraduate degree, I plan to get my CPA license and begin my career at a large accounting firm. One piece of advice I have for current students is to take advantage of networking opportunities and get involved in clubs and organizations on campus.',
    photo: '/assets/images/placeholder-headshot.svg',
  },
  {
    name: 'Angie Tso',
    role: 'Chief Financial Officer and Director of Professional Organization Outreach',
    term: 'Fall 2026 – Present',
    email: 'angie.tso@stonybrook.edu',
    bio: 'Hello, my name is Angie Tso, and I am the Chief Financial Officer and Director of Professional Outreach for Beta Alpha Psi. I am currently a junior at Stony Brook University pursuing a Business Management major with a minor in Accounting. I wanted this position because I am passionate about community involvement and aiding students in their professional development and career aspirations. As a resource for our members, my goal during my time at Beta Alpha Psi is to facilitate strong connections between our members and industry professionals. I aspire to become a CPA and forensic accountant in NYC, using analytical problem solving to protect financial integrity. My advice to current students is to never stop being curious and to absorb everything around you by embracing every opportunity.',
    photo: '/assets/images/placeholder-headshot.svg',
  },
  {
    name: 'Hailey Chin',
    role: 'Director of Reporting',
    term: 'Fall 2026 – Present',
    email: 'hailey.chin@stonybrook.edu',
    bio: 'Hello, my name is Hailey Chin and I am the Director of Reporting. I am in my third year pursuing an Accounting Major. I pursued this position because I wanted to get more involved with Beta Alpha Psi and help the organization grow. Beta Alpha Psi has helped me connect with so many wonderful people and created great experiences that I want to share with others. I aspire to become a successful CPA and work with others who have the same interest. One piece of advice I would offer to students is that if you set your mind to something, you can be anything you want to be. Nothing is impossible!',
    photo: '/assets/images/placeholder-headshot.svg',
  },
  {
    name: 'Joseph Vento',
    role: 'Director of Communications and Information Systems',
    term: 'Fall 2026 – Present',
    email: 'joseph.vento@stonybrook.edu',
    bio: 'Hello! My name is Joseph Vento and I am the Director of Communications and Information Systems. I am a junior at Stony Brook University majoring in Accounting. The reason I was interested in this position is because it combines two very important skills needed in the business industry today: knowing how to communicate effectively with others and proficiency in using technology. In the future, I plan on gaining my CPA license and pursue a career specifically in tax. My piece of advice to offer would be to always find ways to meet new people and network with those around you. These meaningful connections can lead to new friendships and may even open the door to your first full-time career.',
    photo: '/assets/images/placeholder-headshot.svg',
  },
  {
    name: 'Noa Lim',
    role: 'BAP Influencer',
    term: 'Fall 2026 – Present',
    email: 'seowon.lim@stonybrook.edu',
    bio: 'Hi everyone! My name is Noa Lim, and I\'m the BAP Influencer. I am currently a senior at Stony Brook University majoring in Business Management with a concentration in Accounting. I\'m also doing my own quantitative finance research under a lab affiliated to the College of Business. I\'m excited to take on this position because growing the social presence of Beta Alpha Psi can definitely bring our members even more opportunities to reach amazing people. My goal is to support our members to gain the best and most chances to expand their potential in our community via actively connecting with diverse people and communities. I aspire to work in the financial industry with my quantitative skills, especially with investment and risk management. Currently preparing for a direct PhD track in quantitative finance to deepen my expertise in the field. My one piece of advice would be to throw yourself into the unknown. There\'s never a thing \'failure\' but \'process\'. Don\'t limit yourself!',
    photo: '/assets/images/placeholder-headshot.svg',
  },
];

export const advisors = [
  {
    name: 'Christie L. Comunale, Ph.D., CPA',
    role: 'Faculty Advisor',
    email: 'christie.comunale@stonybrook.edu',
    bio: 'Christie L. Comunale, Ph.D., CPA is a Professor of Practice at Stony Brook University. Dr. Comunale joined Stony Brook University in 2013 after serving 14 years in LIU –Post\'s School of Professional Accountancy where she held the rank of Professor of Accounting. Dr. Comunale is a licensed CPA in New York State with audit experience at Coopers & Lybrand in Baltimore, MD. Dr. Comunale earned her Ph.D. in accounting from the University of South Florida, and her MBA and BS in accounting from Loyola University Maryland.\n\nDr. Comunale is an award-winning researcher in the areas of auditor and taxpayer judgment and decision-making and the efficiency and effectiveness of the audit process. Dr. Comunale has presented her research at numerous American Accounting Association meetings and has published in competitive peer-reviewed journals.\n\nDr. Comunale primarily teaches undergraduate Financial Accounting, Intermediate Accounting I and II, and graduate Advanced Accounting. She has received numerous teaching awards including Stony Brook University\'s College of Business Outstanding MBA Instructor Award and Long Island University\'s David Newton Award for excellent teaching.\n\nUpon joining Stony Brook University, Dr. Comunale founded Stony Brook University\'s Accounting Society and served as its advisor for 9 years. Since gaining AACSB accreditation in 2021, the College of Business is eligible to petition for a Beta Alpha Psi Chapter. Dr. Comunale is currently leading this effort and serves as faculty advisor to Stony Brook University\'s petitioning chapter.',
    photo: '/assets/images/placeholder-headshot.svg',
  },
  {
    name: 'Patrick E. O\'Brien, Ph.D., CPA, CFE',
    role: 'Faculty Advisor',
    email: 'patrick.e.obrien@stonybrook.edu',
    bio: 'Patrick E. O\'Brien, Ph.D., CPA, CFE is an Assistant Professor of Practice of Accounting in the College of Business at Stony Brook University. Prior to joining Stony Brook University, Dr. O\'Brien served as an Assistant Professor of Accounting at SUNY Old Westbury and previously held faculty and administrative positions at Hofstra University. He began his career in public accounting with Deloitte and continues to practice as a Managing Director of Forensics, Accounting & Advisory Group, Inc., where he specializes in forensic accounting and litigation support. Dr. O\'Brien earned his Ph.D. in Accounting from the University of Scranton, as well as his M.S. in Accounting and B.B.A. in Accounting from Hofstra University and is both a licensed CPA in New York State and a Certified Fraud Examiner (CFE).\n\nDr. O\'Brien\'s research focuses on emerging issues in the accounting profession, including environmental, social, and governance (ESG) reporting, artificial intelligence and technology, forensic accounting, accounting education, and the accounting profession. His work has been presented at national conferences of the American Accounting Association (AAA) and published in numerous peer-reviewed academic and professional journals.\n\nDr. O\'Brien teaches both undergraduate and graduate accounting courses in financial accounting, managerial accounting, forensic accounting, governmental and not-for-profit accounting, and financial accounting research. He has developed courses in forensic accounting and has been actively involved in curriculum innovation, student mentoring, and professional development initiatives throughout his academic career.\n\nDr. O\'Brien is committed to preparing students for successful careers in the accounting profession through mentorship, experiential learning, and engagement with the profession. He previously served as faculty advisor to the Delta Pi Chapter of Beta Alpha Psi at Hofstra University and is excited to serve as co-faculty advisor to the Delta Omicron Chapter of Beta Alpha Psi at Stony Brook University.',
    photo: '/assets/images/placeholder-headshot.svg',
  },
];

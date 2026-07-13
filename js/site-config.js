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
    instagram: '#',
    linkedin: '#',
    groupme: '#',
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
    bio: 'Junior double majoring in Computer Science and Applied Mathematics & Statistics, with a minor in Finance. Passionate about expanding BAP\'s community and creating impactful opportunities for students.',
    photo: '/assets/images/placeholder-headshot.svg',
  },
  {
    name: 'Abby Azzarone',
    role: 'Vice President',
    term: 'Fall 2026 – Present',
    email: 'abigail.azzarone@stonybrook.edu',
    bio: 'Third-year Accounting major. Helps members grow professionally and make the most of chapter opportunities. Plans to pursue CPA licensure and a career at a large accounting firm.',
    photo: '/assets/images/placeholder-headshot.svg',
  },
  {
    name: 'Angie Tso',
    role: 'CFO & Director of Professional Outreach',
    term: 'Fall 2026 – Present',
    email: 'angie.tso@stonybrook.edu',
    bio: 'Business Management major with an Accounting minor. Connects members with industry professionals and aspires to become a CPA and forensic accountant.',
    photo: '/assets/images/placeholder-headshot.svg',
  },
  {
    name: 'Hailey Chin',
    role: 'Director of Reporting',
    term: 'Fall 2026 – Present',
    email: 'hailey.chin@stonybrook.edu',
    bio: 'Accounting major in her third year. Supports chapter growth and helps members connect through meaningful experiences.',
    photo: '/assets/images/placeholder-headshot.svg',
  },
  {
    name: 'Joseph Vento',
    role: 'Director of Communications & IS',
    term: 'Fall 2026 – Present',
    email: 'joseph.vento@stonybrook.edu',
    bio: 'Accounting major focused on communication and technology in business. Plans to pursue CPA licensure and a career in tax.',
    photo: '/assets/images/placeholder-headshot.svg',
  },
  {
    name: 'Noa Lim',
    role: 'BAP Influencer',
    term: 'Fall 2026 – Present',
    email: 'seowon.lim@stonybrook.edu',
    bio: 'Senior Business Management major with an Accounting concentration. Grows BAP\'s social presence and connects members with diverse communities.',
    photo: '/assets/images/placeholder-headshot.svg',
  },
];

export const advisors = [
  {
    name: 'Christie L. Comunale, Ph.D., CPA',
    role: 'Faculty Advisor',
    email: 'christie.comunale@stonybrook.edu',
    bio: 'Professor of Practice at Stony Brook University. Licensed CPA with extensive teaching and research experience. Founded the Accounting Society and leads the petitioning BAP chapter effort.',
    photo: '/assets/images/placeholder-headshot.svg',
  },
  {
    name: 'Patrick E. O\'Brien, Ph.D., CPA, CFE',
    role: 'Faculty Advisor',
    email: 'patrick.e.obrien@stonybrook.edu',
    bio: 'Assistant Professor of Practice specializing in forensic accounting. CPA and Certified Fraud Examiner with experience at Deloitte and in academia.',
    photo: '/assets/images/placeholder-headshot.svg',
  },
];

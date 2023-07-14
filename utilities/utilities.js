export const menu = [
    {
        id: 1,
        name: 'হোম',
        link: '/',
        status: false
    },
    {
        id: 2,
        name: 'একাডেমিক প্রোগ্রাম',
        link: '/academic-program',
        status: false
    },
    {
        id: 3,
        name: 'কোর্স',
        link: '/course',
        status: false
    },
    {
        id: 4,
        name: 'আমাদের সম্পর্কে',
        link: '/about-us',
        status: false
    },
    {
        id: 5,
        name: 'শিখো বিদ্যালয়',
        link: '/shikho-school',
        status: false
    },
    {
        id: 6,
        name: 'বহুব্রীহি',
        link: 'https://www.bohubrihi.com',
        status: false
    }
];

// Importing Logo
import live_class from '../asset/academic_overview/live_class.svg';
import animated_video from '../asset/academic_overview/animated_video.svg';
import mcq_test from '../asset/academic_overview/mcq_test.svg';
import test_live from '../asset/academic_overview/test_live.svg';
import class_note from '../asset/academic_overview/class_note.svg';
import smart_note from '../asset/academic_overview/smart_note.svg';
import report_card from '../asset/academic_overview/report_card.svg';

// Importing Images

import live_class_image from '@/asset/academic_overview/live_class_image.webp';
import animated_video_image from '@/asset/academic_overview/animated_video_image.webp';
import mcq_test_image from '@/asset/academic_overview/mcq_test_image.webp';
import test_live_image from '@/asset/academic_overview/test_live_image.webp';
import class_note_image from '@/asset/academic_overview/class_note_image.webp';
import smart_note_image from '@/asset/academic_overview/smart_note_image.webp';
import report_card_image from '@/asset/academic_overview/report_card_image.webp';

export const acamedicOverview = [
    {
        id: 1,
        logo: live_class,
        image: live_class_image,
        title: 'লাইভ এবং রেকর্ডেড ক্লাস',
        status: true
    },
    {
        id: 2,
        logo: animated_video,
        image: animated_video_image,
        title: 'অ্যানিমেটেড ভিডিও',
        status: false
    },
    {
        id: 3,
        logo: mcq_test,
        image: mcq_test_image,     
        title: 'প্র্যাকটিস MCQ টেস্ট',
        status: false
    },
    {
        id: 4,
        logo: test_live,
        image: test_live_image,  
        title: 'লাইভ MCQ টেস্ট',
        status: false
    },
    {
        id: 5,
        logo: class_note ,
        image: class_note_image,
        title: 'ক্লাস নোট',
        status: false
    },
    {
        id: 6,
        logo: smart_note,
        image: smart_note_image,
        title: 'স্মার্ট নোট',
        status: false
    },
    {
        id: 7,
        logo: report_card,
        image: report_card_image,
        title: 'রিপোর্ট কার্ড',
        status: false
    },
]



import ssc_physics from '@/asset/lesson_carousel/ssc_physics.webp';
import ssc_math_2 from '@/asset/lesson_carousel/ssc_math_2.webp';
import ssc_math_1 from '@/asset/lesson_carousel/ssc_math_1.jpg';
import ssc_chemistry from '@/asset/lesson_carousel/ssc_chemistry.jpg';
import hsc_it from '@/asset/lesson_carousel/hsc_it.webp';
import hsc_higher_math_2 from '@/asset/lesson_carousel/hsc_higher_math_2.webp';
import hsc_higher_math_1 from '@/asset/lesson_carousel/hsc_higher_math_1.webp';
import hsc_biology from '@/asset/lesson_carousel/hsc_biology.webp';


export const lessonCarousel = [
    {
        id: 1,
        image: ssc_physics,
        link: 'https://www.youtube.com/watch?v=nDwlp4Ga04s',
        category: 'এসএসসি',
        for: 'SSC পদার্থবিজ্ঞান',
        topic: '8.1 - আলোর প্রকৃতি'
    },
    {
        id: 2,
        image: ssc_math_2,
        link: 'https://www.youtube.com/watch?v=VbarIESVE9E',
        category: 'এসএসসি',
        for: 'SSC গণিত',
        topic: '1.1 - সংখ্যার শ্রেণিবিন্যাস'
    },
    {
        id: 3,
        image: ssc_math_1,
        link: 'https://www.youtube.com/watch?v=MQmrrCakKeQ',
        category: 'এসএসসি',
        for: 'SSC গণিত',
        topic: '16.1 - পরিসীমা ক্ষেত্রফল ও ত্রিভুজের ক্ষেত্রফল'
    },
    {
        id: 4,
        image: ssc_chemistry,
        link: 'https://www.youtube.com/watch?v=2-WJ5F7fTbk',
        category: 'এসএসসি',
        for: 'SSC রসায়ন',
        topic: '1.1 - জীবাশ্ম জ্বালানী'
    },
    {
        id: 5,
        image: hsc_it,
        link: 'https://www.youtube.com/watch?v=H4NlIyBk4qI',
        category: 'এইচএসসি',
        for: 'HSC তথ্য ও যোগাযোগ প্রযুক্তি',
        topic: '2.13 - নেটওয়ার্ক টপোলজি পর্ব ২'
    },
    {
        id: 6,
        image: hsc_higher_math_2,
        link: 'https://www.youtube.com/watch?v=1RftL5YgleM',
        category: 'এইচএসসি',
        for: 'HSC উচ্চতর গণিত ২য় পত্র',
        topic: '2.1 - যোগাশ্রয়ী প্রোগ্রামিংয়ের ধারণা'
    },
    {
        id: 7,
        image: hsc_higher_math_1,
        link: 'https://www.youtube.com/watch?v=DsS6i9bgZp0',
        category: 'এইচএসসি',
        for: 'HSC উচ্চতর গণিত ১ম পত্র',
        topic: '2.1 - ভেক্টরের পরিচয় ও প্রকারভেদ'
    },
    {
        id: 8,
        image: hsc_biology,
        link: 'https://www.youtube.com/watch?v=xDAfIFZBUA0',
        category: 'এইচএসসি',
        for: 'HSC জীববিজ্ঞান ২য় পত্র',
        topic: '2.8 - ঘাস ফড়িংয়ের মুখোপাঙ্গ, বক্ষ, উদর'
    }
]

import practice from '../asset/mobile_updates/pratice.webp';
import solid_preparation from '@/asset/mobile_updates/solid_preparation.webp';
import report_card_1 from '@/asset/mobile_updates/report_card.webp';
export const mobile_updates = [
    {
        id:1,
        title: "প্র্যাকটিস",
        image: practice,

    },
    {
        id:2,
        title: "সলিড প্রিপারেশন",
        image: solid_preparation,
        
    },
    {
        id:3,
        title: "সলিড প্রিপারেশন",
        image: report_card_1,

    },
] 

export const mobile_updates_text = [
    {   
        id: 1,
        text:"প্রতিটি বিষয়ের সেরা মেন্টরের সাথে ৩ ধরনের লাইভ ক্লাসে প্রতিটি টপিক শিখো"
    },
    {   
        id: 2,
        text: "হোমওয়ার্ক হিসেবে বাস্তব উদাহরণের অ্যানিমেটেড ভিডিও দেখো, স্মার্ট নোট পড়ো এবং প্র্যাকটিস টেস্ট দাও"
    },
    {   
        id: 3,
        text:"ক্লাসের রেকর্ডেড ভিডিও দেখে এবং ক্লাস নোট পড়ে জোরালো প্রস্তুতি নাও"
    }
]

import diamond from "@/asset/testimonials/diamond.svg"
import camera from "@/asset/testimonials/camera.svg"
import apple from "@/asset/testimonials/apple.svg"
import wallet from "@/asset/testimonials/wallet.svg"

export const testimonial_intro = [
    {
        id:1,
        image: diamond,
        copy: "সেরা কন্টেন্ট"
    },
    {
        id:2,
        image: camera,
        copy: "সহজ স্টাডি ম্যাটেরিয়াল"
    },
    {
        id:3,
        image: wallet,
        copy: "স্বল্প খরচে অনেক কিছু"
    },
    {
        id:4,
        image: apple,
        copy: "সাবলীল উপস্থাপনা"
    }
]


import carousel_safwat from "../asset/testimonials/carousel_safwat.jpg";
import carousel_oishimoni from "../asset/testimonials/carousel_oishimoni.jpg";
import carousel_turj from "../asset/testimonials/carousel_turj.jpg";
import carousel_mehjabin from "../asset/testimonials/carousel_mehjabin.jpg";

export const carousel_testimonials = [
    {
        id:1,
        image: carousel_safwat,
        name: "সাফওয়াত নাওয়ার",
        grade: "১০ম শ্রেণি,হলি ক্রস উচ্চ বালিকা বিদ্যালয়",
        comment: "লাইভ ক্লাসে চ্যাটের মাধ্যমে প্রশ্ন করলে টিচাররা তার উত্তর দেয়, এজন্য আমার অনেক সুবিধা হয়েছে",
        link: 'https://www.youtube.com/watch?v=DsS6i9bgZp0',
        topic: '2.8 - ঘাস ফড়িংয়ের মুখোপাঙ্গ, বক্ষ, উদর'
    },
    {
        id:2,
        image: carousel_oishimoni,
        name: "সাফওয়াত নাওয়ার",
        grade: "১২শ শ্রেণি, হলি ক্রস উচ্চ বালিকা বিদ্যালয় ",
        comment: "অ্যানিমেটেড ভিডিওতে পড়া ভিজ্যুয়ালাইজ করা সহজ",
        link: 'https://www.youtube.com/watch?v=DsS6i9bgZp0',
        topic: '2.8 - ঘাস ফড়িংয়ের মুখোপাঙ্গ, বক্ষ, উদর'

    },
    {
        id:3,
        image: carousel_turj,
        name: "সাফওয়াত নাওয়ার",
        grade: "১১শ শ্রেনি, শহীদ রমিজ উদ্দিন ক্যান্টনমেন্ট কলেজ",
        comment: "\"প্রতিটি টার্ম অ্যানিমেটেড ভিডিও আকারে হওয়ায় বুঝতে সহজ হয়েছে\”",
        link: 'https://www.youtube.com/watch?v=DsS6i9bgZp0',
        topic: '2.8 - ঘাস ফড়িংয়ের মুখোপাঙ্গ, বক্ষ, উদর'
    },
    {
        id:4,
        image: carousel_mehjabin,
        name: "সাফওয়াত নাওয়ার",
        grade: "বি.এ.এফ. শাহীন কলেজ",
        comment: "\"অনলাইনে Shikho\'র লেসনগুলো পড়েই আমি গোল্ডেন A+ আর স্কলারশিপ পেয়েছি\"",
        link: 'https://www.youtube.com/watch?v=DsS6i9bgZp0',
        topic: '2.8 - ঘাস ফড়িংয়ের মুখোপাঙ্গ, বক্ষ, উদর'
    }
]

import prothomalo_image from '@/asset/media_coverage/prothom_alo_image.png';
import prothomalo_logo from '@/asset/media_coverage/prothom_alo_logo.png';
import dhakatribune_image from '@/asset/media_coverage/dhaka_tribune_image.png';
import dhakatribune_logo from '@/asset/media_coverage/dhaka_tribune_logo.svg';
import dailystar_image_n_logo from '@/asset/media_coverage/dailystar_image_n_logo.jpeg';
import techasia_image from '@/asset/media_coverage/techinasia_image.png';
import techasia_logo from '@/asset/media_coverage/techasia_logo.png';
import trtworld_image from '@/asset/media_coverage/trt_world_image.png';
import trtworld_logo from '@/asset/media_coverage/trt_world_logo.png';

export const media_coverage =[
    {
        id: 1,
        image: prothomalo_image,
        logo: prothomalo_logo,
        link: 'https://www.prothomalo.com/education/1l07gnc6rm',
        date: "Aug 24, 2022",
        title: 'শিখোতে যুক্ত হলেন চঞ্চল চৌধুরী'
    },
    {
        id: 2,
        image: dhakatribune_image,
        logo: dhakatribune_logo,
        link: 'https://www.dhakatribune.com/business/2022/03/29/shikho-becomes-the-first-startup-with-53m-funding-in-bangladesh',
        date: 'March 29, 2022',
        title: 'Shikho becomes the first startup with $5.3M funding in Bangladesh'
    },

    {
        id: 3,
        image: dailystar_image_n_logo,
        logo: dailystar_image_n_logo,
        link: 'https://www.thedailystar.net/shout/news/bangladeshi-edtech-shikho-closes-seed-investment-usd-53-million-2993191',
        date:'Dec 4, 2022',
        title: 'Bangladeshi edtech Shikho closes seed investment of USD 5.3 million'
    },

    {
        id: 4,
        image: techasia_image ,
        logo: techasia_logo,
        link: 'https://www.techinasia.com/wavemaker-leads-4m-seed-bangladeshi-edtech-startup-shikho',
        date: 'March 29, 2022',
        title: 'Wavemaker leads $4m round of Bangladeshi edtech startup'
    },
    {
        id: 5,
        image: trtworld_image,
        logo: trtworld_logo,
        link: 'https://www.trtworld.com/magazine/shikho-a-startup-revolutionising-digital-education-in-bangladesh-49165',
        date: 'Aug 12, 2021',
        title: 'Shikho: A startup revolutionising digital education in Bangladesh'
    }


]



import investor_1 from "@/asset/investors/1.png";
import investor_2 from "@/asset/investors/2.png";
import investor_3 from "@/asset/investors/3.png";
import investor_4 from "@/asset/investors/4.png";
import investor_5 from "@/asset/investors/5.png";
import investor_6 from "@/asset/investors/6.png";
import investor_7 from "@/asset/investors/7.png";
import investor_8 from "@/asset/investors/8.png";
import investor_9 from "@/asset/investors/9.png";
import investor_10 from "@/asset/investors/10.png";


export const investors = [
    {
        id: 1,
        image:investor_1
    },
    {
        id: 2,
        image:investor_2
    },
    {
        id: 3,
        image:investor_3
    },
    {
        id: 4,
        image:investor_4
    },
    {
        id: 5,
        image:investor_5
    },
    {
        id: 6,
        image:investor_6
    },
    {
        id: 7,
        image:investor_7
    },
    {
        id: 8,
        image:investor_8
    },
    {
        id: 9,
        image:investor_9 
    },
    {
        id: 10,
        image:investor_10
    },
]


import partner_1 from "@/asset/partners/1.png";
import partner_2 from "@/asset/partners/2.png";
import partner_3 from "@/asset/partners/3.png";
import partner_4 from "@/asset/partners/4.png";
import partner_5 from "@/asset/partners/5.png";
import partner_6 from "@/asset/partners/6.png";
import partner_7 from "@/asset/partners/7.png";
import partner_8 from "@/asset/partners/8.png";
import partner_9 from "@/asset/partners/9.png";
import partner_10 from "@/asset/partners/10.png";


export const partners = [
    {
        id: 1,
        image:partner_1
    },
    {
        id: 2,
        image:partner_2
    },
    {
        id: 3,
        image:partner_3
    },
    {
        id: 4,
        image:partner_4
    },
    {
        id: 5,
        image:partner_5
    },
    {
        id: 6,
        image:partner_6
    },
    {
        id: 7,
        image:partner_7
    },
    {
        id: 8,
        image:partner_8
    },
    {
        id: 9,
        image:partner_9 
    },
    {
        id: 10,
        image:partner_10
    },
]

import {FaFacebookF, FaYoutube, FaInstagram, FaTwitter} from 'react-icons/fa';

export const social = [
    {
        id: 1,
        media: <FaFacebookF/>
    },
    {
        id: 2,
        media: <FaYoutube/>
    },
    {
        id: 3,
        media: <FaInstagram/>
    },
    {
        id: 4,
        media: <FaTwitter/>
    },
]

export const important_links = [
    {
        id: 1,
        link:"",
        text:"উদ্যোক্তা"
    },
    {
        id: 1,
        link:"",
        text:"আমাদের সম্পর্কে"
    },
    {
        id: 1,
        link:"",
        text:"ক্যারিয়ার"
    },
    {
        id: 1,
        link:"",
        text:"অ্যাকাডেমিক প্রোগ্রাম"
    },
    {
        id: 1,
        link:"",
        text:"বহুব্রীহি"
    },
]
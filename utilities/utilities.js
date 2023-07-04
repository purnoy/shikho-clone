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
        status: false
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
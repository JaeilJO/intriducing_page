import FromSection from '@/components/contents/FromSection';
import IntroSection from '@/components/contents/IntroSection';

export interface Anchors {
    key: number;
    title: string;
    target_id: string;
    content?: React.ReactNode;
    in_navigation?: boolean;
}

const anchors: Anchors[] = [
    { key: 1, title: 'Intro', target_id: 'intro', content: <IntroSection /> },
    { key: 2, title: 'From', target_id: 'from', in_navigation: false, content: <FromSection /> },
    { key: 3, title: 'Appriciate', target_id: 'appriciate', in_navigation: false },
    { key: 4, title: 'Projects', target_id: 'projects' },
    { key: 5, title: 'Skill', target_id: 'skill' },
    { key: 6, title: 'Contact', target_id: 'contact' },
];

export default anchors;

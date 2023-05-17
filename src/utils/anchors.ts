export interface Anchors {
  key: number;
  title: string;
  target_id: string;
  content?: React.ReactNode;
  in_navigation?: boolean;
}

const anchors: Anchors[] = [
  { key: 1, title: "Main", target_id: "main", in_navigation: false },
  { key: 2, title: "Intro", target_id: "intro" },
  { key: 3, title: "Skills", target_id: "skills" },
  { key: 4, title: "Projects", target_id: "projects" },
  { key: 5, title: "Experience", target_id: "experience" },
  { key: 6, title: "Contact", target_id: "contact" },
];

export default anchors;

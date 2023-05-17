export interface Anchors {
  key: number;
  title: string;
  target_id: string;
  content?: React.ReactNode;
}

const anchors: Anchors[] = [
  { key: 1, title: "Skills", target_id: "skills" },
  { key: 2, title: "Projects", target_id: "projects" },
  { key: 3, title: "Experience", target_id: "experience" },
  { key: 4, title: "Contact", target_id: "contact" },
];

export default anchors;

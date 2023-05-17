export interface NavigationProps {
    anchors: Anchors[];
}

export interface Anchors {
    key: number;
    title: string;
    target_id: string;
}

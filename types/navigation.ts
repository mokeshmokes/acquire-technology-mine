import { LucideIcon } from 'lucide-react';

export interface NavigationItem {
    label: string;
    href: string;
    hasMegaMenu?: boolean;
    hasDropdown?: boolean;
    sectionId?: string;
}

export interface MegaMenuItem {
    icon: LucideIcon;
    title: string;
    description: string;
    href: string;
}

export interface MegaMenuCategory {
    category: string;
    items: MegaMenuItem[];
}

export interface ResourceItem {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    href: string;
}

export interface ResourceCategory {
    category: string;
    items: ResourceItem[];
}

export interface MoreMenuItem {
    icon: LucideIcon;
    title: string;
    href: string;
}

export interface MoreMenuCategory {
    category: string;
    items: MoreMenuItem[];
}

export interface ActionButton {
    label: string;
    href?: string;
    icon?: LucideIcon;
    variant: 'primary' | 'secondary' | 'outline' | 'ghost';
    onClick?: () => void;
}

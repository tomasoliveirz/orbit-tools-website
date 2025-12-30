export interface Tool {
    slug: string;
    name: string;
    tagline: string;
    tags: string[];
    featured: boolean;
    chromeWebStoreUrl: string;
    supportEmail: string;
    disclaimer: string;
    status: "Active" | "Coming Soon" | "Maintenance";
}

export const tools: Tool[] = [
    {
        slug: "orbit-social-circle",
        name: "Orbit — Social Circle Visualizer",
        tagline: "Identify accounts that don’t follow you back — clearly and at your pace.",
        tags: ["Social", "Privacy-first"],
        featured: true,
        chromeWebStoreUrl: "#", // Placeholder as per prompt "..."
        supportEmail: "contact.orbit.app@gmail.com",
        disclaimer: "Not affiliated with Instagram or Meta.",
        status: "Active",
    },
];

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://pyatbukv.ru";
    const now = new Date();

    return [
        { url: `${base}/`, lastModified: now },
        { url: `${base}/privacy`, lastModified: now },
        { url: `${base}/terms`, lastModified: now },
        { url: `${base}/support`, lastModified: now },
        { url: `${base}/delete-account`, lastModified: now },
    ];
}

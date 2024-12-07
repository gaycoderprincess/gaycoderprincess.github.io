import type { NextConfig } from "next";
import createMDX from '@next/mdx'
import remarkGfm from "remark-gfm";

const nextConfig: NextConfig = {
    // Configure `pageExtensions` to include markdown and MDX files
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    output: 'export',
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
    },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)

import type {MDXComponents} from 'mdx/types'

export const overrideComponents: MDXComponents = {}

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...overrideComponents, ...components,
    }
}
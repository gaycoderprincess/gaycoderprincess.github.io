import type {MDXComponents} from 'mdx/types'

export const overrideComponents: MDXComponents = {
    h1: ({children}) => (<h1 className='text-xl'>{children}</h1>),
    a: (props) => (<a className='hover:underline' {...props}>{props.children}</a>),
    ul: ({children}) => (<ul className='list-disc list-inside'>{children}</ul>),
    ol: ({children}) => (<ul className='list-decimal list-inside'>{children}</ul>),
    p: ({children}) => (<p className='mb-4'>{children}</p>),
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...overrideComponents, ...components,
    }
}
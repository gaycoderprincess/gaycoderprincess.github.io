const CardGroup = ({
                           children,
                       }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div
            className="max-w-7xl mx-auto bg-[#fee1ed] dark:bg-slate-800 text-slate-800 dark:text-[#fee1ed] my-16 rounded-xl">
            {children}
        </div>
    )
}

export default CardGroup
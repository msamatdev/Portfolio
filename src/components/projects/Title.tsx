interface TitleProp {
    text: String
}

export default function Title(prop: TitleProp) {
    return (
        <h1 className="my-8 text-4xl font-bold text-center text-foreground tracking-tight">
            {prop.text}
        </h1>
    )
}
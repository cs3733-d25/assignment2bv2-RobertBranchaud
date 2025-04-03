

type NameProps = {
    bob: string
    bran: string
}

export function Intro({bob, bran}: NameProps) {
    return (
        <>
            <p>{bob} and {bran} are Computer Science students at WPI. {bob} is also a Data Science major and {bran} is also an IMGD major.
                They are both from the same hometown and were roommates last year and still are this year. {bran} is a front end developer for his project team
                 and {bob} is an algorithms developer on the same team. Yes they are on the same team and roommates and from the same hometown.
                 They are also both going on the same IQP next year to Hawaii at the same time. {bob} and {bran} see each other a lot.

            </p>
        </>
    )
}
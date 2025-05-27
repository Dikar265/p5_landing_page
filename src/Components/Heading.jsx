

export const H1 = ({text, color}) => {

    return(
        <h1 className={`text-7xl md:text-9xl font-bold ${color}`}>
            {text}
        </h1>
    )
}



export const H2 = ({text, color}) => {

    return(
        <h2 className={`text-5xl md:text-7xl ${color}`}>
            {text}
        </h2>
    )
}



export const H3 = ({text, color}) => {

    return(
        <h3 className={`text-xs md:text-lg ${color}`}>
            {text}
        </h3>
    )
}
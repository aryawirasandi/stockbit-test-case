const HeadingText = ({title, align}) => {
    return (
        <div className={"text-" + align + " my-3"}>
                <h2 className="font-extrabold text-3xl">{title}</h2>
        </div>
    )
}

HeadingText.defaultProps = {
    align : "left"
}

export default HeadingText;
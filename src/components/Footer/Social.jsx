
const Social = ({social, link}) => {
    return (
        <div className="text-5xl">
            <a href={link} target="_blank" className=''>{social}</a>
        </div>
    );
};

export default Social;
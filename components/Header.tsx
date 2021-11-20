const Header:React.FC<{ text: string}> = ({
    text = ''
}) => (
    <div className="text-3xl text-black">{text}</div>
);

export default Header;
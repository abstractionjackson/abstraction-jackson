export const Tagline:React.FC<{
    text: string;
}> = ({
    text = ''
}) => (
    <div className="text-gray-500 italic">{text}</div>
);
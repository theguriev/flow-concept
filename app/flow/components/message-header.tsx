import Image from "next/image";

const MessageHeader = ({
  header,
  alt,
}: {
  header?: {
    media: {
      example: string[];
      type: "TYPE_IMAGE";
    };
  };
  alt: string;
}) => {
  if (!header) {
    return null;
  }
  return (
    <div className="overflow-hidden rounded-sm">
      <Image src={header.media.example[0]} alt={alt} width={300} height={50} />
    </div>
  );
};
export default MessageHeader;

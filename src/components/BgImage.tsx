import NextImage from "next/image";

function BgImage({ image }: { image: string }) {
  return (
    <div className="sticky h-screen flex justify-center items-center inset-0">
      <NextImage
        src={image}
        alt="Flower Image"
        width={5346}
        height={3456}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}

export default BgImage;

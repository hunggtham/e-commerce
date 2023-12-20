const HomeSectionCard = ({ product, index }) => {
  return (
    <div className="cursor-pointer flex flex-col justify-center items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 ">
      <div className="h-[14rem] w-[12rem] m-3">
        <img
          className="object-cover object-top w-full h-full rounded-md"
          src={product.imageUrl}
          alt="product"
          role="presentation"
        />
      </div>

      <div className="p-4">
        <h3 className="textlg font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">{product.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;

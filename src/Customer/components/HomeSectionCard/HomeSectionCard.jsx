const HomeSectionCard = () => {
  return (
    <div className="cursor-poiter flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://images.pexels.com/photos/7764611/pexels-photo-7764611.jpeg?auto=compress&cs=tinysrgb&w=400"
        />
      </div>

      <div className="p-4">
        <h3 className="textlg font-medium text-gray-900">Lorem, ipsum.</h3>
        <p className="mt-2 text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;

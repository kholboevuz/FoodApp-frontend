interface ChatId {
  chatID: number;
}
const HeaderBar = ({ chatID }: ChatId) => {
  return (
    <div className="w-full rounded-lg bg-gray-900 fixed ">
      <div className="flex p-5 justify-around items-center">
        <p>ID: {chatID} </p>
        <p className="font-bold">FoodAPP</p>
      </div>
    </div>
  );
};

export default HeaderBar;

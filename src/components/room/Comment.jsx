import Avatar from "../ui/Avatar";
const Comment = () => {
  return (
    <div className="mr-[8%]">
      <div className="space-y-2 mb-10">
        <div className="space-y-1">
          <div className="flex items-center gap-4">
            <div>
              <Avatar src="/images/placeholder.jpg" />
            </div>
            <div>
              <div>홍길동</div>
              <div className="text-sm text-neutral-500 font-light">
                대한민국
              </div>
            </div>
          </div>
          <div className="text-sm">1주일전</div>
        </div>
        <div>
          <p className="leading-5 font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ipsum
            sapiente optio numquam cum dolore fugit facilis enim maiores cumque!
            Dolor non alias quod eius minus temporibus, ab esse quia!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;

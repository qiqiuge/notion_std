import { useEffect, useState } from 'react';

/**
 * 动态图片组件（图片直接嵌入组件）
 * @param {Object} props
 * @returns
 */
const DynamicImageCard = (props) => {
  const { className, interval = 10000, headerSlot } = props;

  // 图片列表，以Base64字符串或URL嵌入
  const images = [
    'data:image/gif;base64,R0lGODlhPQBEAP8A//8AAGZmZmYAAAzE3wAAFf5iQ5iBQwAAAAAAc5qUkZdX4AfOpgK/gHg0Hg9aAHnQQ7qPgX7oYPwDzw8FqD83rD7R7Z2wnhw9jNx0qQy4vj9n8Gmq6YmleXXzFYg0wg5oF1EbiWA+3g5vCct9CwEM57ED5OpUQ9xh+Oo1yQzSHgl6q+T3nxz09wsRYZsEDVRX4D9BdNJfRz/1rmlbRIzToZ9lWpe9gVhKcIW0jlI2gtv6u//PbP0yHmZoBg3Wsb6B8h76dTl8xv43ZaJ1XYcyMy/cp38+28tE9n38TbWBkLg//1+3WzXnQ0w5efAhgFkZlkb3skMIrZvj6SHqeb51yQ==', // 用 Base64 编码的示例图片
    'data:image/gif;base64,R0lGODlhPQBEAP8A//8AAGZmZmYAAAzE3wAAFf5iQ5iBQwAAAAAAc5qUkZdX4AfOpgK/gHg0Hg9aAHnQQ7qPgX7oYPwDzw8FqD83rD7R7Z2wnhw9jNx0qQy4vj9n8Gmq6YmleXXzFYg0wg5oF1EbiWA+3g5vCct9CwEM57ED5OpUQ9xh+Oo1yQzSHgl6q+T3nxz09wsRYZsEDVRX4D9BdNJfRz/1rmlbRIzToZ9lWpe9gVhKcIW0jlI2gtv6u//PbP0yHmZoBg3Wsb6B8h76dTl8xv43ZaJ1XYcyMy/cp38+28tE9n38TbWBkLg//1+3WzXnQ0w5efAhgFkZlkb3skMIrZvj6SHqeb51yQ==', // 另一张图片（你可以用自己的 Base64 图片）
    // 更多的图片也可以嵌入这里
  ];

  // 存储当前显示的图片
  const [currentImage, setCurrentImage] = useState('');

  // 随机选择一张图片
  const displayRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  };

  // 定时器更新图片
  useEffect(() => {
    displayRandomImage(); // 初始加载时显示一张图片
    const timer = setInterval(displayRandomImage, interval); // 每隔interval时间自动更换图片

    // 清理定时器
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className={className}>
      {/* Header Slot */}
      <>{headerSlot}</>

      {/* 图片容器 */}
      <section className="relative shadow-md rounded-lg bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300">
        {/* 动态图片 */}
        <img
          src={currentImage}
          alt="动态图片"
          className="w-full h-auto rounded-lg transition-transform transform hover:scale-110 cursor-pointer"
          onClick={displayRandomImage} // 点击图片时更换
        />
      </section>
    </div>
  );
};

export default DynamicImageCard;


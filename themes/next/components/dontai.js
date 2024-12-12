// 本地图片库
const images = [
    'hs/image1.gif',  // 替换为你本地图片的路径
];

// 随机选择图片并显示
function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    const imgElement = document.getElementById('random-image');
    imgElement.src = randomImage;
}

// 每隔一定时间随机更换图片（例如每10秒）
setInterval(displayRandomImage, 10000);

// 页面加载时显示第一张图片
window.onload = displayRandomImage;

// 鼠标点击时更换图片
document.getElementById('image-container').addEventListener('click', function() {
    displayRandomImage();
});

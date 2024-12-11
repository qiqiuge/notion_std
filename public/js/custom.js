
const images = ['hs/1.webp', 'hs/10.webp', 'hs/100.webp', 'hs/101.webp', 'hs/102.webp', 'hs/103.webp', 'hs/104.webp', 'hs/105.webp', 'hs/106.webp', 'hs/107.webp', 'hs/108.webp', 'hs/109.webp', 'hs/11.webp', 'hs/110.webp', 'hs/111.webp', 'hs/112.webp', 'hs/113.webp', 'hs/114.webp', 'hs/115.webp', 'hs/116.webp', 'hs/117.webp', 'hs/118.webp', 'hs/119.webp', 'hs/12.webp', 'hs/120.webp', 'hs/121.webp', 'hs/122.webp', 'hs/123.webp', 'hs/124.webp', 'hs/125.webp', 'hs/126.webp', 'hs/127.webp', 'hs/128.webp', 'hs/129.webp', 'hs/13.webp', 'hs/130.webp', 'hs/131.webp', 'hs/132.webp', 'hs/133.webp', 'hs/134.webp', 'hs/135.webp', 'hs/136.webp', 'hs/137.webp', 'hs/138.webp', 'hs/139.webp', 'hs/14.webp', 'hs/140.webp', 'hs/141.webp', 'hs/142.webp', 'hs/143.webp', 'hs/144.webp', 'hs/145.webp', 'hs/146.webp', 'hs/147.webp', 'hs/148.webp', 'hs/149.webp', 'hs/15.webp', 'hs/150.webp', 'hs/151.webp', 'hs/152.webp', 'hs/153.webp', 'hs/154.webp', 'hs/155.webp', 'hs/156.webp', 'hs/157.webp', 'hs/158.webp', 'hs/159.webp', 'hs/16.webp', 'hs/160.webp', 'hs/161.webp', 'hs/162.webp', 'hs/163.webp', 'hs/164.webp', 'hs/165.webp', 'hs/166.webp', 'hs/167.webp', 'hs/168.webp', 'hs/169.webp', 'hs/17.webp', 'hs/170.webp', 'hs/171.webp', 'hs/172.webp', 'hs/173.webp', 'hs/174.webp', 'hs/175.webp', 'hs/176.webp', 'hs/177.webp', 'hs/178.webp', 'hs/179.webp', 'hs/18.webp', 'hs/180.webp', 'hs/181.webp', 'hs/182.webp', 'hs/183.webp', 'hs/184.webp', 'hs/185.webp', 'hs/186.webp', 'hs/187.webp', 'hs/188.webp', 'hs/189.webp', 'hs/19.webp', 'hs/190.webp', 'hs/191.webp', 'hs/192.webp', 'hs/193.webp', 'hs/194.webp', 'hs/195.webp', 'hs/196.webp', 'hs/197.webp', 'hs/198.webp', 'hs/199.webp', 'hs/2.webp', 'hs/20.webp', 'hs/200.webp', 'hs/201.webp', 'hs/202.webp', 'hs/203.webp', 'hs/204.webp', 'hs/205.webp', 'hs/206.webp', 'hs/207.webp', 'hs/208.webp', 'hs/209.webp', 'hs/21.webp', 'hs/210.webp', 'hs/211.webp', 'hs/212.webp', 'hs/213.webp', 'hs/214.webp', 'hs/215.webp', 'hs/216.webp', 'hs/217.webp', 'hs/218.webp', 'hs/219.webp', 'hs/22.webp', 'hs/220.webp', 'hs/221.webp', 'hs/222.webp', 'hs/223.webp', 'hs/224.webp', 'hs/225.webp', 'hs/226.webp', 'hs/227.webp', 'hs/228.webp', 'hs/229.webp', 'hs/23.webp', 'hs/230.webp', 'hs/231.webp', 'hs/232.webp', 'hs/233.webp', 'hs/234.webp', 'hs/235.webp', 'hs/236.webp', 'hs/237.webp', 'hs/238.webp', 'hs/239.webp', 'hs/24.webp', 'hs/240.webp', 'hs/241.webp', 'hs/242.webp', 'hs/243.webp', 'hs/244.webp', 'hs/245.webp', 'hs/246.webp', 'hs/247.webp', 'hs/248.webp', 'hs/249.webp', 'hs/25.webp', 'hs/26.webp', 'hs/27.webp', 'hs/28.webp', 'hs/29.webp', 'hs/3.webp', 'hs/30.webp', 'hs/31.webp', 'hs/32.webp', 'hs/33.webp', 'hs/34.webp', 'hs/35.webp', 'hs/36.webp', 'hs/37.webp', 'hs/38.webp', 'hs/39.webp', 'hs/4.webp', 'hs/40.webp', 'hs/41.webp', 'hs/42.webp', 'hs/43.webp', 'hs/44.webp', 'hs/45.webp', 'hs/46.webp', 'hs/47.webp', 'hs/48.webp', 'hs/49.webp', 'hs/5.webp', 'hs/50.webp', 'hs/51.webp', 'hs/52.webp', 'hs/53.webp', 'hs/54.webp', 'hs/55.webp', 'hs/56.webp', 'hs/57.webp', 'hs/58.webp', 'hs/59.webp', 'hs/6.webp', 'hs/60.webp', 'hs/61.webp', 'hs/62.webp', 'hs/63.webp', 'hs/64.webp', 'hs/65.webp', 'hs/66.webp', 'hs/67.webp', 'hs/68.webp', 'hs/69.webp', 'hs/7.webp', 'hs/70.webp', 'hs/71.webp', 'hs/72.webp', 'hs/73.webp', 'hs/74.webp', 'hs/75.webp', 'hs/76.webp', 'hs/77.webp', 'hs/78.webp', 'hs/79.webp', 'hs/8.webp', 'hs/80.webp', 'hs/81.webp', 'hs/82.webp', 'hs/83.webp', 'hs/84.webp', 'hs/85.webp', 'hs/86.webp', 'hs/87.webp', 'hs/88.webp', 'hs/89.webp', 'hs/9.webp', 'hs/90.webp', 'hs/91.webp', 'hs/92.webp', 'hs/93.webp', 'hs/94.webp', 'hs/95.webp', 'hs/96.webp', 'hs/97.webp', 'hs/98.webp', 'hs/99.webp'];


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
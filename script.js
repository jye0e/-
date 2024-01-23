// 模拟用户数据
const users = [
    { name: '用户1', photo: '20240123-145747.jpg', contact: '123-456-7890', info: '个人信息1' },
    { name: '用户2', photo: '20240123-145747.jpg', contact: '987-654-3210', info: '个人信息2' },
    { name: '用户1', photo: '20240123-145747.jpg', contact: '123-456-7890', info: '个人信息1' },
    { name: '用户2', photo: '20240123-145747.jpg', contact: '987-654-3210', info: '个人信息2' },
    { name: '用户1', photo: '20240123-145747.jpg', contact: '123-456-7890', info: '个人信息1' },
    { name: '用户2', photo: '20240123-145747.jpg', contact: '987-654-3210', info: '个人信息2' },
    { name: '用户1', photo: '20240123-145747.jpg', contact: '123-456-7890', info: '个人信息1' },
    { name: '用户2', photo: '20240123-145747.jpg', contact: '987-654-3210', info: '个人信息2' },
    // 添加更多用户数据...
];

// 在页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('userList');

    // 将用户数据动态添加到页面
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user');
        userCard.innerHTML = `
            <img src="${user.photo}" alt="${user.name}">
            <h3>${user.name}</h3>
            <p>${user.contact}</p>
            <div class="info">
                <p>${user.info}</p>
            </div>
        `;
        userList.appendChild(userCard);
    });
});

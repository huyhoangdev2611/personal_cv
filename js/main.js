// Fetch data from API and update the HTML content
fetch('http://localhost:8080/users/23')
    .then(response => response.json())
    .then(data => {
        document.getElementById('profile-image').src = data.image;
        document.getElementById('name').innerText = "I'm " + data.name + " " + data.description;

        const birthDate = new Date(data.birthDay[0], data.birthDay[1] - 1, data.birthDay[2]);
        document.getElementById('birthday').innerText = birthDate.toDateString();

        const emailElement = document.getElementById('email');
        emailElement.innerText = data.email;
        emailElement.href = `mailto:${data.email}`;

        document.getElementById('phone').innerText = data.phone;

        const skillsData = data.skillsName; // Sử dụng dữ liệu kỹ năng từ API
        const chunkSize = 3;

        const skillsList = document.querySelector('.skills-list');

        for (let i = 0; i < skillsData.length; i += chunkSize) {
            const skillChunk = skillsData.slice(i, i + chunkSize);

            // Tạo một hàng mới cho mỗi mảng con
            const skillRow = document.createElement('li');
            skillRow.classList.add('skills-row');

            // Thêm các kỹ năng vào hàng
            skillChunk.forEach(skill => {
                const skillItem = document.createElement('li');
                skillItem.classList.add('skills-item');
                skillItem.innerText = skill;
                skillRow.appendChild(skillItem);
            });

            // Thêm hàng vào danh sách kỹ năng
            skillsList.appendChild(skillRow);
        }
    })
    .catch(error => console.error('Error fetching data:', error));

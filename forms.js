const forms = () => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        phoneInputs = document.querySelectorAll('input[name="ser_phone"]');

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся',
        failer: 'Ошибка отправки'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let result = await fetch(url, {
            method: "POST",
            body: data
        });

        return await result.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessange = document.createElement('div');
            statusMessange.classList.add('status');
            item.appendChild(statusMessange);

            const fordData = new FormData(item);

            postData('assets/server.php', fordData)
                .then(res => {
                    statusMessange.textContent = message.success;
                })
                .catch(() => statusMessange.textContent = message.failer)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessange.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;
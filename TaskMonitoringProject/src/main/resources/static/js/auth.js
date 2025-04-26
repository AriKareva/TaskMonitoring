document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('register-form');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const errorElement = document.getElementById('password-error');
    
    // Элементы модального окна
    const modal = document.getElementById('modal-error');
    const modalMessage = document.getElementById('modal-message');
    const closeModal = document.querySelector('.close-modal');
    
    // Закрытие модального окна
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Сохраняем данные формы при загрузке
    function saveFormData() {
        const formData = {};
        const inputs = form.querySelectorAll('input');
        
        inputs.forEach(input => {
            if (input.type !== 'password') { // Не сохраняем пароли
                formData[input.id] = input.value;
            }
        });
        
        sessionStorage.setItem('formData', JSON.stringify(formData));
    }
    
    // Восстанавливаем данные формы
    function restoreFormData() {
        const savedData = sessionStorage.getItem('formData');
        if (savedData) {
            const formData = JSON.parse(savedData);
            
            for (const id in formData) {
                const input = document.getElementById(id);
                if (input) {
                    input.value = formData[id];
                }
            }
        }
    }
    
    // Проверка паролей
    function validatePasswords() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            errorElement.textContent = 'Пароли не совпадают!';
            confirmPasswordInput.classList.add('invalid');
            
            // Показываем модальное окно
            modalMessage.textContent = 'Пароли не совпадают. Пожалуйста, проверьте введенные данные.';
            modal.style.display = 'block';
            
            // Сохраняем данные формы
            saveFormData();
            
            return false;
        } else {
            errorElement.textContent = '';
            confirmPasswordInput.classList.remove('invalid');
            return true;
        }
    }
    
    // Восстановление данных при загрузке страницы
    restoreFormData();
    
    // Проверка при вводе
    [passwordInput, confirmPasswordInput].forEach(input => {
        input.addEventListener('input', validatePasswords);
    });
    
    // Проверка при отправке формы
    form.addEventListener('submit', function(e) {
        if (!validatePasswords()) {
            e.preventDefault();
        } else {
            // Если проверка пройдена, очищаем сохраненные данные
            sessionStorage.removeItem('formData');
        }
    });
    
    // Сохраняем данные при изменении полей
    form.querySelectorAll('input').forEach(input => {
        if (input.type !== 'password') {
            input.addEventListener('change', saveFormData);
        }
    });
});
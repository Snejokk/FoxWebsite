let previousValue1 = '';

let keyPressCounter = 0;

let previousValue2 = '';

function checkInputs() {
     if (inputField1.value.trim() !== '' && inputField2.value.trim() !== '') {
         gsap.killTweensOf([".input-container", "#inputField1", "#inputField2", "#loginButton"]);

         console.log('ага');
         gsap.to(".input-container", { height: '9.5vh', duration: 0.5, ease: 'power1.out' });
         gsap.to(".input-container", { y: '1vh', duration: 0.5, ease: 'power1.out' });
         gsap.to("#inputField1", { rotation: 0, y: '-1vh', duration: 0.5, ease: 'power1.out' });
         gsap.to("#inputField2", { rotation: 0, y: '-1vh', duration: 0.5, ease: 'power1.out' });
         gsap.to("#loginButton", {color: 'rgba(0, 0, 0, 1)', duration: 0.8, ease: 'sine.in' });
         gsap.timeline()
            .to("#loginButton",
                { pointerEvents: 'none', height: '20%', width: '50%', duration: 0.5, ease: 'power1.out' } 
            )
            .to("#loginButton",
                { opacity: 1,pointerEvents: 'auto' } 
            );
         
        

     
         
         

        const currentValue1 = inputField1.value;
        const currentValue2 = inputField2.value;

        if (currentValue1 !== previousValue1) {
            if (keyPressCounter % 2 === 0) {
                gsap.timeline()

            .fromTo("#inputField1",
                { rotation: 0, scale: 1 }, 
                { rotation: 0.4, duration: 0.1, scale: 1.01, ease: 'power1.Out' } 
            )
            .to("#inputField1", 
                { rotation: 0, duration: 0.3, scale: 1, ease: 'power1.Out' } 
            );
        
            } else {
                gsap.timeline()
            .fromTo("#inputField1",
                { rotation: 0, scale: 1 }, 
                { rotation: -0.4, duration: 0.1, scale: 1.01, ease: 'power1.inOut' } 
            )
            .to("#inputField1", 
                { rotation: 0, duration: 0.3, scale: 1, ease: 'power1.Out' } 
            );
                
            }
        previousValue1 = currentValue1; 
        keyPressCounter++;
        }





        if (currentValue2 !== previousValue2) {
            if (keyPressCounter % 2 === 0) {
                gsap.timeline()
            .fromTo("#inputField2",
                { rotation: 0, scale: 1 }, 
                { rotation: 0.4, duration: 0.1, scale: 1.01, ease: 'power1.Out' } 
            )
            .to("#inputField2", 
                { rotation: 0, duration: 0.3, scale: 1, ease: 'power1.Out' } 
            );
        
            } else {
                gsap.timeline()
            .fromTo("#inputField2",
                { rotation: 0, scale: 1 }, 
                { rotation: -0.4, duration: 0.1, scale: 1.01, ease: 'power1.inOut' } 
            )
            .to("#inputField2", 
                { rotation: 0, duration: 0.3, scale: 1, ease: 'power1.Out' } 
            );
                
            }
        previousValue2 = currentValue2; 
        keyPressCounter++;
        }




     } else {
         gsap.killTweensOf([".input-container", "#inputField1", "#inputField2", "#loginButton"]);

         console.log('не');
         gsap.to(".input-container", { height: '5vh', duration: 0.8, ease: 'power1.out' });
         gsap.to(".input-container", { y: '0vh', duration: 0.8, ease: 'power1.out' });
         gsap.to("#inputField1", { y: '0vh', duration: 0.8, ease: 'power1.out' });
         gsap.to("#inputField2", { y: '0vh', duration: 0.8, ease: 'power1.out' });
         gsap.to("#loginButton", { opacity: 0, pointerEvents: 'none', height: 0, width: 0, duration: 0.4, ease: 'power1.out' });
         gsap.to("#loginButton", {color: 'rgba(0, 0, 0, 0)', duration: 0.2, ease: 'power1.out' });
      

        const currentValue1 = inputField1.value;
        const currentValue2 = inputField2.value;

        if (currentValue1 !== previousValue1) {
            if (keyPressCounter % 2 === 0) {
                gsap.timeline()
            .fromTo("#inputField1",
                { rotation: 0, scale: 1 }, 
                { rotation: 0.4, duration: 0.1, scale: 1.01, ease: 'power1.Out' } 
            )
            .to("#inputField1", 
                { rotation: 0, duration: 0.3, scale: 1, ease: 'power1.Out' } 
            );
        
            } else {
                gsap.timeline()
            .fromTo("#inputField1",
                { rotation: 0, scale: 1 }, 
                { rotation: -0.4, duration: 0.1, scale: 1.01, ease: 'power1.inOut' } 
            )
            .to("#inputField1", 
                { rotation: 0, duration: 0.3, scale: 1, ease: 'power1.Out' } 
            );
                
            }
        previousValue1 = currentValue1; 
        keyPressCounter++;
        }





        if (currentValue2 !== previousValue2) {
            if (keyPressCounter % 2 === 0) {
                gsap.timeline()
            .fromTo("#inputField2",
                { rotation: 0, scale: 1 }, 
                { rotation: 0.4, duration: 0.1, scale: 1.01, ease: 'power1.Out' } 
            )
            .to("#inputField2", 
                { rotation: 0, duration: 0.3, scale: 1, ease: 'power1.Out' } 
            );
        
            } else {
                gsap.timeline()
            .fromTo("#inputField2",
                { rotation: 0, scale: 1 }, 
                { rotation: -0.4, duration: 0.1, scale: 1.01, ease: 'power1.inOut' } 
            )
            .to("#inputField2", 
                { rotation: 0, duration: 0.3, scale: 1, ease: 'power1.Out' } 
            );
                
            }
        previousValue2 = currentValue2; 
        keyPressCounter++;
        }


     }
}



document.querySelector('.register-button').addEventListener('mouseenter', function() {
    gsap.to(".register-button", {  scale: 1.03, duration: 0.5, rotation: 0.2, ease: 'power2.out' });
});

document.querySelector('.register-button').addEventListener('mouseleave', function() {
    gsap.to(".register-button", {  scale: 1,  duration: 0.8, rotation: 0,  ease: 'power2.out' });
});











inputField1.addEventListener('input', checkInputs);
inputField2.addEventListener('input', checkInputs);


const myInput = document.getElementById('inputField1');






function onWebsiteLaunch() {
    console.log('запущен');
    
    gsap.timeline()
        .fromTo(".input-container",
            { opacity: 0, scale: 1, y: '100vh' }, 
            { opacity: 0.6, scale: 1, y: '-1vh', rotation: 0.25, duration: 1, ease: 'sine.in' } 
        )
        .to(".input-container",
            { opacity: 1, scale: 1, y: 0, rotation: 0, duration: 0.2, ease: 'sine.out' } 
        );

    gsap.timeline()
        .fromTo(".register-button",
            { x: '10vw', opacity: 0 }, 
            { x: '-0.5vw', opacity: 0.7, rotation: 0.75, duration: 0.6, ease: 'sine.in' } 
        )
        .to(".register-button",
            { x: 0, opacity: 1, rotation: 0, duration: 0.5, ease: 'sine.out' } 
        );
}



document.addEventListener('DOMContentLoaded', onWebsiteLaunch);


const loginButton = document.getElementById('loginButton');

function playGaspAnimation() {
    gsap.fromTo(
        '#loginButton', // Цель (кнопка с ID)
        { scale: 1 },   // Начальное состояние
        {
            scale: 1.1,         // Увеличиваем
            duration: 0.15,     // Длительность
            yoyo: true,         // Возвращаем обратно
            repeat: 1,          // Повторяем 1 раз (туда-обратно)
            ease: 'power1.inOut'
        }
    );

gsap.timeline()
        .fromTo(".input-container",
    { opacity: 1, scale: 1 }, 
    { opacity: 1, scale: 1.15, duration: 0.3, ease: 'sine.out' } 
)
.to(".input-container",
    { opacity: 1, scale: 0, y: 0, rotation: 0, duration: 0.5, ease: 'sine.in' } 
);
}

document.getElementById('loginButton').addEventListener('click', playGaspAnimation);




const regButton = document.querySelector('.register-button');

function playregAnimation() {
    gsap.fromTo(
        '.register-button', 
        { scale: 1 },   
        {
            scale: 1.08,         
            duration: 0.15,     
            yoyo: true,         
            repeat: 1,         
            ease: 'power1.inOut'
        }
    );

gsap.timeline()
        .fromTo(".register-button",
    { x: 0, opacity: 1, rotation: 0 }, 
    { x: '-1.5vw', opacity: 1, rotation: 0.75, duration: 0.4, ease: 'sine.out' }  
)
.to(".register-button",
    { x: '20vw', opacity: 1, duration: 0.5, ease: 'sine.in', rotation: -0.75 } 
);
}
regButton.addEventListener('click', playregAnimation);



















// Этот массив для хранения данных должен остаться снаружи, чтобы не сбрасываться.
let loginAttempts = [];

// --- ИСПРАВЛЕННАЯ ЧАСТЬ ДЛЯ РАБОТЫ С JSON ---

document.addEventListener('DOMContentLoaded', () => {

    // 1. Находим элементы, которые действительно существуют в вашем HTML
    const loginButton = document.getElementById('loginButton');
    const inputField1 = document.getElementById('inputField1');
    const inputField2 = document.getElementById('inputField2');

    // 2. Определяем функцию для создания JSON
    function createAndLogJson() {
        // Проверяем, что поля ввода найдены
        if (!inputField1 || !inputField2) {
            console.error("Не удалось найти поля ввода inputField1 или inputField2!");
            return;
        }

        // Создаем объект с данными
        const currentData = {
            login: inputField1.value,
            password: inputField2.value
        };

        // Добавляем в массив
        loginAttempts.push(currentData);

        // Преобразуем в JSON-строку и выводим в консоль
        const jsonString = JSON.stringify(loginAttempts, null, 2);
        console.log("--- Ваша JSON-строка: ---");
        console.log(jsonString);
        
        // Очищаем поля ввода
        inputField1.value = '';
        inputField2.value = '';
        
        // Важно: вызываем вашу функцию checkInputs, чтобы интерфейс (анимация) обновился
        // после очистки полей (например, чтобы кнопка "Вход" скрылась)
        if (typeof checkInputs === 'function') {
            checkInputs();
        }
    }

    // 3. Назначаем обработчик на кнопку "Вход"
    if (loginButton) {
        // Эта строчка добавляет вашу функцию к кнопке "Вход"
        loginButton.addEventListener('click', createAndLogJson);

        // Эта строчка добавляет вашу АНИМАЦИЮ к кнопке "Вход"
        // Она была в вашем исходном коде, я ее вернул, чтобы все работало как раньше.
        loginButton.addEventListener('click', playGaspAnimation); 
    } else {
        console.error("Кнопка с ID 'loginButton' не найдена!");
    }

    // P.S. Код для кнопки 'register-button' должен быть здесь же, чтобы он тоже работал.
    const regButton = document.querySelector('.register-button');
    if (regButton) {
        regButton.addEventListener('click', playregAnimation);
    }
});
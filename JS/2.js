let previousValue1 = '';

let keyPressCounter = 0;

let previousValue2 = '';

let previousValue3 = '';

function checkInputs() {
     if (inputField1.value.trim() !== '' && inputField2.value.trim() !== '' && inputField3.value.trim() !== '') {
         gsap.killTweensOf([".input-container", "#inputField1", "#inputField2", "#loginButton"]);

         console.log('ага');
         gsap.to(".input-container", { height: '17vh', duration: 0.5, ease: 'power1.out' });
         gsap.to(".input-container", { y: '1vh', duration: 0.5, ease: 'power1.out' });
         gsap.to("#inputField1", { rotation: 0, y: '-1vh', duration: 0.5, ease: 'power1.out' });
         gsap.to("#inputField2", { rotation: 0, y: '-1vh', duration: 0.5, ease: 'power1.out' });
         gsap.to("#inputField3", { rotation: 0, y: '-1vh', duration: 0.5, ease: 'power1.out' });
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
        const currentValue3 = inputField3.value;

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

        if (currentValue3 !== previousValue3) {
            if (keyPressCounter % 2 === 0) {
                gsap.timeline()
            .fromTo("#inputField3",
                { rotation: 0, scale: 1 }, 
                { rotation: 0.4, duration: 0.1, scale: 1.01, ease: 'power1.Out' } 
            )
            .to("#inputField3", 
                { rotation: 0, duration: 0.3, scale: 1, ease: 'power1.Out' } 
            );
        
            } else {
                gsap.timeline()
            .fromTo("#inputField3",
                { rotation: 0, scale: 1 }, 
                { rotation: -0.4, duration: 0.1, scale: 1.01, ease: 'power1.inOut' } 
            )
            .to("#inputField3", 
                { rotation: 0, duration: 0.3, scale: 1, ease: 'power1.Out' } 
            );
                
            }
        previousValue3 = currentValue3; 
        keyPressCounter++;
        }




     } else {
         gsap.killTweensOf([".input-container", "#inputField1", "#inputField2", "#loginButton"]);

         console.log('не');
         gsap.to(".input-container", { height: '12vh', duration: 0.8, ease: 'power1.out' });
         gsap.to(".input-container", { y: '0vh', duration: 0.8, ease: 'power1.out' });
         gsap.to("#inputField1", { y: '0vh', duration: 0.8, ease: 'power1.out' });
         gsap.to("#inputField2", { y: '0vh', duration: 0.8, ease: 'power1.out' });
         gsap.to("#inputField3", { y: '0vh', duration: 0.8, ease: 'power1.out' });
         gsap.to("#loginButton", { opacity: 0, pointerEvents: 'none', height: 0, width: 0, duration: 0.4, ease: 'power1.out' });
         gsap.to("#loginButton", {color: 'rgba(0, 0, 0, 0)', duration: 0.2, ease: 'power1.out' });
      

        const currentValue1 = inputField1.value;
        const currentValue2 = inputField2.value;
        const currentValue3 = inputField3.value;

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

        if (currentValue3 !== previousValue3) {
            if (keyPressCounter % 2 === 0) {
                gsap.timeline()
            .fromTo("#inputField3",
                { rotation: 0, scale: 1 }, 
                { rotation: 0.4, duration: 0.1, scale: 1.01, ease: 'power1.Out' } 
            )
            .to("#inputField3", 
                { rotation: 0, duration: 0.3, scale: 1, ease: 'power1.Out' } 
            );
        
            } else {
                gsap.timeline()
            .fromTo("#inputField3",
                { rotation: 0, scale: 1 }, 
                { rotation: -0.4, duration: 0.1, scale: 1.01, ease: 'power1.inOut' } 
            )
            .to("#inputField3", 
                { rotation: 0, duration: 0.3, scale: 1, ease: 'power1.Out' } 
            );
                
            }
        previousValue3 = currentValue3; 
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
inputField3.addEventListener('input', checkInputs);


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



























// --- НАЧАЛО НОВОГО КОДА ДЛЯ СОЗДАНИЯ JSON (СТРАНИЦА 2) ---

// 1. Создаем массив для хранения данных о регистрациях
let registrationDataStorage = [];

// 2. СНАЧАЛА ОПРЕДЕЛЯЕМ ФУНКЦИЮ, которая будет собирать данные
function createAndLogRegistrationJson() {
    // Находим все три поля ввода по их ID
    const loginInput = document.getElementById('inputField1');
    const passwordInput = document.getElementById('inputField2');
    const emailInput = document.getElementById('inputField3');

    // Проверяем, что все поля были найдены на странице
    if (!loginInput || !passwordInput || !emailInput) {
        console.error("Ошибка: не удалось найти одно из полей ввода (inputField1, 2 или 3)!");
        return;
    }

    // Создаем JavaScript-объект с данными из всех полей
    const currentRegistration = {
        login: loginInput.value,
        password: passwordInput.value,
        email: emailInput.value
    };

    // Добавляем этот объект в наш массив
    registrationDataStorage.push(currentRegistration);

    // Преобразуем весь массив в красивую JSON-строку
    const jsonString = JSON.stringify(registrationDataStorage, null, 2);

    // Выводим полученную строку в консоль
    console.log("--- Ваша JSON-строка с данными регистрации: ---");
    console.log(jsonString);
    
    // Очищаем все три поля для следующего ввода
    loginInput.value = '';
    passwordInput.value = '';
    emailInput.value = '';
}

// 3. И ТОЛЬКО ПОТОМ ИСПОЛЬЗУЕМ эту функцию в обработчике
const registrationButton = document.getElementById('loginButton');
if (registrationButton) {
    // Теперь ошибки не будет, так как функция createAndLogRegistrationJson уже известна
    registrationButton.addEventListener('click', createAndLogRegistrationJson);
}

// --- КОНЕЦ НОВОГО КОДА ---
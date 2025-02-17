document.addEventListener('DOMContentLoaded', function () {
  const counters = document.querySelectorAll('.counter');
  const speed = 200; // سرعت شمارش

  let hasCounted = false; // یکبار شمارش انجام شده

  function startCount(counter) {
    const target = +counter.getAttribute('data-count');
    let count = 0;
    const interval = setInterval(function () {
      counter.textContent = count;
      if (count === target) {
        clearInterval(interval);
      } else {
        count++;
      }
    }, speed / target);
  }

  window.addEventListener('scroll', function () {
    const counterSection = document.querySelector('.counter-section');
    const sectionTop = counterSection.getBoundingClientRect().top;

    // فقط اگر بخش شمارنده وارد صفحه شد و قبلاً شمارش نشده باشد
    if (sectionTop < window.innerHeight && !hasCounted) {
      counters.forEach(counter => {
        startCount(counter);
      });
      hasCounted = true; // شمارش انجام شد
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const hour = new Date().getHours(); // دریافت ساعت فعلی
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');
  const themeToggle = document.getElementById('toggle-theme');

  // تابع تغییر حالت شب و روز
  function toggleTheme() {
      const isDay = document.body.classList.contains('day');

      if (isDay) {
          document.body.classList.remove('day');
          document.body.classList.add('night');
          sunIcon.style.display = 'none';
          moonIcon.style.display = 'inline';
      } else {
          document.body.classList.remove('night');
          document.body.classList.add('day');
          sunIcon.style.display = 'inline';
          moonIcon.style.display = 'none';
      }
  }

  // بررسی ساعت و تعیین وضعیت شب یا روز
  if (hour >= 6 && hour < 18) {
      document.body.classList.add('day');
      document.body.classList.remove('night');
      sunIcon.style.display = 'inline';
      moonIcon.style.display = 'none';
  } else {
      document.body.classList.add('night');
      document.body.classList.remove('day');
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'inline';
  }

  // افزودن رویداد کلیک به آیکون برای تغییر حالت
  themeToggle.addEventListener('click', toggleTheme);
});



document.addEventListener("DOMContentLoaded", function() {
  // گرفتن آیکون پشتیبانی و پنل چت
  const supportIcon = document.getElementById('support-icon');
  const chatPanel = document.getElementById('chat-panel');
  const closeChat = document.getElementById('close-chat');
  const chatBody = document.querySelector('.chat-body');
  
  // باز کردن پنل چت
  supportIcon.addEventListener('click', () => {
    chatPanel.style.display = 'block';
  });

  // بستن پنل چت
  closeChat.addEventListener('click', () => {
    chatPanel.style.display = 'none';
  });

  // بررسی حالت شب و روز برای تغییر رنگ پنل چت
  const setChatPanelTheme = () => {
    if (document.body.classList.contains('night')) {
      chatPanel.style.backgroundColor = '#333';  // پس‌زمینه تیره
      chatBody.style.color = '#fff';  // رنگ متن سفید
    } else {
      chatPanel.style.backgroundColor = '#fff';  // پس‌زمینه روشن
      chatBody.style.color = '#000';  // رنگ متن سیاه
    }
  };

  // به روز رسانی وضعیت چت پنل وقتی که حالت شب یا روز تغییر می‌کند
  document.addEventListener('change', setChatPanelTheme);
  
  // اطمینان از اینکه هنگام بارگذاری اولیه، تم چت به درستی تنظیم شود
  setChatPanelTheme();
});




document.addEventListener("DOMContentLoaded", function() {
  let currentIndex = 0;
  
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = slides.length;

  // نمایش اسلاید بر اساس ایندکس
  function showSlide(index) {
    if (index >= totalSlides) currentIndex = 0;
    if (index < 0) currentIndex = totalSlides - 1;

    // تغییر موقعیت اسلاید
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    // آپدیت وضعیت دات‌ها
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
  }

  // حرکت به اسلاید بعدی
  function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
  }

  // حرکت به اسلاید قبلی
  function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
  }

  // افزودن رویداد کلیک به دات‌ها
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });

  // تنظیم حرکت خودکار هر 3 ثانیه یکبار
  setInterval(nextSlide, 3000);  // تغییر خودکار اسلایدها هر 3 ثانیه

  // نمایش اسلاید اولیه
  showSlide(currentIndex);
});





// کد JS برای انیمیشن‌های بیشتر یا تعاملات دیگر
document.addEventListener("DOMContentLoaded", function() {
  // هر گونه انیمیشن یا تعاملات JS که بخواهید را در اینجا اضافه کنید.
});


    let body = document.querySelector('body');
    let bars = document.querySelectorAll(' div ul span li a');
    let cars = document.querySelectorAll('.cars');
    let back = document.querySelectorAll('.icons');
    let text = document.querySelector('.them-text');
    let feeds = document.querySelectorAll('.feed');
    let img2 = document.querySelectorAll('.img2 img');
    

          


    function applyBoxShadow(shadow) {
        img2.forEach(img => {
            img.style.boxShadow = shadow; // تطبيق الـ box-shadow على الصور
        });
        localStorage.setItem('boxShadow', shadow); // حفظ الـ box-shadow المحدد
    }

    document.addEventListener('DOMContentLoaded', function() {
        const storedBoxShadow = localStorage.getItem('boxShadow');
        if (storedBoxShadow) {
            applyBoxShadow(storedBoxShadow);
        }
    });
    
    

    

//-------------------------------------------------------------------
                                                                    /**/
    const stars = document.querySelectorAll('.rating input');       /**/
    const feedback = document.getElementById('feedback');           /**/
                                                                    /**/
stars.forEach(star => {
  star.addEventListener('click', () => {
    const rating = parseInt(star.value);
    showFeedback(rating);
  });
});

function showFeedback(rating) {
  let face = '';
  switch (rating) {
    case 1:
      face = '☹️';
      break;
    case 2:
      face = '🙁';
      break;
    case 3:
      face = '😐';
      break;
    case 4:
      face = '🙂';
      break;
    case 5:
      face = '😊';
      break;                                                                    
  }                                                                 /**/
  feedback.textContent = `Your rating: ${rating} ${face}`;          /**/
}                                                                   /**/
                                                                    /**/
//-------------------------------------------------------------------




    function feedbacks(feedback) {
        // ابحث عن جميع العناصر التي تحمل الفئة .feed
    
        // قم بتطبيق اللون على كل عنصر بشكل منفصل
        feeds.forEach(function(feed) {
            feed.style.color = feedback;
        });
        localStorage.setItem('feedback',feedback)
    }
 

    function colors(color) {
        body.style.background = color;
        localStorage.setItem('backgroundColor', color); // حفظ لون الخلفية
        

    }

    function texts (them){

        text.style.color = them ;
        localStorage.setItem('texts', them);


    }

    function barColors(barColor) {
        bars.forEach(bar => {
            bar.style.color = barColor;
           
        });
        localStorage.setItem('barColor', barColor); // حفظ لون الشريط

    }


    function caars(car) {
        cars.forEach(element => {
            element.src = car.src;
        });
        localStorage.setItem('carSrc', car.src); // حفظ مسار الصورة

    }

    function changeIconsColor(color) {
        back.forEach(icon => {
            icon.style.backgroundColor = color; // تغيير لون الخلفية
             // تغيير لون الحدود
            // يمكنك هنا إضافة أي خصائص أخرى ترغب في تغييرها
        });
        localStorage.setItem('iconColor', color); // حفظ لون الأيقونات

    }
    function borderColor (color ,bcolor){
        back.forEach(element => {
        element.style.borderColor = color;
        element.style.boxShadow = `0 0 10px 5px ${bcolor}`;
        })
        localStorage.setItem('borderColor', color); // حفظ لون الحدود
        localStorage.setItem('boxShadowColor', bcolor); // حفظ لون الظل
    
    }

    function changeLogoAndColor( newLogoSrc) {
        // تحديث مصدر اللوجو
        document.querySelector('.logo img').src = newLogoSrc;
    
        // تخزين مسار الصورة الجديدة في مخزن التخزين المحلي
        localStorage.setItem('newLogoSrc', newLogoSrc);
    }



    

    /*--------------------------------------------------------------------*/
    window.onload = function() {
        // استعادة مسار الصورة الجديدة من مخزن التخزين المحلي
        var newLogoSrc = localStorage.getItem('newLogoSrc');
        const backgroundColor = localStorage.getItem('backgroundColor');
        const barColor = localStorage.getItem('barColor');
        const carSrc = localStorage.getItem('carSrc');
        const iconColor = localStorage.getItem('iconColor');
        const borderColor = localStorage.getItem('borderColor');
        const boxShadowColor = localStorage.getItem('boxShadowColor');
        var texts = localStorage.getItem('texts');
        var feedback = localStorage.getItem('feedback');
  
    
        // إذا كان هناك مسار صورة جديدة، قم بتحديث مصدر صورة اللوقو
        if (newLogoSrc) {
            document.querySelector('.logo img').src = newLogoSrc;
        }

        if (feedback){
           feeds.forEach(feed => {
                feed.style.color = feedback;
            });
        }

  
      
        
        if (backgroundColor) body.style.background = backgroundColor;
        if (barColor) {
            bars.forEach(bar => {
                bar.style.color = barColor;
            });
        }
        if (texts) {
            text.style.color = texts;
        }
    
        if (carSrc) {
            cars.forEach(element => {
                element.src = carSrc;
            });
        }
        if (iconColor) {
            back.forEach(icon => {
                icon.style.backgroundColor = iconColor;
            });
        }
        if (borderColor && boxShadowColor) {
            back.forEach(element => {
                element.style.borderColor = borderColor;
                element.style.boxShadow = `0 0 10px 5px ${boxShadowColor}`;
            });
        }

 
    
    };
    
    

    /*--------------------------------------------------------------------*/













 function openPopup(videoSrc, carName, carDescription) {
    var popup = document.getElementById("popup");
    var videoPlayer = document.getElementById("videoPlayer");
    var carSpecs = document.getElementById("carSpecs");
    var carDescriptionElement = document.getElementById("carDescription");
    
    // Set video source
    videoPlayer.src = videoSrc;

    // Create a new element for car name
    var carNameElement = document.createElement("div");
    carNameElement.innerHTML = carName;

    // Append the car name element to the car specs element
    carSpecs.innerHTML = ""; // Clear existing content
    carSpecs.appendChild(carNameElement);

    // Set car description
    carDescriptionElement.innerHTML = carDescription;

    // Show the popup
    popup.style.display = "block";
}

        
    function closePopup() {
        var popup = document.getElementById("popup");
        var videoPlayer = document.getElementById("videoPlayer");
        videoPlayer.pause(); // توقف تشغيل الفيديو
        popup.style.display = "none";
    }

    
    
        

    
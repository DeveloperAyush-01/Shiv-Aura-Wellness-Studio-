/* =====================================================
   SHIVAURA WELLNESS
   JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
   Phone par ☰ button dabane par menu open hoga
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


menuButton.addEventListener("click", function () {

    navigation.classList.toggle("active");

});


/* =====================================================
   MENU LINK CLICK
   Link click karne ke baad mobile menu close
===================================================== */

const navigationLinks =
    document.querySelectorAll("#navigation a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");

    });

});


/* =====================================================
   APPOINTMENT DATE
   Purani date select nahi kar sakte
===================================================== */

const dateInput =
    document.getElementById("appointmentDate");


const today = new Date();


const year =
    today.getFullYear();


const month =
    String(today.getMonth() + 1)
        .padStart(2, "0");


const day =
    String(today.getDate())
        .padStart(2, "0");


dateInput.min =
    `${year}-${month}-${day}`;


/* =====================================================
   BOOKING FORM
   NOTE:
   Ye abhi FRONT-END demo hai.

   Real booking receive karne ke liye:
   WhatsApp / Email / Form backend / Database
   connect karna padega.
===================================================== */

const bookingForm =
    document.getElementById("bookingForm");


const formMessage =
    document.getElementById("formMessage");


bookingForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "customerName"
            ).value.trim();


        const phone =
            document.getElementById(
                "customerPhone"
            ).value.trim();


        const service =
            document.getElementById(
                "customerService"
            ).value;


        const date =
            document.getElementById(
                "appointmentDate"
            ).value;


        const message =
            document.getElementById(
                "customerMessage"
            ).value.trim();


        /* Required fields check */

        if (
            name === "" ||
            phone === "" ||
            service === "" ||
            date === ""
        ) {

            formMessage.textContent =
                "Please fill all required fields.";

            formMessage.style.color =
                "#c0392b";

            return;

        }


        /* =================================================
           DEMO SUCCESS MESSAGE
        ================================================= */

        formMessage.textContent =
            "Your enquiry has been prepared successfully. Please contact customer support to confirm the appointment.";

        formMessage.style.color =
            "#2c6b52";


        /*
           FUTURE:
           Yahan WhatsApp, Email, Firebase,
           PHP/MySQL ya Google Forms connect
           kiya ja sakta hai.
        */


        /* Reset form */

        bookingForm.reset();


        /* Date minimum dobara set */

        dateInput.min =
            `${year}-${month}-${day}`;

    }
);


/* =====================================================
   SIMPLE IMAGE FADE-IN
   Images load hone par smooth appearance
===================================================== */
/* =====================================================
   IMAGE GALLERY FADE-IN
===================================================== */

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(function (image) {

    image.style.transition =
        "opacity .6s ease, transform .6s ease";

    image.style.transform =
        "translateY(10px)";

    function showImage() {
        image.style.opacity = "1";
        image.style.transform = "translateY(0)";
    }

    // Already loaded image
    if (image.complete) {
        showImage();
    } else {
        image.addEventListener("load", showImage);
    }

    // Image loading error
    image.addEventListener("error", function () {
        image.style.opacity = "1";
        console.log("Gallery image not found:", image.src);
    });

});

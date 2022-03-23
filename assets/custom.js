/* Button collection filter Start
A button that show a collection filter with a changing name and open/close the sidebar.
Include initial animation on Collection page.
*/

function filters_close() {
    let btn = document.getElementById('filters__active-btn');
    let sidebar = document.getElementById('shopify-section-sidebar');
    let collectionTemplate = document.getElementById('shopify-section-collection-template');
    let pageWrapper = document.getElementById('collectionPage');

    sidebar.classList.toggle("hidden");
    collectionTemplate.classList.toggle("hidden");
    pageWrapper.classList.toggle("hidden");
    btn.classList.toggle("change-title");
    let btnAnimation = document.getElementById('filters__active-btn');
    btnAnimation.addEventListener('click', () => {
        let sidebarAnimation = document.getElementById('shopify-section-sidebar');
        let collectionAnimation = document.getElementById('shopify-section-collection-template');

        sidebarAnimation.classList.add('animated');
        collectionAnimation.classList.add('animated');
    });
}
/* Button collection filter End */

/* Tab Description and Comments on Product page Start */
$('.tab').on('click', function(evt) {
    evt.preventDefault();
    $('.tab').removeClass('active');
    $(this).addClass('active');
    let sel = this.getAttribute('data-toggle-target');
    $('.tab-content').removeClass('active').filter(sel).addClass('active');
});
/* Tab Description and Comments End */

/* Product form quantity on Product page Start */
$('.product-form__item .btnqty').on('click', function(){
    let qty = parseInt($(this).parent('.product-form__item').find('.quantity-input').val());
    if($(this).hasClass('qtyplus')) {
        qty++;
    }else {
        if(qty > 1) {
            qty--;
        }
    }
    qty = (isNaN(qty))?1:qty;
    $(this).parent('.product-form__item').find('.quantity-input').val(qty);
});
/* Product form quantity on Product page End */

/* Button in on Collection page Sidebar filter Hide/Display in Mobile
Dropdown buttons to toggle between hiding and showing its dropdown content Start*/
let dropdown = document.getElementsByClassName("dropdown-btn");
let i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let dropdownContent = this.nextElementSibling;
        if (window.innerWidth <= 1100 & dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}
/* Button in on Collection page Sidebar filter Hide/Display in Mobile
Dropdown buttons to toggle between hiding and showing its dropdown content End*/

/* Display the slide number of the Main slider on the home page Start */
$('.slidershow').on('afterChange', function() {
    let dataId = $('.slick-current').attr("data-slick-index");
    let sliderNumber = ++dataId ;
    $('#slidenumber').html("0" + sliderNumber);
});
/* Display the slide number of the Main slider on the home page End */
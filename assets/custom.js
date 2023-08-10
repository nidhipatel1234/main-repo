$('.slick-testimonial').slick({
  dots: false,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
   prevArrow: '<span class="slick-arrow_data prev"></span>',
  nextArrow: '<span class="slick-arrow_data next"></span>',

});

$('.collection_second .collection-list').slick({
  dots: false,
  infinite: false,
  slidesToShow: 5,
  speed: 300,
  arrows: true,
  prevArrow: '<span class="slick-arrow_data prev"></span>',
  nextArrow: '<span class="slick-arrow_data next"></span>',
  responsive: [
 	{
       breakpoint: 9999,
       settings: "unslick",
    },
  	{
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        unslick: false,
      }
    },
  ]
});
    
//     $('.pagination__list').slick({
//      dots: false,
//   arrows: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//    prevArrow: '<span class="slick-arrow_data prev"></span>',
//   nextArrow: '<span class="slick-arrow_data next"></span>',
    
//     })
    
const modal = document.querySelector('.product_view');
console.log(modal);

const modal__content = document.querySelector('.product__content');
console.log(modal__content);


const image_eye = document.querySelectorAll('.image_eye');
console.log(image_eye);

const image_data = document.querySelector("#image_src");
console.log(image_data);

 var Shopify12 = Shopify || {};
   console.log("currency"+Shopify12);
  
image_eye.forEach((list) => {
  
//   console.log(list);
  
	const product_view_data = list.querySelector('.quick-view');
  
  	console.log(product_view_data);

  
  product_view_data.addEventListener('click', () => {
                                     
                                     $("#myModal").show();
                                
//                      alert('click');
                                                         $('body').css('overflow', 'hidden');
                 
  
  const store_url=  'https://radha-krishna-1.myshopify.com';
//   alert(store_url);
  
  
  const product_url = product_view_data.getAttribute('data-url');
  console.log(product_url);
//  alert(product_url);
  
  const product_handle = product_view_data.getAttribute('data-handle');
  console.log(product_handle);
//  alert(product_handle);
  
//   jQuery.get('/products/' + product_handle + '?view=metafield', function (product) {
//   console.log(product)
   
// });
  
  
   const dataid = product_view_data.getAttribute('data-id');
	console.log(dataid);
  
  const full_url= store_url + '/products/' + dataid + '.json';
//  alert(full_url);
  console.log(full_url);
 
  
  
  const full_product_url = store_url + product_url + '.json';


  
  console.log(full_product_url);
  
  console.log(product_view_data);


 fetch(full_product_url , {'method': 'GET'})
  .then(result => result.json())
 .then((data) =>
       {   			
    
   		let k;
   		console.log(data);
// 		console.log(JSON.stringify(data));
//    		let product12 = JSON.stringify(data);
//    		console.log(product12);
   		let product_data = data.product;
   		console.log(product_data);
   
   		let product_price = data.product.variants[0];
   		console.log(product_price);
   
   
//    var metafields = metadata_val[product_handle];
//             var product_meta = metafields.sss;
   
   		
   		let product_images = data.product.images[0];
   		console.log(product_images);
   		
   	
   		let product_tilte = product_data.title;
   		console.log(product_tilte);
   		let product_description = product_data.body_html;
   		console.log(product_description);
   		console.log(product_handle);
   		let url = '/products/' + product_handle;
   
   
   		
     	let price_data = product_price.price;
   		console.log(price_data);
   
    
//    let product_image_val = product_images.src;
  
   		
//    		image_data.src = product_images.src;
   
   		image_data["src"] = "product_images.src";
   
   		console.log(image_data.src);
   
   
  		$('.qv-product-title').text(product_tilte);
          $('.qv-product-description').html(product_description);
          $('.view-product').attr('href', url);
   
   const admin_url = 'https://radha-krishna-1.myshopify.com/admin/shop.json';
  console.log(admin_url);

  
   
fetch(admin_url, {'method': 'GET'})
.then(results => results.json())
.then((money_format) => {
  
  console.log(money_format);
    console.log(money_format.shop);
  console.log(money_format.shop.currency);

  const formate = money_format.shop.currency;

  		 $('.qv-product-price').text(formate + price_data);

//   alert(money_format.money_with_currency_format);
	
});


   //       	$('.qv-product-price').html('<span class="product-price">'+ Shopify.formatMoney(variant.price, "{{ shop.money_with_currency_format }}") + '</span>' );
   
   var currency = Shopify.formatMoney(price_data, "{{ shop.money_with_currency_format }}");
   console.log(currency);
   
  

   
  var  cvariant_id = data.product.variants[0].id;
   $('.variant_id').text(cvariant_id);
   
   
   
//    alert(cvariant_id);
   
   
          var image_embed = '<div><img class="lazy2" src="'+ product_images.src +'" data-src="' + product_images.src + '"></div>';
		  
   			document.querySelector('.product__left').innerHTML =  image_embed ;
   
              $('.qv-add-button').prop('disabled', false).val('Add to Cart');

     
      
 })
  .catch((error) => { console.error('Error:', error); });
  
  
                                
        modal.classList.add('product_view--bg');
  		modal__content.classList.add('product__content--show');
  
  
  
  });
  

  

});


//  close icon click

const product__close = document.querySelector('.product__close');
// console.log(product__close);

product__close.addEventListener('click', () => {

           modal.classList.remove('product_view--bg');
  		modal__content.classList.remove('product__content--show');
                                     $('body').css('overflow', 'visible');

                                
                                
                                
});


//  outside container

modal.addEventListener('click', () => {
                       
           modal.classList.remove('product_view--bg');
  		modal__content.classList.remove('product__content--show');
                       
                                                           $('body').css('overflow', 'visible');
 
});






 $('.product-form__submit').on( "click", function( e ) { 
   var id = $(this).parents('form').find('.variant_id').text();
        $.ajax({                                                                 
      url: "/cart/add.js",
      type: "post",
       dataType:'json',
      data: {quantity:1,id:id},
      success: function(){
       window.location.href = "/cart";
        
//         modal.removeClass('product_view--bg');
//         modal__content.removeClass('product__content--show');
        
      },
      error: function(){
        //window.location.href = "/checkout";
      }
     })
  });

    
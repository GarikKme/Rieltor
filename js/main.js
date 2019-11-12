$(document).ready(function () {
	//Выпадающее меню
	$('.menu-icon').click(function () {
		$('nav').slideToggle(500);
		$('.menu').css({
			'flex-direction': 'column'
		})
		if ($('.menu-icon').html() == '<i class="fas fa-bars"></i>') {
			$(this).html('<i class="fas fa-times"></i>');
		} else {
			$(this).html('<i class="fas fa-bars"></i>');
		}
	});
	
	// Скролл к секции
	
	$('.white-button').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({
       scrollTop: $(target).offset().top
    }, 500);
    return false;
  }); 

  // Menu Скролл к секции

  $('ul.menu a[href^="#"').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({
       scrollTop: $(target).offset().top
    }, 500);
    return false;
	}); 
	
	


	// Таймер обратного отсчета
	var current_date = new Date(); // текущая дата
	current_date.setDate(current_date.getDate())
	curDay = current_date.getDate(),
		curMonth = current_date.getMonth(),
		curYear = current_date.getFullYear();
	// curDay = 1,
	// curMonth = 4,
	// curYear = 2019;

	$('#counter1').countMe(curYear, curMonth, curDay + 13, '#counter1');
	$('#counter2').countMe(curYear, curMonth, curDay + 13, '#counter2');

	//Slider

	$('.slider').slick({
		dots: true,
		responsive: [{
				breakpoint: 992,
				settings: {
					arrows: false,
					infinite: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]
	});


		// Modal window
		$('.apple').on('click',function(e){
			e.preventDefault();
			$('#exampleModal').arcticmodal();
		});

		$('.launch').on('click',function(e){
			e.preventDefault();
		$('#exampleModal2').arcticmodal({

			afterOpen() {
				valEl($('#exampleModal2 form'));
			},
			afterOpen: function () {
				valEl($('#exampleModal2 form'));
			}

			});
		});

		$('.apart').on('click',function(e){
			e.preventDefault();
		$('#exampleModal3').arcticmodal();
	});

});


		//Валидация и отправка формы

		$(document).ready(function() {
			// $('[data-submit]').on('click', function(e) {
			// 		e.preventDefault();
			// 		$(this).parent('form').submit();
			// })
			$.validator.addMethod(
					"regex",
					function(value, element, regexp) {
							var re = new RegExp(regexp);
							return this.optional(element) || re.test(value);
					},
					"Please check your input."
			);
		
		
				
});

// Функция валидации и вывода сообщений
function valEl(el) {

	el.validate({
			rules: {
					phone: {
							required: true,
							regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
					},
					name: {
							required: true
					},
					street : {
					required:	true
				},
				stairs : {
					required:	true
				},
				rooms : {
					required:	true
				},
				square : {
					required:	true
				},
				check : {
					required:	true
				}
			},
			messages: {
					phone: {
							required: 'Поле обязательно для заполнения',
							regex: 'Телефон может содержать символы + - ()'
					},
					name: {
							required: 'Поле обязательно для заполнения',
					},
					email: {
							required: 'Поле обязательно для заполнения',
							email: 'Неверный формат E-mail'
					},
					street: {
						required: 'Поле обязательно для заполнения'
					},
					stairs: {
					required: 'Поле обязательно для заполнения'
					},
					rooms: {
					required: 'Поле обязательно для заполнения'
				},	
				square: {
				required: 'Поле обязательно для заполнения'
				},
				check: {
					required: 'Вы согласны?'
					}
			},

			// Начинаем проверку id="" формы
			submitHandler: function(form) {
					$('#loader').fadeIn();
					var $form = $(form);
					var $formId = $(form).attr('id');
					switch ($formId) {
							// Если у формы id="goToNewPage" - делаем:
							case 'goToNewPage':
									$.ajax({
													type: 'POST',
													url: $form.attr('action'),
													data: $form.serialize(),
											})
											.always(function(response) {
													//ссылка на страницу "спасибо" - редирект
													location.href = 'form.html';
													//отправка целей в Я.Метрику и Google Analytics
													ga('send', 'event', 'masterklass7', 'register');
													yaCounter27714603.reachGoal('lm17lead');
											});
									break;
							//Если у формы id="popupResult" - делаем:
							case 'popupResult':
									$.ajax({
													type: 'POST',
													url: $form.attr('action'),
													data: $form.serialize(),
											})
											.always(function(response) {
													setTimeout(function() {
															$('#loader').fadeOut();
													}, 800);
													setTimeout(function() {
															$('#overlay').fadeIn();
															$form.trigger('reset');
															//строки для остлеживания целей в Я.Метрике и Google Analytics
													}, 1100);
													$('#overlay').on('click', function(e) {
															$(this).fadeOut();
													});

											});
									break;
					}
					return false;
			}
	})
}

// Запускаем механизм валидации форм, если у них есть класс .js-form
	$('.js-form').each(function() {
	valEl($(this));
});






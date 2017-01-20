$(function() {

	var mfpInline = {
		type: 'inline'
	}

	// перевод текстов плагина
	$.extend(true, $.magnificPopup.defaults, {
	  tClose: 'Закрыть (Esc)', // Alt text on close button
	  tLoading: 'Загрузка...', // Text that is displayed during loading. Can contain %curr% and %total% keys
	  gallery: {
	    tPrev: 'Предыдущий (Стерлка влево)', // Alt text on left arrow
	    tNext: 'Следующий (Стрелка вправо)', // Alt text on right arrow
	    tCounter: '%curr% из %total%' // Markup for "1 of 7" counter
	  },
	  image: {
	    tError: '<a href="%url%">Изображение</a> не может быть загружено.' // Error message when image could not be loaded
	  },
	  ajax: {
	    tError: '<a href="%url%">Контент</a> не может быть загружен.' // Error message when ajax request failed
	  }
	});

	// открыть попап нажатием на кнопку
	$('.js-openAgentPopup').magnificPopup(mfpInline);

	// закрытие попапа при нажатии кнопки
	$('.js-closePopup').on('click', function() {
		$.magnificPopup.close();
	});

	// открыть попап добавление/редактирования ролей
	$('.js-openRolePopup').magnificPopup(mfpInline);
});
$(function() {

	var mfpInline = {
		type: 'inline'
	}

	// перевод текстов плагина
	if ($.magnificPopup) {
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
	}

	// открытие табов на главной странице
	$('.js-tab-list > input[type=button]').on('click', function(event) {
		if ($(this).hasClass('btn-active'))
			return false;
		tabOpen(this);
	});
	tabOpen($('.js-tab-list input[type=button].btn-active'));

	// открытие полного/краткого представления действующих клиентов
	$('.js-activeClientMinList').on('click', function(event) {
		if ($(this).hasClass('is-active'))
			return false;
		$('.js-activeClientFullList').removeClass('is-active');
		$(this).addClass('is-active');
		if ($('#client-active-min-list').length > 0) {
			if ($('#client-active-full-list').length > 0) {
				$('#client-active-full-list').hide('fast');
			}
			$('#client-active-min-list').show('fast');
		}
	});
	$('.js-activeClientFullList').on('click', function(event) {
		if ($(this).hasClass('is-active'))
			return false;
		$('.js-activeClientMinList').removeClass('is-active');
		$(this).addClass('is-active');
		if ($('#client-active-full-list').length > 0) {
			if ($('#client-active-min-list').length > 0) {
				$('#client-active-min-list').hide('fast');
			}
			$('#client-active-full-list').show('fast');
		}
	});

	$('.tree-agent__list').on('click', function(event) {
		tree_toggle(event);
	});
});

function tabOpen(_this)
{
	var block = $(_this).parent().parent();
	var showElem = $(_this).data('content') ? $(_this).data('content') : '';
	$(block).find('.js-tab-list input[type=button]').removeClass('btn-active');
	$(_this).addClass('btn-active');
	$(block).find('.js-tab-content').hide('fast');
	$(block).find('.'+showElem).show('fast');
}

function tree_toggle(event) {
    event = event || window.event
    var clickedElem = event.target || event.srcElement

    if (!hasClass(clickedElem, 'Expand')) {
        return // клик не там
    }

    // Node, на который кликнули
    var node = clickedElem.parentNode
    if (hasClass(node, 'ExpandLeaf')) {
        return // клик на листе
    }

    // определить новый класс для узла
    var newClass = hasClass(node, 'ExpandOpen') ? 'ExpandClosed' : 'ExpandOpen'
    // заменить текущий класс на newClass
    // регексп находит отдельно стоящий open|close и меняет на newClass
    var re =  /(^|\s)(ExpandOpen|ExpandClosed)(\s|$)/
    node.className = node.className.replace(re, '$1'+newClass+'$3')
}


function hasClass(elem, className) {
    return new RegExp("(^|\\s)"+className+"(\\s|$)").test(elem.className)
}

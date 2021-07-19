$(function () {

	$(".g-form").submit(function (event) {
		event.preventDefault();
		console.log('111');
		// Ссылка, которую получили на этапе публикации приложения
		let appLink = "https://script.google.com/macros/s/AKfycbxJmKrYp_0ZF9mrPNceY6CdTNSWMrqQzIblBzKkQpB0H9Zf2ozqs1OTDUi_CtkmrPc/exec";

		// Сообщение при успешной отправке данных
		let successRespond = 'Ваша заявка успешно отправлена.';

		// Сообщение при ошибке в отправке данных
		let errorRespond = 'Не удалось отправить заявку.';

		// Id текущей формы
		let form = $('#' + $(this).attr('id'))[0];

		// h2 с ответом формы
		let formRespond = $(this).find('.g-form__title_respond');

		// Блок прелоадера
		let preloader = $(this).find('.g-form__preloader');

		// Кнопка отправки формы
		let submitButton = $(this).find('.g-form__button');


		// FormData
		let fd = new FormData(form);


		$.ajax({
			url: appLink,
			type: "POST",
			data: fd,
			processData: false,
			contentType: false,
			beforeSend: function () {
				if (fd.get('honeypot').length) {
					return false;
				} else {
					fd.delete('honeypot');
				}
				console.log(221);
				// Показываем прелоадер
				preloader.css('opacity', '1');
				formRespond.html('');
				// Делаем неактивной кнопку отправки
				submitButton.prop('disabled', true);
			},

		}).done(function (res, textStatus, jqXHR) {

			if (jqXHR.readyState === 4 && jqXHR.status === 200) {

				// Прячем прелоадер
				preloader.css('opacity', '0');

				// Выводим ответ формы.
				formRespond.html(successRespond);

				// Возвращаем активность кнопке отправки
				submitButton.prop('disabled', false);

				// Очищаем поля формы
				form.reset();

			} else {
				formRespond.html(errorRespond);
				preloader.css('opacity', '0');
				setTimeout(() => {
					submitButton.prop('disabled', false);
				}, 1000);

				console.log('Гугл не ответил статусом 200');
			}
		}).fail(function (res, textStatus, jqXHR) {
			preloader.css('opacity', '0');
			formRespond.html(errorRespond);
			setTimeout(() => {
				submitButton.prop('disabled', false);
			}, 1000);

			console.log('Не удалось выполнить запрос по указанному в скрипте пути');
		});
	});
}(jQuery));
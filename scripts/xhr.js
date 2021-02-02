/**
 * Auteur : CARDINAL Florian
 * Date   : 22/12/2018 17:19
 * Page   : xhr.js
 */

"use strict";

/**
 * Importation des modules
 */
import "/scripts/jquery-3.5.1.min.js";

export default class XHR {
	/**
	 * xhr request for skills status getter
	 */
	static getSkillsStatus() {
		$.ajax({
			type: "POST",
			url: "/?getSkillsStatus",
			dataType: "json",
			success: (result) => {
				let skills = result.response

				skills.map((skill) => {
					skill.status += "%"
					$(`#${skill.id} h3`)[0].innerText += ` ${skill.status}`;
					$(`#${skill.id} .progress`).css({ width: skill.status });
				});
			}
		});
	}

	/**
	 * xhr request for contact form
	 * @param {string} data msg content to send
	 */
	static contact(data) {
		$.ajax({
			type: "POST",
			url: "/?contact",
			data: data,
			dataType: "json",
			success: (result) => {
				result = result.response;

				if(result.passed) {
					$('#contact .ty').css('display', 'block');
					$('#contact form')[0].reset();
				}
				else {
					$('#contact #fName .error').html(result.error.fname);
					$('#contact #name .error').html(result.error.name);
					$('#contact #mail .error').html(result.error.mail);
					$('#contact #phone .error').html(result.error.tel);
					$('#contact #msg .error').html(result.error.msg);
				}
			}
		});
	}
}

import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CONTACT_MAIL } from '../data';
import { ContactField, ContactRequest } from '../models';

type Errors = Partial<Record<ContactField, string>>;

const ERROR = "Ce champ n'est pas valide !";
const MAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^(([+](\d{2,}))([0-9.\-/\s]{5,})|([0-9.\-/\s]{5,}))*$/;

/**
 * Formulaire de contact : validation locale puis ouverture du client mail (mailto:)
 */
@Component({
	selector: 'app-contact',
	imports: [ReactiveFormsModule],
	template: `
		<aside id="contact">
			<article class="global-bg">
				<h2>contact</h2>
				<hr />
				<div class="container">
					<form [formGroup]="form" (ngSubmit)="submit()">
						<div class="row">
							<div class="inputBox" id="name">
								<input type="text" formControlName="name" id="inname" required />
								<label for="inname">Nom</label>
								<p class="error">{{ errors().name }}</p>
							</div>
							<div class="inputBox" id="fName">
								<input type="text" formControlName="fname" id="infname" required />
								<label for="infname">Prénom</label>
								<p class="error">{{ errors().fname }}</p>
							</div>
						</div><div class="row">
							<div class="inputBox" id="mail">
								<input type="email" formControlName="mail" id="inmail" required />
								<label for="inmail">Email</label>
								<p class="error">{{ errors().mail }}</p>
							</div>
							<div class="inputBox" id="phone">
								<input type="tel" formControlName="tel" id="inphone" required />
								<label for="inphone">Téléphone</label>
								<p class="error">{{ errors().tel }}</p>
							</div>
						</div>
						<div class="inputBox" id="msg">
							<textarea formControlName="msg" id="inmsg" required></textarea>
							<label for="inmsg">Message</label>
							<p class="error">{{ errors().msg }}</p>
						</div>
						<input type="submit" value="envoyer" />
						@if (sent()) {
							<p class="ty">Votre messagerie s'est ouverte avec le message prêt à partir. Merci de me contacter :)</p>
						}
					</form>
				</div>
			</article>
		</aside>
	`,
})
export class Contact {
	protected readonly form = inject(NonNullableFormBuilder).group<ContactRequest>({
		name: '',
		fname: '',
		mail: '',
		tel: '',
		msg: '',
	});

	protected readonly errors = signal<Errors>({});
	protected readonly sent = signal(false);

	protected submit(): void {
		const data = this.form.getRawValue();
		const value = (field: ContactField) => data[field].trim();

		const checks: Record<ContactField, boolean> = {
			name: !!value('name'),
			fname: !!value('fname'),
			mail: MAIL_PATTERN.test(value('mail')),
			tel: !!value('tel') && PHONE_PATTERN.test(value('tel')),
			msg: !!value('msg'),
		};

		const errors: Errors = {};
		for (const [field, valid] of Object.entries(checks) as [ContactField, boolean][])
			if (!valid) errors[field] = ERROR;

		this.errors.set(errors);
		this.sent.set(false);

		if (Object.keys(errors).length) return;

		const body =
			`Prénom: ${value('fname')}\nNom: ${value('name')}\nMail: ${value('mail')}\nTel: ${value('tel')}\n\n` +
			`Message: ${value('msg')}`;

		window.location.href =
			`mailto:${atob(CONTACT_MAIL)}?subject=${encodeURIComponent('Contact Web CV')}` +
			`&body=${encodeURIComponent(body)}`;

		this.sent.set(true);
		this.form.reset();
	}
}

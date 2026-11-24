import { Component, DestroyRef, effect, inject, input, signal, untracked } from '@angular/core';

const PROMPT = 'user@machine:~$ cat README.txt';

/**
 * Terminal animé : tape la commande puis affiche le fichier ligne par ligne
 */
@Component({
	selector: 'app-terminal',
	template: `
		<div id="animate">
			<p>{{ prompt() }}</p>
			<pre>{{ output() }}</pre>
		</div>
	`,
})
export class Terminal {
	/** contenu du fichier à afficher */
	readonly content = input<string | undefined>();

	protected readonly prompt = signal('');
	protected readonly output = signal('');

	private readonly timers = new Set<ReturnType<typeof setTimeout>>();

	constructor() {
		inject(DestroyRef).onDestroy(() => this.timers.forEach(clearTimeout));

		effect(() => {
			const content = this.content();
			if (content !== undefined) untracked(() => this.type(0, content));
		});
	}

	private later(fn: () => void, delay: number): void {
		const id = setTimeout(() => {
			this.timers.delete(id);
			fn();
		}, delay);
		this.timers.add(id);
	}

	/** écriture caractère par caractère de la commande */
	private type(i: number, content: string): void {
		const delay = i < 15 ? 0 : 100;
		this.prompt.update((p) => p + PROMPT[i]);

		if (i + 1 < PROMPT.length) this.later(() => this.type(i + 1, content), delay);
		else this.later(() => this.print(0, content.replace(/\r/g, '').split('\n')), delay + 400);
	}

	/** affichage ligne par ligne du fichier */
	private print(i: number, lines: string[]): void {
		this.output.update((o) => o + lines[i] + '\n');
		if (i + 1 < lines.length) this.later(() => this.print(i + 1, lines), 100);
	}
}

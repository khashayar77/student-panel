import { Pipe, PipeTransform } from '@angular/core';

const dictionatry = {
	0: 'قبول',
	1: 'مردود'
};

@Pipe({ name: 'scores' })
export class ScoresPipe implements PipeTransform {
	transform(result: number): string {
		return dictionatry[result];
	}
}

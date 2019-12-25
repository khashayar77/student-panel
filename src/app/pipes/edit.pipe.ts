import { Pipe, PipeTransform } from '@angular/core';

const dictionatry = {
	0: 'قبول',
	1: 'مردود'
};

@Pipe({ name: 'Edit' })
export class EditPipe implements PipeTransform {
	transform(result: number | string): string {
		return dictionatry[result];
	}
}

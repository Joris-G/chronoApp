import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timeFormat',
    standalone: true,
})
export class TimeFormatPipe implements PipeTransform {
    transform(ms: number): { hours: string, minutes: string, seconds: string } {
        const totalSeconds = Math.floor(ms / 1000);
        const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
        const seconds = (totalSeconds % 60).toString().padStart(2, '0');
        return { hours, minutes, seconds };
    }
}
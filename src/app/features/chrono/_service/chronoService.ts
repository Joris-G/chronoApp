import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ChronoService {
    private startTime = 0;
    private elapsedTime = signal(0);
    private intervalId: any = null;
    private targetTime = signal<number | null>(null); // Cible en option

    get time(): Signal<number> {
        return this.elapsedTime;
    }

    get isCountdown(): Signal<boolean> {
        return signal(this.targetTime() !== null);
    }

    start(): void {
        if (!this.intervalId) {
            this.startTime = Date.now() - this.elapsedTime();
            this.intervalId = setInterval(() => {
                this.elapsedTime.set(Date.now() - this.startTime);
            }, 1000);
        }
    }

    pause(): void {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    reset(): void {
        this.elapsedTime.set(0);
        this.startTime = 0;
        this.pause();
    }

    setTargetTime(target: number): void {
        this.targetTime.set(target);
    }

    getTargetTime(): number | null {
        return this.targetTime();
    }

    switchMode(): void {
        if (this.targetTime()) {
            this.targetTime.set(null);
        } else {
            // Activer le mode compte à rebours avec une valeur par défaut par exemple
            this.setTargetTime(60000); // 60 secondes
        }
    }

    nextStep(): void {
        this.reset();
        this.start(); // Réinitialise le chrono et recommence pour l'étape suivante
    }
}